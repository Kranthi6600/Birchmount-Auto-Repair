import {
    getBlogs as orchestratorGetBlogs,
    getBlogBySlug as orchestratorGetBlogBySlug,
    getServices as orchestratorGetServices,
    getServiceBySlug as orchestratorGetServiceBySlug,
    getServiceFaqs as orchestratorGetServiceFaqs,
    getServiceCategories as orchestratorGetServiceCategories,
} from "@/lib/orchestrator";
import { DEFAULT_BLOG_PAGE_SIZE } from "@/lib/config";

export function stripHtml(html: string | null): string {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").trim();
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
    service_schema?: Record<string, unknown> | null;
    breadcrumb_schema?: Record<string, unknown> | null;
}

export interface ApiPagination {
    totalItems: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface ApiServiceListSchema {
    item_list?: Record<string, unknown> | null;
    collection_page?: Record<string, unknown> | null;
}

export interface ApiServiceListResponse {
    data: ApiService[];
    pagination: ApiPagination;
    schema?: ApiServiceListSchema | null;
}

export interface ApiCategory {
    id: string;
    title: string;
    services: ApiService[];
}

export async function fetchServices(): Promise<ApiService[]> {
    return orchestratorGetServices() as Promise<ApiService[]>;
}

export async function fetchServiceBySlug(slug: string): Promise<ApiService | null> {
    return orchestratorGetServiceBySlug(slug) as Promise<ApiService | null>;
}

export async function fetchServiceFaqs(slug: string): Promise<ApiFaq[]> {
    return orchestratorGetServiceFaqs(slug) as Promise<ApiFaq[]>;
}

export async function fetchServiceCategories(): Promise<ApiCategory[]> {
    return orchestratorGetServiceCategories() as Promise<ApiCategory[]>;
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
    blog_schema?: Record<string, unknown> | null;
    breadcrumb_schema?: Record<string, unknown> | null;
}

export interface ApiBlogListSchema {
    item_list?: Record<string, unknown> | null;
    collection_page?: Record<string, unknown> | null;
}

export interface ApiBlogListResponse {
    data: ApiBlog[];
    pagination: {
        totalItems: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    schema?: ApiBlogListSchema | null;
}

export async function fetchBlogs(
    page: number = 1,
    limit: number = DEFAULT_BLOG_PAGE_SIZE
): Promise<ApiBlogListResponse> {
    const result = await orchestratorGetBlogs(page, limit);
    return {
        data: (result.data ?? []) as ApiBlog[],
        pagination: result.pagination ?? {
            totalItems: 0,
            page,
            limit,
            totalPages: 0,
        },
        schema: (result.schema ?? null) as ApiBlogListSchema | null,
    };
}

export async function fetchBlogBySlug(slug: string): Promise<ApiBlog | null> {
    return orchestratorGetBlogBySlug(slug) as Promise<ApiBlog | null>;
}

export function isApiConfigured(): boolean {
    return true;
}
