"use client";
import React, { useState } from 'react'; 
import { blogPosts } from '@/contents/blog/blogData';
import Banner from '@/features/banner/Banner';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import FooterOne from '@/components/footers/FooterOne';
import Link from 'next/link';
import Image from 'next/image';

const Page: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 6;
    // Calculate paginated product
    const totalPages = Math.ceil(blogPosts.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProducts = blogPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    // Handle page change
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };
    return (
        <>
            <Banner title='Blog' />
            <section className="blog-page">
                <div className="container">
                    <div className="row">
                        {currentProducts.map((post) => (
                            <FadeInAdvanced
                                key={post.id}
                                className="col-xl-4 col-lg-4 col-md-6"
                                variant={post.animation}
                                delay={post.animationDelay}
                            >
                                <div className="blog-one__single">
                                    <div className="blog-one__img-box">
                                        <div className="blog-one__img">
                                            <Image src={post.image}  width={410} height={240} alt={post.title} />
                                            <div className="blog-one__plus">
                                                <Link href="/blog-details">
                                                    <i className="fa fa-plus"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="blog-one__date">
                                            <p>
                                                {post.dateDay} <br /> {post.dateMonth}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li>
                                                <p><span className="icon-user"></span>{post.author}</p>
                                            </li>
                                            <li>
                                                <p><span className="icon-speech-bubbles"></span>{post.comments}</p>
                                            </li>
                                        </ul>
                                        <h3 className="blog-one__title">
                                            <Link href="/blog-details">{post.title}</Link>
                                        </h3>
                                        <div className="blog-one__read-more">
                                            <Link href="/blog-details">
                                                Learn More <span className="icon-arrow-right"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        ))}
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
            </section>
            <FooterOne />
        </>
    );
};

export default Page;