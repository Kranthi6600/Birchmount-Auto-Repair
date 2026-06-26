const CLIENT_ID = "1910ea08-b8ae-4968-8e69-c9b7c5e7bc78";

export function stripHtml(html: string | null): string {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").trim();
}

function getExternalBaseUrl(): string | null {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL || "https://wehoware-saas.vercel.app";
    if (!base) return null;
    return base.replace(/\/$/, "");
}

export interface ApiServiceCategory {
    id: string;
    name: string;
    slug: string;
}

export interface ApiFaq {
    id: string;
    question: string;
    answer: string;
    display_order?: number;
}

export interface ApiRelatedBlog {
    id: string;
    title: string;
    slug: string;
    thumbnail?: string | null;
    excerpt?: string | null;
}

export interface ApiFaqSchema {
    "@context": string;
    "@type": string;
    mainEntity: Array<{
        "@type": string;
        name: string;
        acceptedAnswer: {
            "@type": string;
            text: string;
        };
    }>;
}

export interface ApiService {
    id: string;
    client_id: string;
    category_id: string;
    title: string;
    slug: string;
    description: string | null;
    content: string | null;
    thumbnail: string | null;
    thumbnail_alt: string | null;
    fee: number | null;
    fee_currency: string | null;
    fee_label: string | null;
    service_code: string | null;
    duration: string | null;
    tags: string[] | null;
    active: boolean;
    featured: boolean;
    rating: number;
    reviews_count: number;
    views: number;
    created_at: string;
    updated_at: string;
    meta_title: string | null;
    meta_description: string | null;
    meta_keywords: string | null;
    open_graph_title: string | null;
    open_graph_description: string | null;
    open_graph_image: string | null;
    twitter_title: string | null;
    twitter_description: string | null;
    twitter_image: string | null;
    canonical_url: string | null;
    robots_meta: string | null;
    schema_type: string | null;
    seo_score: number | null;
    target_keywords: string | null;
    cta_heading: string | null;
    cta_body: string | null;
    cta_button_text: string | null;
    cta_button_url: string | null;
    allow_social_share: boolean;
    wehoware_service_categories: ApiServiceCategory | null;
    related_blogs?: ApiRelatedBlog[];
    faqs?: ApiFaq[];
    faq_schema?: ApiFaqSchema | null;
}

export interface ApiPagination {
    totalItems: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface ApiServiceListResponse {
    data: ApiService[];
    pagination: ApiPagination;
}

export interface ApiCategory {
    id: string;
    title: string;
    services: ApiService[];
}

async function fetchJson<T>(url: string): Promise<T> {
    const response = await fetch(url, {
        headers: { Accept: "application/json" },
    });
    if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    return response.json();
}

export async function fetchServices(): Promise<ApiService[]> {
    const result = await fetchJson<ApiServiceListResponse>("/api/services");
    return result.data ?? [];
}

export async function fetchServiceBySlug(slug: string): Promise<ApiService | null> {
    try {
        return await fetchJson<ApiService>(`/api/services/${slug}`);
    } catch {
        return null;
    }
}

export async function fetchServiceFaqs(slug: string): Promise<ApiFaq[]> {
    try {
        return await fetchJson<ApiFaq[]>(`/api/services/${slug}/faqs`);
    } catch {
        return [];
    }
}

export async function fetchServiceCategories(): Promise<ApiCategory[]> {
    const baseUrl = getExternalBaseUrl();
    if (!baseUrl) return [];
    try {
        return await fetchJson<ApiCategory[]>(`${baseUrl}/api/public/services/categories?clientId=${CLIENT_ID}`);
    } catch {
        return [];
    }
}

export interface ApiBlogCategory {
    id: string;
    name: string;
}

export interface ApiBlog {
    id: string;
    client_id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string | null;
    thumbnail: string | null;
    thumbnail_alt: string | null;
    status: string;
    category_id: string | null;
    featured: boolean;
    read_time: number | null;
    views: number;
    likes: number;
    tags: string[];
    created_at: string;
    updated_at: string;
    published_at: string | null;
    meta_title: string | null;
    meta_description: string | null;
    meta_keywords: string | null;
    open_graph_title: string | null;
    open_graph_description: string | null;
    open_graph_image: string | null;
    twitter_title: string | null;
    twitter_description: string | null;
    twitter_image: string | null;
    canonical_url: string | null;
    robots_meta: string | null;
    schema_type: string | null;
    seo_score: number | null;
    target_keywords: string | null;
    show_toc: boolean;
    show_author_box: boolean;
    cta_heading: string | null;
    cta_body: string | null;
    cta_button_text: string | null;
    cta_button_url: string | null;
    allow_social_share: boolean;
    wehoware_blog_categories: ApiBlogCategory | null;
    related_services?: Array<{
        id: string;
        title: string;
        slug: string;
        thumbnail?: string | null;
        description?: string | null;
        fee?: number | null;
        fee_currency?: string | null;
    }>;
    faqs?: ApiFaq[];
    faq_schema?: ApiFaqSchema | null;
}

export interface ApiBlogListResponse {
    data: ApiBlog[];
    pagination: {
        totalItems: number;
        page: number;
        limit: number;
        totalPages: number;
    };
}

export async function fetchBlogs(
    page?: number,
    limit?: number
): Promise<ApiBlogListResponse> {
    const params = new URLSearchParams();
    if (page) params.set("page", String(page));
    if (limit) params.set("limit", String(limit));
    const query = params.toString();
    const url = `/api/blogs${query ? `?${query}` : ""}`;
    const result = await fetchJson<ApiBlogListResponse>(url);
    return {
        data: result.data ?? [],
        pagination: result.pagination ?? {
            totalItems: 0,
            page: page ?? 1,
            limit: limit ?? 6,
            totalPages: 0,
        },
    };
}

export async function fetchBlogBySlug(slug: string): Promise<ApiBlog | null> {
    try {
        return await fetchJson<ApiBlog>(`/api/blogs/${slug}`);
    } catch {
        return null;
    }
}

export function isApiConfigured(): boolean {
    return !!getExternalBaseUrl();
}
