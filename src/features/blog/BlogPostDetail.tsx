"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlogSidebar from './BlogSidebar';
import type { BlogPost } from '@/contents/blog/blogData';

const Comment11 = '/assets/images/blog/char1-1.jpeg';
const Comment12 = '/assets/images/blog/char1-2.jpeg';

interface BlogPostDetailProps {
    post: BlogPost;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post }) => {
    const handleComment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <section className="blog-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-details__left">
                            <div className="blog-details__img">
                                <Image
                                    src={post.image}
                                    width={850}
                                    height={509}
                                    style={{ width: '100%', height: 'auto' }}
                                    alt={post.title}
                                />
                                <div className="blog-details__date">
                                    <p>{post.dateDay}<br />{post.dateMonth}</p>
                                </div>
                            </div>
                            <div className="blog-details__content">
                                <div className="blog-details__user-and-meta">
                                    <div className="blog-details__user">
                                        <p><span className="icon-user-1"></span>By {post.author}</p>
                                    </div>
                                    <ul className="blog-details__meta list-unstyled">
                                        <li>
                                            <Link href="#"><span className="fas fa-comments"></span>Comments ({post.comments})</Link>
                                        </li>
                                        <li>
                                            <Link href="#"><span className="fas fa-clock"></span>{post.readTime}</Link>
                                        </li>
                                    </ul>
                                </div>
                                <h3 className="blog-details__title">{post.title}</h3>
                                <p className="blog-details__text-1">{post.intro}</p>
                                <p className="blog-details__text-2">{post.intro2}</p>
                                <div className="blog-details__author-box">
                                    <h4 className="blog-details__author-text">"{post.quote}"</h4>
                                    <p className="blog-details__author-name">Birchmount Auto Repair<span> / Scarborough</span></p>
                                </div>
                                <h3 className="blog-details__title-2">{post.section2Title}</h3>
                                <p className="blog-details__text-3">{post.section2Body}</p>
                                <ul className="service-details__points-list list-unstyled" style={{ marginBottom: '30px', marginTop: '30px' }}>
                                    {post.points.map((point, i) => (
                                        <li key={i}>
                                            <div className="icon">
                                                <span className="icon-arrow-right"></span>
                                            </div>
                                            <p>{point}</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="blog-details__img-box">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="blog-details__img-box-img">
                                                <Image
                                                    src={post.boxImg1}
                                                    width={410}
                                                    height={245}
                                                    style={{ width: '100%', height: '245px', objectFit: 'cover' }}
                                                    alt={post.title}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="blog-details__img-box-img">
                                                <Image
                                                    src={post.boxImg2}
                                                    width={410}
                                                    height={245}
                                                    style={{ width: '100%', height: '245px', objectFit: 'cover' }}
                                                    alt={post.title}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-details__tag-and-share">
                                    <div className="blog-details__tag">
                                        <h3 className="blog-details__tag-title">Tags :</h3>
                                        <ul className="blog-details__tag-list list-unstyled">
                                            {post.tags.map((tag) => (
                                                <li key={tag}><Link href="#">{tag}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="blog-details__share-box">
                                        <h3 className="blog-details__share-title">Share :</h3>
                                        <div className="blog-details__share">
                                            <Link href="#"><span className="icon-facebook"></span></Link>
                                            <Link href="#"><span className="icon-xpa"></span></Link>
                                            <Link href="#"><span className="icon-link-in"></span></Link>
                                            <Link href="#"><span className="icon-instagram"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-one">
                                    <div className="comment-one__single">
                                        <div className="comment-one__image">
                                            <Image src={Comment11} width={70} height={70} alt="Commenter" />
                                        </div>
                                        <div className="comment-one__content">
                                            <h3>Theresa Webb</h3>
                                            <span>02 June 2024 at 03:30 pm</span>
                                            <p>Really helpful article — exactly what I needed to know. Brought my car in after reading this and the team at Birchmount were fantastic. Highly recommend!</p>
                                            <div className="comment-one__btn-box">
                                                <Link href="#" className="comment-one__btn"><span className="icon-share-alt"></span>Reply</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-one__single">
                                        <div className="comment-one__image">
                                            <Image src={Comment12} width={70} height={70} alt="Commenter" />
                                        </div>
                                        <div className="comment-one__content">
                                            <h3>Cameron Williamson</h3>
                                            <span>15 July 2024 at 11:00 am</span>
                                            <p>Great read. I had no idea my car was showing some of these signs until I saw this post. Booked an appointment and they sorted it out same day.</p>
                                            <div className="comment-one__btn-box">
                                                <Link href="#" className="comment-one__btn"><span className="icon-share-alt"></span>Reply</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-form">
                                    <h3 className="comment-form__title">Leave A Reply</h3>
                                    <p className="comment-form__text">Have a question or something to add? We'd love to hear from you.</p>
                                    <form className="comment-one__form contact-form-validated" onSubmit={handleComment}>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="comment-form__input-box">
                                                    <input type="text" placeholder="Your Name" name="name" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="comment-form__input-box">
                                                    <input type="email" placeholder="Your Email" name="email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="comment-form__input-box text-message-box">
                                                    <textarea name="message" placeholder="Write your message"></textarea>
                                                </div>
                                                <div className="comment-form__btn-box">
                                                    <button type="submit" className="footer-widget__newsletter-btn thm-btn">
                                                        Submit Now
                                                        <span><i className="icon-arrow-right"></i></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar wrapper="col-xl-4 col-lg-5" inner="sidebar" />
                </div>
            </div>
        </section>
    );
};

export default BlogPostDetail;
