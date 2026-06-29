"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import { useBlogs } from '@/hooks/useBlogs';
import { useStickySidebar } from '@/hooks/useStickySidebar';

interface BlogSidebarProps {
    wrapper: string;
    inner: string;
    mainRef: React.RefObject<HTMLDivElement | null>;
}

const contactItems = [
    { id: 1, iconClass: 'icon-phone-call', content: '(416) 757-8368' },
    { id: 2, iconClass: 'icon-envelope', content: 'info@birchmountautorepair.ca' },
    { id: 3, iconClass: 'icon-location', content: '1064 Birchmount Rd, Scarborough' },
];

const BlogSidebar: React.FC<BlogSidebarProps> = ({ wrapper, inner, mainRef }) => {
    const { data: apiBlogs } = useBlogs();
    const recentPosts = apiBlogs?.slice(0, 3) ?? [];
    const widgetRef = useRef<HTMLDivElement>(null);
    const placeholderRef = useRef<HTMLDivElement>(null);

    useStickySidebar({ mainRef, widgetRef, placeholderRef, offset: 120 });

    return (
        <div className={wrapper} style={{ height: '100%' }}>
            <div className={`${inner} d-flex flex-column`} style={{ height: '100%' }}>

                {/* Top section: scrolls normally */}
                <div style={{ flex: '0 0 auto' }}>
                    <FadeInAdvanced variant="fadeInUp" delay={100} className="sidebar__single sidebar__search">
                        <form className="sidebar__search-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="search" placeholder="Search..." />
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                    </FadeInAdvanced>

                    <FadeInAdvanced variant="fadeInUp" delay={100} className="sidebar__single sidebar__tags">
                        <h3 className="sidebar__title">Tags</h3>
                        <ul className="sidebar__tags-list clearfix list-unstyled">
                            <li><Link href="#">Brakes</Link></li>
                            <li><Link href="#">Oil Change</Link></li>
                            <li><Link href="#">Engine</Link></li>
                            <li><Link href="#">Diagnostics</Link></li>
                            <li><Link href="#">Transmission</Link></li>
                            <li><Link href="#">Winter Tips</Link></li>
                            <li><Link href="#">Safety</Link></li>
                            <li><Link href="#">Maintenance</Link></li>
                        </ul>
                    </FadeInAdvanced>

                    <FadeInAdvanced variant="fadeInUp" delay={100} className="sidebar__single sidebar__post">
                        <h3 className="sidebar__title">Recent Posts</h3>
                        <div className="sidebar__post-box">
                            {recentPosts.map((post) => (
                                <div className="sidebar__post-single" key={post.id}>
                                    <div className="sidebar-post__img">
                                        <Image
                                            src={post.thumbnail || '/assets/images/blog/blog-3-1.jpg'}
                                            width={350}
                                            height={140}
                                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                            alt={post.thumbnail_alt || post.title}
                                        />
                                    </div>
                                    <div className="sidebar__post-content-box">
                                        <h3>
                                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeInAdvanced>
                </div>

                {/* Bottom section: sticky widget track */}
                <div className="flex-grow-1" style={{ position: 'relative' }}>
                    <div ref={placeholderRef} style={{ width: '100%', height: '0px' }} />
                    {/* Get In Touch */}
                    <div ref={widgetRef} className="service-details__get-started" style={{ position: 'relative' }}>
                        <h3 className="service-details__get-started-title">Get In Touch</h3>
                        <p className="service-details__get-started-text">
                            Have a question about your vehicle? Call us or send a message — we're here to help.
                        </p>
                        <ul className="service-details__get-started-points list-unstyled">
                            {contactItems.map((item) => (
                                <li key={item.id}>
                                    <div className="icon">
                                        <span className={item.iconClass}></span>
                                    </div>
                                    <p>{item.content}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="service-details__get-started-btn-box">
                            <Link href="/contact" className="service-details__get-started-btn thm-btn">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogSidebar;
