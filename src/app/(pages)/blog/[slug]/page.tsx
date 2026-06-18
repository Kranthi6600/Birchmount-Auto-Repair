import React from 'react';
import { notFound } from 'next/navigation';
import Banner from '@/features/banner/Banner';
import BlogApiDetail from '@/features/blog/BlogApiDetail';
import FooterOne from '@/components/footers/FooterOne';
import type { ApiBlog } from '@/lib/api';

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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await fetchBlog(slug);
    if (!post) return {};
    return {
        title: post.meta_title || `${post.title} | Birchmount Auto Repair`,
        description: post.meta_description || post.excerpt || undefined,
        keywords: post.meta_keywords || undefined,
    };
}

const BlogPostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const post = await fetchBlog(slug);
    if (!post) notFound();

    return (
        <>
            <Banner
                title={post.title}
                subTitle="Blog"
                thirdTitle={post.title}
                subTitleLink="/blog"
                bgImage="/assets/images/blog/blogbanner.jpeg"
            />
            <BlogApiDetail post={post} />
            <FooterOne />
        </>
    );
};

export default BlogPostPage;
