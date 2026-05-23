"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ServiceDetailsSidebar from '../maintenance/ServiceDetailsSidebar';

const heroImg = '/assets/images/services/transmissionservice.jpeg';
const boxImg1 = '/assets/images/services/serviceimg7.jpeg';
const boxImg2 = '/assets/images/services/serviceimg8.jpeg';

const pointsList = [
    'Transmission fluid flush and replacement for automatic and manual vehicles',
    'Full transmission inspection including seals, gaskets, and filters',
    'Diagnosis of slipping gears, rough shifting, and transmission warning lights',
    'Rebuild and replacement services for severely damaged transmissions',
];

const imgBoxData = [
    {
        id: 1,
        image: boxImg1,
        alt: 'Transmission fluid service at Birchmount Auto Repair',
        iconClass: 'icon-certified',
        title: 'Automatic & Manual Expertise',
        text: 'Whether you drive an automatic, manual, or CVT vehicle, our technicians are experienced with all transmission types — delivering precise repairs that restore smooth, reliable shifting.',
    },
    {
        id: 2,
        image: boxImg2,
        alt: 'Transmission rebuild and replacement service',
        iconClass: 'icon-medal',
        title: 'Quality Parts & Warranty',
        text: 'We use high-quality replacement parts on every transmission repair and stand behind our work with a warranty on parts and labour, so you can drive away with confidence.',
    },
];

const faqData = [
    {
        id: 1,
        question: 'What are the signs my transmission needs service?',
        answer: 'Common warning signs include delayed or rough gear shifts, slipping between gears, a burning smell, transmission warning light on the dashboard, or fluid leaks under your vehicle. If you notice any of these, bring your car in for an inspection right away.',
    },
    {
        id: 2,
        question: 'How often should transmission fluid be changed?',
        answer: 'Most manufacturers recommend a transmission fluid change every 50,000 to 100,000 kilometres, though this varies by vehicle and driving conditions. Regular fluid changes help prevent premature wear and extend the life of your transmission significantly.',
        isActive: true,
    },
    {
        id: 3,
        question: 'What is the difference between a transmission flush and a fluid change?',
        answer: 'A fluid change drains the old fluid from the pan and replaces it with fresh fluid. A full flush uses a machine to push new fluid through the entire system, removing nearly all of the old fluid and any built-up contaminants. We\'ll recommend the right service based on your vehicle\'s condition.',
    },
    {
        id: 4,
        question: 'Can you repair my transmission or does it need to be replaced?',
        answer: 'Not all transmission problems require a full replacement. Many issues — such as solenoid failures, seal leaks, or fluid-related problems — can be repaired at a fraction of the cost. We\'ll diagnose the issue thoroughly and give you an honest recommendation before any work begins.',
    },
];

const TransmissionServiceMain: React.FC = () => {
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
                                    alt="Transmission service and repair at Birchmount Auto Repair"
                                />
                            </div>

                            <h3 className="service-details__title-1">Transmission Service</h3>
                            <p className="service-details__text-1">
                                Your transmission is one of the most complex and critical components in your vehicle,
                                responsible for transferring engine power to the wheels. At Birchmount Auto Repair, our
                                experienced technicians handle everything from routine fluid flushes to full transmission
                                rebuilds — keeping your vehicle shifting smoothly and reliably.
                            </p>
                            <p className="service-details__text-2">
                                Ignoring transmission problems can lead to complete transmission failure, which is one of
                                the most expensive repairs a vehicle can need. Early diagnosis and regular servicing can
                                save you thousands. Whether you&apos;re experiencing slipping gears, delayed shifts, or a
                                warning light on your dash, our team will diagnose the issue accurately and get you back
                                on the road fast.
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

export default TransmissionServiceMain;
