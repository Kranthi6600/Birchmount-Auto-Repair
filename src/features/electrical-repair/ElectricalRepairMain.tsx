"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ServiceDetailsSidebar from '../maintenance/ServiceDetailsSidebar';

const heroImg = '/assets/images/services/electricalrepair.jpeg';
const boxImg1 = '/assets/images/services/serviceimg9.jpeg';
const boxImg2 = '/assets/images/services/serviceimg10.jpeg';

const pointsList = [
    'Battery testing, charging system diagnosis, and replacement',
    'Alternator and starter motor repair and replacement',
    'Wiring diagnosis and repair for shorts, open circuits, and corrosion',
    'Full electrical system scan including fuses, relays, and control modules',
];

const imgBoxData = [
    {
        id: 1,
        image: boxImg1,
        alt: 'Electrical system diagnosis at Birchmount Auto Repair',
        iconClass: 'icon-certified',
        title: 'Precise Electrical Diagnosis',
        text: 'Modern vehicles rely on dozens of interconnected electrical systems. Our technicians use advanced diagnostic tools to trace faults quickly and accurately — pinpointing the exact cause without unnecessary guesswork.',
    },
    {
        id: 2,
        image: boxImg2,
        alt: 'Battery and alternator repair at Birchmount Auto Repair',
        iconClass: 'icon-medal',
        title: 'Reliable Repairs, Every Time',
        text: 'From a dead battery to a complex wiring fault, we fix electrical problems right the first time using quality parts and thorough testing — backed by our warranty on parts and labour.',
    },
];

const faqData = [
    {
        id: 1,
        question: 'What are common signs of an electrical problem in my car?',
        answer: 'Common signs include a battery warning light, flickering or dim headlights, electrical accessories not working, a car that won\'t start or cranks slowly, blown fuses, or burning smells near the fuse box. If you notice any of these, it\'s best to have your vehicle inspected promptly.',
    },
    {
        id: 2,
        question: 'How do I know if my battery or alternator is the problem?',
        answer: 'A failing battery typically causes slow cranking or a no-start condition, especially in cold weather. A bad alternator usually causes the battery warning light to appear and may lead to a dead battery even after a fresh charge. We test both components to give you a definitive answer.',
        isActive: true,
    },
    {
        id: 3,
        question: 'Can you fix electrical problems on any vehicle make or model?',
        answer: 'Yes. Our technicians are experienced with the electrical systems of all domestic and imported vehicles, including cars, trucks, and SUVs. We work on everything from simple battery replacements to complex wiring and control module issues.',
    },
    {
        id: 4,
        question: 'How long does an electrical repair take?',
        answer: 'Simple repairs like a battery replacement can be done in under an hour. More complex wiring or module issues may take longer depending on the fault. We\'ll give you a time estimate after diagnosing the problem and keep you updated throughout the repair process.',
    },
];

const ElectricalRepairMain: React.FC = () => {
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
                                    alt="Electrical repair service at Birchmount Auto Repair"
                                />
                            </div>

                            <h3 className="service-details__title-1">Electrical Repair</h3>
                            <p className="service-details__text-1">
                                Today&apos;s vehicles are more electrically complex than ever, with sophisticated systems
                                controlling everything from the engine and transmission to safety features and comfort
                                accessories. At Birchmount Auto Repair, our technicians are trained to diagnose and repair
                                electrical faults across all vehicle makes and models — quickly and accurately.
                            </p>
                            <p className="service-details__text-2">
                                Whether your battery keeps dying, your alternator is failing, or you&apos;re dealing with
                                mysterious warning lights and malfunctioning accessories, we have the tools and expertise
                                to find the root cause and fix it right. We provide a full electrical inspection with
                                every diagnosis and a clear written estimate before any repairs begin.
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

export default ElectricalRepairMain;
