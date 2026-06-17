
import FadeInAdvanced, { AnimationVariant } from '@/components/elements/FadeInAdvanced';
import Link from 'next/link';
import React from 'react';

interface ServiceItem {
    id: number;
    iconClass: string;
    subTitle: string;
    title: string;
    text: string;
    path: string;
    animationClass: AnimationVariant;
    animationDelay: number;
}

const servicesData: ServiceItem[] = [
    {
        id: 1,
        iconClass: 'icon-damage',
        subTitle: 'Service 01',
        title: 'Complete Auto Body Repair',
        text: 'From minor dings to major panel damage, our skilled technicians restore your vehicle\'s exterior to factory condition using proven repair techniques and quality materials.',
        path: '/complete-auto-body-repair',
        animationClass: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 2,
        iconClass: 'icon-affordable-price',
        subTitle: 'Service 02',
        title: 'Collision Repairs',
        text: 'Complete collision restoration covering structural repairs, panel replacement, and refinishing — getting your vehicle back to pre-accident condition safely.',
        path: '/collision-repair',
        animationClass: 'fadeInUp',
        animationDelay: 200,
    },
    {
        id: 3,
        iconClass: 'icon-settings',
        subTitle: 'Service 03',
        title: 'Mechanical Repair',
        text: 'Full-service mechanical repairs on all makes and models — from engine and drivetrain work to cooling systems, fuel systems, and beyond.',
        path: '/mechanical-repair',
        animationClass: 'fadeInRight',
        animationDelay: 300,
    },
    {
        id: 4,
        iconClass: 'icon-customer-support',
        subTitle: 'Service 04',
        title: 'Towing & Roadside Assistance',
        text: 'Professional towing and roadside recovery service to safely transport your disabled vehicle to our shop — available when you need it most.',
        path: '/towing-roadside-assistance',
        animationClass: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 5,
        iconClass: 'icon-medal',
        subTitle: 'Service 05',
        title: 'Insurance',
        text: 'We work directly with all major insurance providers to handle your claim repairs seamlessly — from adjuster coordination to final delivery.',
        path: '/insurance',
        animationClass: 'fadeInUp',
        animationDelay: 200,
    },
    {
        id: 6,
        iconClass: 'icon-certified',
        subTitle: 'Service 06',
        title: 'Rentals',
        text: 'Convenient rental vehicle options to keep you on the road while your vehicle is being repaired at our facility.',
        path: '/rentals',
        animationClass: 'fadeInRight',
        animationDelay: 300,
    },
];

const ServicesSec: React.FC = () => {
    return (
        <section className="services-page">
            <div className="container">
                <div className="row">
                    {servicesData.map((service) => (
                        <FadeInAdvanced
                            key={service.id}
                            className={`col-xl-6 col-lg-6`}
                            variant={service.animationClass}
                            delay={service.animationDelay}
                        >
                            <div className="services-three__single">
                                <div className="services-three__icon">
                                    <span className={service.iconClass}></span>
                                </div>
                                <p className="services-three__sub-title">{service.subTitle}</p>
                                <h3 className="services-three__title">
                                    <Link href={service.path}>{service.title}</Link>
                                </h3>
                                <p className="services-three__text">{service.text}</p>
                                <Link href={service.path} className="services-three__learn-more">
                                    Learn More<span className="icon-arrow-right"></span>
                                </Link>
                            </div>
                        </FadeInAdvanced>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSec;
