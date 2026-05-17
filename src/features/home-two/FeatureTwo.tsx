
import React from 'react'; 
import featureTwoShape1 from '@/assets/images/shapes/feature-two-shape-1.png';
import featureTwoSingleShape1 from '@/assets/images/shapes/feature-two-single-shape-1.png';
import FadeInAdvanced, { type AnimationVariant } from '@/components/elements/FadeInAdvanced';
import TextAnimation from '@/components/elements/TextAnimation';
import Image from 'next/image';
import Link from 'next/link';

interface FeatureItem {
    id: number;
    iconClass: string;
    title: string;
    to: string;
    text: string;
    animationClass: AnimationVariant;
    animationDelay: number;
}

const featureItems: FeatureItem[] = [
    {
        id: 1,
        iconClass: 'icon-settings-1',
        title: 'Free Estimates',
        to: '/contact',
        text: 'We assess your vehicle and provide a clear, no-obligation quote before any work begins.',
        animationClass: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 2,
        iconClass: 'icon-technician-1',
        title: 'Certified Technicians',
        to: '/team',
        text: 'Our mechanics hold industry certifications and bring decades of hands-on experience to every repair.',
        animationClass: 'fadeInUp',
        animationDelay: 300,
    },
    {
        id: 3,
        iconClass: 'icon-customer-support',
        title: 'Same-Day Service',
        to: '/services',
        text: 'Many routine repairs and diagnostics can be completed the same day you bring your vehicle in.',
        animationClass: 'fadeInRight',
        animationDelay: 500,
    },
    {
        id: 4,
        iconClass: 'icon-affordable-price',
        title: 'Warranty on All Work',
        to: '/services',
        text: 'Every repair is backed by our parts-and-labour warranty — we stand behind what we do.',
        animationClass: 'fadeInUp',
        animationDelay: 600,
    },
];

const FeatureTwo: React.FC = () => {
    return (
        <section className="feature-two">
            <div className="feature-two__shape-1 rotate-me">
                <Image src={featureTwoShape1} style={{ width: "auto", height: "auto" }} alt="" className="float-bob-y" />
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h6 className="section-title__tagline">
                        <span className="section-title__tagline-border"></span>Our Features
                    </h6>
                    <h3 className="section-title__title title-animation"><TextAnimation animationStyle='style2'>Why Drivers Trust Birchmount Auto Repair</TextAnimation></h3>
                </div>
                <div className="row">
                    {featureItems.map((item) => (
                        <FadeInAdvanced 
                            key={item.id}
                            className={`col-xl-3 col-lg-6 col-md-6`}
                            variant={item?.animationClass}
                            delay={item.animationDelay}
                        >
                            <div className="feature-two__single">
                                <div className="feature-two__icon">
                                    <span className={item.iconClass}></span>
                                </div>
                                <div className="feature-two__content">
                                    <div
                                        className="feature-two__single-shape-1 float-bob-x"
                                        style={{ backgroundImage: `url(${featureTwoSingleShape1})` }}
                                    ></div>
                                    <h3 className="feature-two__title">
                                        <Link href={item.to}>{item.title}</Link>
                                    </h3>
                                    <p className="feature-two__text">{item.text}</p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureTwo;