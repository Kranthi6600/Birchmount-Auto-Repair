"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ServiceDetailsSidebar from '../maintenance/ServiceDetailsSidebar';
import { useService } from '@/hooks/useServices';
import RichTextRenderer from '@/components/elements/RichTextRenderer';

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
    slug?: string;
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
    slug,
}) => {
    const { data: apiService } = useService(slug || '');

    const mergedTitle = apiService?.title || title;
    const mergedText1 = apiService?.description || text1;
    const mergedText2 = apiService?.content || text2;
    const mergedHeroImg = apiService?.thumbnail || heroImg;
    const mergedHeroAlt = apiService?.thumbnail_alt || heroAlt;

    const mergedFaqData: FaqItem[] = React.useMemo(() => {
        if (slug && apiService?.faqs && apiService.faqs.length > 0) {
            return apiService.faqs.map((f, idx) => ({
                id: idx + 1,
                question: f.question,
                answer: f.answer,
                isActive: idx === 0,
            }));
        }
        return faqData;
    }, [apiService?.faqs, faqData, slug]);

    const [openId, setOpenId] = useState<number | null>(
        mergedFaqData.find((item) => item.isActive)?.id ?? null
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
                                    src={mergedHeroImg}
                                    width={850}
                                    height={0}
                                    sizes="100vw"
                                    style={{ height: 'auto' }}
                                    alt={mergedHeroAlt}
                                />
                            </div>

                            <h3 className="service-details__title-1">{mergedTitle}</h3>
                            <RichTextRenderer html={mergedText1} className="service-details__text-1" />
                            <RichTextRenderer html={mergedText2} className="service-details__text-2" />

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
                                    {mergedFaqData.map((item) => (
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
