"use client";
import React, { useState } from 'react';
import BlogSidebar from './BlogSidebar';
import { blogStandardData } from '@/contents/blog/blogData';
import Image from 'next/image';
import Link from 'next/link';


const BlogStandartMain: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 3;
    // Calculate paginated product
    const totalPages = Math.ceil(blogStandardData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProducts = blogStandardData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    // Handle page change
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };
    return (
        <section className="blog-list">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-list__left">
                            {/*Blog List Single Start*/}
                            {currentProducts.map((blog) => (
                                <div className="blog-list__single" key={blog.id}>
                                    <div className="blog-list__img">
                                        <Image src={blog.image} alt={blog.title} width={850} height={475} />
                                        <div className="blog-list__date">
                                            <p>{blog.day}<br />{blog.month}</p>
                                        </div>
                                    </div>
                                    <div className="blog-list__content">
                                        <div className="blog-list__user-and-meta">
                                            <div className="blog-list__user">
                                                <p><span className="icon-user-1"></span>By {blog.author}</p>
                                            </div>
                                            <ul className="blog-list__meta list-unstyled">
                                                <li>
                                                    <Link href="#"><span className="fas fa-comments"></span>Comments ({blog.commentsCount})</Link>
                                                </li>
                                                <li>
                                                    <Link href="#"><span className="fas fa-clock"></span>{blog.readTime}</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 className="blog-list__title">
                                            <Link href={blog.link}>{blog.title}</Link>
                                        </h3>
                                        <p className="blog-list__text">{blog.text}</p>
                                        <Link href={blog.link} className="blog-list__read-more">
                                            Learn More<span className="icon-arrow-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                            {/*Blog List Single End*/}
                            <div className="blog-list__pagination">
                                <ul className="styled-pagination text-center clearfix list-unstyled">
                                    <li className="arrow prev">
                                        <button
                                            onClick={(e) => { handlePageChange(currentPage - 1); e.preventDefault() }}
                                            disabled={currentPage === 1}
                                        ><span className="fas fa-angle-left"></span> </button>
                                    </li>
                                    {Array.from({ length: totalPages }).map((_, index) => (
                                        <li
                                            key={index}
                                            className={`count ${currentPage === index + 1 ? "active" : ""}`}
                                        >
                                            <button
                                                onClick={() => handlePageChange(index + 1)}
                                                className="pg-btn"
                                            >
                                                {index + 1}
                                            </button>
                                        </li>
                                    ))}
                                    <li className="arrow next">
                                        <button aria-label="Next"
                                            onClick={(e) => { handlePageChange(currentPage + 1); e.preventDefault() }}
                                            disabled={currentPage === totalPages}
                                        >
                                            <span className="fas fa-angle-right"></span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/*Start Sidebar*/}
                    <BlogSidebar wrapper={"col-xl-4 col-lg-5"} inner='sidebar' />
                    {/*End Sidebar*/}
                </div>
            </div>
        </section>
    );
};

export default BlogStandartMain;