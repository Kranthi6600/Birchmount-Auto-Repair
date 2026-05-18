"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
const testimonialImg1 = "/assets/images/testimonial/testimonial-2-1.jpg";
const testimonialImg2 = "/assets/images/testimonial/testimonial-2-2.jpg";
const testimonialImg3 = "/assets/images/testimonial/testimonial-2-3.jpg";
import TextAnimation from '@/components/elements/TextAnimation';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface TestimonialItem {
    id: number;
    image: string | StaticImageData;
    name: string;
    subTitle: string;
    text: string;
    to: string;
    starCount: number;
}

const testimonialItems: TestimonialItem[] = [
    {
        id: 1,
        image: testimonialImg1,
        name: 'Maria Santos',
        subTitle: 'Scarborough Resident',
        text: 'Brought my Civic in for brake trouble and was out the same afternoon. The team was upfront about the cost before touching anything. I won\'t go anywhere else.',
        to: '/testimonials',
        starCount: 5,
    },
    {
        id: 2,
        image: testimonialImg2,
        name: 'David Mensah',
        subTitle: 'Ford F-150 Owner',
        text: 'Finally found an honest mechanic in Scarborough. They diagnosed my truck\'s engine issue in under an hour and fixed it for less than the dealer quoted. Highly recommend.',
        to: '/testimonials',
        starCount: 5,
    },
    {
        id: 3,
        image: testimonialImg3,
        name: 'Priya Sharma',
        subTitle: 'Toyota Camry Owner',
        text: 'The team at Birchmount Auto Repair is friendly, fast, and fair. They explained everything clearly and had my car ready by end of day. Five stars, no question.',
        to: '/testimonials',
        starCount: 5,
    },
];

const TestimonialTwo: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    return (
        <section className="testimonial-two">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5">
                        <div className="testimonial-two__left">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <h6 className="section-title__tagline">
                                    <span className="section-title__tagline-border"></span>Testimonials
                                </h6>
                                <h3 className="section-title__title title-animation">
                                    <TextAnimation>What our client's says <br /> about our work.</TextAnimation>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7">
                        <div className="testimonial-two__right">
                            <div className="testimonial-two__carousel  ">
                                <Swiper modules={[Autoplay, Navigation]}
                                    spaceBetween={30}
                                    slidesPerView={2}
                                    loop={true}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: false,
                                    }}
                                    onSwiper={setSwiperInstance}
                                    speed={1000}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        992: {
                                            slidesPerView: 2,
                                        },
                                    }}>
                                    {testimonialItems.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div className="item" >
                                                <div className="testimonial-two__single">
                                                    <div className="testimonial-two__img">
                                                        <Image src={item.image} width={90} height={90} alt="" />
                                                        <div className="testimonial-two__rating">
                                                            {Array.from({ length: item.starCount }).map((_, index) => (
                                                                <span key={index} className="fas fa-star"></span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-two__client-info">
                                                        <div className="testimonial-two__client-content">
                                                            <h4 className="testimonial-two__client-name">
                                                                <Link href={item.to}>{item.name}</Link>
                                                            </h4>
                                                            <p className="testimonial-two__client-sub-title">{item.subTitle}</p>
                                                        </div>
                                                    </div>
                                                    <p className="testimonial-two__text">{item.text}</p>
                                                </div>
                                                <div className="testimonial-two__quote">
                                                    <span className="icon-quote"></span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="owl-nav">
                                    <button
                                        onClick={() => swiperInstance?.slidePrev()}
                                        type="button"
                                        role="presentation"
                                        className="owl-prev"
                                    >
                                        <span className="icon-arrow-right"></span>
                                    </button>
                                    <button
                                        onClick={() => swiperInstance?.slideNext()}
                                        type="button"
                                        role="presentation"
                                        className="owl-next"
                                    >
                                        <span className="icon-arrow-right"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialTwo;