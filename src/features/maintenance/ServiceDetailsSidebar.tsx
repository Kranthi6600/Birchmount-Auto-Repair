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

interface DownloadItem {
    id: number;
    label: string;
    fileIconClass: string;
    downloadHref: string;
}

const serviceLinks: ServiceLinkItem[] = [
    { id: 1, label: 'Maintenance Service', path: '/maintenance-service', },
    { id: 2, label: 'Lighting & Fixtures', path: '/lighting-fixtures' },
    { id: 3, label: 'Installing a Ceiling Fan', path: '/installing-ceiling-fan' },
    { id: 4, label: 'Commercial Services', path: '/commercial-services' },
    { id: 5, label: 'Short Circuit Repair', path: '/short-circuit-repair' },
    { id: 6, label: 'Electric Panel Repair', path: '/electric-panel-repair' },
];

const contactItems: ContactItem[] = [
    {
        id: 1,
        iconClass: 'icon-call',
        content: <a href="tel:585858575084">+58 585 857 5084</a>,
    },
    {
        id: 2,
        iconClass: 'icon-envelope',
        content: <a href="mailto:example@gmail.com">example@gmail.com</a>,
    },
    {
        id: 3,
        iconClass: 'icon-location',
        content: (
            <>
                4517 Washington Ave. Manchester,<br /> Kentucky 39495
            </>
        ),
    },
];

const downloadItems: DownloadItem[] = [
    { id: 1, label: 'Pdf Download', fileIconClass: 'far fa-file-pdf', downloadHref: '#' },
    { id: 2, label: 'Pdf Download', fileIconClass: 'far fa-file-pdf', downloadHref: '#' },
    { id: 3, label: 'Pdf Download', fileIconClass: 'far fa-file-pdf', downloadHref: '#' },
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
                        Pianissimos of dulcimers qui therefore always holds in these matters to this principle
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

                {/* Download */}
                <div className="service-details__sidebar-download-box">
                    <h3 className="service-details__services-title">Download</h3>
                    <div className="service-details__sidebar-single-download">
                        <ul className="clearfix list-unstyled">
                            {downloadItems.map((item) => (
                                <li key={item.id}>
                                    <div className="content-box">
                                        <div className="icon">
                                            <span className={item.fileIconClass}></span>
                                        </div>
                                        <div className="text-box">
                                            <h2>
                                                <a href={item.downloadHref}>{item.label}</a>
                                            </h2>
                                            <p>
                                                <a href={item.downloadHref}>Download</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <a href={item.downloadHref}>
                                            <span className="far fa-cloud-download"></span>
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetailsSidebar;