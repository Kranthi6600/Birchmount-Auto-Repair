"use client";

import React from 'react'; 
const whyChooseTwoShape2 = "/assets/images/shapes/why-choose-two-shape-2.png";
const whyChooseTwoShape3 = "/assets/images/shapes/why-choose-two-shape-3.png";
const whyChooseTwoImg1 = "/assets/images/resources/why-choose-two-img-1.jpg";
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
    { id: 1, label: 'Certified Technicians' },
    { id: 2, label: 'Same-Day Service' },
    { id: 3, label: 'Upfront Pricing' },
];

const pointsListTwo: PointItem[] = [
    { id: 4, label: 'All Makes & Models' },
    { id: 5, label: 'Warranty on All Work' },
    { id: 6, label: '5,000+ Happy Customers' },
];

const progressItems: ProgressItem[] = [
    { id: 1, title: 'Brake & Safety Systems', percent: 96 },
    { id: 2, title: 'Engine & Transmission', percent: 92 },
    { id: 3, title: 'Electrical Diagnostics', percent: 88 },
    { id: 4, title: 'Customer Satisfaction', percent: 98 },
];

const WhyChooseTwo: React.FC = () => {
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
                                    <Image src={whyChooseTwoImg1} width={470} height={483} alt="" />
                                </div>
                                <div className="why-choose-two__improve-box">
                                    <p className="why-choose-two__improve-sub-title">(Based on 4,800+ Reviews)</p>
                                    <h3 className="why-choose-two__title">Serving Scarborough Drivers</h3>
                                    <p className="why-choose-two__improve-text">
                                        Honest auto repair with<br /> guaranteed results.
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
                                    <span className="section-title__tagline-border"></span>Why Choose Us
                                </h6>
                                <h3 className="section-title__title title-animation">
                                    <TextAnimation>Birchmount&apos;s Most Trusted<br /> Auto Repair Shop</TextAnimation>
                                </h3>
                            </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseTwo;