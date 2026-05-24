"use client";

import React from 'react';
const footerPostImg1 = "/assets/images/blog/footer-widget-post-img-1.jpg";
const footerPostImg2 = "/assets/images/blog/footer-widget-post-img-2.jpg";

const footerShape1 = "/assets/images/shapes/footer-widget-shape-1.png";
const footerLogo = "/assets/images/logo1.PNG";
import FadeInAdvanced from '../elements/FadeInAdvanced';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

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
    { id: 1, label: 'Auto Body Repair',       to: '/auto-body-repair' },
    { id: 2, label: 'Collision Repair',        to: '/collision-repair' },
    { id: 3, label: 'Brake Service',           to: '/brake-service' },
    { id: 4, label: 'Engine Diagnostics',      to: '/engine-diagnostics' },
    { id: 5, label: 'Transmission Repair',     to: '/transmission-repair' },
    { id: 6, label: 'Car Paint Services',      to: '/car-paint-services' },
    { id: 7, label: 'Vehicle Maintenance',     to: '/vehicle-maintenance' },
    { id: 8, label: 'Computer Diagnostics',    to: '/computer-diagnostics' },
];


interface FooterPost {
    id: number;
    image: string | StaticImageData;
    title: string;
    date: string;
    to: string;
}

const footerPosts: FooterPost[] = [
    {
        id: 1,
        image: footerPostImg1,
        title: 'Great Tips to Choose A Professional Rpaire',
        date: 'Aug 22, 2025',
        to: '/blog-details',
    },
    {
        id: 2,
        image: footerPostImg2,
        title: 'Revitalising your people in to a retail downturn.',
        date: 'Nov 17, 2025',
        to: '/blog-details',
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
    { id: 2, label: 'Terms and Condition', to: '/about' },
    { id: 3, label: 'Privacy and Policy', to: '/about' },
];

const FooterTwo = () => {
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
                                                    <h3 className="footer-widget__title">Recent Posts</h3>
                                                </div>
                                                <ul className="footer-widget__contact list-unstyled">

                                                    {footerPosts.map((post) => (
                                                        <li key={post.id}>
                                                            <div className="footer-widget__post-img">
                                                                <Image src={post.image} width={75} height={75} alt="Image" />
                                                            </div>
                                                            <div className="footer-widget__post-content">
                                                                <h3 className="footer-widget__post-title">
                                                                    <Link href={post.to}>{post.title}</Link>
                                                                </h3>
                                                                <p className="footer-widget__post-date">
                                                                    <span className="fas fa-calendar-alt"></span> {post.date}
                                                                </p>
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
                            &copy; Copyright 2026 by <Link href="/">Birchmount Auto Repair</Link>. All Rights Reserved.
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

export default FooterTwo;