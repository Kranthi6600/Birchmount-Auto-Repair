"use client";

import React, { useState } from 'react';
const shape = "/assets/images/shapes/main-slider-shape-1.png"
const shapeTwo = "/assets/images/shapes/main-slider-shape-2.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import useBirchmountAutoRepairContext from '@/components/context/useBirchmountAutoRepairContext';
import SectionWrapper from '@/components/elements/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
const MainSlider: React.FC = () => {
    const { handleVideoClick } = useBirchmountAutoRepairContext();
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <SectionWrapper id='home' className="main-slider" >
            <div className="main-slider__carousel  ">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
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
                            <div className="main-slider__shape-bg" ></div>
                            <div className="main-slider__shape-1 float-bob-x">
                                <Image src={shape} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="shapeImage" />
                            </div>
                            <div className="main-slider__shape-2 float-bob-y">
                                <Image src={shapeTwo} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="shapeImage" />
                            </div>
                            <div className="main-slider__bg-box">
                                <div className="main-slider__bg one" >
                                </div>
                            </div>
                            <div className="container">
                                <div className="main-slider__content">
                                    <div className="main-slider__sub-title-box">
                                        <div className="main-slider__sub-title-shape"></div>
                                        <p className="main-slider__sub-title">Scarborough&apos;s Trusted Auto Repair Shop</p>
                                    </div>
                                    <h2 className="main-slider__title">Expert Auto <span>Repairs</span> for <br /> <span>Every Vehicle</span>
                                    </h2>
                                    <p className="main-slider__text">Honest estimates, certified technicians, and fast turnaround — <br /> right here in Scarborough. Call us at (416) 757-8368.</p>
                                    <div className="main-slider__btn-box">
                                        <div className="main-slider__btn">
                                            <Link href="/contact" className="thm-btn">Book an Appointment <span
                                                className="icon-arrow-right"></span></Link>
                                        </div>
                                        <div className="main-slider__video-link">
                                            <Link href="#" onClick={(e) => handleVideoClick(e, "https://www.youtube.com/watch?v=Get7rqXYrbQ")} className="video-popup">
                                                <div className="main-slider__video-icon">
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
                            <div className="main-slider__shape-bg" ></div>
                            <div className="main-slider__shape-1 float-bob-x">
                                <Image src={shape} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="shapeImage" />
                            </div>
                            <div className="main-slider__shape-2 float-bob-y">
                                <Image src={shapeTwo} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="shapeImage" />
                            </div>
                            <div className="main-slider__bg-box">
                                <div className="main-slider__bg two" >
                                </div>
                            </div>
                            <div className="container">
                                <div className="main-slider__content">
                                    <div className="main-slider__sub-title-box">
                                        <div className="main-slider__sub-title-shape"></div>
                                        <p className="main-slider__sub-title">Quality Repairs. Fair Prices. Zero Surprises.</p>
                                    </div>
                                    <h2 className="main-slider__title">Get Back on the <br /> Road <span>Fast</span></h2>
                                    <p className="main-slider__text">From brake jobs to full engine diagnostics, we get you back on the road <br /> without the dealership markup.</p>
                                    <div className="main-slider__btn-box">
                                        <div className="main-slider__btn">
                                            <Link href="/services" className="thm-btn">View Our Services <span
                                                className="icon-arrow-right"></span></Link>
                                        </div>
                                        <div className="main-slider__video-link">
                                            <Link href="#" onClick={(e) => handleVideoClick(e, "https://www.youtube.com/watch?v=Get7rqXYrbQ")} className="video-popup">
                                                <div className="main-slider__video-icon">
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
                            <div className="main-slider__shape-bg" ></div>
                            <div className="main-slider__shape-1 float-bob-x">
                                <Image src={shape} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="shapeImage" />
                            </div>
                            <div className="main-slider__shape-2 float-bob-y">
                                <Image src={shapeTwo} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="shapeImage" />
                            </div>
                            <div className="main-slider__bg-box">
                                <div className="main-slider__bg three" >
                                </div>
                            </div>
                            <div className="container">
                                <div className="main-slider__content">
                                    <div className="main-slider__sub-title-box">
                                        <div className="main-slider__sub-title-shape"></div>
                                        <p className="main-slider__sub-title">Serving Scarborough Drivers Since Day One</p>
                                    </div>
                                    <h2 className="main-slider__title">Trusted Mechanics <br /> Your <span>Neighbours Rely On</span></h2>
                                    <p className="main-slider__text">We stand behind every repair with a service warranty and <br /> straightforward pricing — no surprises, no upsells.</p>
                                    <div className="main-slider__btn-box">
                                        <div className="main-slider__btn">
                                            <Link href="/contact" className="thm-btn">Get a Free Estimate <span
                                                className="icon-arrow-right"></span></Link>
                                        </div>
                                        <div className="main-slider__video-link">
                                            <Link href="#" onClick={(e) => handleVideoClick(e, "https://www.youtube.com/watch?v=Get7rqXYrbQ")} className="video-popup">
                                                <div className="main-slider__video-icon">
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

export default MainSlider;