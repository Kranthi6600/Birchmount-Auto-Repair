
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
        title: 'Brake Repair & Service',
        text: 'Your safety is our priority. We inspect, repair, and replace brake pads, rotors, calipers, and brake lines on all makes and models.',
        path: '/brake-repair',
        animationClass: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 2,
        iconClass: 'icon-chirger',
        subTitle: 'Service 02',
        title: 'Oil Change & Lube',
        text: 'Protect your engine with our fast and reliable oil change and full lubrication service using quality oils suited to your vehicle.',
        path: '/oil-change',
        animationClass: 'fadeInUp',
        animationDelay: 300,
    },
    {
        id: 3,
        iconClass: 'icon-laptop',
        subTitle: 'Service 03',
        title: 'Engine Diagnostics',
        text: 'Using advanced diagnostic equipment, we quickly identify and resolve engine issues to get your vehicle running smoothly and efficiently.',
        path: '/engine-diagnostics',
        animationClass: 'fadeInRight',
        animationDelay: 500,
    },
    {
        id: 4,
        iconClass: 'icon-settings',
        subTitle: 'Service 04',
        title: 'Transmission Service',
        text: 'From fluid flushes to full transmission rebuilds, our technicians have the expertise to keep your drivetrain in top condition.',
        path: '/transmission-service',
        animationClass: 'fadeInLeft',
        animationDelay: 700,
    },
    {
        id: 5,
        iconClass: 'icon-socket',
        subTitle: 'Service 05',
        title: 'Electrical Repair',
        text: 'We diagnose and repair complex automotive electrical issues including wiring, batteries, alternators, starters, and onboard computer systems.',
        path: '/electrical-repair',
        animationClass: 'fadeInUp',
        animationDelay: 900,
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