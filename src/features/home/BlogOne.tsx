"use client";

import React from 'react';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import TextAnimation from '@/components/elements/TextAnimation';
import SectionWrapper from '@/components/elements/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { useBlogs } from '@/hooks/useBlogs';
import type { ApiBlog } from '@/lib/api';
import { stripHtml } from '@/lib/api';

function formatDate(dateStr: string | null) {
    if (!dateStr) return { day: '', month: '' };
    const d = new Date(dateStr);
    return {
        day: d.getDate().toString().padStart(2, '0'),
        month: d.toLocaleString('en-US', { month: 'short' }),
    };
}

const BlogOne: React.FC = () => {
    const { data: apiBlogs, isLoading } = useBlogs();
    const blogs = apiBlogs?.slice(0, 3) ?? [];

    return (
        <SectionWrapper id='blog' className="blog-two">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h6 className="section-title__tagline">
                        <span className="section-title__tagline-border"></span>Blog & News
                    </h6>
                    <h3 className="section-title__title title-animation">
                        <TextAnimation>Auto Tips &amp; Advice from Our Team</TextAnimation>
                    </h3>
                </div>
                {isLoading ? (
                    <div className="row">
                        {[1, 2, 3].map((n) => (
                            <div key={n} className="col-xl-4 col-lg-4">
                                <div className="blog-two__single" style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="row">
                        {blogs.map((blog: ApiBlog) => (
                            <FadeInAdvanced
                                key={blog.id}
                                className={`col-xl-4 col-lg-4`}
                                variant="fadeInUp"
                                delay={100}
                            >
                                <div className="blog-two__single">
                                    <div className="blog-two__img-box">
                                        <div className="blog-two__img">
                                            <Image src={blog.thumbnail || '/assets/images/blog/blog-3-1.jpg'} alt={blog.thumbnail_alt || blog.title} width={410} height={300}/>
                                            <Link href={`/blog/${blog.slug}`} className="blog-two__link">
                                                <span className="sr-only"></span>
                                            </Link>
                                            <div className="blog-two__date">
                                                <p>
                                                    {formatDate(blog.published_at).day} <br /> {formatDate(blog.published_at).month}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-two__content">
                                        <h3 className="blog-two__title">
                                            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                                        </h3>
                                        <p className="blog-two__text">
                                            {blog.excerpt ? stripHtml(blog.excerpt).slice(0, 120) + (stripHtml(blog.excerpt).length > 120 ? '...' : '') : ''}
                                        </p>
                                        <div className="blog-two__read-more">
                                            <Link href={`/blog/${blog.slug}`}>
                                                Read More<span className="icon-arrow-right"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        ))}
                    </div>
                )}
            </div>
        </SectionWrapper>
    );
};

export default BlogOne;
