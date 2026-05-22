"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
const testimonial3Img1 = "/assets/images/testimonial/testimonial1.png";
const testimonial3Img4 = "/assets/images/testimonial/testimonial2.jpeg";
const testimonial3Img3 = "/assets/images/testimonial/testimonial3.jpeg";
const testimonial3Img5 = "/assets/images/testimonial/testimonial4.jpeg";
import TextAnimation from '@/components/elements/TextAnimation';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface TestimonialItem {
    id: number;
    image: string | StaticImageData;
    name: string;
    role: string;
    rating: number;
    text: string;
    path: string;
}

const testimonialItems: TestimonialItem[] = [
    {
        id: 1,
        image: testimonial3Img1,
        name: 'Marcus T.',
        role: 'Scarborough Resident',
        rating: 5,
        text: 'Brought my car in for a brake job and they had it done same day. Honest pricing, no upsells — exactly what you want from a local shop.',
        path: '/testimonials',
    },
    {
        id: 2,
        image: testimonial3Img4,
        name: 'Priya S.',
        role: 'Regular Customer',
        rating: 5,
        text: 'I\'ve been coming to Birchmount Auto Repair for over two years. They always explain what needs to be done and never pressure you into extras.',
        path: '/testimonials',
    },
    {
        id: 3,
        image: testimonial3Img5,
        name: 'David L.',
        role: 'Local Business Owner',
        rating: 5,
        text: 'Fast turnaround on my fleet vehicles and fair rates every time. These guys are the real deal — highly recommend them to anyone in Scarborough.',
        path: '/testimonials',
    },
    {
        id: 4,
        image: testimonial3Img3,
        name: 'Sandra K.',
        role: 'First-Time Customer',
        rating: 5,
        text: 'Check engine light came on and I was nervous about the cost. They ran the diagnostics, gave me a clear report, and fixed it for a fair price. Will be back!',
        path: '/testimonials',
    },
];

const TestimonialsThree: React.FC = () => {
    return (
        <section className="testimonial-three">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h6 className="section-title__tagline">
                        <span className="section-title__tagline-border"></span>Testimonials
                    </h6>
                    <h3 className="section-title__title title-animation">
                        <TextAnimation> Clients Feedback About Their <br /> Experience With Us</TextAnimation>
                    </h3>
                </div>

                <div className="testimonial-three__carousel  ">
                    <Swiper
                        slidesPerView={3}
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        speed={1000}

                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 10 },
                            768: { slidesPerView: 2, spaceBetween: 20 },
                            992: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                    >
                        {testimonialItems.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="item">
                                    <div className="testimonial-three__single">
                                        <div className="testimonial-three__img-box">
                                            <div className="testimonial-three__img">
                                                <Image src={item.image} width={150} height={150} alt={item.name} />
                                            </div>
                                        </div>
                                        <div className="testimonial-three__content">
                                            <div className="testimonial-three__name-box">
                                                <h3>
                                                    <Link href={item.path}>{item.name}</Link>
                                                </h3>
                                                <p>{item.role}</p>
                                            </div>
                                            <div className="testimonial-three__ratting">
                                                {Array.from({ length: item.rating }).map((_, index) => (
                                                    <span key={index} className="fas fa-star"></span>
                                                ))}
                                            </div>
                                            <p className="testimonial-three__text">{item.text}</p>
                                        </div>
                                        <div className="testimonial-three__quote">
                                            <span className="icon-quote"></span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsThree;