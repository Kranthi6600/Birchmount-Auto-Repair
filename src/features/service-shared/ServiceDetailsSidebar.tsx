"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useServices } from '@/hooks/useServices';
import { useStickySidebar } from '@/hooks/useStickySidebar';

interface ServiceLinkItem {
    id: number;
    label: string;
    path: string;
}

interface ContactItem {
    id: number;
    iconClass: string;
    content: string;
}

const contactItems: ContactItem[] = [
    { id: 1, iconClass: 'icon-phone-call', content: '(416) 757-8368' },
    { id: 2, iconClass: 'icon-envelope', content: 'info@birchmountautorepair.ca' },
    { id: 3, iconClass: 'icon-location', content: '1064 Birchmount Rd, Scarborough' },
];

interface ServiceDetailsSidebarProps {
    mainRef: React.RefObject<HTMLDivElement | null>;
}

const ServiceDetailsSidebar: React.FC<ServiceDetailsSidebarProps> = ({ mainRef }) => {
    const currentPath = usePathname();
    const { data: apiServices, isLoading } = useServices();
    const widgetRef = useRef<HTMLDivElement>(null);
    const placeholderRef = useRef<HTMLDivElement>(null);

    useStickySidebar({ mainRef, widgetRef, placeholderRef, offset: 120 });

    const serviceLinks = React.useMemo(() => {
        if (!apiServices) return [];
        const seen = new Set<string>();
        const items: ServiceLinkItem[] = [];
        apiServices.forEach((s) => {
            const cat = s.wehoware_service_categories;
            if (cat && !seen.has(cat.slug)) {
                seen.add(cat.slug);
                items.push({
                    id: items.length + 1,
                    label: cat.name,
                    path: `/services/${s.slug}`,
                });
            }
        });
        return items;
    }, [apiServices]);

    return (
        <div className="col-xl-4 col-lg-5 d-none d-lg-block" style={{ height: '100%' }}>
            <div className="service-details__sidebar d-flex flex-column" style={{ height: '100%' }}>

                {/* Top section: scrolls normally */}
                <div style={{ flex: '0 0 auto' }}>
                    {/* Our Services */}
                    <div className="service-details__services-box">
                        <h3 className="service-details__services-title">Our Services</h3>
                        <ul className="service-details__services-list list-unstyled">
                            {isLoading ? (
                                <li><span style={{ padding: '12px 20px', display: 'block' }}>Loading...</span></li>
                            ) : (
                                serviceLinks.map((service) => (
                                    <li key={service.id} className={service.path === currentPath ? 'active' : ''}>
                                        <Link href={service.path}>
                                            {service.label}
                                            <span className="icon-arrow-right"></span>
                                        </Link>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </div>

                {/* Bottom section: sticky widget track */}
                <div className="flex-grow-1" style={{ position: 'relative' }}>
                    <div ref={placeholderRef} style={{ width: '100%', height: '0px' }} />
                    {/* Get Started Today */}
                    <div ref={widgetRef} className="service-details__get-started" style={{ position: 'relative' }}>
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
        </div>
    );
};

export default ServiceDetailsSidebar;
