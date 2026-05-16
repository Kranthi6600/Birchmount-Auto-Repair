"use client";

import React from 'react';
import aboutOneImg1 from '@/assets/images/resources/about-one-img-1.jpg';
import aboutOneImg2 from '@/assets/images/resources/about-one-img-2.jpg';
import aboutOneShape2 from '@/assets/images/shapes/about-one-shape-2.png';

import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import SectionWrapper from '@/components/elements/SectionWrapper';
import useFixproContext from '@/components/context/useFixproContext';
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
        title: 'Our Affordable Price',
        text: 'There are many variations of passage majority',
    },
    {
        id: 2,
        iconClass: 'icon-happy-customer',
        title: 'Customer Satisfied',
        text: 'There are many variations of passage majority',
    },
];

const checkItems: CheckItem[] = [
    { id: 1, text: 'Monotonically predominate next-generation.' },
    { id: 2, text: 'Interactively predominate out-of-the-box best practices.' },
    { id: 3, text: 'Skilled Technicians Invest in a quality phone case to protect device.' },
];


export type SecProp = {
    secClass?: string
}
const AboutOne: React.FC<SecProp> = ({ secClass = "" }) => {
    const { handleVideoClick } = useFixproContext();
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
                                    <Image src={aboutOneImg1} alt="" width={370} height={532} />
                                </div>
                                <div className="about-one__img-2">
                                    <Image src={aboutOneImg2} alt="" width={280} height={380} />
                                </div>
                                <div className="about-one__shape-2 float-bob-y">
                                    <Image src={aboutOneShape2} alt="" width={100} height={100} />
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
                                        Welcome To Repair & Installing Company
                                    </TextAnimation>
                                </h3>
                            </div>
                            <p className="about-one__text">
                                There are many variations of passages available randomised words which the majority
                                have suffered alteration in some form, by injected humour look page when looking at
                                its layout even slightly believable.
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
                            <div className="about-one__btn-and-video">
                                <div className="about-one__btn-box">
                                    <Link href="/about" className="thm-btn">
                                        Discover More<span className="icon-arrow-right"></span>
                                    </Link>
                                </div>
                                <div className="about-one__video-box">
                                    <div className="about-one__video-link">
                                        <span
                                            onClick={(e) => handleVideoClick(e, "https://www.youtube.com/watch?v=Get7rqXYrbQ")}
                                            className="video-popup cursor-pointer"
                                        >
                                            <div className="about-one__video-icon">
                                                <span className="icon-play"></span>
                                                <i className="ripple"></i>
                                            </div>
                                        </span>
                                    </div>
                                    <p className="about-one__video-text">Watch Our Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default AboutOne;