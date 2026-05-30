import React from 'react'; 
const pricingTwoShape2 = "/assets/images/shapes/pricing-two-shape-2.png";
const pricingTwoImg1 = "/assets/images/shop/pricing1.jpeg";
import type { AnimationVariant } from '@/components/elements/FadeInAdvanced';
import TextAnimation from '@/components/elements/TextAnimation';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import Image from 'next/image';
import Link from 'next/link';

interface PricingFeature {
    id: number;
    label: string;
}

interface PricingPlan {
    id: number;
    planName: string;
    price: string;
    pricePeriod: string;
    features: PricingFeature[];
    to: string;
    animationClass: AnimationVariant;
    animationDelay: number;
    hasPremiumExtras?: boolean;
}

const collisionFeatures: PricingFeature[] = [
    { id: 1, label: 'Frame straightening & alignment' },
    { id: 2, label: 'Bumper & panel replacement' },
    { id: 3, label: 'Structural damage repair' },
    { id: 4, label: 'Insurance claim assistance' },
    { id: 5, label: 'Free damage assessment' },
];

const paintDentFeatures: PricingFeature[] = [
    { id: 1, label: 'Precision paint color matching' },
    { id: 2, label: 'Dent removal & paintless repair' },
    { id: 3, label: 'Scratch & scuff restoration' },
    { id: 4, label: 'Clear coat & finish blending' },
    { id: 5, label: 'Lifetime paint warranty' },
];

const diagnosticFeatures: PricingFeature[] = [
    { id: 1, label: 'Full computer scan' },
    { id: 2, label: 'Check-engine code analysis' },
    { id: 3, label: 'Written inspection report' },
    { id: 4, label: 'Safety systems check' },
    { id: 5, label: 'No-obligation repair estimate' },
];

const pricingPlans: PricingPlan[] = [
    {
        id: 1,
        planName: 'Collision Repair',
        price: 'Call for',
        pricePeriod: 'Pricing',
        features: collisionFeatures,
        to: '/contact',
        animationClass: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 2,
        planName: 'Paint & Dent Repair',
        price: 'Call for',
        pricePeriod: 'Estimate',
        features: paintDentFeatures,
        to: '/contact',
        animationClass: 'fadeInUp',
        animationDelay: 300,
    },
    {
        id: 3,
        planName: 'Full Diagnostic',
        price: 'Call for',
        pricePeriod: 'Appointment',
        features: diagnosticFeatures,
        to: '/contact',
        animationClass: 'fadeInRight',
        animationDelay: 500,
        hasPremiumExtras: true,
    },
];

const PricingTwo: React.FC = () => {
    return (
        <section className="pricing-two">
            <div className="pricing-two__shape-2">
                <Image src={pricingTwoShape2} width={100} height={100} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="" />
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h6 className="section-title__tagline">
                        <span className="section-title__tagline-border"></span>Pricing Plan
                    </h6>
                    <h3 className="section-title__title title-animation">
                        <TextAnimation>Transparent, Fair <br /> Pricing on All Services.</TextAnimation>
                    </h3>
                </div>
                <div className="row">
                    <div className="col-xl-9">
                        <div className="pricing-two__left">
                            <div className="row">
                                {pricingPlans.map((plan) => (
                                    <FadeInAdvanced
                                        key={plan.id}
                                        className={`col-xl-4 col-lg-4 col-md-6 `}
                                        variant={plan?.animationClass}
                                        delay={plan.animationDelay}
                                    >
                                        <div className="pricing-two__single">
                                            <div className="pricing-two__plan-box">
                                                <span>{plan.planName}</span>
                                            </div>
                                            <div className="pricing-two__price-box">
                                                <h3 className="pricing-two__price">{plan.price}</h3>
                                                <p className="pricing-two__price-sub-title">{plan.pricePeriod}</p>
                                            </div>
                                            <ul className="pricing-two__price-points list-unstyled">
                                                {plan.features.map((feature) => (
                                                    <li key={feature.id}>
                                                        <div className="icon">
                                                            <span className="icon-check"></span>
                                                        </div>
                                                        <p>{feature.label}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="pricing-two__btn-box">
                                                <Link href={plan.to} className="thm-btn">
                                                    Book Now
                                                    <span className="icon-arrow-right"></span>
                                                </Link>
                                            </div>
                                            {plan.hasPremiumExtras && (
                                                <>
                                                    <div className="pricing-two__img-1">
                                                        <Image src={pricingTwoImg1} width={300} height={300} style={{ width: 340, height: 500 }} alt="" />
                                                    </div>
                                                    <div className="pricing-two__shape-1"></div>
                                                </>
                                            )}
                                        </div>
                                    </FadeInAdvanced>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingTwo;