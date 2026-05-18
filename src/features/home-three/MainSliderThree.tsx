"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
const shape1 = "/assets/images/shapes/main-slider-three-shape-1.png"
const shape2 = "/assets/images/shapes/main-slider-three-shape-2.png"
import useBirchmountAutoRepairContext from '@/components/context/useBirchmountAutoRepairContext';
import SectionWrapper from '@/components/elements/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
const MainSliderThree: React.FC = () => {
    const { handleVideoClick } = useBirchmountAutoRepairContext();
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <SectionWrapper id='home' className="main-slider-three">
            <div className="main-slider-three__carousel  ">
                <Swiper
                    modules={[Pagination, Autoplay, EffectFade]}
                    spaceBetween={0}
                    effect="fade"
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={1000}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    <SwiperSlide>
                        <div className={`item ${activeIndex === 0 ? 'active' : ''}`}>
                            <div className="main-slider-three__bg one" >
                            </div>
                            <div className="main-slider-three__overly"></div>
                            <div className="main-slider-three__shape-1">
                                <Image src={shape1} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="image" className="float-bob-x" />
                            </div>
                            <div className="main-slider-three__shape-2">
                                <Image src={shape2} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="image" className="float-bob-x" />
                            </div>
                            <div className="container">
                                <div className="main-slider-three__content">
                                    <p className="main-slider-three__sub-title">Welcome to Birchmount Auto Repair Quality Repairs Services</p>
                                    <h2 className="main-slider-three__title">Lighting the Way to <br />
                                        <span>Quality Repairs</span></h2>
                                    <p className="main-slider-three__text">We honestly want our clients to succeed online in their
                                        fields.
                                        We create them high-end websites <br /> that stand out on their market, be seen and
                                        memorized
                                        as a benchmark in what they do.</p>
                                    <div className="main-slider-three__btn-box">
                                        <Link href="/about" className="thm-btn">Discover More <span
                                            className="icon-arrow-right"></span></Link>
                                    </div>
                                    <div className="main-slider-three__video-link">
                                        <Link href="#" onClick={(e) => handleVideoClick(e, "https://www.youtube.com/watch?v=Get7rqXYrbQ")} className="video-popup">
                                            <div className="main-slider-three__video-icon">
                                                <span className="fa fa-play"></span>
                                                <i className="ripple"></i>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`item ${activeIndex === 1 ? 'active' : ''}`}>
                            <div className="main-slider-three__bg two" >
                            </div>
                            <div className="main-slider-three__overly"></div>
                            <div className="main-slider-three__shape-1">
                                <Image src={shape1} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="image" className="float-bob-x" />
                            </div>
                            <div className="main-slider-three__shape-2">
                                <Image src={shape2} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="image" className="float-bob-x" />
                            </div>
                            <div className="container">
                                <div className="main-slider-three__content">
                                    <p className="main-slider-three__sub-title">Welcome to Birchmount Auto Repair Quality Repairs Services</p>
                                    <h2 className="main-slider-three__title">Your Brightest <br />
                                        Choice <span>in Repairs</span></h2>
                                    <p className="main-slider-three__text">We honestly want our clients to succeed online in their
                                        fields.
                                        We create them high-end websites <br /> that stand out on their market, be seen and
                                        memorized
                                        as a benchmark in what they do.</p>
                                    <div className="main-slider-three__btn-box">
                                        <Link href="/about" className="thm-btn">Discover More <span
                                            className="icon-arrow-right"></span></Link>
                                    </div>
                                    <div className="main-slider-three__video-link">
                                        <Link href="#" onClick={(e) => handleVideoClick(e, "https://www.youtube.com/watch?v=Get7rqXYrbQ")} className="video-popup">
                                            <div className="main-slider-three__video-icon">
                                                <span className="fa fa-play"></span>
                                                <i className="ripple"></i>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`item ${activeIndex === 2 ? 'active' : ''}`}>
                            <div className="main-slider-three__bg three" >
                            </div>
                            <div className="main-slider-three__overly"></div>
                            <div className="main-slider-three__shape-1">
                                <Image src={shape1} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="image" className="float-bob-x" />
                            </div>
                            <div className="main-slider-three__shape-2">
                                <Image src={shape2} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="image" className="float-bob-x" />
                            </div>
                            <div className="container">
                                <div className="main-slider-three__content">
                                    <p className="main-slider-three__sub-title">Welcome to Birchmount Auto Repair Quality Repairs Services</p>
                                    <h2 className="main-slider-three__title">General Auto <span>Repair Service</span> <br />
                                        This Maintenance Place</h2>
                                    <p className="main-slider-three__text">We honestly want our clients to succeed online in their
                                        fields.
                                        We create them high-end websites <br /> that stand out on their market, be seen and
                                        memorized
                                        as a benchmark in what they do.</p>
                                    <div className="main-slider-three__btn-box">
                                        <Link href="/about" className="thm-btn">Discover More <span
                                            className="icon-arrow-right"></span></Link>
                                    </div>
                                    <div className="main-slider-three__video-link">
                                        <Link href="#" onClick={(e) => handleVideoClick(e, "https://www.youtube.com/watch?v=Get7rqXYrbQ")} className="video-popup">
                                            <div className="main-slider-three__video-icon">
                                                <span className="fa fa-play"></span>
                                                <i className="ripple"></i>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </SectionWrapper >
    );
};

export default MainSliderThree;