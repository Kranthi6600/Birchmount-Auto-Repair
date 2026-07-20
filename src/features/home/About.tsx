"use client";

import React from 'react';
const aboutOneImg1 = "/assets/images/aboutus/img1.jpeg";
const aboutOneImg2 = "/assets/images/aboutus/img2.jpeg";
const aboutOneShape2 = "/assets/images/shapes/about-one-shape-2.png";

import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import SectionWrapper from '@/components/elements/SectionWrapper';

import CounterUp from '@/components/elements/CounterUp';
import TextAnimation from '@/components/elements/TextAnimation';
import Link from 'next/link';
import Image from 'next/image';

interface PointItem {
    id: number;
    iconClass: string;
    title: string;
    text: string;
}

interface CheckItem {
    id: number;
    text: string;
}

const pointsData: PointItem[] = [
    {
        id: 1,
        iconClass: 'icon-affordable-price',
        title: 'Fair, Upfront Pricing',
        text: 'No hidden fees, no surprises — we quote before we wrench.',
    },
    {
        id: 2,
        iconClass: 'icon-happy-customer',
        title: 'Locally Trusted',
        text: 'Scarborough families count on us for everything from oil changes to engine rebuilds.',
    },
];

const checkItems: CheckItem[] = [
    { id: 1, text: 'Certified technicians with decades of hands-on experience.' },
    { id: 2, text: 'Warranty backed on all parts and labour.' },
    { id: 3, text: 'Transparent diagnostics — we show you the problem before we fix it.' },
];


export type SecProp = {
    secClass?: string
}
const About: React.FC<SecProp> = ({ secClass = "" }) => {
    return (
        <SectionWrapper id='about' className={`about-one ${secClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <FadeInAdvanced
                            className="about-one__left wow "
                            delay={100}
                            variant='slideInLeft'
                        >
                            <div className="about-one__img-box">
                                <div className="about-one__img">
                                    <Image src={aboutOneImg1} alt="" width={370} height={532} style={{ width: '100%', height: 'auto' }} sizes="(max-width: 768px) 100vw, 370px" />
                                </div>
                                <div className="about-one__img-2">
                                    <Image src={aboutOneImg2} alt="" width={280} height={380} style={{ width: '100%', height: 'auto' }} sizes="(max-width: 576px) 100vw, 280px" />
                                </div>
                                <div className="about-one__shape-2 float-bob-y">
                                    <Image src={aboutOneShape2} alt="" width={100} height={100} style={{ width: 'auto', height: 'auto' }} />
                                </div>
                                <div className="about-one__experience-box">
                                    <div className="about-one__count-box">
                                        <h3 className="odometer" data-count="25"><CounterUp ending={25} /> </h3>
                                        <span>+</span>
                                    </div>
                                    <p className="about-one__experience-text">
                                        Years Experiences Maintenance Services
                                    </p>
                                </div>
                                <div className="about-one__shape-1 float-bob-x"></div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right wow fadeInRight" data-wow-delay="300ms">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <h6 className="section-title__tagline">
                                    <span className="section-title__tagline-border"></span>ABOUT US
                                </h6>
                                <h3 className="section-title__title title-animation">
                                    <TextAnimation animationStyle='style2'>
                                        Scarborough&apos;s Trusted Auto Repair Shop
                                    </TextAnimation>
                                </h3>
                            </div>
                            <p className="about-one__text">
                                Birchmount Auto Repair has been serving Scarborough drivers from our location at
                                1064 Birchmount Rd. We&apos;re your neighbourhood shop — not a chain, not a dealership —
                                just honest mechanics who treat your vehicle like their own.
                            </p>
                            <div className="about-one__points-box">
                                <ul className="about-one__points list-unstyled">
                                    {pointsData.map((point) => (
                                        <li key={point.id}>
                                            <div className="icon">
                                                <span className={point.iconClass}></span>
                                            </div>
                                            <div className="content">
                                                <h4>{point.title}</h4>
                                                <p>{point.text}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <ul className="about-one__points-two list-unstyled">
                                {checkItems.map((item) => (
                                    <li key={item.id}>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>{item.text}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="about-one__btn-box">
                                <Link href="/about" className="thm-btn">
                                    Discover More<span className="icon-arrow-right"></span>
                                </Link>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '20px' }}>
                                <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--birchmountAutoRepair-black)' }}>Follow Us</span>
                                <a href="https://www.instagram.com/birchmountautorepair?igsh=djZrMGN6bzgxYmho" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(var(--birchmountAutoRepair-base-rgb), 0.1)', color: 'var(--birchmountAutoRepair-base)', textDecoration: 'none', flexShrink: 0 }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
