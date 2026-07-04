"use client";

import React from 'react';
const footerShape1 = "/assets/images/shapes/footer-widget-shape-1.png";
const footerLogo = "/assets/images/logo1.PNG";
import FadeInAdvanced from '../elements/FadeInAdvanced';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useServices } from '@/hooks/useServices';
import { useBlogs } from '@/hooks/useBlogs';

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
    { id: 5, label: 'FAQs', to: '/faqs' },
    { id: 6, label: 'Contact', to: '/contact' },
];



interface FooterPost {
    id: number;
    image: string | StaticImageData;
    title: string;
    date: string;
    to: string;
}

const socialLinks: SocialLink[] = [
    { id: 4, icon: 'fab fa-instagram', href: 'https://www.instagram.com/p/DZ_RDrcvByk/?igsh=MWN0MTNzOTVrN2hsYQ==' },
];

const bottomMenuLinks: NavLink[] = [
    { id: 1, label: 'Support', to: '/contact' },
];

const Footer = () => {
    const { data: apiServices, isLoading } = useServices();

    const serviceLinks = React.useMemo(() => {
        if (!apiServices) return [];
        const seen = new Set<string>();
        const items: { id: number; label: string; to: string }[] = [];
        apiServices.forEach((s) => {
            const cat = s.wehoware_service_categories;
            if (cat && !seen.has(cat.slug)) {
                seen.add(cat.slug);
                items.push({
                    id: items.length + 1,
                    label: cat.name,
                    to: `/services/${s.slug}`,
                });
            }
        });
        return items;
    }, [apiServices]);

    const { data: apiBlogs } = useBlogs();

    const footerPosts = React.useMemo(() => {
        if (!apiBlogs) return [];
        return apiBlogs.slice(0, 2).map((blog, i) => ({
            id: blog.id,
            image: blog.thumbnail || '/assets/images/blog/blog-3-1.jpg',
            title: blog.title,
            date: blog.published_at
                ? new Date(blog.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
                : '',
            to: `/blog/${blog.slug}`,
        }));
    }, [apiBlogs]);

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
                                {/* Get a Quote */}
                                <div className="footer-widget__column footer-widget__newsletter">
                                    <div className="footer-widget__newsletter-bg" ></div>
                                    <h3 className="footer-widget__newsletter-title">
                                        Need Auto Repair Services?<br /> Get a Free Quote Today
                                    </h3>
                                    <form className="footer-widget__newsletter-form mc-form" onSubmit={handleSubmit}>
                                        <div className="footer-widget__newsletter-form-input-box">
                                            <input type="email" placeholder="Enter email" name="EMAIL" />
                                        </div>
                                        <button type="submit" className="footer-widget__newsletter-btn thm-btn">
                                            Get a Quote
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
                                                    {serviceLinks.slice(0, 4).map((link) => (
                                                        <li key={link.id}>
                                                            <Link href={link.to}>{link.label}</Link>
                                                        </li>
                                                    ))}
                                                    <li>
                                                        <Link href="/services">More Services...</Link>
                                                    </li>
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
                                                                <Image src={post.image} width={75} height={75} style={{ width: 'auto', height: 'auto' }} alt="Image" />
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
                                            <a key={social.id} href={social.href} target="_blank" rel="noopener noreferrer">
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

export default Footer;
