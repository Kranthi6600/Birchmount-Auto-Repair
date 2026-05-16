"use client";
import React from 'react';
import footerShape1 from '@/assets/images/shapes/footer-widget-shape-1.png';
import footerLogo from '@/assets/images/resources/footer-logo.png';
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
    { id: 1, day: 'Mon - Fri', hours: '9:00 AM - 5:00 PM' },
    { id: 2, day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
    { id: 3, day: 'Sunday', hours: 'Closed' },
];

const quickLinks: NavLink[] = [
    { id: 1, label: 'About Us', to: '/about' },
    { id: 2, label: 'Portfolio', to: '/projects' },
    { id: 3, label: 'Help & FAQs', to: '/faq' },
    { id: 4, label: 'Blog', to: '/blog' },
    { id: 5, label: 'Contact', to: '/contact' },
];

const serviceLinks: NavLink[] = [
    { id: 1, label: 'Electric Repair', to: '/electric-panel-repair' },
    { id: 2, label: 'Smart Watch Repair', to: '/installing-ceiling-fan' },
    { id: 3, label: 'Smartphone Repair', to: '/commercial-services' },
    { id: 4, label: 'Laptop Repair', to: '/lighting-fixtures' },
    { id: 5, label: 'Desktop Repair', to: '/short-circuit-repair' },
];

const contactItems: ContactItem[] = [
    {
        id: 1,
        icon: 'icon-phone-call',
        lines: [
            { text: '(88) 574 7546 027', href: 'tel:885747546027' },
            { text: '(88) 574 7546 027', href: 'tel:885747546027' },
        ],
    },
    {
        id: 2,
        icon: 'icon-envelope',
        lines: [
            { text: 'example@gmail.com', href: 'mailto:example@gmail.com' },
            { text: 'example@gmail.com', href: 'mailto:example@gmail.com' },
        ],
    },
    {
        id: 3,
        icon: 'icon-location',
        lines: [{ text: '4517 Washington Ave. Manchester, 95' }],
    },
];

const socialLinks: SocialLink[] = [
    { id: 1, icon: 'icon-facebook', href: '#' },
    { id: 2, icon: 'icon-xpa', href: '#' },
    { id: 3, icon: 'icon-link-in', href: '#' },
    { id: 4, icon: 'icon-instagram', href: '#' },
];

const bottomMenuLinks: NavLink[] = [
    { id: 1, label: 'Support', to: '/contact' },
    { id: 2, label: 'Terms and Condition', to: '/about' },
    { id: 3, label: 'Privacy and Policy', to: '/about' },
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
                    <Image src={footerShape1} style={{ width: "auto", height: "auto" }} alt="footer shape" />
                </div>
            </div>
            <div className="container">
                <div className="site-footer__top">
                    <div className="row">
                        {/* About Column */}
                        <FadeInAdvanced className="col-xl-3" variant='fadeInUp' delay={100}>
                            <div className="footer-widget__column footer-widget__about">
                                <div className="footer-widget__logo">
                                    <Link href="/"><Image src={footerLogo} width={138} height={40} alt="Fixpro Logo" /></Link>
                                </div>
                                <p className="footer-widget__about-text">
                                    Secure other greater pleasures, or else he endures pains to avoid worse pains selection
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
                                                        <li key={item.id}>
                                                            <div className="icon">
                                                                <span className={item.icon}></span>
                                                            </div>
                                                            <div className="content">
                                                                {item.lines.map((line, i) => (
                                                                    <p key={i}>
                                                                        {line.href ? (
                                                                            <a href={line.href}>{line.text}</a>
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
                            © Copywright 2026 by <Link href="/">Fixpro</Link> All Rights Reserved.
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