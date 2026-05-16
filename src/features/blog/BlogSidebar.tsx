import React from 'react'; 
import RecentPostImg1 from '@/assets/images/blog/recent-post-img-1.jpg';
import RecentPostImg2 from '@/assets/images/blog/recent-post-img-2.jpg';
import RecentPostImg3 from '@/assets/images/blog/recent-post-img-3.jpg'; 
import Link from 'next/link';
import Image from 'next/image';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';

interface BlogSidebar {
    wrapper: string;
    inner: string;
}
const BlogSidebar: React.FC<BlogSidebar> = ({ wrapper, inner }) => {
    return (
        <div className={wrapper}>
            <div className={inner}>
                <FadeInAdvanced
                    variant={'fadeInUp'}
                    delay={100}
                    className="sidebar__single sidebar__search"
                >
                    <form className="sidebar__search-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="search" placeholder="Search..." />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </FadeInAdvanced>
                {/*Start Sidebar Single*/}
                <FadeInAdvanced
                    variant={'fadeInUp'}
                    delay={100}
                    className="sidebar__single sidebar__category"
                >
                    <h3 className="sidebar__title">Categories</h3>
                    <ul className="sidebar__category-list list-unstyled">
                        <li><Link href="#">New Technologies <span>(12)</span></Link></li>
                        <li className="active"><Link href="#">Parallax Effect
                            <span>(15)</span></Link></li>
                        <li><Link href="#">Digital Marketing <span>(08)</span></Link></li>
                        <li><Link href="#">Content Writting <span>(20)</span></Link></li>
                        <li><Link href="#">One Page Template <span>(14)</span></Link></li>
                        <li><Link href="#">Relationship Buildup <span>(05)</span></Link></li>
                    </ul>
                </FadeInAdvanced>
                {/*End Sidebar Single*/}

                {/*Start Sidebar Single*/}
                <FadeInAdvanced
                    variant={'fadeInUp'}
                    delay={100}
                    className="sidebar__single sidebar__post"
                >
                    <h3 className="sidebar__title">Recent Post</h3>
                    <div className="sidebar__post-box">
                        <div className="sidebar__post-single">
                            <div className="sidebar-post__img">
                                <Image src={RecentPostImg1} width={350} height={140} alt='Image' />
                            </div>
                            <div className="sidebar__post-content-box">
                                <h3><Link href="#">Regular maintenance cleaning or replacing air filters</Link>
                                </h3>
                            </div>
                        </div>

                        <div className="sidebar__post-single">
                            <div className="sidebar-post__img">
                                <Image src={RecentPostImg2} width={350} height={140} alt='Image' />
                            </div>
                            <div className="sidebar__post-content-box">
                                <h3><Link href="#">Water leakage can be due to a clogged drain line repaire</Link>
                                </h3>
                            </div>
                        </div>

                        <div className="sidebar__post-single">
                            <div className="sidebar-post__img">
                                <Image src={RecentPostImg3} width={350} height={140} alt='Image' />
                            </div>
                            <div className="sidebar__post-content-box">
                                <h3><Link href="#">Revitalising your people in to a retail downturn.</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </FadeInAdvanced>
                {/*End Sidebar Single*/}

                {/*Start Sidebar Single*/}
                <FadeInAdvanced
                    variant={'fadeInUp'}
                    delay={100}
                    className="sidebar__single sidebar__tags"
                >
                    <h3 className="sidebar__title">Tags Cloud</h3>
                    <ul className="sidebar__tags-list clearfix list-unstyled">
                        <li><Link href="#">Growth Accelerator</Link></li>
                        <li><Link href="#">Management</Link></li>
                        <li><Link href="#">Analysis</Link></li>
                        <li><Link href="#">Planning</Link></li>
                        <li><Link href="#">Solution</Link></li>
                        <li><Link href="#">Advisory Service</Link></li> 
                    </ul>
                </FadeInAdvanced>
                {/*End Sidebar Single*/}

            </div>
        </div>
    );
};

export default BlogSidebar;