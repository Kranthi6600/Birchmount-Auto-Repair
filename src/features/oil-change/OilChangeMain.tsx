"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ServiceDetailsSidebar from '../maintenance/ServiceDetailsSidebar';

const heroImg = '/assets/images/services/oilandlube.jpeg';
const boxImg1 = '/assets/images/services/serviceimg3.jpeg';
const boxImg2 = '/assets/images/services/serviceimg4.jpeg';

const pointsList = [
    'Conventional, synthetic blend, and full synthetic oil available',
    'Multi-point vehicle inspection included with every oil change',
    'Filter replacement, fluid top-ups, and tire pressure check',
    'Quick turnaround — most services completed in under 30 minutes',
];

const imgBoxData = [
    {
        id: 1,
        image: boxImg1,
        alt: 'Trained oil change technicians at Birchmount Auto Repair',
        iconClass: 'icon-certified',
        title: 'Expert Auto Repair Technicians',
        text: 'With years of hands-on experience across all vehicle makes and models, our certified mechanics bring full-service auto repair knowledge to every oil change — keeping your entire vehicle running at its best.',
    },
    {
        id: 2,
        image: boxImg2,
        alt: 'Engine protection guaranteed with quality oil and filters',
        iconClass: 'icon-medal',
        title: 'Engine Protection Guaranteed',
        text: 'We use quality oils and genuine filters to protect your engine. Every oil change comes with a service reminder and maintenance record to keep your car on schedule.',
    },
];

const faqData = [
    {
        id: 1,
        question: 'How often should I change my oil?',
        answer: 'Most modern vehicles require an oil change every 5,000 to 8,000 kilometres for conventional oil, or every 10,000 to 15,000 km for full synthetic. Your owner\'s manual has the exact recommendation for your vehicle, and our technicians are happy to advise you.',
    },
    {
        id: 2,
        question: 'What is the difference between conventional and synthetic oil?',
        answer: 'Conventional oil is refined from crude oil and suits most standard engines. Synthetic oil is engineered for better performance in extreme temperatures and high-mileage engines. We\'ll help you select the right oil type and viscosity based on your vehicle and driving conditions.',
        isActive: true,
    },
    {
        id: 3,
        question: 'Do I need an appointment for an oil change?',
        answer: 'No appointment is needed for most oil changes. We welcome walk-ins and aim to have your vehicle in and out in under 30 minutes so you can get back to your day without a long wait.',
    },
    {
        id: 4,
        question: 'What else do you inspect during an oil change?',
        answer: 'Every oil change at Birchmount Auto Repair includes a multi-point inspection covering tire pressure, air filter condition, fluid levels (coolant, brake, power steering, windshield washer), belts, and exterior lights. We\'ll flag anything that needs attention before it becomes a bigger problem.',
    },
];

const OilChangeMain: React.FC = () => {
    const [openId, setOpenId] = useState<number | null>(
        faqData.find((item) => item.isActive)?.id ?? null
    );

    return (
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <ServiceDetailsSidebar />
                    <div className="col-xl-8 col-lg-7">
                        <div className="service-details__left">

                            <div className="service-details__img">
                                <Image
                                    src={heroImg}
                                    width={850}
                                    height={0}
                                    sizes="100vw"
                                    style={{ height: 'auto' }}
                                    alt="Oil change and lube service at Birchmount Auto Repair"
                                />
                            </div>

                            <h3 className="service-details__title-1">Oil Change & Lube</h3>
                            <p className="service-details__text-1">
                                Regular oil changes are the single most important thing you can do to protect your engine.
                                At Birchmount Auto Repair, we perform quick, thorough oil changes using the right oil for
                                your vehicle — whether conventional, synthetic blend, or full synthetic. Our technicians
                                also inspect and top up all essential fluids during every visit.
                            </p>
                            <p className="service-details__text-2">
                                Skipping oil changes leads to engine wear, overheating, and costly repairs down the road.
                                With Birchmount Auto Repair, you get a complete lube service in about 30 minutes or less —
                                no appointment necessary. We also carry out a full multi-point inspection so we can catch
                                any developing issues before they turn into major problems.
                            </p>

                            <ul className="service-details__points-list list-unstyled">
                                {pointsList.map((point, i) => (
                                    <li key={i}>
                                        <div className="icon">
                                            <span className="icon-arrow-right"></span>
                                        </div>
                                        <p>{point}</p>
                                    </li>
                                ))}
                            </ul>

                            <div className="service-details__img-box">
                                <div className="row">
                                    {imgBoxData.map((item) => (
                                        <div key={item.id} className="col-xl-6">
                                            <div className="service-details__img-box-single">
                                                <div className="service-details__img-box-img">
                                                    <Image
                                                        src={item.image}
                                                        width={410}
                                                        height={260}
                                                        sizes="(max-width: 768px) 100vw, 410px"
                                                        style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                                                        alt={item.alt}
                                                    />
                                                </div>
                                                <div className="service-details__img-box-content">
                                                    <div className="service-details__img-box-content-icon-and-title">
                                                        <div className="service-details__img-box-content-icon">
                                                            <span className={item.iconClass}></span>
                                                        </div>
                                                        <h3 className="service-details__img-box-content-title">
                                                            {item.title}
                                                        </h3>
                                                    </div>
                                                    <p className="service-details__img-box-content-text">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQ */}
                            <div className="service-details__faq-box">
                                <div className="accrodion-grp faq-one-accrodion">
                                    {faqData.map((item) => (
                                        <div
                                            key={item.id}
                                            className={`accrodion${openId === item.id ? ' active' : ''}`}
                                        >
                                            <div
                                                className="accrodion-title"
                                                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                                            >
                                                <h4>{item.question}</h4>
                                            </div>
                                            {openId === item.id && (
                                                <div className="accrodion-content">
                                                    <motion.div
                                                        initial={{ y: -40, opacity: 0 }}
                                                        whileInView={{ y: 0, opacity: 1 }}
                                                        transition={{ duration: 0.5, ease: 'easeOut' }}
                                                        viewport={{ amount: 0.05 }}
                                                        className="inner"
                                                    >
                                                        <p>{item.answer}</p>
                                                    </motion.div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OilChangeMain;
