"use client";
import React, { useState } from 'react';

import videoOneBg from '@/assets/images/backgrounds/video-one-bg.jpg';
import videoOneContactImg1 from '@/assets/images/resources/video-one-contact-img-1.png';
import JarallaxSection from '@/components/elements/JarallaxSection';
import CustomSelect from '@/components/elements/CustomSelect';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import TextAnimation from '@/components/elements/TextAnimation';
import SectionWrapper from '@/components/elements/SectionWrapper';
import useFixproContext from '@/components/context/useFixproContext';
import Image from 'next/image';

interface ContactInfo {
    id: number;
    iconClass: string;
    lines: { text: string; href?: string }[];
}
const serviceItems = [
    { id: 1, value: "Service type", label: "Service type" },
    { id: 2, value: "Type Of Service 01", label: "Type Of Service 01" },
    { id: 3, value: "Type Of Service 02", label: "Type Of Service 02" },
    { id: 4, value: "Type Of Service 03", label: "Type Of Service 03" },
    { id: 5, value: "Type Of Service 04", label: "Type Of Service 04" },
]
const contactInfoItems: ContactInfo[] = [
    {
        id: 1,
        iconClass: 'icon-location',
        lines: [{ text: '3060 Commercial Street Road Fratton, Australia' }],
    },
    {
        id: 2,
        iconClass: 'icon-call',
        lines: [
            { text: '+088 (246) 642-27-10', href: 'tel:0882466422710' },
            { text: '+088 (246) 642-27-10', href: 'tel:0882466422710' },
        ],
    },
    {
        id: 3,
        iconClass: 'icon-envelope',
        lines: [
            { text: 'example@mail.com', href: 'mailto:example@mail.com' },
            { text: 'example@mail.com', href: 'mailto:example@mail.com' },
        ],
    },
];

const VideoOne: React.FC = () => {
    const { handleVideoClick } = useFixproContext();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        serviceType: '',
        message: '',
    });

    const handleSelectChange = (value: string) => {
        setFormData((prev) => ({ ...prev, serviceType: value }));
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Handle form submission logic here
    };

    return (
        <SectionWrapper id='contact' className="video-one">
            <JarallaxSection className="video-one__bg-color" imgSrc={videoOneBg.src} overlayOpacity={0.8} >

                <div >
                </div>
            </JarallaxSection>

            <div className="container">
                <div className="video-one__inner wow fadeInUp" data-wow-delay="300ms">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <h6 className="section-title__tagline">
                            <span className="section-title__tagline-border"></span>Latest Video
                        </h6>
                        <h3 className="section-title__title title-animation">
                            <TextAnimation animationStyle='style1'>
                                Let Us Know Or Contact Us
                            </TextAnimation>
                        </h3>
                    </div>
                    <p className="video-one__text">
                        There are many variations of passages available but the majority have suffered alteration
                        <br /> in some form by injected humour randomised words look even going
                        <br /> to use a passage believable.
                    </p>
                    <div className="video-one__video-link">
                        <span onClick={(e) => handleVideoClick(e, "https://www.youtube.com/watch?v=Get7rqXYrbQ")}
                            className="video-popup cursor-pointer"
                            rel="noreferrer"
                        >
                            <div className="video-one__video-icon">
                                <span className="fa fa-play"></span>
                                <i className="ripple"></i>
                            </div>
                        </span>
                    </div>
                    <div className="video-one__contact-box">
                        <FadeInAdvanced className='video-one__img-1' variant='slideInRight' delay={100} threshold={0.05}>
                            <Image src={videoOneContactImg1} style={{ width: "auto", height: "auto" }} alt="Image" className="float-bob-x" />
                        </FadeInAdvanced>
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <form
                                    className="contact-form-validated video-one-contact__form"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="video-one-contact__input-box">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Your Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="video-one-contact__input-box">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email Address"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="video-one-contact__input-box">
                                                <div className="select-box">
                                                    <CustomSelect
                                                        value={formData.serviceType || serviceItems[0].value}
                                                        onChange={handleSelectChange}
                                                        optionArray={serviceItems}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="video-one-contact__input-box text-message-box">
                                                <textarea
                                                    name="message"
                                                    placeholder="Message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                            <div className="video-one-contact__btn-box">
                                                <button type="submit" className="thm-btn">
                                                    send a message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="result"></div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="video-one-contact__info-box">
                                    <h3 className="video-one-contact__info-title">Contact Info</h3>
                                    <ul className="video-one-contact__info-list list-unstyled">
                                        {contactInfoItems.map((item) => (
                                            <li key={item.id}>
                                                <div className="icon">
                                                    <span className={item.iconClass}></span>
                                                </div>
                                                <div className="content">
                                                    {item.lines.map((line, index) => (
                                                        <p key={index}>
                                                            {line.href ? (
                                                                <a href={line.href}>{line.text}</a>
                                                            ) : (
                                                                line.text
                                                            )}
                                                        </p>
                                                    ))}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </SectionWrapper>
    );
};

export default VideoOne;