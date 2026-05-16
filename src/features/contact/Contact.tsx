"use client";

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';

const Contact: React.FC = () => {
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

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
            /*
             * ─────────────────────────────────────────────
             *  NOTE: Add your backend / API call here.
             *  Example:
             *
             *  await axios.post('/api/contact', formData);
             *       — or —
             *  await fetch('/api/contact', {
             *      method: 'POST',
             *      headers: { 'Content-Type': 'application/json' },
             *      body: JSON.stringify(formData),
             *  });
             * ─────────────────────────────────────────────
             */

            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Thank you for reaching out. We will get back to you shortly.',
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
                                <h3><a href="tel:558270575405">+55 827 057 5405</a></h3>
                            </div>
                        </FadeInAdvanced>
                        <FadeInAdvanced className="col-xl-4 col-lg-4" variant='fadeInUp' delay={200}>
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="icon-envelope"></span>
                                </div>
                                <p>Mail Us</p>
                                <h3><a href="mailto:example@gamil.com">example@gamil.com</a></h3>
                            </div>
                        </FadeInAdvanced>
                        <FadeInAdvanced className="col-xl-4 col-lg-4" variant='fadeInRight' delay={300}>
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="icon-location"></span>
                                </div>
                                <p>Our Office Location</p>
                                <h3>12 Green Road 05 New Yark</h3>
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
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                                        className="google-map__one"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="contact-page__right">
                                    <h3 className="contact-page__form-title">Get A Free Quote</h3>
                                    <form
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
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        placeholder="Subject"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                    />
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
                                                    <button
                                                        type="submit"
                                                        className="footer-widget__newsletter-btn thm-btn"
                                                    >
                                                        Send A Message
                                                        <span><i className="icon-right-arrow"></i></span>
                                                    </button>
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
