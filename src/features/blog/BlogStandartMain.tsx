"use client";
import React, { useState } from 'react';
import BlogSidebar from './BlogSidebar';
import { blogPosts } from '@/contents/blog/blogData';
import Image from 'next/image';
import Link from 'next/link';

const BlogStandartMain: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 3;
    const totalPages = Math.ceil(blogPosts.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentPosts = blogPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <section className="blog-list">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-list__left">
                            {currentPosts.map((post) => (
                                <div className="blog-list__single" key={post.id}>
                                    <div className="blog-list__img">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            width={850}
                                            height={475}
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                        <div className="blog-list__date">
                                            <p>{post.dateDay}<br />{post.dateMonth}</p>
                                        </div>
                                    </div>
                                    <div className="blog-list__content">
                                        <div className="blog-list__user-and-meta">
                                            <div className="blog-list__user">
                                                <p><span className="icon-user-1"></span>By {post.author}</p>
                                            </div>
                                            <ul className="blog-list__meta list-unstyled">
                                                <li>
                                                    <Link href="#"><span className="fas fa-comments"></span>Comments ({post.comments})</Link>
                                                </li>
                                                <li>
                                                    <Link href="#"><span className="fas fa-clock"></span>{post.readTime}</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 className="blog-list__title">
                                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                        </h3>
                                        <p className="blog-list__text">{post.excerpt}</p>
                                        <Link href={`/blog/${post.slug}`} className="blog-list__read-more">
                                            Learn More<span className="icon-arrow-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
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
                        </div>
                    </div>
                    <BlogSidebar wrapper="col-xl-4 col-lg-5" inner="sidebar" />
                </div>
            </div>
        </section>
    );
};

export default BlogStandartMain;
