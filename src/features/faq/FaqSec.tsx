"use client";

import React, { useState } from 'react'; 
import { motion } from "framer-motion";
import Link from 'next/link';
interface FaqItem {
    id: number;
    question: string;
    answer: string;
    isActive?: boolean;
}

const faqData: FaqItem[] = [
    {
        id: 1,
        question: 'What services does Birchmount Auto Repair offer?',
        answer:
            'We offer a full range of automotive services including brake repair, oil changes and lube, engine diagnostics, transmission service, and electrical repair. Our certified technicians service all domestic and imported vehicle makes and models.',
    },
    {
        id: 2,
        question: 'How often should I change my oil?',
        answer:
            'Most modern vehicles require an oil change every 5,000 to 8,000 kilometres for conventional oil, or every 10,000 to 15,000 km for full synthetic. We\'ll recommend the right interval based on your vehicle and driving habits during every visit.',
        isActive: true,
    },
    {
        id: 3,
        question: 'How do I know if my brakes need replacing?',
        answer:
            'Common warning signs include squealing or grinding noises when braking, a soft or spongy brake pedal, vibration in the steering wheel, or your vehicle pulling to one side. If you notice any of these, bring your vehicle in for a free brake inspection.',
    },
    {
        id: 4,
        question: 'What does the check engine light mean?',
        answer:
            'The check engine light can signal anything from a loose gas cap to a serious engine or emissions fault. Our OBD-II diagnostic scan reads your vehicle\'s fault codes to identify the exact issue — we\'ll explain the findings clearly before recommending any repairs.',
    },
    {
        id: 5,
        question: 'Do you work on all vehicle makes and models?',
        answer:
            'Yes. Our technicians are experienced with all domestic and imported vehicles including Honda, Toyota, Ford, GM, Chrysler, Hyundai, Kia, Nissan, and more. If it drives, we can service it.',
    },
    {
        id: 6,
        question: 'Do I need an appointment or do you accept walk-ins?',
        answer:
            'We welcome walk-ins for most services, including oil changes. For larger repairs such as transmission or electrical work, booking ahead ensures we can dedicate the right time and resources to your vehicle. Call us at (416) 757-8368 to schedule.',
    },
    {
        id: 7,
        question: 'Do you offer a warranty on your repairs?',
        answer:
            'Yes. All repairs at Birchmount Auto Repair are backed by a warranty on parts and labour. We use quality parts and stand behind every job we complete — your satisfaction and safety are our top priorities.',
    },
    {
        id: 8,
        question: 'Where are you located and what are your hours?',
        answer:
            'We are located at 1064 Birchmount Rd, Scarborough, ON M1K 1S4. Our hours are Monday to Friday 8am–6pm and Saturday 9am–3pm. You can also reach us by phone at (416) 757-8368 or by email at birchmountautorepair@gmail.com.',
    },
];

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