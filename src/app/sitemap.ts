import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { getBlogs, getServices, API_REVALIDATE_LONG_SECONDS } from '@/lib/orchestrator';
import { MAX_LIST_LIMIT } from '@/lib/config';

async function fetchAllBlogSlugs(): Promise<{ slug: string; updated_at: string | null }[]> {
    try {
        const result = await getBlogs(1, MAX_LIST_LIMIT, { revalidate: API_REVALIDATE_LONG_SECONDS });
        return (result.data as unknown[]).map((b) => {
            const blog = b as { slug: string; updated_at?: string | null };
            return {
                slug: blog.slug,
                updated_at: blog.updated_at ?? null,
            };
        });
    } catch {
        return [];
    }
}

async function fetchAllServiceSlugs(): Promise<{ slug: string; updated_at: string | null }[]> {
    try {
        const data = await getServices({ revalidate: API_REVALIDATE_LONG_SECONDS });
        return (data as unknown[]).map((s) => {
            const service = s as { slug: string; updated_at?: string | null };
            return {
                slug: service.slug,
                updated_at: service.updated_at ?? null,
            };
        });
    } catch {
        return [];
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const [blogSlugs, serviceSlugs] = await Promise.all([
        fetchAllBlogSlugs(),
        fetchAllServiceSlugs(),
    ]);

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/services`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/faqs`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${SITE_URL}/testimonials`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${SITE_URL}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    const blogPages: MetadataRoute.Sitemap = blogSlugs.map((b) => ({
        url: `${SITE_URL}/blog/${b.slug}`,
        lastModified: b.updated_at ? new Date(b.updated_at) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((s) => ({
        url: `${SITE_URL}/services/${s.slug}`,
        lastModified: s.updated_at ? new Date(s.updated_at) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    return [...staticPages, ...blogPages, ...servicePages];
}
