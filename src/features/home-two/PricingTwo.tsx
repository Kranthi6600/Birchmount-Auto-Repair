import React from 'react'; 
const pricingTwoShape2 = "/assets/images/shapes/pricing-two-shape-2.png";
const pricingTwoImg1 = "/assets/images/resources/pricing-two-img-1.png";
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

const oilChangeFeatures: PricingFeature[] = [
    { id: 1, label: 'Conventional or synthetic oil' },
    { id: 2, label: 'New oil filter included' },
    { id: 3, label: 'Fluid top-up check' },
    { id: 4, label: 'Tire pressure inspection' },
    { id: 5, label: 'Quick multi-point check' },
];

const brakeFeatures: PricingFeature[] = [
    { id: 1, label: 'Brake pad replacement' },
    { id: 2, label: 'Rotor inspection & resurfacing' },
    { id: 3, label: 'Brake fluid check' },
    { id: 4, label: 'Caliper inspection' },
    { id: 5, label: 'Road-test after service' },
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
        planName: 'Oil Change Service',
        price: 'Call for',
        pricePeriod: 'Pricing',
        features: oilChangeFeatures,
        to: '/contact',
        animationClass: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 2,
        planName: 'Brake Service',
        price: 'Call for',
        pricePeriod: 'Estimate',
        features: brakeFeatures,
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
                <Image src={pricingTwoShape2} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="" />
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
                                                        <Image src={pricingTwoImg1} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="" />
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