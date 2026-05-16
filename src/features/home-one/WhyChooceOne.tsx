"use client";
import React from 'react';

import whyChooseOneImg1 from '@/assets/images/resources/why-choose-one-img-1.jpg';
import whyChooseOneImg2 from '@/assets/images/resources/why-choose-one-img-2.jpg';
import TextAnimation from '@/components/elements/TextAnimation';
import FadeInAdvanced, { type AnimationVariant } from '@/components/elements/FadeInAdvanced';
import useBirchmountAutoRepairContext from '@/components/context/useBirchmountAutoRepairContext';
import Image from 'next/image';

interface ChooseItem {
    id: number;
    iconClass: string;
    title: string;
    text: string;
    animationType: AnimationVariant;
    animationDelay: number;
}

const leftColumnItems: ChooseItem[] = [
    {
        id: 1,
        iconClass: 'icon-product-return',
        title: 'Warranty Service',
        text: 'Duis aute irure dolor in repreh enderit.',
        animationType: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 2,
        iconClass: 'icon-setting',
        title: 'Secured Device',
        text: 'Duis aute irure dolor in repreh enderit.',
        animationType: 'fadeInLeft',
        animationDelay: 400,
    },
];

const rightColumnItems: ChooseItem[] = [
    {
        id: 3,
        iconClass: 'icon-happy-customer',
        title: 'Customer Service',
        text: 'Duis aute irure dolor in repreh enderit.',
        animationType: 'fadeInRight',
        animationDelay: 200,
    },
    {
        id: 4,
        iconClass: 'icon-like',
        title: 'No Virus Threat',
        text: 'Duis aute irure dolor in repreh enderit.',
        animationType: 'fadeInRight',
        animationDelay: 300,
    },
];

const WhyChooseOne: React.FC = () => {
    const { handleVideoClick } = useBirchmountAutoRepairContext();
    return (
        <section className="why-choose-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="why-choose-one__left">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <h6 className="section-title__tagline">
                                    <span className="section-title__tagline-border"></span>Why Choose Us
                                </h6>
                                <h3 className="section-title__title title-animation">
                                    <TextAnimation animationStyle='style2'>
                                        When You Need Repair We Are Always Here
                                    </TextAnimation>
                                </h3>
                            </div>
                            <p className="why-choose-one__text">
                                At our company, we are committed to providing excellent customer service, transparent
                                pricing, and fast, reliable service. We understand the importance of keeping your home
                                or business cool and comfortable.
                            </p>
                            <div className="why-choose-one__list-box">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <ul className="why-choose-one__list list-unstyled">
                                            {leftColumnItems.map((item) => (
                                                <FadeInAdvanced key={item.id} className='liItem'
                                                    variant={item.animationType}
                                                    delay={item?.animationDelay}
                                                >
                                                    <div className="icon">
                                                        <span className={item.iconClass}></span>
                                                    </div>
                                                    <div className="content">
                                                        <h3>{item.title}</h3>
                                                        <p>{item.text}</p>
                                                    </div>
                                                </FadeInAdvanced>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <ul className="why-choose-one__list list-unstyled">
                                            {rightColumnItems.map((item) => (
                                                <FadeInAdvanced key={item.id} className='liItem' variant={item.animationType} duration={item?.animationDelay}>
                                                    <div className="icon">
                                                        <span className={item.iconClass}></span>
                                                    </div>
                                                    <div className="content">
                                                        <h3>{item.title}</h3>
                                                        <p>{item.text}</p>
                                                    </div>
                                                </FadeInAdvanced>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <FadeInAdvanced className="why-choose-one__right " variant="slideInRight" delay={100}>
                            <div className="why-choose-one__img-box">
                                <div className="why-choose-one__img">
                                    <Image src={whyChooseOneImg1} width={250} height={450} alt="" />
                                </div>
                                <div className="why-choose-one__img-2">
                                    <Image src={whyChooseOneImg2} width={330} height={450} alt="" />
                                </div>
                                <div className="why-choose-one__shape-1"></div>
                                <div className="why-choose-one__video-link">
                                    <span onClick={(e) => handleVideoClick(e, "https://www.youtube.com/watch?v=Get7rqXYrbQ")}
                                        className="video-popup cursor-pointer">
                                        <div className="why-choose-one__video-icon">
                                            <span className="icon-play"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseOne;