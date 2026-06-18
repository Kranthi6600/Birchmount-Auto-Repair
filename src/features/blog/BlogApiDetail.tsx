"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlogSidebar from './BlogSidebar';
import type { ApiBlog } from '@/lib/api';
import RichTextRenderer from '@/components/elements/RichTextRenderer';

interface BlogApiDetailProps {
    post: ApiBlog;
}

function formatDate(dateStr: string | null) {
    if (!dateStr) return { day: '', month: '' };
    const d = new Date(dateStr);
    return {
        day: d.getDate().toString().padStart(2, '0'),
        month: d.toLocaleString('en-US', { month: 'short' }),
    };
}

const BlogApiDetail: React.FC<BlogApiDetailProps> = ({ post }) => {
    const { day, month } = formatDate(post.published_at);

    return (
        <section className="blog-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-details__left">
                            <div className="blog-details__img">
                                <Image
                                    src={post.thumbnail || '/assets/images/blog/blog1.jpeg'}
                                    width={850}
                                    height={509}
                                    style={{ width: '100%', height: 'auto' }}
                                    alt={post.thumbnail_alt || post.title}
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
                                            <Link href="#"><span className="fas fa-clock"></span>{post.read_time ? `${post.read_time} Min Read` : '4 Min Read'}</Link>
                                        </li>
                                    </ul>
                                </div>
                                <h3 className="blog-details__title">{post.title}</h3>
                                {post.content && (
                                    <RichTextRenderer html={post.content} className="blog-details__text-2" />
                                )}
                                {post.faqs && post.faqs.length > 0 && (
                                    <>
                                        <h3 className="blog-details__title-2" style={{ marginTop: '40px' }}>Frequently Asked Questions</h3>
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
                                        <h3 className="blog-details__title-2" style={{ marginTop: '40px' }}>Related Services</h3>
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
                        </div>
                    </div>
                    <BlogSidebar wrapper="col-xl-4 col-lg-5 d-none d-lg-block" inner="sidebar" />
                </div>
            </div>
        </section>
    );
};

export default BlogApiDetail;
