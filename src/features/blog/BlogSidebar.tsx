"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import { useBlogs } from '@/hooks/useBlogs';

interface BlogSidebarProps {
    wrapper: string;
    inner: string;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ wrapper, inner }) => {
    const { data: apiBlogs } = useBlogs();
    const recentPosts = apiBlogs?.slice(0, 3) ?? [];

    return (
        <div className={wrapper}>
            <div className={inner}>
                <FadeInAdvanced variant="fadeInUp" delay={100} className="sidebar__single sidebar__search">
                    <form className="sidebar__search-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="search" placeholder="Search..." />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </FadeInAdvanced>

                <FadeInAdvanced variant="fadeInUp" delay={100} className="sidebar__single sidebar__category">
                    <h3 className="sidebar__title">Categories</h3>
                    <ul className="sidebar__category-list list-unstyled">
                        <li><Link href="#">Brake Repair <span>(01)</span></Link></li>
                        <li><Link href="#">Oil Change <span>(01)</span></Link></li>
                        <li><Link href="#">Engine Diagnostics <span>(01)</span></Link></li>
                        <li><Link href="#">Seasonal Tips <span>(01)</span></Link></li>
                        <li><Link href="#">Transmission <span>(01)</span></Link></li>
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
            </div>
        </div>
    );
};

export default BlogSidebar;
