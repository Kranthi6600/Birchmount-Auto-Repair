
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
        iconClass: 'icon-socket',
        subTitle: 'Service Type 1',
        title: 'Electric Repair',
        text: 'The wise man therefore always desi holds in these matters electri to this of principle selection',
        path: '/electric-panel-repair',
        animationClass: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 2,
        iconClass: 'icon-ceiling-lamp',
        subTitle: 'Service Type 2',
        title: 'Lighting & Fixtures',
        text: 'The wise man therefore always desi holds in these matters electri to this of principle selection',
        path: '/lighting-fixtures',
        animationClass: 'fadeInUp',
        animationDelay: 300,
    },
    {
        id: 3,
        iconClass: 'icon-ceiling-lamp-2',
        subTitle: 'Service Type 3',
        title: 'Maintenance Service',
        text: 'The wise man therefore always desi holds in these matters electri to this of principle selection',
        path: '/maintenance-service',
        animationClass: 'fadeInRight',
        animationDelay: 500,
    },
    {
        id: 4,
        iconClass: 'icon-laptop',
        subTitle: 'Service Type 4',
        title: 'Laptop & P/C Repair',
        text: 'The wise man therefore always desi holds in these matters electri to this of principle selection',
        path: '/commercial-services',
        animationClass: 'fadeInLeft',
        animationDelay: 700,
    },
    {
        id: 5,
        iconClass: 'icon-ac1',
        subTitle: 'Service Type 5',
        title: 'A/C Installation',
        text: 'The wise man therefore always desi holds in these matters electri to this of principle selection',
        path: '/installing-ceiling-fan',
        animationClass: 'fadeInUp',
        animationDelay: 900,
    },
    {
        id: 6,
        iconClass: 'icon-air-conditioning',
        subTitle: 'Service Type 6',
        title: 'Heating Service',
        text: 'The wise man therefore always desi holds in these matters electri to this of principle selection',
        path: '/short-circuit-repair',
        animationClass: 'fadeInRight',
        animationDelay: 1000,
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
                            className={`col-xl-4 col-lg-4`}
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