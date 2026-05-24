"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ServiceDetailsSidebar from '../maintenance/ServiceDetailsSidebar';

export interface ImgBoxItem {
    id: number;
    image: string;
    alt: string;
    iconClass: string;
    title: string;
    text: string;
}

export interface FaqItem {
    id: number;
    question: string;
    answer: string;
    isActive?: boolean;
}

export interface ServiceDetailProps {
    heroImg: string;
    heroAlt: string;
    title: string;
    text1: string;
    text2: string;
    pointsList: string[];
    imgBoxData: ImgBoxItem[];
    faqData: FaqItem[];
}

const ServiceDetailTemplate: React.FC<ServiceDetailProps> = ({
    heroImg,
    heroAlt,
    title,
    text1,
    text2,
    pointsList,
    imgBoxData,
    faqData,
}) => {
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
                                    alt={heroAlt}
                                />
                            </div>

                            <h3 className="service-details__title-1">{title}</h3>
                            <p className="service-details__text-1">{text1}</p>
                            <p className="service-details__text-2">{text2}</p>

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

export default ServiceDetailTemplate;
