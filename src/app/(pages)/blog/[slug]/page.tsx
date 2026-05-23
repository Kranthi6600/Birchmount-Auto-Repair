import React from 'react';
import { notFound } from 'next/navigation';
import Banner from '@/features/banner/Banner';
import BlogPostDetail from '@/features/blog/BlogPostDetail';
import FooterOne from '@/components/footers/FooterOne';
import { blogPosts } from '@/contents/blog/blogData';

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return {};
    return { title: `${post.title} | Birchmount Auto Repair` };
}

const BlogPostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
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
            <BlogPostDetail post={post} />
            <FooterOne />
        </>
    );
};

export default BlogPostPage;
