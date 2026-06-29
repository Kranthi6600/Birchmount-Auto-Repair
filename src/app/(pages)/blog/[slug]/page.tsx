import React from 'react';
import { notFound } from 'next/navigation';
import Banner from '@/features/banner/Banner';
import BlogApiDetail from '@/features/blog/BlogApiDetail';
import Footer from '@/components/footers/Footer';
import type { ApiBlog } from '@/lib/api';
import { SITE_URL } from '@/lib/site';
import type { Metadata } from 'next';

const CLIENT_ID = "1910ea08-b8ae-4968-8e69-c9b7c5e7bc78";
const API_BASE = "https://wehoware-saas.vercel.app";

async function fetchBlog(slug: string): Promise<ApiBlog | null> {
    try {
        const url = `${API_BASE}/api/public/blogs/${slug}?clientId=${CLIENT_ID}`;
        const res = await fetch(url, {
            headers: { Accept: "application/json" },
            next: { revalidate: 60 },
        });
        if (!res.ok) return null;
        const data = await res.json();
        return data?.blog ?? data;
    } catch {
        return null;
    }
}

async function fetchAllBlogSlugs(): Promise<{ slug: string; title: string; thumbnail: string | null; thumbnail_alt: string | null; published_at: string | null }[]> {
    try {
        const url = `${API_BASE}/api/public/blogs?clientId=${CLIENT_ID}&limit=100`;
        const res = await fetch(url, {
            headers: { Accept: "application/json" },
            next: { revalidate: 60 },
        });
        if (!res.ok) return [];
        const raw = await res.json();
        const blogs = raw.blogs ?? raw.data ?? [];
        return blogs.map((b: { slug: string; title: string; thumbnail?: string | null; thumbnail_alt?: string | null; published_at?: string | null }) => ({
            slug: b.slug,
            title: b.title,
            thumbnail: b.thumbnail ?? null,
            thumbnail_alt: b.thumbnail_alt ?? null,
            published_at: b.published_at ?? null,
        }));
    } catch {
        return [];
    }
}

export async function generateStaticParams() {
    try {
        const url = `${API_BASE}/api/public/blogs?clientId=${CLIENT_ID}&limit=100`;
        const res = await fetch(url, {
            headers: { Accept: "application/json" },
            next: { revalidate: 3600 },
        });
        if (!res.ok) return [];
        const raw = await res.json();
        const blogs = raw.blogs ?? raw.data ?? [];
        return blogs.map((b: { slug: string }) => ({ slug: b.slug }));
    } catch {
        return [];
    }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await fetchBlog(slug);
    if (!post) return {};

    const canonical = `${SITE_URL}/blog/${slug}`;
    const title = post.meta_title || `${post.title} | Birchmount Auto Repair`;
    const description = post.meta_description || post.excerpt || `${post.title} - Read expert auto repair advice from Birchmount Auto Repair in Scarborough, Ontario.`;
    const imageUrl = post.open_graph_image || post.thumbnail || '/assets/images/blog/blogbanner.jpeg';

    return {
        title,
        description,
        keywords: post.meta_keywords || post.tags || undefined,
        alternates: {
            canonical,
        },
        openGraph: {
            title: post.open_graph_title || post.meta_title || post.title,
            description: post.open_graph_description || post.meta_description || post.excerpt || description,
            images: [{ url: imageUrl, width: 1200, height: 630, alt: post.thumbnail_alt || post.title }],
            url: canonical,
            type: "article",
            siteName: "Birchmount Auto Repair",
            publishedTime: post.published_at || undefined,
            modifiedTime: post.updated_at || undefined,
            authors: ["Birchmount Auto Repair"],
            tags: post.tags || undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: post.twitter_title || post.meta_title || post.title,
            description: post.twitter_description || post.meta_description || post.excerpt || description,
            images: post.twitter_image ? [post.twitter_image] : [imageUrl],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
                'max-snippet': -1,
                'max-video-preview': -1,
            },
        },
    };
}

const BlogPostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const [post, allSlugs] = await Promise.all([
        fetchBlog(slug),
        fetchAllBlogSlugs(),
    ]);
    if (!post) notFound();

    const currentIndex = allSlugs.findIndex((b) => b.slug === slug);
    const prevPost = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
    const nextPost = currentIndex >= 0 && currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;
    const recentBlogs = allSlugs.filter((b) => b.slug !== slug).slice(0, 3);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": post.title,
                            "description": post.meta_description || post.excerpt || undefined,
                            "image": post.thumbnail || undefined,
                            "datePublished": post.published_at || undefined,
                            "dateModified": post.updated_at || undefined,
                            "author": {
                                "@type": "Organization",
                                "name": "Birchmount Auto Repair",
                                "url": SITE_URL,
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Birchmount Auto Repair",
                                "url": SITE_URL,
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": `${SITE_URL}/assets/images/icon/logo.ico`,
                                },
                            },
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": `${SITE_URL}/blog/${slug}`,
                            },
                            "articleSection": "Auto Repair",
                            "keywords": post.tags?.join(", ") || post.meta_keywords || undefined,
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": SITE_URL,
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Blog",
                                    "item": `${SITE_URL}/blog`,
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": post.title,
                                    "item": `${SITE_URL}/blog/${slug}`,
                                },
                            ],
                        },
                        ...(post.faq_schema ? [post.faq_schema] : []),
                    ]),
                }}
            />
            <Banner
                title={post.title}
                subTitle="Blog"
                thirdTitle={post.title}
                subTitleLink="/blog"
                bgImage="/assets/images/blog/blogbanner.jpeg"
            />
            <BlogApiDetail post={post} prevPost={prevPost} nextPost={nextPost} recentBlogs={recentBlogs} />
            <Footer />
        </>
    );
};

export default BlogPostPage;
