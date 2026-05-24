"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ServiceDetailsSidebar from '../maintenance/ServiceDetailsSidebar';

const heroImg = '/assets/images/services/serviceimg13.jpeg';
const boxImg1 = '/assets/images/services/serviceimg13-1.jpeg';
const boxImg2 = '/assets/images/services/serviceimg13-2.jpeg';

const pointsList = [
    'OBD-II scanning and advanced computer diagnostics for all makes and models',
    'Check engine light diagnosis and fault code interpretation',
    'Full engine performance analysis including fuel, ignition, and emissions systems',
    'Honest, transparent repair recommendations with written estimates',
];

const imgBoxData = [
    {
        id: 1,
        image: boxImg1,
        alt: 'Advanced engine diagnostic equipment at Birchmount Auto Repair',
        iconClass: 'icon-certified',
        title: 'Advanced Diagnostic Equipment',
        text: 'We use industry-leading OBD-II scanners and diagnostic software to pinpoint engine issues accurately — saving you time and money by getting the repair right the first time.',
    },
    {
        id: 2,
        image: boxImg2,
        alt: 'Transparent repair estimates after engine diagnostics',
        iconClass: 'icon-medal',
        title: 'Transparent Repair Estimates',
        text: 'After every diagnostic scan, we provide a clear written estimate explaining exactly what was found and what needs to be fixed — no hidden charges, no unnecessary repairs.',
    },
];

const faqData = [
    {
        id: 1,
        question: 'What does a check engine light mean?',
        answer: 'The check engine light can indicate anything from a loose gas cap to a serious engine or emissions fault. Our diagnostic scan reads the fault codes stored in your vehicle\'s computer and helps us identify the exact issue quickly and accurately.',
    },
    {
        id: 2,
        question: 'How long does an engine diagnostic take?',
        answer: 'Most diagnostic scans take 30 to 60 minutes. If the issue requires further investigation — such as a test drive or component testing — it may take a little longer, but we\'ll keep you informed throughout the entire process.',
        isActive: true,
    },
    {
        id: 3,
        question: 'Is there a fee for a diagnostic scan?',
        answer: 'We charge a standard diagnostic fee that is applied toward the cost of any repair we perform. We\'ll always explain our findings clearly and get your approval before proceeding with any work.',
    },
    {
        id: 4,
        question: 'Can you diagnose all vehicle makes and models?',
        answer: 'Yes. Our diagnostic equipment covers all domestic and imported vehicle makes and models, including cars, trucks, and SUVs. Whether you drive a Honda, Ford, Toyota, GM, or anything in between, our technicians have you covered.',
    },
];

const EngineDiagnosticsMain: React.FC = () => {
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
                                    alt="Engine diagnostics service at Birchmount Auto Repair"
                                />
                            </div>

                            <h3 className="service-details__title-1">Engine Diagnostics</h3>
                            <p className="service-details__text-1">
                                Modern vehicles are equipped with sophisticated computer systems that continuously monitor
                                engine performance. When your check engine light comes on, it&apos;s your car signalling that
                                something needs attention. At Birchmount Auto Repair, we use advanced diagnostic equipment
                                to read fault codes, identify the root cause, and recommend the right repair — fast.
                            </p>
                            <p className="service-details__text-2">
                                From misfires and oxygen sensor failures to emissions issues and fuel system faults, our
                                technicians have the tools and expertise to diagnose problems across all makes and models.
                                We don&apos;t guess — we diagnose accurately so you only pay for what your vehicle actually needs,
                                with a clear written estimate before any work begins.
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

export default EngineDiagnosticsMain;
