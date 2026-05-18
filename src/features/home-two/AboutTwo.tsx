"use client";
import React from 'react';
const aboutTwoShape1 = "/assets/images/shapes/about-two-shape-1.png";
const aboutTwoShape2 = "/assets/images/shapes/about-two-shape-2.png";
const aboutTwoImg1 = "/assets/images/shop/shop2.jpeg";
const aboutTwoImg2 = "/assets/images/shop/shop1.jpeg";
import TextAnimation from '@/components/elements/TextAnimation';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import CounterUp from '@/components/elements/CounterUp';
import useBirchmountAutoRepairContext from '@/components/context/useBirchmountAutoRepairContext';
import SectionWrapper from '@/components/elements/SectionWrapper';
import Link from 'next/link';
import Image from 'next/image';

interface PointItem {
    id: number;
    iconClass: string;
    label: string;
}

const pointsList: PointItem[] = [
    { id: 1, iconClass: 'icon-setting', label: 'Diagnostics' },
    { id: 2, iconClass: 'icon-setting', label: 'Repair & Parts' },
    { id: 3, iconClass: 'icon-setting', label: 'Quality Testing' },
];

const AboutTwo: React.FC = () => {
    const { handleVideoClick } = useBirchmountAutoRepairContext()
    return (
        <SectionWrapper id='about' className="about-two">
            <div className="about-two__shape-1 rotate-me">
                <Image src={aboutTwoShape1} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="" />
            </div>
            <div className="about-two__shape-2 float-bob-y">
                <Image src={aboutTwoShape2} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-two__left">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <h6 className="section-title__tagline">
                                    <span className="section-title__tagline-border"></span>About Our Company
                                </h6>
                                <h3 className="section-title__title title-animation">
                                    <TextAnimation>Scarborough&apos;s Trusted <br /> Auto Repair Shop</TextAnimation>
                                </h3>
                            </div>
                            <p className="about-two__text-1">
                                Our shop provides the best <span>auto repair</span> service in Scarborough.
                            </p>
                            <ul className="about-two__points-list list-unstyled">
                                {pointsList.map((point) => (
                                    <li key={point.id}>
                                        <div className="icon">
                                            <span className={point.iconClass}></span>
                                        </div>
                                        <p>{point.label}</p>
                                    </li>
                                ))}
                            </ul>
                            <p className="about-two__text-2">
                                At <span>Birchmount Auto Repair</span>, we are a team of highly skilled technicians with years of
                                experience in automotive repair. We work on all makes and models — from routine oil
                                changes to complex engine rebuilds.
                            </p>
                            <div className="about-two__btn-box">
                                <Link href="/about" className="thm-btn">
                                    More About Us<span className="icon-arrow-right"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <FadeInAdvanced
                            className="about-two__right wow "
                            variant='slideInRight'
                            delay={100}
                        >
                            <div className="about-two__img-box">
                                <div className="about-two__img">
                                    <Image src={aboutTwoImg1} width={420} height={0} sizes="420px" style={{ width: "100%", height: "auto", maxHeight: "500px", objectFit: "cover" }} alt="" />
                                </div>
                                <div className="about-two__img-2">
                                    <Image src={aboutTwoImg2} width={180} height={0} sizes="180px" style={{ width: "180px", height: "auto" }} alt="" />
                                </div>
                                <div className="about-two__experience-box">
                                    <div className="about-two__count-box">
                                        <h3 className="odometer" ><CounterUp ending={25}></CounterUp></h3>
                                        <span>+</span>
                                    </div>
                                    <p className="about-two__experience-text">Years Of Experience</p>
                                </div>
                                <div className="about-two__circle-bdr rotate-me"></div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default AboutTwo;
