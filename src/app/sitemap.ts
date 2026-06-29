import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

const CLIENT_ID = "1910ea08-b8ae-4968-8e69-c9b7c5e7bc78";
const API_BASE = "https://wehoware-saas.vercel.app";

async function fetchAllBlogSlugs(): Promise<{ slug: string; updated_at: string | null }[]> {
    try {
        const url = `${API_BASE}/api/public/blogs?clientId=${CLIENT_ID}&limit=100`;
        const res = await fetch(url, {
            headers: { Accept: "application/json" },
            next: { revalidate: 3600 },
        });
        if (!res.ok) return [];
        const raw = await res.json();
        const blogs = raw.blogs ?? raw.data ?? [];
        return blogs.map((b: { slug: string; updated_at?: string | null }) => ({
            slug: b.slug,
            updated_at: b.updated_at ?? null,
        }));
    } catch {
        return [];
    }
}

async function fetchAllServiceSlugs(): Promise<{ slug: string; updated_at: string | null }[]> {
    try {
        const url = `${API_BASE}/api/public/services?clientId=${CLIENT_ID}&limit=100`;
        const res = await fetch(url, {
            headers: { Accept: "application/json" },
            next: { revalidate: 3600 },
        });
        if (!res.ok) return [];
        const raw = await res.json();
        const services = raw.services ?? raw.data ?? [];
        return services.map((s: { slug: string; updated_at?: string | null }) => ({
            slug: s.slug,
            updated_at: s.updated_at ?? null,
        }));
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
