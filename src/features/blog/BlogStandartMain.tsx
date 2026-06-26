"use client";
import React, { useState } from 'react';
import BlogSidebar from './BlogSidebar';
import { useBlogs } from '@/hooks/useBlogs';
import type { ApiBlog } from '@/lib/api';
import { stripHtml } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';

function formatDate(dateStr: string | null) {
    if (!dateStr) return { day: '', month: '' };
    const d = new Date(dateStr);
    return {
        day: d.getDate().toString().padStart(2, '0'),
        month: d.toLocaleString('en-US', { month: 'short' }),
    };
}

const BlogStandartMain: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 6;
    const { data: apiBlogs, pagination, isLoading, error } = useBlogs(currentPage, ITEMS_PER_PAGE);

    const publishedBlogs = apiBlogs ?? [];
    const totalPages = pagination?.totalPages ?? 1;

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    if (isLoading) {
        return (
            <section className="blog-list">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-list__left">
                                <p>Loading blogs...</p>
                            </div>
                        </div>
                        <BlogSidebar wrapper="col-xl-4 col-lg-5 d-none d-lg-block" inner="sidebar" />
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="blog-list">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-list__left text-center py-5">
                                <h3>Error loading blogs</h3>
                                <p>Please try again later.</p>
                            </div>
                        </div>
                        <BlogSidebar wrapper="col-xl-4 col-lg-5 d-none d-lg-block" inner="sidebar" />
                    </div>
                </div>
            </section>
        );
    }

    if (publishedBlogs.length === 0) {
        return (
            <section className="blog-list">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-list__left text-center py-5">
                                <h3>No blog posts yet</h3>
                                <p>Check back soon for helpful automotive tips and news.</p>
                            </div>
                        </div>
                        <BlogSidebar wrapper="col-xl-4 col-lg-5 d-none d-lg-block" inner="sidebar" />
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="blog-list">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-list__left">
                            {publishedBlogs.map((post: ApiBlog) => {
                                const { day, month } = formatDate(post.published_at);
                                return (
                                    <div className="blog-list__single" key={post.id}>
                                        <div className="blog-list__img">
                                            <Image
                                                src={post.thumbnail || '/assets/images/blog/blog1.jpeg'}
                                                alt={post.thumbnail_alt || post.title}
                                                width={850}
                                                height={475}
                                                style={{ width: '100%', height: 'auto' }}
                                            />
                                            <div className="blog-list__date">
                                                <p>{day}<br />{month}</p>
                                            </div>
                                        </div>
                                        <div className="blog-list__content">
                                            <div className="blog-list__user-and-meta">
                                                <div className="blog-list__user">
                                                    <p><span className="icon-user-1"></span>By Birchmount Auto Repair</p>
                                                </div>
                                                <ul className="blog-list__meta list-unstyled">
                                                    <li>
                                                        <Link href="#"><span className="fas fa-clock"></span>{post.read_time ? `${post.read_time} Min Read` : '4 Min Read'}</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h3 className="blog-list__title" style={{ fontSize: '1.75rem', lineHeight: 1.3, marginBottom: '12px' }}>
                                                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                            </h3>
                                            <p className="blog-list__text" style={{ fontSize: '1rem', lineHeight: 1.7, color: '#777f95', marginBottom: '8px' }}>
                                                {post.excerpt ? stripHtml(post.excerpt).slice(0, 160) + (stripHtml(post.excerpt).length > 160 ? '...' : '') : ''}
                                            </p>
                                            <Link href={`/blog/${post.slug}`} className="blog-list__read-more">
                                                Learn More<span className="icon-arrow-right"></span>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                            {totalPages > 1 && (
                                <div className="blog-list__pagination">
                                    <ul className="styled-pagination text-center clearfix list-unstyled">
                                        <li className="arrow prev">
                                            <button
                                                onClick={() => handlePageChange(currentPage - 1)}
                                                disabled={currentPage === 1}
                                            ><span className="fas fa-angle-left"></span></button>
                                        </li>
                                        {Array.from({ length: totalPages }).map((_, index) => (
                                            <li key={index} className={`count ${currentPage === index + 1 ? 'active' : ''}`}>
                                                <button onClick={() => handlePageChange(index + 1)} className="pg-btn">
                                                    {index + 1}
                                                </button>
                                            </li>
                                        ))}
                                        <li className="arrow next">
                                            <button
                                                onClick={() => handlePageChange(currentPage + 1)}
                                                disabled={currentPage === totalPages}
                                            ><span className="fas fa-angle-right"></span></button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <BlogSidebar wrapper="col-xl-4 col-lg-5 d-none d-lg-block" inner="sidebar" />
                </div>
            </div>
        </section>
    );
};

export default BlogStandartMain;
