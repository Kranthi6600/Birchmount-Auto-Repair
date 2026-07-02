"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlogSidebar from './BlogSidebar';
import type { ApiBlog } from '@/lib/api';

interface BlogNavPost {
    slug: string;
    title: string;
    thumbnail: string | null;
    thumbnail_alt: string | null;
    published_at: string | null;
}

interface BlogApiDetailProps {
    post: Omit<ApiBlog, 'content'>;
    contentSlot: React.ReactNode;
    prevPost: BlogNavPost | null;
    nextPost: BlogNavPost | null;
    recentBlogs: BlogNavPost[];
}

function formatDate(dateStr: string | null) {
    if (!dateStr) return { day: '', month: '' };
    const d = new Date(dateStr);
    return {
        day: d.getDate().toString().padStart(2, '0'),
        month: d.toLocaleString('en-US', { month: 'short' }),
    };
}

const BlogApiDetail: React.FC<BlogApiDetailProps> = ({ post, contentSlot, prevPost, nextPost, recentBlogs }) => {
    const { day, month } = formatDate(post.published_at);
    const mainRef = useRef<HTMLDivElement>(null);

    return (
        <section className="blog-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7" ref={mainRef}>
                        <div className="blog-details__left">
                            <article>
                            <div className="blog-details__img">
                                <Image
                                    src={post.thumbnail || '/assets/images/blog/blog1.jpeg'}
                                    width={850}
                                    height={509}
                                    style={{ width: '100%', height: 'auto' }}
                                    alt={post.thumbnail_alt || post.title}
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 850px"
                                />
                                <div className="blog-details__date">
                                    <p>{day}<br />{month}</p>
                                </div>
                            </div>
                            <div className="blog-details__content">
                                <div className="blog-details__user-and-meta">
                                    <div className="blog-details__user">
                                        <p><span className="icon-user-1"></span>By Birchmount Auto Repair</p>
                                    </div>
                                    <ul className="blog-details__meta list-unstyled">
                                        <li>
                                            <span className="fas fa-clock"></span>
                                            <time dateTime={post.published_at || undefined}>{post.read_time ? `${post.read_time} Min Read` : '4 Min Read'}</time>
                                        </li>
                                    </ul>
                                </div>
                                <h1 className="blog-details__title">{post.title}</h1>
                                {contentSlot}
                                {post.faqs && post.faqs.length > 0 && (
                                    <>
                                        <h2 className="blog-details__title-2" style={{ marginTop: '40px' }}>Frequently Asked Questions</h2>
                                        <div className="faq-one__right" style={{ marginTop: '20px' }}>
                                            {post.faqs.map((faq, i) => (
                                                <div className="accrodion-grp faq-one-accrodion" key={faq.id}>
                                                    <div className={`accrodion ${i === 0 ? 'active' : ''}`}>
                                                        <div className="accrodion-title">
                                                            <h4>{faq.question}</h4>
                                                        </div>
                                                        <div className="accrodion-content">
                                                            <div className="inner">
                                                                <p>{faq.answer}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                                {post.related_services && post.related_services.length > 0 && (
                                    <>
                                        <h2 className="blog-details__title-2" style={{ marginTop: '40px' }}>Related Services</h2>
                                        <div className="row" style={{ marginTop: '20px' }}>
                                            {post.related_services.map((svc) => (
                                                <div className="col-md-6" key={svc.id}>
                                                    <div className="service-details__services-box" style={{ marginBottom: '20px' }}>
                                                        <h4 className="service-details__services-title">
                                                            <Link href={`/services/${svc.slug}`}>{svc.title}</Link>
                                                        </h4>
                                                        {svc.description && <p>{svc.description}</p>}
                                                        {svc.fee && (
                                                            <p><strong>Fee:</strong> {svc.fee_currency || '$'}{svc.fee}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                            </article>

                            {(prevPost || nextPost) && (
                                <div className="blog-details__navigation" style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginTop: '50px', paddingTop: '40px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                                    {prevPost ? (
                                        <Link href={`/blog/${prevPost.slug}`} style={{ textDecoration: 'none', flex: '1' }}>
                                            <div style={{ padding: '20px 25px', background: '#f5f6fa', borderRadius: '8px', transition: 'background 0.3s ease' }} className="blog-details__nav-prev">
                                                <span style={{ fontSize: '13px', color: '#777f95', display: 'block', marginBottom: '6px' }}>
                                                    <i className="fas fa-angle-left" style={{ marginRight: '6px' }}></i>Previous Post
                                                </span>
                                                <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--birchmountAutoRepair-black)', display: 'block', lineHeight: '1.4' }}>
                                                    {prevPost.title}
                                                </span>
                                            </div>
                                        </Link>
                                    ) : (
                                        <div style={{ flex: '1' }} />
                                    )}
                                    {nextPost ? (
                                        <Link href={`/blog/${nextPost.slug}`} style={{ textDecoration: 'none', flex: '1', textAlign: 'right' }}>
                                            <div style={{ padding: '20px 25px', background: '#f5f6fa', borderRadius: '8px', transition: 'background 0.3s ease' }} className="blog-details__nav-next">
                                                <span style={{ fontSize: '13px', color: '#777f95', display: 'block', marginBottom: '6px' }}>
                                                    Next Post<i className="fas fa-angle-right" style={{ marginLeft: '6px' }}></i>
                                                </span>
                                                <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--birchmountAutoRepair-black)', display: 'block', lineHeight: '1.4' }}>
                                                    {nextPost.title}
                                                </span>
                                            </div>
                                        </Link>
                                    ) : (
                                        <div style={{ flex: '1' }} />
                                    )}
                                </div>
                            )}

                            {recentBlogs.length > 0 && (
                                <div style={{ marginTop: '50px' }}>
                                    <h3 className="blog-details__title-2" style={{ marginBottom: '24px' }}>Recent Blogs</h3>
                                    <div className="row">
                                        {recentBlogs.map((blog) => {
                                            const { day, month } = formatDate(blog.published_at);
                                            return (
                                                <div className="col-md-4" key={blog.slug} style={{ marginBottom: '20px' }}>
                                                    <Link href={`/blog/${blog.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                                                        <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)' }}>
                                                            <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                                                                <Image
                                                                    src={blog.thumbnail || '/assets/images/blog/blog1.jpeg'}
                                                                    alt={blog.thumbnail_alt || blog.title}
                                                                    fill
                                                                    sizes="(max-width: 768px) 100vw, 300px"
                                                                    style={{ objectFit: 'cover' }}
                                                                />
                                                                <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'var(--birchmountAutoRepair-base)', color: '#fff', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', lineHeight: '1.3' }}>
                                                                    {day} {month}
                                                                </div>
                                                            </div>
                                                            <div style={{ padding: '16px' }}>
                                                                <h4 style={{ fontSize: '15px', fontWeight: 600, lineHeight: '1.4', color: 'var(--birchmountAutoRepair-black)', margin: 0 }}>
                                                                    {blog.title}
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <BlogSidebar wrapper="col-xl-4 col-lg-5 d-none d-lg-block" inner="sidebar" mainRef={mainRef} />
                </div>
            </div>
        </section>
    );
};

export default BlogApiDetail;
