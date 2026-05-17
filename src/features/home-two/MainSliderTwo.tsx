"use client";

import React, { useState } from 'react';
import shapeOne from "@/assets/images/shapes/main-slider-two-shape-1.png"
import slideImg from "@/assets/images/resources/main-slider-two-img-1-1.jpg"
import slideImgSmall from "@/assets/images/resources/main-slider-two-small-img-1-1.jpg"

import slideImgTwo from "@/assets/images/resources/main-slider-two-img-1-2.jpg"
import slideImgSmallTwo from "@/assets/images/resources/main-slider-two-small-img-1-2.jpg"

import slideImgThree from "@/assets/images/resources/main-slider-two-img-1-3.jpg"
import slideImgSmallThree from "@/assets/images/resources/main-slider-two-small-img-1-3.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import useBirchmountAutoRepairContext from '@/components/context/useBirchmountAutoRepairContext';
import SectionWrapper from '@/components/elements/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';

const MainSliderTwo: React.FC = () => {
    const { handleVideoClick } = useBirchmountAutoRepairContext();
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleVideo = (e: React.MouseEvent<HTMLAnchorElement>) => {
        handleVideoClick(e, "https://www.youtube.com/watch?v=Get7rqXYrbQ");
    }
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
                                <Image src={shapeOne} style={{ width: "auto", height: "auto" }} alt="image" className="float-bob-x" />
                            </div>
                            <div className="main-slider-two__img">
                                <Image src={slideImg} style={{ width: "auto", height: "auto" }} alt="image" />
                            </div>
                            <div className="main-slider-two__small-img">
                                <Image src={slideImgSmall} style={{ width: "auto", height: "auto" }} alt="image" />
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
                                        <div className="main-slider-two__video-link">
                                            <Link href="#" onClick={handleVideo} className="video-popup">
                                                <div className="main-slider-two__video-icon">
                                                    <span className="fa fa-play"></span>
                                                    <i className="ripple"></i>
                                                </div>
                                            </Link>
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
                                <Image src={shapeOne} style={{ width: "auto", height: "auto" }} alt="image" className="float-bob-x" />
                            </div>
                            <div className="main-slider-two__img">
                                <Image src={slideImgTwo} style={{ width: "auto", height: "auto" }} alt="image" />
                            </div>
                            <div className="main-slider-two__small-img">
                                <Image src={slideImgSmallTwo} style={{ width: "auto", height: "auto" }} alt="image" />
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
                                        <div className="main-slider-two__video-link">
                                            <Link href="#" onClick={handleVideo} className="video-popup">
                                                <div className="main-slider-two__video-icon">
                                                    <span className="fa fa-play"></span>
                                                    <i className="ripple"></i>
                                                </div>
                                            </Link>
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
                                <Image src={shapeOne} style={{ width: "auto", height: "auto" }} alt="image" className="float-bob-x" />
                            </div>
                            <div className="main-slider-two__img">
                                <Image src={slideImgThree} style={{ width: "auto", height: "auto" }} alt="image" />
                            </div>
                            <div className="main-slider-two__small-img">
                                <Image src={slideImgSmallThree} style={{ width: "auto", height: "auto" }} alt="image" />
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
                                        <div className="main-slider-two__video-link">
                                            <Link href="#" onClick={handleVideo} className="video-popup">
                                                <div className="main-slider-two__video-icon">
                                                    <span className="fa fa-play"></span>
                                                    <i className="ripple"></i>
                                                </div>
                                            </Link>
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