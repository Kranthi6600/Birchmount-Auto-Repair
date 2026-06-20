"use client";

import React from 'react';

const blogShape1 = "/assets/images/shapes/blog-one-shape-1.png";
const blogShape2 = "/assets/images/shapes/blog-one-shape-2.png";

import FadeInAdvanced  from '@/components/elements/FadeInAdvanced';
import TextAnimation from '@/components/elements/TextAnimation';
import SectionWrapper from '@/components/elements/SectionWrapper';
import Link from 'next/link';
import Image from 'next/image';
import { useBlogs } from '@/hooks/useBlogs';
import type { ApiBlog } from '@/lib/api';

function formatDate(dateStr: string | null) {
    if (!dateStr) return { day: '', month: '' };
    const d = new Date(dateStr);
    return {
        day: d.getDate().toString().padStart(2, '0'),
        month: d.toLocaleString('en-US', { month: 'short' }),
    };
}

const Blog: React.FC = () => {
    const { data: apiBlogs, isLoading } = useBlogs();
    const blogs = apiBlogs?.slice(0, 3) ?? [];

    return (
        <SectionWrapper id='blog' className="blog-one">
            <div className="blog-one__shape-1 float-bob-x">
                <Image src={blogShape1} width={600} height={600} alt="shape 1" />
            </div>
            <div className="blog-one__shape-2 rotate-me">
                <Image src={blogShape2} width={300} height={300} alt="shape 2" />
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h6 className="section-title__tagline">
                        <span className="section-title__tagline-border"></span>blog & News
                    </h6>
                    <h3 className="section-title__title title-animation">
                        <TextAnimation>Auto Tips &amp; News <br /> from Our Team</TextAnimation>
                    </h3>
                </div>
                {isLoading ? (
                    <div className="row">
                        {[1, 2, 3].map((n) => (
                            <div key={n} className="col-xl-4 col-lg-4">
                                <div className="blog-one__single" style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                                className="col-xl-4 col-lg-4"
                                variant="fadeInUp"
                                delay={100}
                            >
                                <div className="blog-one__single">
                                    <div className="blog-one__img-box">
                                        <div className="blog-one__img">
                                            <Image src={blog.thumbnail || '/assets/images/blog/blog-3-1.jpg'} width={410} height={240} alt={blog.thumbnail_alt || blog.title} />
                                            <div className="blog-one__plus">
                                                <Link href={`/blog/${blog.slug}`}>
                                                    <i className="fa fa-plus"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="blog-one__date">
                                            <p>
                                                {formatDate(blog.published_at).day} <br /> {formatDate(blog.published_at).month}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li>
                                                <p><span className="icon-user"></span>By Birchmount Auto Repair</p>
                                            </li>
                                            <li>
                                                <p><span className="icon-speech-bubbles"></span>{blog.likes ?? 0}</p>
                                            </li>
                                        </ul>
                                        <h3 className="blog-one__title">
                                            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                                        </h3>
                                        <div className="blog-one__read-more">
                                            <Link href={`/blog/${blog.slug}`}>
                                                Learn More <span className="icon-arrow-right"></span>
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

export default Blog;
