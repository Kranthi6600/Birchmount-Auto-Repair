"use client";

import React from 'react';
import TextAnimation from '@/components/elements/TextAnimation';
import type { AnimationVariant } from '@/components/elements/FadeInAdvanced';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import SectionWrapper from '@/components/elements/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { useBlogs } from '@/hooks/useBlogs';
import type { ApiBlog } from '@/lib/api';
import { stripHtml } from '@/lib/api';

function formatDate(dateStr: string | null) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
}

const animationMap: AnimationVariant[] = ['fadeInLeft', 'fadeInUp', 'fadeInRight'];
const delayMap = [100, 300, 500];

const BlogThree: React.FC = () => {
    const { data: apiBlogs, isLoading } = useBlogs();
    const blogs = apiBlogs?.slice(0, 3) ?? [];

    return (
        <SectionWrapper id='blog' className="blog-three">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h6 className="section-title__tagline">
                        <span className="section-title__tagline-border"></span>Blog & News
                    </h6>
                    <h3 className="section-title__title title-animation">
                        <TextAnimation> Get Latest News & Updates</TextAnimation>
                    </h3>
                </div>

                {isLoading ? (
                    <div className="row">
                        {[1, 2, 3].map((n) => (
                            <div key={n} className="col-xl-4 col-lg-4">
                                <div className="blog-three__single" style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="row">
                        {blogs.map((blog: ApiBlog, index: number) => (
                            <FadeInAdvanced
                                key={blog.id}
                                className={`col-xl-4 col-lg-4`}
                                delay={delayMap[index] ?? 100}
                                variant={animationMap[index] ?? 'fadeInUp'}
                            >
                                <div className="blog-three__single">
                                    <div className="blog-three__img-box">
                                        <div className="blog-three__img">
                                            <Image
                                                src={blog.thumbnail || '/assets/images/blog/blog-3-1.jpg'}
                                                width={410}
                                                height={430}
                                                alt={blog.thumbnail_alt || blog.title}
                                            />
                                        </div>
                                        <div className="blog-three__content">
                                            <ul className="blog-three__meta list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-user"></span>
                                                    </div>
                                                    <p>By Birchmount Auto Repair</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-calendar-alt"></span>
                                                    </div>
                                                    <p>{formatDate(blog.published_at)}</p>
                                                </li>
                                            </ul>
                                            <h3 className="blog-three__title" style={{ fontSize: '1.25rem', lineHeight: 1.35, marginBottom: '8px' }}>
                                                <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                                            </h3>
                                            {blog.excerpt && (
                                                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#777f95', marginBottom: '16px' }}>
                                                    {stripHtml(blog.excerpt).slice(0, 100)}{stripHtml(blog.excerpt).length > 100 ? '...' : ''}
                                                </p>
                                            )}
                                            <div className="blog-three__btn-box">
                                                <Link href={`/blog/${blog.slug}`} className="thm-btn">
                                                    Read More <span className="icon-arrow-right"></span>
                                                </Link>
                                            </div>
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

export default BlogThree;