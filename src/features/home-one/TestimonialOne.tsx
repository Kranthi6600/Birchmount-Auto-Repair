"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
const testimonialShape1 = "/assets/images/shapes/testimonial-one-shape-1.png";
const testimonialShape2 = "/assets/images/shapes/testimonial-one-shape-2.png";
const testimonialImg1 = "/assets/images/testimonial/testimonial-1-1.jpg";
const testimonialImg2 = "/assets/images/testimonial/testimonial-1-2.jpg";
const testimonialImg3 = "/assets/images/testimonial/testimonial-1-3.jpg";
import TextAnimation from '@/components/elements/TextAnimation';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string | StaticImageData;
    rating: number;
    text: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Maria Santos',
        role: 'Scarborough Resident',
        image: testimonialImg1,
        rating: 5,
        text: '"Brought my Civic in for brake trouble and was out the same afternoon. The team was upfront about the cost before touching anything. I won\'t go anywhere else."',
    },
    {
        id: 2,
        name: 'David Mensah',
        role: 'Ford F-150 Owner',
        image: testimonialImg2,
        rating: 5,
        text: '"Finally found an honest mechanic in Scarborough. They diagnosed my truck\'s engine issue in under an hour and fixed it for less than the dealer quoted. Highly recommend."',
    },
    {
        id: 3,
        name: 'Priya Sharma',
        role: 'Toyota Camry Owner',
        image: testimonialImg3,
        rating: 5,
        text: '"The team at Birchmount Auto Repair is friendly, fast, and fair. They explained everything clearly and had my car ready by end of day. Five stars, no question."',
    },
];

const TestimonialOne: React.FC = () => {
    return (
        <section className="testimonial-one">
            <div className="testimonial-one__bg" ></div>
            <div className="testimonial-one__shape-1 float-bob-x">
                <Image src={testimonialShape1} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="shape 1" />
            </div>
            <div className="testimonial-one__shape-2 float-bob-y">
                <Image src={testimonialShape2} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="shape 2" />
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h6 className="section-title__tagline">
                        <span className="section-title__tagline-border"></span>Testimonials
                    </h6>
                    <h3 className="section-title__title title-animation"><TextAnimation animationStyle='style2'>What Our Customer Says?</TextAnimation></h3>
                </div>
                <div className="testimonial-one__carousel  ">
                    <Swiper modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={2}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        speed={1000}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            992: {
                                slidesPerView: 2,
                            },
                        }}>


                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="item" >
                                    <div className="testimonial-one__single">
                                        <div className="testimonial-one__single-bdr"></div>
                                        <div className="testimonial-one__quote">
                                            <span className="fas fa-quote-right"></span>
                                        </div>
                                        <div className="testimonial-one__client-info-box">
                                            <div className="testimonial-one__client-info">
                                                <div className="testimonial-one__client-img-box">
                                                    <div className="testimonial-one__client-img">
                                                        <Image src={testimonial.image} width={80} height={80} alt={testimonial.name} />
                                                    </div>
                                                </div>
                                                <div className="testimonial-one__client-content">
                                                    <h3 className="testimonial-one__client-name">
                                                        <Link href="/testimonials">{testimonial.name}</Link>
                                                    </h3>
                                                    <p className="testimonial-one__client-sub-title">{testimonial.role}</p>
                                                </div>
                                            </div>
                                            <div className="testimonial-one__client-ratting">
                                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                    <span key={i} className="fas fa-star"></span>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="testimonial-one__text">{testimonial.text}</p>
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

export default TestimonialOne;