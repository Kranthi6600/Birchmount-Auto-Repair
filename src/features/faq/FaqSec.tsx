"use client";

import React, { useState } from 'react'; 
import { motion } from "framer-motion";
import Link from 'next/link';
import { faqData, type FaqItem } from '@/contents/faq/faqData';

const leftColumnFaqs = faqData.slice(0, 4);
const rightColumnFaqs = faqData.slice(4, 8);

interface AccordionItemProps {
    item: FaqItem;
    isOpen: boolean;
    onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onToggle }) => {
    return (
        <div className={`accrodion${isOpen ? ' active' : ''}`}>
            <div className="accrodion-title" onClick={onToggle}>
                <h4>{item.question}</h4>
            </div>
            {isOpen && (
                <div className="accrodion-content">
                    <motion.div
                        initial={{ y: -40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut"
                        }}
                        viewport={{ amount: 0.05 }}
                        className="inner"
                    >
                        <p>{item.answer}</p>
                        <Link href="/faq" className="faq-read-more">
                            Read more
                        </Link>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

const FaqSec: React.FC = () => {
    const [openId, setOpenId] = useState<number | null>(
        faqData.find((item) => item.isActive)?.id ?? null
    ); 
    const handleToggle = (id: number) => {
        setOpenId((prev) => (prev === id ? null : id));
    }; 
    return (
        <section className="faq-one faq-page">
            <div className="container">
                <div className="row">
                    {/* Left Column */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-page__single">
                            <div className="accrodion-grp faq-one-accrodion" >
                                {leftColumnFaqs.map((item) => (
                                    <AccordionItem
                                        key={item.id}
                                        item={item}
                                        isOpen={openId === item.id}
                                        onToggle={() => handleToggle(item.id)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-page__single">
                            <div className="accrodion-grp faq-one-accrodion" >
                                {rightColumnFaqs.map((item) => (
                                    <AccordionItem
                                        key={item.id}
                                        item={item}
                                        isOpen={openId === item.id}
                                        onToggle={() => handleToggle(item.id)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSec;