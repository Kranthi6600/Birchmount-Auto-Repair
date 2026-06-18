"use client";
import React from 'react';
const footerShape1 = "/assets/images/shapes/footer-widget-shape-1.png";
const footerLogo = "/assets/images/logo1.PNG";
import FadeInAdvanced from '../elements/FadeInAdvanced';
import Link from 'next/link';
import Image from 'next/image';

interface WorkingHour {
    id: number;
    day: string;
    hours: string;
}

interface NavLink {
    id: number;
    label: string;
    to: string;
}

interface ContactItem {
    id: number;
    icon: string;
    lines: { text: string; href?: string }[];
}

interface SocialLink {
    id: number;
    icon: string;
    href: string;
}

const workingHours: WorkingHour[] = [
    { id: 1, day: 'Mon - Fri', hours: '8:00 AM – 6:00 PM' },
    { id: 2, day: 'Saturday', hours: '9:00 AM – 3:00 PM' },
    { id: 3, day: 'Sunday', hours: 'Closed' },
];

const quickLinks: NavLink[] = [
    { id: 1, label: 'Home', to: '/' },
    { id: 2, label: 'Services', to: '/services' },
    { id: 3, label: 'About', to: '/about' },
    { id: 4, label: 'Blog', to: '/blog' },
    { id: 5, label: 'Contact', to: '/contact' },
];

const serviceLinks: NavLink[] = [
    { id: 1, label: 'Complete Auto Body Repair',    to: '/complete-auto-body-repair' },
    { id: 2, label: 'Collision Repairs',            to: '/collision-repair' },
    { id: 3, label: 'Mechanical Repair',            to: '/mechanical-repair' },
    { id: 4, label: 'Towing & Roadside Assistance', to: '/towing-roadside-assistance' },
    { id: 5, label: 'Insurance',                    to: '/insurance' },
    { id: 6, label: 'Rentals',                      to: '/rentals' },
];

const contactItems: ContactItem[] = [
    {
        id: 1,
        icon: 'icon-phone-call',
        lines: [
            { text: '(416) 757-8368', href: 'tel:4167578368' },
        ],
    },
    {
        id: 2,
        icon: 'icon-envelope',
        lines: [
            { text: 'info@birchmountautorepair.ca', href: 'mailto:info@birchmountautorepair.ca' },
        ],
    },
    {
        id: 3,
        icon: 'icon-location',
        lines: [{ text: '1064 Birchmount Rd, Scarborough, ON M1K 1S4' }],
    },
];

const socialLinks: SocialLink[] = [
    { id: 1, icon: 'fab fa-twitter', href: '#' },
    { id: 2, icon: 'fab fa-facebook', href: '#' },
    { id: 3, icon: 'fab fa-pinterest-p', href: '#' },
    { id: 4, icon: 'fab fa-instagram', href: '#' },
];

const bottomMenuLinks: NavLink[] = [
    { id: 1, label: 'Support', to: '/contact' },
];

const FooterOne: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Handle form submission logic here
    };
    return (
        <footer className="site-footer">
            <div className="site-footer__bg-color">
                <div className="footer-widget__shape-1">
                    <Image src={footerShape1} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="footer shape" />
                </div>
            </div>
            <div className="container">
                <div className="site-footer__top">
                    <div className="row">
                        {/* About Column */}
                        <FadeInAdvanced className="col-xl-3" variant='fadeInUp' delay={100}>
                            <div className="footer-widget__column footer-widget__about">
                                <div className="footer-widget__logo">
                                    <Link href="/"><Image src={footerLogo} width={200} height={60} style={{ width: 'auto', height: '60px' }} alt="Birchmount Auto Repair Logo" /></Link>
                                </div>
                                <p className="footer-widget__about-text">
                                    Your neighbourhood auto repair shop, proudly serving Scarborough with honest service, fair pricing, and guaranteed work.
                                </p>
                                <div className="footer-widget__working-box">
                                    <h3 className="footer-widget__working-title">Working Hours:</h3>
                                    <ul className="footer-widget__working-hour list-unstyled">
                                        {workingHours.map((item) => (
                                            <li key={item.id}>
                                                <p>{item.day}<span>{item.hours}</span></p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </FadeInAdvanced>

                        {/* Right Columns */}
                        <div className="col-xl-9">
                            <div className="footer-widget__right">
                                {/* Newsletter */}
                                <div className="footer-widget__column footer-widget__newsletter">
                                    <div className="footer-widget__newsletter-bg" ></div>
                                    <h3 className="footer-widget__newsletter-title">
                                        Subscribe To Our Newsletter To<br /> Get Latest Update
                                    </h3>
                                    <form className="footer-widget__newsletter-form mc-form" onSubmit={handleSubmit}>
                                        <div className="footer-widget__newsletter-form-input-box">
                                            <input type="email" placeholder="Enter email" name="EMAIL" />
                                        </div>
                                        <button type="submit" className="footer-widget__newsletter-btn thm-btn">
                                            Subscribe
                                        </button>
                                    </form>
                                </div>

                                <div className="footer-widget__right-bottom">
                                    <div className="row">
                                        {/* Quick Links */}
                                        <FadeInAdvanced className="col-xl-4 col-lg-4 col-md-4" variant='fadeInUp' delay={200}>
                                            <div className="footer-widget__column footer-widget__usefull-link">
                                                <div className="footer-widget__title-box">
                                                    <h3 className="footer-widget__title">Quick Links</h3>
                                                </div>
                                                <div className="footer-widget__link-box">
                                                    <ul className="footer-widget__link list-unstyled">
                                                        {quickLinks.map((link) => (
                                                            <li key={link.id}>
                                                                <Link href={link.to}>{link.label}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </FadeInAdvanced>

                                        {/* Services */}
                                        <FadeInAdvanced className="col-xl-4 col-lg-4 col-md-4 " variant='fadeInUp' delay={300}>
                                            <div className="footer-widget__column footer-widget__services">
                                                <div className="footer-widget__title-box">
                                                    <h3 className="footer-widget__title">Our Services</h3>
                                                </div>
                                                <ul className="footer-widget__link list-unstyled">
                                                    {serviceLinks.map((link) => (
                                                        <li key={link.id}>
                                                            <Link href={link.to}>{link.label}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </FadeInAdvanced>

                                        {/* Contact Info */}
                                        <FadeInAdvanced className="col-xl-4 col-lg-4 col-md-4" variant='fadeInUp' delay={400}>
                                            <div className="footer-widget__contact-box">
                                                <div className="footer-widget__title-box">
                                                    <h3 className="footer-widget__title">Official info</h3>
                                                </div>
                                                <ul className="footer-widget__contact list-unstyled">
                                                    {contactItems.map((item) => (
                                                        <li key={item.id} style={{ alignItems: 'flex-start', marginBottom: '18px' }}>
                                                            <div className="icon" style={{
                                                                width: '44px',
                                                                height: '44px',
                                                                minWidth: '44px',
                                                                borderRadius: '50%',
                                                                background: 'rgba(42, 185, 126, 0.12)',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                marginRight: '14px',
                                                                marginTop: '2px',
                                                                transition: 'all 0.3s ease',
                                                            }}>
                                                                <span className={item.icon} style={{ fontSize: '1.1rem', color: '#2AB97E' }}></span>
                                                            </div>
                                                            <div className="content">
                                                                {item.lines.map((line, i) => (
                                                                    <p key={i} style={{ lineHeight: 1.5, marginBottom: 0 }}>
                                                                        {line.href ? (
                                                                            <a href={line.href} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s ease' }}>{line.text}</a>
                                                                        ) : (
                                                                            line.text
                                                                        )}
                                                                    </p>
                                                                ))}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </FadeInAdvanced>
                                    </div>

                                    {/* Social Links */}
                                    <div className="site-footer__social">
                                        {socialLinks.map((social) => (
                                            <a key={social.id} href={social.href}>
                                                <i className={social.icon}></i>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="site-footer__bottom-inner">
                        <p className="site-footer__bottom-text">
                            &copy; Copyright 2026 by <Link href="/">Birchmount Auto Repair</Link>. All Rights Reserved. <span style={{ marginLeft: '8px', opacity: 0.7 }}>Developed by Wehoware.</span>
                        </p>
                        <ul className="list-unstyled site-footer__bottom-menu">
                            {bottomMenuLinks.map((link) => (
                                <li key={link.id}>
                                    <Link href={link.to}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterOne;