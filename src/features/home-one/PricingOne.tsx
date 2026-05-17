import React from 'react'; 
import TextAnimation from '@/components/elements/TextAnimation';
import type { SecProp } from './AboutOne';
import Link from 'next/link';

interface PricingFeature {
    id: number;
    label: string;
}

interface PricingPlan {
    id: number;
    title: string;
    price: string;
    period: string;
    features: PricingFeature[];
    animation: string;
    animationDelay: string;
}

const oilChangeFeatures: PricingFeature[] = [
    { id: 1, label: 'Conventional or synthetic oil' },
    { id: 2, label: 'New oil filter included' },
    { id: 3, label: 'Fluid top-up check' },
    { id: 4, label: 'Tire pressure inspection' },
    { id: 5, label: 'Quick multi-point inspection' },
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
        title: 'Oil Change Service',
        price: 'Call for',
        period: 'Pricing',
        features: oilChangeFeatures,
        animation: 'fadeInLeft',
        animationDelay: '100ms',
    },
    {
        id: 2,
        title: 'Brake Service',
        price: 'Call for',
        period: 'Estimate',
        features: brakeFeatures,
        animation: 'fadeInUp',
        animationDelay: '300ms',
    },
    {
        id: 3,
        title: 'Full Diagnostic',
        price: 'Call for',
        period: 'Appointment',
        features: diagnosticFeatures,
        animation: 'fadeInRight',
        animationDelay: '500ms',
    },
];

const PricingOne: React.FC<SecProp> = ({ secClass = "" }) => {
    return (
        <section className={`pricing-one ${secClass}`}>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h6 className="section-title__tagline">
                        <span className="section-title__tagline-border"></span>Pricing Plan
                    </h6>
                    <h3 className="section-title__title title-animation">
                        <TextAnimation animationStyle='style2'>Transparent, Fair Pricing</TextAnimation>
                    </h3>
                </div>
                <div className="row">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`col-xl-4 col-lg-4 wow ${plan.animation}`}
                            data-wow-delay={plan.animationDelay}
                        >
                            <div className="pricing-one__single">
                                <div className="pricing-one__title-box">
                                    <h3 className="pricing-one__title">{plan.title}</h3>
                                    <p className="pricing-one__price">
                                        {plan.price} <span>{plan.period}</span>
                                    </p>
                                </div>
                                <ul className="pricing-one__price-list list-unstyled">
                                    {plan.features.map((feature) => (
                                        <li key={feature.id}>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p>{feature.label}</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="pricing-one__btn-box">
                                    <Link href="/contact" className="thm-btn">
                                        Book Now<span className="icon-arrow-right"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default React.memo(PricingOne);