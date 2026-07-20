"use client";

import React from 'react'; 
const whyChooseTwoShape2 = "/assets/images/shapes/why-choose-two-shape-2.png";
const whyChooseTwoShape3 = "/assets/images/shapes/why-choose-two-shape-3.png";
const whyChooseTwoImg1 = "/assets/images/services/banner5.jpg";
import FadeInAdvanced from '@/components/elements/FadeInAdvanced'; 
import TextAnimation from '@/components/elements/TextAnimation';
import useBirchmountAutoRepairContext from '@/components/context/useBirchmountAutoRepairContext';
import Progresbar from '@/components/elements/Progressbar';
import Image from 'next/image';
import Link from 'next/link';

interface PointItem {
    id: number;
    label: string;
}

interface ProgressItem {
    id: number;
    title: string;
    percent: number;
}

const pointsListOne: PointItem[] = [
    { id: 1, label: 'Direct Insurance Billing' },
    { id: 2, label: 'All Major Insurers Accepted' },
    { id: 3, label: 'Free Damage Estimates' },
];

const pointsListTwo: PointItem[] = [
    { id: 4, label: 'OEM Parts Guaranteed' },
    { id: 5, label: 'Fast Claim Processing' },
    { id: 6, label: 'Rental Car Assistance' },
];

const progressItems: ProgressItem[] = [
    { id: 1, title: 'Insurance Claims Approved', percent: 97 },
    { id: 2, title: 'On-Time Repair Delivery', percent: 94 },
    { id: 3, title: 'OEM Parts Compliance', percent: 99 },
    { id: 4, title: 'Customer Satisfaction', percent: 98 },
];

const WhyChoose: React.FC = () => {
    return (
        <section className="why-choose-two">
            <div className="why-choose-two__shape-2 rotate-me">
                <Image src={whyChooseTwoShape2} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="" />
            </div>
            <div className="why-choose-two__shape-3 rotate-me">
                <Image src={whyChooseTwoShape3} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <FadeInAdvanced
                            className="why-choose-two__left wow "
                            variant='slideInLeft'
                            delay={100}
                        >
                            <div className="why-choose-two__img-box">
                                <div className="why-choose-two__img-1">
                                    <Image src={whyChooseTwoImg1} width={470} height={483} style={{ width: '100%', height: 'auto' }} sizes="(max-width: 768px) 100vw, 470px" alt="Birchmount Auto Repair insurance claim processing for collision repairs" />
                                </div>
                                <div className="why-choose-two__improve-box">
                                    <div className="why-choose-two__improve-icon">
                                        <span className="icon-certified"></span>
                                    </div>
                                    <p className="why-choose-two__improve-sub-title">(Approved by All Major Insurers)</p>
                                    <h3 className="why-choose-two__title">Stress-Free Claims</h3>
                                    <p className="why-choose-two__improve-text">
                                        We handle the paperwork,<br /> you get back on the road.
                                    </p>
                                </div>
                                <div className="why-choose-two__shape-1"></div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    <div className="col-xl-6">
                        <div className="why-choose-two__right wow fadeInRight" data-wow-delay="300ms">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <h6 className="section-title__tagline">
                                    <span className="section-title__tagline-border"></span>Insurance Claims
                                </h6>
                                <h2 className="section-title__title title-animation">
                                    <TextAnimation>We Work Directly With Your Insurance Company</TextAnimation>
                                </h2>
                            </div>
                            <p className="why-choose-two__intro-text">
                                From initial estimate to final inspection, we manage the entire claims process
                                so you don&apos;t have to deal with the back-and-forth.
                            </p>
                            <div className="why-choose-two__points-box">
                                {[pointsListOne, pointsListTwo].map((list, listIndex) => (
                                    <ul key={listIndex} className="why-choose-two__points-list list-unstyled">
                                        {list.map((point) => (
                                            <li key={point.id}>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>{point.label}</p>
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </div>
                            <div className="why-choose-two__progress-box">
                                <ul className="why-choose-two__progress-list list-unstyled">
                                    {progressItems.map((item) => (
                                        <Progresbar key={item.id} title={item?.title} value={item?.percent}/>
                                    ))}
                                </ul>
                            </div>
                            <div className="why-choose-two__btn-box">
                                <Link href="/contact" className="thm-btn">
                                    Start Your Claim<span className="icon-arrow-right"></span>
                                </Link>
                                <Link href="/services" className="why-choose-two__btn-secondary">
                                    View All Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
