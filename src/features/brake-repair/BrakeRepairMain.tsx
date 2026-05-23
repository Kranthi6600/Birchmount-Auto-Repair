"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ServiceDetailsSidebar from '../maintenance/ServiceDetailsSidebar';

const heroImg = '/assets/images/services/brakeandrepair.jpeg';
const boxImg1 = '/assets/images/services/serviceimg1.jpeg';
const boxImg2 = '/assets/images/services/serviceimg2.jpeg';

const pointsList = [
    'Full brake system inspection included with every service visit',
    'OEM and premium aftermarket parts for all makes and models',
    'Brake pad, rotor, caliper, and brake line replacement',
    'Same-day service available on most brake repairs',
];

const imgBoxData = [
    {
        id: 1,
        image: boxImg1,
        alt: 'Certified brake technicians',
        iconClass: 'icon-certified',
        title: 'Certified Technicians',
        text: 'Our brake specialists are fully trained and certified to service all vehicle makes and models, ensuring your safety with every repair.',
    },
    {
        id: 2,
        image: boxImg2,
        alt: 'Lifetime warranty on brake repairs',
        iconClass: 'icon-medal',
        title: 'Limited Lifetime Warranty',
        text: 'We stand behind our work with a limited lifetime warranty on brake parts and labour, so you can drive with total confidence.',
    },
];

const faqData = [
    {
        id: 1,
        question: 'How do I know if my brakes need replacing?',
        answer: 'Common warning signs include squealing or grinding noises when braking, a vibrating steering wheel, a soft or spongy brake pedal, or your vehicle pulling to one side. If you notice any of these, bring your vehicle in for a free inspection.',
    },
    {
        id: 2,
        question: 'How long do brake pads typically last?',
        answer: 'Brake pads generally last between 30,000 and 70,000 kilometres depending on your driving habits and vehicle type. City driving with frequent stops wears pads faster than highway driving. We recommend an inspection every 20,000 km.',
        isActive: true,
    },
    {
        id: 3,
        question: 'What is included in a brake service?',
        answer: 'Our brake service includes a full inspection of brake pads, rotors, calipers, brake lines, and brake fluid. We measure pad thickness, check for rotor wear and warping, and test the overall stopping performance of your vehicle.',
    },
    {
        id: 4,
        question: 'Do you offer a warranty on brake repairs?',
        answer: 'Yes. All brake repairs at Birchmount Auto Repair come with our limited lifetime warranty on parts and labour. We use quality parts and stand behind every job we complete.',
    },
];

const BrakeRepairMain: React.FC = () => {
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
                                    alt="Brake repair and service at Birchmount Auto Repair"
                                />
                            </div>

                            <h3 className="service-details__title-1">Brake Repair & Service</h3>
                            <p className="service-details__text-1">
                                Your brakes are the most critical safety system on your vehicle. At Birchmount Auto Repair,
                                our certified technicians perform thorough brake inspections and repairs to ensure your
                                vehicle stops reliably every time. We service all makes and models and use quality parts
                                backed by our limited lifetime warranty.
                            </p>
                            <p className="service-details__text-2">
                                Whether you hear squealing when you brake, feel a vibration in the pedal, or your vehicle
                                is pulling to one side, our team can diagnose and fix the problem fast. We handle everything
                                from brake pad replacements to full caliper rebuilds and brake line repairs — all at
                                competitive prices with transparent estimates before any work begins.
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

export default BrakeRepairMain;
