"use client";

import FadeInAdvanced, { AnimationVariant } from '@/components/elements/FadeInAdvanced';
import Link from 'next/link';
import React from 'react';
import { useServices } from '@/hooks/useServices';
import type { ApiService } from '@/lib/api';
import { stripHtml } from '@/lib/api';

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

function mapApiServiceToItem(service: ApiService, index: number): ServiceItem {
    const defaultIcons = [
        'icon-damage', 'icon-affordable-price', 'icon-settings',
        'icon-customer-support', 'icon-medal', 'icon-certified',
    ];
    const defaultAnimations: AnimationVariant[] = ['fadeInLeft', 'fadeInUp', 'fadeInRight'];
    return {
        id: index + 1,
        iconClass: defaultIcons[index % defaultIcons.length],
        subTitle: `Service 0${index + 1}`,
        title: service.title,
        text: stripHtml(service.description),
        path: `/services/${service.slug}`,
        animationClass: defaultAnimations[index % defaultAnimations.length],
        animationDelay: ((index % 3) + 1) * 100,
    };
}

const ServicesSec: React.FC = () => {
    const { data: apiServices, isLoading } = useServices();

    const items: ServiceItem[] = React.useMemo(() => {
        if (!apiServices) return [];
        return apiServices.map((s, i) => mapApiServiceToItem(s, i));
    }, [apiServices]);

    if (isLoading) {
        return (
            <section className="services-page">
                <div className="container">
                    <div className="row">
                        {[1, 2, 3, 4].map((n) => (
                            <div key={n} className="col-xl-6 col-lg-6">
                                <div className="services-three__single" style={{ minHeight: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (!apiServices || apiServices.length === 0) {
        return (
            <section className="services-page">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center py-5">
                            <h3>No services available</h3>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="services-page">
            <div className="container">
                <div className="row">
                    {items.map((service) => (
                        <FadeInAdvanced
                            key={service.id}
                            className={`col-xl-6 col-lg-6`}
                            variant={service.animationClass}
                            delay={service.animationDelay}
                        >
                            <div className="services-three__single" style={{ height: '390px' }}>
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
