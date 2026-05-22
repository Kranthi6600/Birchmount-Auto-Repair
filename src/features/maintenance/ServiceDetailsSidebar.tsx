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
    { id: 1, label: 'Brake Repair & Service', path: '/brake-repair' },
    { id: 2, label: 'Oil Change & Lube', path: '/oil-change' },
    { id: 3, label: 'Engine Diagnostics', path: '/engine-diagnostics' },
    { id: 4, label: 'Transmission Service', path: '/transmission-service' },
    { id: 5, label: 'Electrical Repair', path: '/electrical-repair' },
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