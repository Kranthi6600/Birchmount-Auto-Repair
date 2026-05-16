import React from 'react'; 

import blogShape1 from '@/assets/images/shapes/blog-one-shape-1.png';
import blogShape2 from '@/assets/images/shapes/blog-one-shape-2.png';

import FadeInAdvanced  from '@/components/elements/FadeInAdvanced';
import TextAnimation from '@/components/elements/TextAnimation';
import { blogOnePosts } from '@/contents/blog/blogData';
import SectionWrapper from '@/components/elements/SectionWrapper';
import Link from 'next/link';
import Image from 'next/image';



const BlogOne: React.FC = () => {
    return (
        <SectionWrapper id='blog' className="blog-one">
            <div className="blog-one__shape-1 float-bob-x">
                <Image src={blogShape1} width={600} height={600} alt="shape 1" />
            </div>
            <div className="blog-one__shape-2 rotate-me">
                <Image src={blogShape2} width={300} height={300} alt="shape 2" />
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h6 className="section-title__tagline">
                        <span className="section-title__tagline-border"></span>blog & News
                    </h6>
                    <h3 className="section-title__title title-animation">
                        <TextAnimation>Your Brightest Choice <br /> in Repairs</TextAnimation>
                    </h3>
                </div>
                <div className="row">
                    {blogOnePosts.map((post) => (
                        <FadeInAdvanced
                            key={post.id}
                            className="col-xl-4 col-lg-4"
                            variant={post.animation}
                            delay={post.animationDelay}
                        >
                            <div className="blog-one__single">
                                <div className="blog-one__img-box">
                                    <div className="blog-one__img">
                                        <Image src={post.image} width={410} height={240} alt={post.title} />
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
                </div>
            </div>
        </SectionWrapper>
    );
};

export default BlogOne;