/**
 * Centralized application configuration.
 * All environment-specific values are read here and exported as typed constants.
 * No other file in the codebase should read process.env directly for API or site config.
 */

const DEFAULT_API_BASE_URL = "https://wehoware-saas.vercel.app";
const DEFAULT_CLIENT_ID = "fce75c6e-733c-4f25-a0dd-bf067cdb6bcb";
const DEFAULT_SITE_URL = "https://www.birchmountautorepair.com";

function normalizeUrl(url: string): string {
    return url.replace(/\/$/, "");
}

export const API_BASE_URL: string = normalizeUrl(
    process.env.NEXT_PUBLIC_API_BASE_URL || DEFAULT_API_BASE_URL
);

export const CLIENT_ID: string =
    process.env.NEXT_PUBLIC_CLIENT_ID || DEFAULT_CLIENT_ID;

export const SITE_URL: string =
    process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;

/** Request timeout in milliseconds for all external API calls. */
export const API_REQUEST_TIMEOUT_MS: number = Number(
    process.env.NEXT_PUBLIC_API_TIMEOUT_MS
) || 10000;

/** Maximum retry attempts for failed external API calls. */
export const API_MAX_RETRIES: number = Number(
    process.env.NEXT_PUBLIC_API_MAX_RETRIES
) || 2;

/** Base revalidation time in seconds for ISR cache. */
export const API_REVALIDATE_SECONDS: number = Number(
    process.env.NEXT_PUBLIC_API_REVALIDATE_SECONDS
) || 60;

/** Long revalidation for sitemaps and static param generation. */
export const API_REVALIDATE_LONG_SECONDS: number = Number(
    process.env.NEXT_PUBLIC_API_REVALIDATE_LONG_SECONDS
) || 3600;

/** Google Tag Manager container ID. */
export const GTM_CONTAINER_ID: string =
    process.env.NEXT_PUBLIC_GTM_CONTAINER_ID || "GTM-TGG5L77T";

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
