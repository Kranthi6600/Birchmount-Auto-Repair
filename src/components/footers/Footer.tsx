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
    { id: 4, icon: 'fab fa-instagram', href: 'https://www.instagram.com/birchmountautorepair?igsh=djZrMGN6bzgxYmho' },
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

    const [expandedSection, setExpandedSection] = React.useState<string | null>(null);
    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
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
                        <div className="col-xl-3">
                            <FadeInAdvanced variant='fadeInUp' delay={100}>
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

                            {/* Social Links - outside animation so always visible */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '10px', marginBottom: '20px' }}>
                                <span style={{ color: '#fff', fontSize: '16px', fontWeight: 600 }}>Follow Us</span>
                                <a href="https://www.instagram.com/birchmountautorepair?igsh=djZrMGN6bzgxYmho" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', flexShrink: 0 }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

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
                                                    <ul className="footer-widget__link footer-widget__link--grid list-unstyled">
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
                                                <div className="footer-widget__title-box footer-mobile-toggle" onClick={() => toggleSection('services')}>
                                                    <h3 className="footer-widget__title">Our Services</h3>
                                                    <span className="footer-toggle-icon"></span>
                                                </div>
                                                <ul className={`footer-widget__link list-unstyled footer-collapsible ${expandedSection === 'services' ? 'footer-collapsible--open' : ''}`}>
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
                                                <ul className="footer-widget__post list-unstyled">

                                                    {footerPosts.map((post) => (
                                                        <li key={post.id}>
                                                            <div className="footer-widget__post-img">
                                                                <Image src={post.image} width={70} height={70} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '10px' }} alt={post.title} />
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
