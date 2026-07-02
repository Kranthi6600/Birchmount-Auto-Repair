/**
 * API Orchestrator Layer
 *
 * Centralized fetch client that handles:
 * - URL construction with clientId
 * - Request timeouts via AbortController
 * - Retry with exponential backoff
 * - Response normalization (unwrapping nested data envelopes)
 * - Structured error handling with typed errors
 * - Configurable ISR revalidation for server-side fetches
 * - Logging at service boundaries
 *
 * All external API calls in the codebase MUST go through this orchestrator.
 */

import {
    API_BASE_URL,
    CLIENT_ID,
    API_REQUEST_TIMEOUT_MS,
    API_MAX_RETRIES,
    API_REVALIDATE_SECONDS,
    API_REVALIDATE_LONG_SECONDS,
    API_PATHS,
} from "@/lib/config";

// ─── Error Types ───────────────────────────────────────────────

export class ApiTimeoutError extends Error {
    constructor(url: string, timeoutMs: number) {
        super(`Request timed out after ${timeoutMs}ms: ${url}`);
        this.name = "ApiTimeoutError";
    }
}

export class ApiRetryExhaustedError extends Error {
    constructor(url: string, attempts: number, lastError: string) {
        super(`Request failed after ${attempts} attempt(s): ${url}. Last error: ${lastError}`);
        this.name = "ApiRetryExhaustedError";
    }
}

export class ApiHttpError extends Error {
    readonly statusCode: number;
    readonly url: string;

    constructor(url: string, statusCode: number, statusText: string) {
        super(`HTTP ${statusCode} ${statusText}: ${url}`);
        this.name = "ApiHttpError";
        this.statusCode = statusCode;
        this.url = url;
    }
}

// ─── Types ─────────────────────────────────────────────────────

export interface OrchestratorOptions {
    /** ISR revalidation time in seconds. Use 0 to disable caching. Defaults to API_REVALIDATE_SECONDS. */
    revalidate?: number;
    /** Override max retry attempts for this call. */
    maxRetries?: number;
    /** Override request timeout for this call in ms. */
    timeoutMs?: number;
    /** Skip adding clientId to the URL (rare, only if caller manages it). */
    skipClientId?: boolean;
}

export interface PaginatedResponse<T> {
    data: T[];
    pagination: {
        totalItems: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    schema?: {
        item_list?: Record<string, unknown> | null;
        collection_page?: Record<string, unknown> | null;
    } | null;
}

// ─── Internal Helpers ──────────────────────────────────────────

const log = {
    info: (msg: string, context?: Record<string, unknown>) => {
        if (process.env.NODE_ENV !== "production") {
            console.info(`[Orchestrator] ${msg}`, context ?? "");
        }
    },
    warn: (msg: string, context?: Record<string, unknown>) => {
        console.warn(`[Orchestrator] ${msg}`, context ?? "");
    },
    error: (msg: string, context?: Record<string, unknown>) => {
        console.error(`[Orchestrator] ${msg}`, context ?? "");
    },
};

/**
 * Builds a full URL with clientId and optional query parameters.
 */
function buildUrl(
    path: string,
    params?: Record<string, string | number | boolean | undefined>,
    skipClientId?: boolean
): string {
    const url = new URL(`${API_BASE_URL}${path}`);
    if (!skipClientId) {
        url.searchParams.set("clientId", CLIENT_ID);
    }
    if (params) {
        for (const [key, value] of Object.entries(params)) {
            if (value !== undefined && value !== null) {
                url.searchParams.set(key, String(value));
            }
        }
    }
    return url.toString();
}

/**
 * Sleep helper for retry backoff.
 */
function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Core fetch with timeout, retry, and error handling.
 * This is the single point through which all external HTTP calls flow.
 */
async function fetchWithRetry<T>(
    url: string,
    options: OrchestratorOptions = {}
): Promise<T> {
    const maxRetries = options.maxRetries ?? API_MAX_RETRIES;
    const timeoutMs = options.timeoutMs ?? API_REQUEST_TIMEOUT_MS;
    const revalidate = options.revalidate ?? API_REVALIDATE_SECONDS;
    let lastError: Error | null = null;

    for (let attempt = 1; attempt <= maxRetries + 1; attempt++) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

        try {
            log.info(`Fetching (attempt ${attempt}/${maxRetries + 1})`, { url });

            const fetchOptions: RequestInit & { next?: { revalidate: number } } = {
                headers: { Accept: "application/json" },
                signal: controller.signal,
                next: { revalidate },
            };

            const response = await fetch(url, fetchOptions);
            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new ApiHttpError(url, response.status, response.statusText);
            }

            const data = await response.json();
            log.info(`Fetch succeeded`, { url, attempt });
            return data as T;
        } catch (error) {
            clearTimeout(timeoutId);

            if (error instanceof ApiHttpError) {
                // 4xx errors are not retryable (except 429)
                if (error.statusCode >= 400 && error.statusCode < 500 && error.statusCode !== 429) {
                    log.warn(`Non-retryable HTTP error`, { url, status: error.statusCode });
                    throw error;
                }
            }

            if (error instanceof DOMException && error.name === "AbortError") {
                lastError = new ApiTimeoutError(url, timeoutMs);
            } else if (error instanceof Error) {
                lastError = error;
            } else {
                lastError = new Error(String(error));
            }

            log.warn(`Attempt ${attempt} failed`, { url, error: lastError.message });

            if (attempt <= maxRetries) {
                const backoffMs = Math.min(1000 * Math.pow(2, attempt - 1), 4000);
                await sleep(backoffMs);
            }
        }
    }

    throw new ApiRetryExhaustedError(url, maxRetries + 1, lastError?.message ?? "Unknown error");
}

/**
 * Normalizes list responses that may come in different envelope shapes.
 * The external API sometimes returns { blogs: [...] } and sometimes { data: [...] }.
 */
function normalizeList<T>(raw: unknown, ...keys: string[]): T[] {
    if (Array.isArray(raw)) return raw as T[];
    if (raw && typeof raw === "object") {
        for (const key of keys) {
            const candidate = (raw as Record<string, unknown>)[key];
            if (Array.isArray(candidate)) return candidate as T[];
        }
    }
    return [];
}

/**
 * Normalizes single-item responses that may be wrapped in an envelope.
 */
function normalizeItem<T>(raw: unknown, ...keys: string[]): T | null {
    if (!raw || typeof raw !== "object") return null;
    for (const key of keys) {
        const candidate = (raw as Record<string, unknown>)[key];
        if (candidate && typeof candidate === "object") {
            return candidate as T;
        }
    }
    return raw as T;
}

/**
 * Normalizes a single-item response and merges any schema fields that the API
 * returns at the top level (alongside the envelope key) into the unwrapped item.
 * This handles response shapes like:
 *   { service: { ... }, service_schema: {...}, breadcrumb_schema: {...} }
 *   { data: { ... }, service_schema: {...}, breadcrumb_schema: {...} }
 * as well as flat responses where schemas are already inside the item.
 */
function normalizeItemWithSchemas<T extends Record<string, unknown>>(
    raw: unknown,
    keys: string[],
    schemaFields: string[]
): T | null {
    if (!raw || typeof raw !== "object") return null;
    const rawObj = raw as Record<string, unknown>;

    // Try to find the item via the provided envelope keys (including "data" fallback)
    let item: Record<string, unknown> | null = null;
    for (const key of [...keys, "data"]) {
        const candidate = rawObj[key];
        if (candidate && typeof candidate === "object" && !Array.isArray(candidate)) {
            item = candidate as Record<string, unknown>;
            break;
        }
    }

    // If no envelope key matched, treat the raw object itself as the item
    if (!item) {
        item = rawObj;
    }

    // Merge any schema fields from the top level that are not already on the item
    for (const field of schemaFields) {
        if (rawObj[field] != null && item[field] == null) {
            item[field] = rawObj[field];
        }
    }

    return item as T;
}

// ─── Public API: Blog Endpoints ────────────────────────────────

export async function getBlogs(
    page: number = 1,
    limit: number = 6,
    options?: OrchestratorOptions
): Promise<PaginatedResponse<unknown>> {
    const url = buildUrl(API_PATHS.BLOGS, { page, limit });
    const raw = await fetchWithRetry<unknown>(url, options);
    const data = normalizeList<unknown>(raw, "blogs", "data");
    const rawObj = raw as Record<string, unknown> | null;
    const pagination = rawObj?.pagination as PaginatedResponse<unknown>["pagination"] | undefined;
    const schema = (rawObj?.schema ?? null) as PaginatedResponse<unknown>["schema"];

    return {
        data,
        pagination: pagination ?? {
            totalItems: data.length,
            page,
            limit,
            totalPages: Math.ceil(data.length / limit) || 1,
        },
        schema,
    };
}

export async function getBlogBySlug(
    slug: string,
    options?: OrchestratorOptions
): Promise<unknown | null> {
    if (!slug) return null;
    const url = buildUrl(API_PATHS.BLOG_BY_SLUG(slug));
    try {
        const raw = await fetchWithRetry<unknown>(url, options);
        return normalizeItemWithSchemas<Record<string, unknown>>(raw, ["blog"], [
            "blog_schema",
            "breadcrumb_schema",
            "faq_schema",
        ]);
    } catch (error) {
        log.error(`Failed to fetch blog by slug`, { slug, error: (error as Error).message });
        return null;
    }
}

export async function getBlogFaqs(
    slug: string,
    options?: OrchestratorOptions
): Promise<unknown[]> {
    if (!slug) return [];
    const url = buildUrl(API_PATHS.BLOG_FAQS(slug));
    try {
        const raw = await fetchWithRetry<unknown>(url, options);
        return normalizeList<unknown>(raw, "faqs", "data");
    } catch (error) {
        log.error(`Failed to fetch blog FAQs`, { slug, error: (error as Error).message });
        return [];
    }
}

export async function getBlogCategories(
    options?: OrchestratorOptions
): Promise<unknown[]> {
    const url = buildUrl(API_PATHS.BLOG_CATEGORIES);
    try {
        const raw = await fetchWithRetry<unknown>(url, options);
        return normalizeList<unknown>(raw, "categories", "data");
    } catch (error) {
        log.error(`Failed to fetch blog categories`, { error: (error as Error).message });
        return [];
    }
}

// ─── Public API: Service Endpoints ─────────────────────────────

export async function getServices(
    options?: OrchestratorOptions
): Promise<unknown[]> {
    const url = buildUrl(API_PATHS.SERVICES);
    try {
        const raw = await fetchWithRetry<unknown>(url, options);
        return normalizeList<unknown>(raw, "services", "data");
    } catch (error) {
        log.error(`Failed to fetch services`, { error: (error as Error).message });
        return [];
    }
}

export async function getServicesWithSchema(
    options?: OrchestratorOptions
): Promise<{ data: unknown[]; schema: PaginatedResponse<unknown>["schema"] }> {
    const url = buildUrl(API_PATHS.SERVICES);
    try {
        const raw = await fetchWithRetry<unknown>(url, options);
        const data = normalizeList<unknown>(raw, "services", "data");
        const rawObj = raw as Record<string, unknown> | null;
        const schema = (rawObj?.schema ?? null) as PaginatedResponse<unknown>["schema"];
        return { data, schema };
    } catch (error) {
        log.error(`Failed to fetch services with schema`, { error: (error as Error).message });
        return { data: [], schema: null };
    }
}

export async function getServiceBySlug(
    slug: string,
    options?: OrchestratorOptions
): Promise<unknown | null> {
    if (!slug) return null;
    const url = buildUrl(API_PATHS.SERVICE_BY_SLUG(slug));
    try {
        const raw = await fetchWithRetry<unknown>(url, options);
        return normalizeItemWithSchemas<Record<string, unknown>>(raw, ["service"], [
            "service_schema",
            "breadcrumb_schema",
            "faq_schema",
        ]);
    } catch (error) {
        log.error(`Failed to fetch service by slug`, { slug, error: (error as Error).message });
        return null;
    }
}

export async function getServiceFaqs(
    slug: string,
    options?: OrchestratorOptions
): Promise<unknown[]> {
    if (!slug) return [];
    const url = buildUrl(API_PATHS.SERVICE_FAQS(slug));
    try {
        const raw = await fetchWithRetry<unknown>(url, options);
        return normalizeList<unknown>(raw, "faqs", "data");
    } catch (error) {
        log.error(`Failed to fetch service FAQs`, { slug, error: (error as Error).message });
        return [];
    }
}

export async function getServiceCategories(
    options?: OrchestratorOptions
): Promise<unknown[]> {
    const url = buildUrl(API_PATHS.SERVICE_CATEGORIES);
    try {
        const raw = await fetchWithRetry<unknown>(url, options);
        return normalizeList<unknown>(raw, "categories", "data");
    } catch (error) {
        log.error(`Failed to fetch service categories`, { error: (error as Error).message });
        return [];
    }
}

// ─── Public API: Generic Fetch (for advanced use cases) ────────

export async function fetchExternal<T>(
    path: string,
    params?: Record<string, string | number | boolean | undefined>,
    options?: OrchestratorOptions
): Promise<T> {
    const url = buildUrl(path, params, options?.skipClientId);
    return fetchWithRetry<T>(url, options);
}

// ─── Re-export config constants for convenience ────────────────

export {
    API_REVALIDATE_SECONDS,
    API_REVALIDATE_LONG_SECONDS,
} from "@/lib/config";
