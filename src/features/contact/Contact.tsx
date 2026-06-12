"use client";

import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import CustomSelect from '@/components/elements/CustomSelect';

const serviceOptions = [
    { id: 1, value: "Complete Auto Body Repair", label: "Complete Auto Body Repair" },
    { id: 2, value: "Collision Repairs", label: "Collision Repairs" },
    { id: 3, value: "Mechanical Repair", label: "Mechanical Repair" },
    { id: 4, value: "Towing & Roadside Assistance", label: "Towing & Roadside Assistance" },
    { id: 5, value: "Insurance", label: "Insurance" },
    { id: 6, value: "Rentals", label: "Rentals" },
];

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (value: string) => {
        setFormData((prev) => ({ ...prev, subject: value }));
    };

    const sendContactForm = async () => {
        if (!formData.name.trim() || !formData.email.trim()) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Fields',
                text: 'Please fill in at least your name and email.',
                confirmButtonColor: '#e74c3c',
            });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            Swal.fire({
                icon: 'warning',
                title: 'Invalid Email',
                text: 'Please enter a valid email address.',
                confirmButtonColor: '#e74c3c',
            });
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong.');
            }

            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: data.message || 'Thank you for reaching out. We will get back to you shortly.',
                confirmButtonColor: '#75d82fff',
            });

            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });

        } catch {
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: 'Something went wrong. Please try again later.',
                confirmButtonColor: '#e74c3c',
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await sendContactForm();
    };

    return (
        <>
            <section className="contact-info">
                <div className="container">
                    <div className="row">
                        <FadeInAdvanced className="col-xl-4 col-lg-4" variant='fadeInLeft' delay={100}>
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="icon-call"></span>
                                </div>
                                <p>Contact Us</p>
                                <h3><a href="tel:4167578368">0416.757.8368</a></h3>
                            </div>
                        </FadeInAdvanced>
                        <FadeInAdvanced className="col-xl-4 col-lg-4" variant='fadeInUp' delay={200}>
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="icon-envelope"></span>
                                </div>
                                <p>Mail Us</p>
                                <h3><a href="mailto:birchmountautorepair@gmail.com">birchmountautorepair@gmail.com</a></h3>
                            </div>
                        </FadeInAdvanced>
                        <FadeInAdvanced className="col-xl-4 col-lg-4" variant='fadeInRight' delay={300}>
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="icon-location"></span>
                                </div>
                                <p>Our Office Location</p>
                                <h3>1064 Birchmount Rd, Scarborough, ON M1K 1S4</h3>
                            </div>
                        </FadeInAdvanced>
                    </div>
                </div>
            </section>
            <section className="contact-page">
                <div className="container">
                    <div className="contact-page__inner">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="contact-page__left">
                                    <iframe
                                        src="https://www.google.com/maps?q=1064+Birchmount+Rd,+Scarborough,+ON+M1K+1S4&output=embed"
                                        className="google-map__one"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="contact-page__right">
                                    <h3 className="contact-page__form-title">Get A Free Quote</h3>
                                    <form
                                        ref={formRef}
                                        className="contact-form-validated contact-page__form"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact-page__input-box">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        placeholder="Your name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact-page__input-box">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Your Email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact-page__input-box">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        placeholder="Phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact-page__input-box">
                                                    <div className="select-box">
                                                        <CustomSelect
                                                            value={formData.subject || ''}
                                                            onChange={handleSelectChange}
                                                            optionArray={serviceOptions}
                                                            placeholder="Select a Service"
                                                            name="subject"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="contact-page__input-box text-message-box">
                                                    <textarea
                                                        name="message"
                                                        placeholder="Message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                    ></textarea>
                                                </div>
                                                <div className="contact-page__btn-box">
                                                    <a
                                                        href="#"
                                                        className="footer-widget__newsletter-btn thm-btn"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        Send A Message
                                                        <span><i className="icon-right-arrow"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="result"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
