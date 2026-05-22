"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const servicesOneShape1 = "/assets/images/shapes/services-one-shape-1.png";
const servicesOneShape2 = "/assets/images/shapes/services-one-shape-2.png";
import TextAnimation from '@/components/elements/TextAnimation';
import SectionWrapper from '@/components/elements/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceItem {
    id: number;
    iconClass: string;
    title: string;
    to: string;
    text: string;
}

const serviceItems: ServiceItem[] = [
    {
        id: 1,
        iconClass: 'icon-setting',
        title: 'Brake Repair\n& Service',
        to: '/brake-repair',
        text: 'Pads, rotors, calipers, and brake fluid flushes — we keep your stopping power in top shape.',
    },
    {
        id: 2,
        iconClass: 'icon-services',
        title: 'Oil Change\n& Lube',
        to: '/oil-change',
        text: 'Quick, thorough oil and filter changes using quality conventional or synthetic oils.',
    },
    {
        id: 3,
        iconClass: 'icon-technician-1',
        title: 'Engine\nDiagnostics',
        to: '/engine-diagnostics',
        text: 'Advanced scan tools pinpoint check-engine issues fast so you\'re not guessing at the cause.',
    },
    {
        id: 4,
        iconClass: 'icon-product-return',
        title: 'Transmission\nService',
        to: '/transmission-service',
        text: 'Fluid changes, filter replacements, and full rebuild service to keep your drivetrain running smoothly.',
    },
    {
        id: 5,
        iconClass: 'icon-like',
        title: 'Tire Sales\n& Rotation',
        to: '/services',
        text: 'Balancing, rotation, and new-tire installation on all makes — get the grip you need year-round.',
    },
    {
        id: 6,
        iconClass: 'icon-affordable-price',
        title: 'Electrical\nRepair',
        to: '/electrical-repair',
        text: 'Batteries, alternators, starters, and wiring diagnosis — we trace and fix electrical faults accurately.',
    },
];

const ServiceOne: React.FC = () => {
    return (
        <SectionWrapper id='services' className="services-one">
            <div className="services-one__bg-color">
                <div className="services-one__bg"></div>
            </div>
            <div className="services-one__shape-1 float-bob-x">
                <Image src={servicesOneShape1} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="" />
            </div>
            <div className="services-one__shape-2 float-bob-y">
                <Image src={servicesOneShape2} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-5">
                        <div className="services-one__left">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <h6 className="section-title__tagline">
                                    <span className="section-title__tagline-border"></span>Our Services
                                </h6>
                                <h3 className="section-title__title title-animation">
                                    <TextAnimation animationStyle='style1'>
                                        Complete Auto Repair<br />Services in Scarborough
                                    </TextAnimation>
                                </h3>
                            </div>
                            <p className="services-one__text">
                                From routine maintenance to complex repairs, our certified technicians handle it all
                                with speed, honesty, and skill.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-7">
                        <div className="services-one__right">
                            <div className="services-one__carousel  ">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={30}
                                    loop={true}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false,
                                    }}
                                    speed={1000}
                                    modules={[Autoplay]}
                                    breakpoints={{
                                        0: { slidesPerView: 1, spaceBetween: 10 },
                                        768: { slidesPerView: 2, spaceBetween: 20 },
                                        992: { slidesPerView: 3, spaceBetween: 20 },
                                        1200: { slidesPerView: 4, spaceBetween: 20 },
                                    }}
                                >


                                    {serviceItems.map((service) => (
                                        <SwiperSlide key={service.id}>
                                            <div className="item" >
                                                <div className="services-one__single">
                                                    <div className="services-one__icon">
                                                        <span className={service.iconClass}></span>
                                                    </div>
                                                    <h3 className="services-one__title">
                                                        <Link href={service.to}>
                                                            {service.title.split('\n').map((line, i, arr) => (
                                                                <React.Fragment key={i}>
                                                                    {line}
                                                                    {i < arr.length - 1 && <br />}
                                                                </React.Fragment>
                                                            ))}
                                                        </Link>
                                                    </h3>
                                                    <p className="services-one__single-text">{service.text}</p>
                                                    <Link href={service.to} className="services-one__read-more">
                                                        Learn More<span className="icon-arrow-right"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ServiceOne;