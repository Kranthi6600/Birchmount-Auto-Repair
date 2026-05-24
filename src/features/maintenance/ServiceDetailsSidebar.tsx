"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface ServiceLinkItem {
    id: number;
    label: string;
    path: string;
}

interface ContactItem {
    id: number;
    iconClass: string;
    content: React.ReactNode;
}


const serviceLinks: ServiceLinkItem[] = [
    { id: 1,  label: 'Auto Body Repair',        path: '/auto-body-repair' },
    { id: 2,  label: 'Collision Repair',         path: '/collision-repair' },
    { id: 3,  label: 'Mechanical Repair',        path: '/mechanical-repair' },
    { id: 4,  label: 'Certified Auto Repair',    path: '/certified-auto-repair' },
    { id: 5,  label: 'Insurance Claim Repairs',  path: '/insurance-claim-repairs' },
    { id: 6,  label: 'Paint & Dent Repair',      path: '/paint-dent-repair' },
    { id: 7,  label: 'Frame Straightening',      path: '/frame-straightening' },
    { id: 8,  label: 'Bumper Repair',            path: '/bumper-repair' },
    { id: 9,  label: 'Scratch & Dent Removal',   path: '/scratch-dent-removal' },
    { id: 10, label: 'Wheel Alignment',          path: '/wheel-alignment' },
    { id: 11, label: 'Suspension Repair',        path: '/suspension-repair' },
    { id: 12, label: 'Brake Service',            path: '/brake-service' },
    { id: 13, label: 'Engine Diagnostics',       path: '/engine-diagnostics' },
    { id: 14, label: 'Transmission Repair',      path: '/transmission-repair' },
    { id: 15, label: 'Hybrid Vehicle Repair',    path: '/hybrid-vehicle-repair' },
    { id: 16, label: 'Car Accident Repair',      path: '/car-accident-repair' },
    { id: 17, label: 'Windshield Replacement',   path: '/windshield-replacement' },
    { id: 18, label: 'Towing & Recovery',        path: '/towing-recovery' },
    { id: 19, label: 'OEM Parts Repair',         path: '/oem-parts-repair' },
    { id: 20, label: 'Complete Auto Care',       path: '/complete-auto-care' },
    { id: 21, label: 'Vehicle Maintenance',      path: '/vehicle-maintenance' },
    { id: 22, label: 'Car Paint Services',       path: '/car-paint-services' },
    { id: 23, label: 'Dent Removal',             path: '/dent-removal' },
    { id: 24, label: 'Auto Refinishing',         path: '/auto-refinishing' },
    { id: 25, label: 'Computer Diagnostics',     path: '/computer-diagnostics' },
    { id: 26, label: 'Full Service Garage',      path: '/full-service-garage' },
];

const contactItems: ContactItem[] = [
    {
        id: 1,
        iconClass: 'icon-call',
        content: <a href="tel:4167578368">0416.757.8368</a>,
    },
    {
        id: 2,
        iconClass: 'icon-envelope',
        content: <a href="mailto:birchmountautorepair@gmail.com">birchmountautorepair@gmail.com</a>,
    },
    {
        id: 3,
        iconClass: 'icon-location',
        content: (
            <>
                1064 Birchmount Rd,<br /> Scarborough, ON M1K 1S4
            </>
        ),
    },
];


const ServiceDetailsSidebar: React.FC = () => {
    const currentPath = usePathname();
    return (
        <div className="col-xl-4 col-lg-5">
            <div className="service-details__sidebar">

                {/* Our Services */}
                <div className="service-details__services-box">
                    <h3 className="service-details__services-title">Our Services</h3>
                    <ul className="service-details__services-list list-unstyled">
                        {serviceLinks.map((service) => (
                            <li key={service.id} className={service.path === currentPath ? 'active' : ''}>
                                <Link href={service.path}>
                                    {service.label}
                                    <span className="icon-arrow-right"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Get Started Today */}
                <div className="service-details__get-started">
                    <h3 className="service-details__get-started-title">Get Started Today</h3>
                    <p className="service-details__get-started-text">
                        Call us or send a message — we offer free estimates and same-day service on most repairs.
                    </p>
                    <ul className="service-details__get-started-points list-unstyled">
                        {contactItems.map((item) => (
                            <li key={item.id}>
                                <div className="icon">
                                    <span className={item.iconClass}></span>
                                </div>
                                <p>{item.content}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="service-details__get-started-btn-box">
                        <Link href="/contact" className="service-details__get-started-btn thm-btn">
                            Get In Touch
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ServiceDetailsSidebar;