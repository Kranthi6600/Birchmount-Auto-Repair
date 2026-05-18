"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion"; 
const faqOneImg1 = "/assets/images/resources/faq-one-img-1.jpg";
import CounterUp from '@/components/elements/CounterUp';
import TextAnimation from '@/components/elements/TextAnimation';
import Image from 'next/image';
import Link from 'next/link';

interface FaqItem {
    id: number;
    question: string;
    answer: string;
    isActive: boolean;
}

const faqItems: FaqItem[] = [
    {
        id: 1,
        question: 'Why is my check engine light on?',
        answer: 'The check engine light can indicate anything from a loose gas cap to a serious engine issue. Our diagnostic scan tools pinpoint the exact cause — bring it in and we\'ll check it for you.',
        isActive: false,
    },
    {
        id: 2,
        question: 'How often should I change my oil?',
        answer: 'Most modern vehicles with synthetic oil need a change every 7,500–10,000 km. Check your owner\'s manual or ask us — we\'ll recommend the right interval for your driving habits.',
        isActive: true,
    },
    {
        id: 3,
        question: 'How do I know if my brakes need replacing?',
        answer: 'Squealing, grinding, or a spongy brake pedal are warning signs. If you hear or feel anything unusual when braking, book an inspection — worn brakes are a serious safety issue.',
        isActive: false,
    },
    {
        id: 4,
        question: 'Do you work on all makes and models?',
        answer: 'Yes — our certified technicians service all domestic and import vehicles, including Honda, Toyota, Ford, GM, Hyundai, Kia, and more. If it drives, we can fix it.',
        isActive: false,
    },
];

const FaqTwo: React.FC = () => {
    const [activeFaq, setActiveFaq] = useState<number>(2);
    return (
        <section className="faq-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div
                            className="faq-one__left wow slideInLeft"
                            data-wow-delay="100ms"
                            data-wow-duration="2500ms"
                        >
                            <div className="faq-one__img-box">
                                <div className="faq-one__img">
                                    <Image src={faqOneImg1} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="" />
                                </div>
                                <div className="faq-one__ratting-box">
                                    <div className="faq-one__ratting">
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                    </div>
                                    <p className="faq-one__ratting-text">
                                        Based on
                                        <span className="odometer" ><CounterUp ending={4800} /></span>
                                        <span>+</span> reviews, Trust<br /> Pilot and ambitionbox.
                                    </p>
                                </div>
                                <div className="faq-one__shape-1"></div>
                                <div className="faq-one__shape-2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="faq-one__right">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <h6 className="section-title__tagline">
                                    <span className="section-title__tagline-border"></span>Trusted Professionals
                                </h6>
                                <h3 className="section-title__title title-animation">
                                    <TextAnimation > Frequently Asking Any Question</TextAnimation>
                                </h3>
                            </div>
                            <div className="accrodion-grp faq-one-accrodion" >
                                {faqItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className={`accrodion ${activeFaq === item?.id ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-title" onClick={() => setActiveFaq(item?.id)}>
                                            <h4>{item.question}</h4>
                                        </div>
                                        <div style={{ display: `${activeFaq === item?.id ? 'block' : 'none'}` }} className="accrodion-content">
                                            <div className="inner">
                                                <motion.p
                                                    initial={{ y: -40, opacity: 0 }}
                                                    whileInView={{ y: 0, opacity: 1 }}
                                                    transition={{
                                                        duration: 0.5,
                                                        ease: "easeOut"
                                                    }}
                                                    viewport={{ amount: 0.05 }}
                                                >
                                                    {item.answer}
                                                </motion.p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="faq-one__bottom">
                    <p className="faq-one__bottom-text">Still have questions? Our team is happy to help — just call us at (416) 757-8368.</p>
                    <div className="faq-one__bottom-btn">
                        <Link href="/contact" className="thm-btn">
                            here to help<span className="icon-arrow-right"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqTwo;