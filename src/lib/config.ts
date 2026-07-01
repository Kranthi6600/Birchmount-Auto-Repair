/**
 * Centralized application configuration.
 * All environment-specific values are read here and exported as typed constants.
 * No other file in the codebase should read process.env directly for API or site config.
 *
 * Note: This module is imported by both client and server code (api.ts imports
 * DEFAULT_BLOG_PAGE_SIZE). Env vars are only populated on the server side, so we
 * read them without throwing. The orchestrator (server-only) uses these values
 * where they are guaranteed to be available.
 */

function normalizeUrl(url: string): string {
    return url.replace(/\/$/, "");
}

function optionalEnvInt(key: string, fallback: number): number {
    const value = process.env[key];
    return value ? Number(value) : fallback;
}

export const API_BASE_URL: string = normalizeUrl(
    process.env.NEXT_PUBLIC_API_BASE_URL || ""
);

export const CLIENT_ID: string = process.env.NEXT_PUBLIC_CLIENT_ID || "";

export const SITE_URL: string = normalizeUrl(
    process.env.NEXT_PUBLIC_SITE_URL || ""
);

/** Request timeout in milliseconds for all external API calls. */
export const API_REQUEST_TIMEOUT_MS: number = optionalEnvInt(
    "NEXT_PUBLIC_API_TIMEOUT_MS", 10000
);

/** Maximum retry attempts for failed external API calls. */
export const API_MAX_RETRIES: number = optionalEnvInt(
    "NEXT_PUBLIC_API_MAX_RETRIES", 2
);

/** Base revalidation time in seconds for ISR cache. */
export const API_REVALIDATE_SECONDS: number = optionalEnvInt(
    "NEXT_PUBLIC_API_REVALIDATE_SECONDS", 60
);

/** Long revalidation for sitemaps and static param generation. */
export const API_REVALIDATE_LONG_SECONDS: number = optionalEnvInt(
    "NEXT_PUBLIC_API_REVALIDATE_LONG_SECONDS", 3600
);

/** Google Tag Manager container ID. */
export const GTM_CONTAINER_ID: string = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID || "";

/** Default page size for blog list endpoints. */
export const DEFAULT_BLOG_PAGE_SIZE: number = 6;

/** Maximum items to fetch in a single list request. */
export const MAX_LIST_LIMIT: number = 100;

/** API path constants — all external endpoint paths defined once. */
export const API_PATHS = {
    BLOGS: "/api/public/blogs",
    BLOG_BY_SLUG: (slug: string) => `/api/public/blogs/${slug}`,
    BLOG_FAQS: (slug: string) => `/api/public/blogs/${slug}/faqs`,
    BLOG_CATEGORIES: "/api/public/blogs/categories",
    SERVICES: "/api/public/services",
    SERVICE_BY_SLUG: (slug: string) => `/api/public/services/${slug}`,
    SERVICE_FAQS: (slug: string) => `/api/public/services/${slug}/faqs`,
    SERVICE_CATEGORIES: "/api/public/services/categories",
} as const;
