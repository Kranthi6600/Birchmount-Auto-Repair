"use client";

import React from 'react';
import Link from 'next/link';

const contactItems = [
    { id: 1, iconClass: 'icon-phone-call', content: '(416) 757-8368' },
    { id: 2, iconClass: 'icon-envelope', content: 'info@birchmountautorepair.ca' },
    { id: 3, iconClass: 'icon-location', content: '1064 Birchmount Rd, Scarborough' },
];

const GetInTouch: React.FC<{ className?: string }> = ({ className = '' }) => {
    return (
        <div className={`service-details__get-started ${className}`} style={{ marginTop: '50px' }}>
            <h3 className="service-details__get-started-title">Get In Touch</h3>
            <p className="service-details__get-started-text">
                Have a question about your vehicle? Call us or send a message — we offer free estimates and same-day service on most repairs.
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
                    Contact Us
                </Link>
            </div>
        </div>
    );
};

export default GetInTouch;
