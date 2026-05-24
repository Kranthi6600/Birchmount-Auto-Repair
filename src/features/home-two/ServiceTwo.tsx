"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
const servicesTwoShape1 = "/assets/images/shapes/services-two-shape-1.png";
const servicesImg1 = "/assets/images/services/serviceimg1.jpeg";
const servicesImg2 = "/assets/images/services/serviceimg2.jpeg";
const servicesImg3 = "/assets/images/services/enginediagnostics.jpeg";
const servicesImg4 = "/assets/images/services/serviceimg4.jpeg";
const servicesImg5 = "/assets/images/services/serviceimg5.jpeg";
const servicesImg6 = "/assets/images/services/brakeandrepair.jpeg";
const servicesImg7 = "/assets/images/services/transmissionservice.jpeg";
const servicesImg8 = "/assets/images/services/serviceimg7.jpeg";
import TextAnimation from '@/components/elements/TextAnimation';
import SectionWrapper from '@/components/elements/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceItem {
    id: number;
    image: string;
    iconClass: string;
    title: string;
    to: string;
    hoverText: string;
}

const serviceItems: ServiceItem[] = [
    {
        id: 1,
        image: servicesImg1,
        iconClass: 'icon-damage',
        title: 'Auto Body Repair',
        to: '/auto-body-repair',
        hoverText: 'From minor dings to major panel damage, we restore your vehicle\'s exterior to factory condition.',
    },
    {
        id: 2,
        image: servicesImg2,
        iconClass: 'icon-affordable-price',
        title: 'Collision Repair',
        to: '/collision-repair',
        hoverText: 'Complete structural and cosmetic collision restoration to get your vehicle back to pre-accident condition.',
    },
    {
        id: 3,
        image: servicesImg3,
        iconClass: 'icon-laptop',
        title: 'Engine Diagnostics',
        to: '/engine-diagnostics',
        hoverText: 'Advanced scan tools pinpoint check-engine issues fast so you\'re not guessing at the cause.',
    },
    {
        id: 4,
        image: servicesImg4,
        iconClass: 'icon-services',
        title: 'Car Paint Services',
        to: '/car-paint-services',
        hoverText: 'Colour-matched paint services from spot repairs to full resprays with a lasting clear-coat finish.',
    },
    {
        id: 5,
        image: servicesImg5,
        iconClass: 'icon-medal',
        title: 'Insurance Claim Repairs',
        to: '/insurance-claim-repairs',
        hoverText: 'We work directly with your insurer — handling paperwork and adjuster coordination from start to finish.',
    },
    {
        id: 6,
        image: servicesImg6,
        iconClass: 'icon-damage',
        title: 'Brake Service',
        to: '/brake-service',
        hoverText: 'Pads, rotors, calipers, and fluid flushes — we keep your vehicle\'s most critical safety system in top shape.',
    },
    {
        id: 7,
        image: servicesImg7,
        iconClass: 'icon-product-return',
        title: 'Transmission Repair',
        to: '/transmission-repair',
        hoverText: 'Fluid changes, solenoid repairs, and full rebuilds to keep your drivetrain shifting smoothly.',
    },
    {
        id: 8,
        image: servicesImg8,
        iconClass: 'icon-settings',
        title: 'Vehicle Maintenance',
        to: '/vehicle-maintenance',
        hoverText: 'Scheduled maintenance services that protect your vehicle\'s reliability and preserve manufacturer warranty.',
    },
];

const ServiceTwo: React.FC = () => {
    return (
        <SectionWrapper id='services' className="services-two">
            <div className="services-two__bg-color">
                <div className="services-two__shape-1">
                    <Image src={servicesTwoShape1} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="" />
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
                                                <img src={service.image as string} alt="" />
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