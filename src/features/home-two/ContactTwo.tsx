"use client";
import React, { useState } from 'react';
const contactOneMap = "/assets/images/shapes/contact-one-map.png";
const contactPopupImg1 = "/assets/images/resources/contact-one-popup-img-1.jpg";
const contactPopupImg2 = "/assets/images/resources/contact-one-popup-img-2.jpg";
const contactPopupImg3 = "/assets/images/resources/contact-one-popup-img-3.jpg";
const contactPopupImg4 = "/assets/images/resources/contact-one-popup-img-4.jpg";
const contactPopupImg5 = "/assets/images/resources/contact-one-popup-img-5.jpg";
import TextAnimation from '@/components/elements/TextAnimation';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import CustomSelect from '@/components/elements/CustomSelect';
import SectionWrapper from '@/components/elements/SectionWrapper';
import Image, { StaticImageData } from 'next/image';
interface MapPoint {
    id: number;
    pointClass: string;
    markerClass: string;
    image: string | StaticImageData;
    address: string;
    street: string;
}

interface ContactItem {
    id: number;
    iconClass: string;
    label: string;
    value: string;
    href: string;
}

interface ServiceOption {
    id: number;
    label: string;
    value: string;
}

const mapPoints: MapPoint[] = [
    {
        id: 1,
        pointClass: 'contact-one__point-1',
        markerClass: 'contact-one__markar',
        image: contactPopupImg1,
        address: 'Scarborough, ON M1K 1S4',
        street: '1064 Birchmount Rd,',
    },
    {
        id: 2,
        pointClass: 'contact-one__point-1 contact-one__point-2',
        markerClass: 'contact-one__markar contact-one__markar-2',
        image: contactPopupImg2,
        address: 'Scarborough, ON M1K 1S4',
        street: '1064 Birchmount Rd,',
    },
    {
        id: 3,
        pointClass: 'contact-one__point-1 contact-one__point-3',
        markerClass: 'contact-one__markar contact-one__markar-3',
        image: contactPopupImg3,
        address: 'Scarborough, ON M1K 1S4',
        street: '1064 Birchmount Rd,',
    },
    {
        id: 4,
        pointClass: 'contact-one__point-1 contact-one__point-4',
        markerClass: 'contact-one__markar contact-one__markar-4',
        image: contactPopupImg4,
        address: 'Scarborough, ON M1K 1S4',
        street: '1064 Birchmount Rd,',
    },
    {
        id: 5,
        pointClass: 'contact-one__point-1 contact-one__point-5',
        markerClass: 'contact-one__markar contact-one__markar-5',
        image: contactPopupImg5,
        address: 'Scarborough, ON M1K 1S4',
        street: '1064 Birchmount Rd,',
    },
];

const contactItems: ContactItem[] = [
    {
        id: 1,
        iconClass: 'icon-call',
        label: 'Call Us Any Time:',
        value: '(416) 757-8368',
        href: 'tel:4167578368',
    },
    {
        id: 2,
        iconClass: 'icon-envelope',
        label: 'Email Us:',
        value: 'info@birchmountautorepair.ca',
        href: 'mailto:info@birchmountautorepair.ca',
    },
];

const serviceOptions: ServiceOption[] = [
    { id: 1, value: "Brake Repair & Service", label: 'Brake Repair & Service' },
    { id: 2, value: "Oil Change & Lube", label: 'Oil Change & Lube' },
    { id: 3, value: "Engine Diagnostics", label: 'Engine Diagnostics' },
    { id: 4, value: "Transmission Service", label: 'Transmission Service' },
    { id: 5, value: "Electrical Repair", label: 'Electrical Repair' },
];

type ContactTwoProp = {
    sectionClass?: string
}
const ContactTwo: React.FC<ContactTwoProp> = ({ sectionClass = "" }) => {
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
        if (formData.email && formData.serviceType) {
            // This is a demo project, so we are not uploading the form data to the backend.
            // In a real project, you would upload the form data to the backend.
            // clear form
            setFormData({
                name: '',
                email: '',
                serviceType: '',
                message: '',
            });
        }


    }
    return (
        <SectionWrapper id='contact' className={`contact-one ${sectionClass}`}>
            <div className="contact-one__bg-color"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-6">
                        <div className="contact-one__left">
                            <div className="contact-one__map-box">
                                <div className="contact-one__map-img">
                                    <Image src={contactOneMap} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="" />
                                </div>
                                {mapPoints.map((point) => (
                                    <div key={point.id} className={point.pointClass}>
                                        <div className={point.markerClass}>
                                            <i className="ripple"></i>
                                        </div>
                                        <div className="contact-one__popup-box">
                                            <div className="contact-one__popup">
                                                <div className="contact-one__popup-inner">
                                                    <div className="contact-one__popup-img">
                                                        <Image src={point.image} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="" />
                                                    </div>
                                                    <div className="contact-one__popup-content">
                                                        <p>
                                                            Suite 567 <br /> Springfield, IL 62701
                                                        </p>
                                                        <span>{point.street}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="contact-one__call-box">
                                <ul className="contact-one__call-list list-unstyled">
                                    {contactItems.map((item) => (
                                        <li key={item.id}>
                                            <div className="contact-one__call-icon">
                                                <span className={item.iconClass}></span>
                                            </div>
                                            <div className="contact-one__content">
                                                <p>{item.label}</p>
                                                <h4>
                                                    <a href={item.href}>{item.value}</a>
                                                </h4>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="contact-one__right">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <h6 className="section-title__tagline">
                                    <span className="section-title__tagline-border"></span>Contact Us
                                </h6>
                                <h3 className="section-title__title title-animation">
                                    <TextAnimation>Book an Appointment or Get a Free Estimate</TextAnimation>
                                </h3>
                            </div>
                            <FadeInAdvanced
                                delay={100}
                                variant='slideInRight'
                            >
                                <form className="contact-form-validated contact-one__form"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-one__input-box">
                                                <input type="text" onChange={handleChange} name="name" placeholder="Your Name" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-one__input-box">
                                                <input type="email" onChange={handleChange} name="email" placeholder="Email Address" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="contact-one__input-box">
                                                <div className="select-box">
                                                    <CustomSelect
                                                        value={formData.serviceType || serviceOptions[1].value}
                                                        onChange={handleSelectChange}
                                                        optionArray={serviceOptions}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="contact-one__input-box text-message-box">
                                                <textarea name="message" onChange={handleChange} placeholder="Message"></textarea>
                                            </div>
                                            <div className="contact-one__btn-box">
                                                <button type="submit" className="thm-btn">
                                                    Submit Now<span className="icon-arrow-right"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </FadeInAdvanced>
                            <div className="result"></div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ContactTwo;