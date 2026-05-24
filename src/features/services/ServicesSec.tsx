
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
        title: 'Auto Body Repair',
        text: 'From minor dings to major panel damage, our technicians restore your vehicle\'s exterior to factory condition using precision techniques and quality materials.',
        path: '/auto-body-repair',
        animationClass: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 2,
        iconClass: 'icon-affordable-price',
        subTitle: 'Service 02',
        title: 'Collision Repair',
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
        iconClass: 'icon-certified',
        subTitle: 'Service 04',
        title: 'Certified Auto Repair',
        text: 'Our certified technicians deliver factory-standard repairs backed by industry credentials, ensuring your vehicle meets manufacturer specifications every time.',
        path: '/certified-auto-repair',
        animationClass: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 5,
        iconClass: 'icon-medal',
        subTitle: 'Service 05',
        title: 'Insurance Claim Repairs',
        text: 'We work directly with all major insurance providers to handle your claim repairs seamlessly — from adjuster coordination to final delivery.',
        path: '/insurance-claim-repairs',
        animationClass: 'fadeInUp',
        animationDelay: 200,
    },
    {
        id: 6,
        iconClass: 'icon-services',
        subTitle: 'Service 06',
        title: 'Paint & Dent Repair',
        text: 'Professional paint restoration and dent correction combining colour-matched refinishing with paintless dent repair techniques for a flawless finish.',
        path: '/paint-dent-repair',
        animationClass: 'fadeInRight',
        animationDelay: 300,
    },
    {
        id: 7,
        iconClass: 'icon-product-return',
        subTitle: 'Service 07',
        title: 'Frame Straightening',
        text: 'Computerized frame measurement and hydraulic straightening equipment restores your vehicle\'s structural geometry to factory-precise tolerances after a collision.',
        path: '/frame-straightening',
        animationClass: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 8,
        iconClass: 'icon-damage',
        subTitle: 'Service 08',
        title: 'Bumper Repair',
        text: 'Cracked, scratched, or misaligned bumpers repaired or replaced with colour-matched refinishing and proper sensor recalibration where applicable.',
        path: '/bumper-repair',
        animationClass: 'fadeInUp',
        animationDelay: 200,
    },
    {
        id: 9,
        iconClass: 'icon-like',
        subTitle: 'Service 09',
        title: 'Scratch & Dent Removal',
        text: 'Surface scratches and shallow dents corrected with paintless dent repair or conventional filling and blending to leave no trace of damage.',
        path: '/scratch-dent-removal',
        animationClass: 'fadeInRight',
        animationDelay: 300,
    },
    {
        id: 10,
        iconClass: 'icon-setting',
        subTitle: 'Service 10',
        title: 'Wheel Alignment',
        text: 'Computer-aided four-wheel alignment corrects pulling, uneven tire wear, and handling issues — extending tire life and improving fuel efficiency.',
        path: '/wheel-alignment',
        animationClass: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 11,
        iconClass: 'icon-technician-1',
        subTitle: 'Service 11',
        title: 'Suspension Repair',
        text: 'Full suspension system diagnosis and repair covering shocks, struts, control arms, ball joints, and bushings to restore safe and comfortable handling.',
        path: '/suspension-repair',
        animationClass: 'fadeInUp',
        animationDelay: 200,
    },
    {
        id: 12,
        iconClass: 'icon-damage',
        subTitle: 'Service 12',
        title: 'Brake Service',
        text: 'Comprehensive brake inspections, pad and rotor replacements, caliper servicing, and fluid flushes — your vehicle\'s most critical safety system deserves the best.',
        path: '/brake-service',
        animationClass: 'fadeInRight',
        animationDelay: 300,
    },
    {
        id: 13,
        iconClass: 'icon-laptop',
        subTitle: 'Service 13',
        title: 'Engine Diagnostics',
        text: 'Advanced scan tools and expert analysis pinpoint check-engine faults, performance issues, and emissions problems quickly and accurately.',
        path: '/engine-diagnostics',
        animationClass: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 14,
        iconClass: 'icon-product-return',
        subTitle: 'Service 14',
        title: 'Transmission Repair',
        text: 'Fluid services, solenoid replacement, and complete transmission rebuilds performed by drivetrain specialists to keep your gears shifting smoothly.',
        path: '/transmission-repair',
        animationClass: 'fadeInUp',
        animationDelay: 200,
    },
    {
        id: 15,
        iconClass: 'icon-chirger',
        subTitle: 'Service 15',
        title: 'Hybrid Vehicle Repair',
        text: 'High-voltage trained technicians safely service hybrid and electric vehicle systems, including battery management, regenerative braking, and electric drive units.',
        path: '/hybrid-vehicle-repair',
        animationClass: 'fadeInRight',
        animationDelay: 300,
    },
    {
        id: 16,
        iconClass: 'icon-damage',
        subTitle: 'Service 16',
        title: 'Car Accident Repair',
        text: 'From safety inspection to final detail, we restore accident-damaged vehicles to pre-collision condition with structural, mechanical, and cosmetic repairs.',
        path: '/car-accident-repair',
        animationClass: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 17,
        iconClass: 'icon-affordable-price',
        subTitle: 'Service 17',
        title: 'Windshield Replacement',
        text: 'OEM-quality windshield installation with proper adhesive curing, seal testing, and ADAS camera recalibration to restore full visibility and structural integrity.',
        path: '/windshield-replacement',
        animationClass: 'fadeInUp',
        animationDelay: 200,
    },
    {
        id: 18,
        iconClass: 'icon-customer-support',
        subTitle: 'Service 18',
        title: 'Towing & Recovery',
        text: 'Professional towing and roadside recovery service to safely transport your disabled vehicle to our shop — available when you need it most.',
        path: '/towing-recovery',
        animationClass: 'fadeInRight',
        animationDelay: 300,
    },
    {
        id: 19,
        iconClass: 'icon-settings-1',
        subTitle: 'Service 19',
        title: 'OEM Parts Repair',
        text: 'We source and install genuine OEM parts to maintain your vehicle\'s warranty, ensure perfect fitment, and deliver repairs that meet factory standards.',
        path: '/oem-parts-repair',
        animationClass: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 20,
        iconClass: 'icon-certified',
        subTitle: 'Service 20',
        title: 'Complete Auto Care',
        text: 'A single trusted destination for every vehicle need — mechanical, body, paint, diagnostics, and maintenance all performed under one roof.',
        path: '/complete-auto-care',
        animationClass: 'fadeInUp',
        animationDelay: 200,
    },
    {
        id: 21,
        iconClass: 'icon-settings',
        subTitle: 'Service 21',
        title: 'Vehicle Maintenance',
        text: 'Scheduled maintenance services including oil changes, filter replacements, fluid top-ups, and multi-point inspections to keep your vehicle running reliably.',
        path: '/vehicle-maintenance',
        animationClass: 'fadeInRight',
        animationDelay: 300,
    },
    {
        id: 22,
        iconClass: 'icon-services',
        subTitle: 'Service 22',
        title: 'Car Paint Services',
        text: 'Professional automotive painting from spot repairs to full resprays — colour-matched with precision and finished with a durable clear coat for lasting protection.',
        path: '/car-paint-services',
        animationClass: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 23,
        iconClass: 'icon-like',
        subTitle: 'Service 23',
        title: 'Dent Removal',
        text: 'Hail damage, parking dings, and impact dents removed using paintless dent repair and conventional techniques to restore your vehicle\'s smooth finish.',
        path: '/dent-removal',
        animationClass: 'fadeInUp',
        animationDelay: 200,
    },
    {
        id: 24,
        iconClass: 'icon-settings-1',
        subTitle: 'Service 24',
        title: 'Auto Refinishing',
        text: 'Complete exterior refinishing services — from prep and priming through colour application and clear coat — delivering a showroom-quality finish.',
        path: '/auto-refinishing',
        animationClass: 'fadeInRight',
        animationDelay: 300,
    },
    {
        id: 25,
        iconClass: 'icon-laptop',
        subTitle: 'Service 25',
        title: 'Computer Diagnostics',
        text: 'Full-system OBD scanning across all vehicle modules identifies fault codes, performance anomalies, and hidden issues before they become costly repairs.',
        path: '/computer-diagnostics',
        animationClass: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 26,
        iconClass: 'icon-setting',
        subTitle: 'Service 26',
        title: 'Full Service Garage',
        text: 'Every service your vehicle needs — body, mechanical, paint, tires, and diagnostics — handled by one expert team with a consistent, documented service history.',
        path: '/full-service-garage',
        animationClass: 'fadeInUp',
        animationDelay: 200,
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
