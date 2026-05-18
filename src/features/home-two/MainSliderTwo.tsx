"use client";

import React, { useState } from 'react';
const shapeOne = "/assets/images/shapes/main-slider-two-shape-1.png"
const slideImg = "/assets/images/banner-pop/pop1.jpeg"
const slideImgSmall = "/assets/images/banner-pop/model1.jpeg"

const slideImgTwo = "/assets/images/banner-pop/pop2.jpeg"
const slideImgSmallTwo = "/assets/images/banner-pop/model2.jpeg"

const slideImgThree = "/assets/images/banner-pop/pop3.jpeg"
const slideImgSmallThree = "/assets/images/banner-pop/model3.jpeg"

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import useBirchmountAutoRepairContext from '@/components/context/useBirchmountAutoRepairContext';
import SectionWrapper from '@/components/elements/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';

const MainSliderTwo: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <SectionWrapper id='home' className="main-slider-two">
            <div className="main-slider-two__carousel  ">
                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={1000}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onSwiper={setSwiperInstance}
                >

                    <SwiperSlide>
                        <div className={`item ${activeIndex === 0 ? 'active' : ''}`}>
                            <div className="main-slider-two__bg one" >
                            </div>
                            <div className="main-slider-two__overly"></div>
                            <div className="main-slider-two__shape-1">
                                <Image src={shapeOne} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="image" className="float-bob-x" />
                            </div>
                            <div className="main-slider-two__img">
                                <img src={slideImg} alt="image" />
                            </div>
                            <div className="main-slider-two__small-img">
                                <img src={slideImgSmall} alt="image" />
                            </div>
                            <div className="container">
                                <div className="main-slider-two__content">
                                    <div className="main-slider-two__sub-title-box">
                                        <div className="main-slider-two__sub-title-shape"></div>
                                        <p className="main-slider-two__sub-title">Scarborough&apos;s Trusted Auto Repair Shop</p>
                                    </div>
                                    <h2 className="main-slider-two__title">Expert Auto <span>Repairs</span> <br /> You Can Count On
                                    </h2>
                                    <p className="main-slider-two__text">Honest estimates, certified technicians, and fast turnaround
                                        — right here in Scarborough. <br /> Call us at (416) 757-8368.</p>
                                    <div className="main-slider-two__btn-box">
                                        <div className="main-slider-two__btn">
                                            <Link href="/contact" className="thm-btn">Book an Appointment <span
                                                className="icon-arrow-right"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`item ${activeIndex === 1 ? 'active' : ''}`}>
                            <div className="main-slider-two__bg two" >
                            </div>
                            <div className="main-slider-two__overly"></div>
                            <div className="main-slider-two__shape-1">
                                <Image src={shapeOne} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="image" className="float-bob-x" />
                            </div>
                            <div className="main-slider-two__img">
                                <img src={slideImgTwo} alt="image" />
                            </div>
                            <div className="main-slider-two__small-img">
                                <img src={slideImgSmallTwo} alt="image" />
                            </div>
                            <div className="container">
                                <div className="main-slider-two__content">
                                    <div className="main-slider-two__sub-title-box">
                                        <div className="main-slider-two__sub-title-shape"></div>
                                        <p className="main-slider-two__sub-title">Quality Repairs. Fair Prices. Zero Surprises.</p>
                                    </div>
                                    <h2 className="main-slider-two__title">Get Back on the <br /> Road <span>Fast</span>
                                    </h2>
                                    <p className="main-slider-two__text">From brake jobs to full engine diagnostics, we get you back
                                        on the road <br /> without the dealership markup.</p>
                                    <div className="main-slider-two__btn-box">
                                        <div className="main-slider-two__btn">
                                            <Link href="/services" className="thm-btn">View Our Services <span
                                                className="icon-arrow-right"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`item ${activeIndex === 2 ? 'active' : ''}`}>
                            <div className="main-slider-two__bg three" >
                            </div>
                            <div className="main-slider-two__overly"></div>
                            <div className="main-slider-two__shape-1">
                                <Image src={shapeOne} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="image" className="float-bob-x" />
                            </div>
                            <div className="main-slider-two__img">
                                <img src={slideImgThree} alt="image" />
                            </div>
                            <div className="main-slider-two__small-img">
                                <img src={slideImgSmallThree} alt="image" />
                            </div>
                            <div className="container">
                                <div className="main-slider-two__content">
                                    <div className="main-slider-two__sub-title-box">
                                        <div className="main-slider-two__sub-title-shape"></div>
                                        <p className="main-slider-two__sub-title">Serving Scarborough Drivers Since Day One</p>
                                    </div>
                                    <h2 className="main-slider-two__title">Trusted Mechanics <br />
                                        Your <span>Neighbours Rely On</span>
                                    </h2>
                                    <p className="main-slider-two__text">We stand behind every repair with a service warranty and
                                        straightforward pricing — <br /> no surprises, no upsells.</p>
                                    <div className="main-slider-two__btn-box">
                                        <div className="main-slider-two__btn">
                                            <Link href="/contact" className="thm-btn">Get a Free Estimate <span className="icon-arrow-right"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
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
        </SectionWrapper>
    );
};

export default MainSliderTwo;