"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import servicesTwoShape1 from '@/assets/images/shapes/services-two-shape-1.png';
import servicesImg1 from '@/assets/images/services/services-1-1.jpg';
import servicesImg2 from '@/assets/images/services/services-1-2.jpg';
import servicesImg3 from '@/assets/images/services/services-1-3.jpg';
import servicesImg4 from '@/assets/images/services/services-1-4.jpg';
import servicesImg5 from '@/assets/images/services/services-1-5.jpg';
import TextAnimation from '@/components/elements/TextAnimation';
import SectionWrapper from '@/components/elements/SectionWrapper';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ServiceItem {
    id: number;
    image: string | StaticImageData;
    iconClass: string;
    title: string;
    to: string;
    hoverText: string;
}

const serviceItems: ServiceItem[] = [
    {
        id: 1,
        image: servicesImg1,
        iconClass: 'icon-setting',
        title: 'Brake Repair & Service',
        to: '/services',
        hoverText: 'Pads, rotors, calipers, and brake fluid flushes — we keep your stopping power in top shape.',
    },
    {
        id: 2,
        image: servicesImg2,
        iconClass: 'icon-services',
        title: 'Oil Change & Lube',
        to: '/services',
        hoverText: 'Quick, thorough oil and filter changes using quality conventional or synthetic oils.',
    },
    {
        id: 3,
        image: servicesImg3,
        iconClass: 'icon-technician-1',
        title: 'Engine Diagnostics',
        to: '/services',
        hoverText: 'Advanced scan tools pinpoint check-engine issues fast so you\'re not guessing at the cause.',
    },
    {
        id: 4,
        image: servicesImg4,
        iconClass: 'icon-customer-support',
        title: 'Transmission Service',
        to: '/services',
        hoverText: 'Fluid changes, filter replacements, and rebuild service to keep your drivetrain running smoothly.',
    },
    {
        id: 5,
        image: servicesImg5,
        iconClass: 'icon-settings-1',
        title: 'Electrical Repair',
        to: '/services',
        hoverText: 'Batteries, alternators, starters, and wiring diagnosis — we trace and fix electrical faults accurately.',
    },
];

const ServiceTwo: React.FC = () => {
    return (
        <SectionWrapper id='services' className="services-two">
            <div className="services-two__bg-color">
                <div className="services-two__shape-1">
                    <Image src={servicesTwoShape1} style={{ width: "auto", height: "auto" }} alt="" />
                </div>
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h6 className="section-title__tagline">
                        <span className="section-title__tagline-border"></span>Our Service
                    </h6>
                    <h3 className="section-title__title title-animation">
                        <TextAnimation>Complete Auto Repair Services <br /> in Scarborough</TextAnimation>
                    </h3>
                </div>
                <div className="services-two__carousel  ">
                    <Swiper
                        slidesPerView={3}
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
                            1200: { slidesPerView: 3, spaceBetween: 20 },
                        }}
                    >
                        {serviceItems.map((service) => (
                            <SwiperSlide key={service.id}>
                                <div className="item" >
                                    <div className="services-two__single">
                                        <div className="services-two__img-box">
                                            <div className="services-two__img">
                                                <Image src={service.image} width={355} height={253} alt="" />
                                            </div>
                                            <div className="services-two__hover-content">
                                                <p className="services-two__hover-text">{service.hoverText}</p>
                                                <div className="services-two__btn-box">
                                                    <Link href={service.to} className="thm-btn">
                                                        read more
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="services-two__icon">
                                                <span className={service.iconClass}></span>
                                            </div>
                                        </div>
                                        <div className="services-two__content">
                                            <h3 className="services-two__title">
                                                <Link href={service.to}>{service.title}</Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ServiceTwo;