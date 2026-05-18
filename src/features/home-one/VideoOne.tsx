"use client";
import React, { useState } from 'react';

const videoOneBg = "/assets/images/backgrounds/video-one-bg.jpg";
const videoOneContactImg1 = "/assets/images/resources/video-one-contact-img-1.png";
import JarallaxSection from '@/components/elements/JarallaxSection';
import CustomSelect from '@/components/elements/CustomSelect';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import TextAnimation from '@/components/elements/TextAnimation';
import SectionWrapper from '@/components/elements/SectionWrapper';
import useBirchmountAutoRepairContext from '@/components/context/useBirchmountAutoRepairContext';
import Image from 'next/image';

interface ContactInfo {
    id: number;
    iconClass: string;
    lines: { text: string; href?: string }[];
}
const serviceItems = [
    { id: 1, value: "Select a Service", label: "Select a Service" },
    { id: 2, value: "Brake Repair & Service", label: "Brake Repair & Service" },
    { id: 3, value: "Oil Change & Lube", label: "Oil Change & Lube" },
    { id: 4, value: "Engine Diagnostics", label: "Engine Diagnostics" },
    { id: 5, value: "Transmission Service", label: "Transmission Service" },
    { id: 6, value: "Tire Sales & Rotation", label: "Tire Sales & Rotation" },
    { id: 7, value: "Electrical Repair", label: "Electrical Repair" },
]
const contactInfoItems: ContactInfo[] = [
    {
        id: 1,
        iconClass: 'icon-location',
        lines: [{ text: '1064 Birchmount Rd, Scarborough, ON M1K 1S4' }],
    },
    {
        id: 2,
        iconClass: 'icon-call',
        lines: [
            { text: '(416) 757-8368', href: 'tel:4167578368' },
        ],
    },
    {
        id: 3,
        iconClass: 'icon-envelope',
        lines: [
            { text: 'info@birchmountautorepair.ca', href: 'mailto:info@birchmountautorepair.ca' },
        ],
    },
];

const VideoOne: React.FC = () => {
    const { handleVideoClick } = useBirchmountAutoRepairContext();
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
            <JarallaxSection className="video-one__bg-color" imgSrc={videoOneBg} overlayOpacity={0.8} >

                <div >
                </div>
            </JarallaxSection>

            <div className="container">
                <div className="video-one__inner wow fadeInUp" data-wow-delay="300ms">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <h6 className="section-title__tagline">
                            <span className="section-title__tagline-border"></span>Watch &amp; Contact Us
                        </h6>
                        <h3 className="section-title__title title-animation">
                            <TextAnimation animationStyle='style1'>
                                Why Scarborough Trusts Birchmount Auto Repair
                            </TextAnimation>
                        </h3>
                    </div>
                    <p className="video-one__text">
                        Have a question or ready to book? Send us a message or call us directly —
                        <br /> we&apos;re always happy to help Scarborough drivers get back on the road.
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
                            <Image src={videoOneContactImg1} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="Image" className="float-bob-x" />
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