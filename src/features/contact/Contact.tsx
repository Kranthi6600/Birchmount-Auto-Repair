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
    const [isSubmitting, setIsSubmitting] = useState(false);
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

        setIsSubmitting(true);

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
        } finally {
            setIsSubmitting(false);
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
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '10px' }}>
                        <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--birchmountAutoRepair-black)' }}>Follow Us</span>
                        <a href="https://www.instagram.com/birchmountautorepair?igsh=djZrMGN6bzgxYmho" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(var(--birchmountAutoRepair-base-rgb), 0.1)', color: 'var(--birchmountAutoRepair-base)', textDecoration: 'none', flexShrink: 0 }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
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
                                            <div className="col-xl-12 col-lg-12 col-md-12">
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
                                            <div className="col-xl-12 col-lg-12 col-md-12">
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
                                            <div className="col-xl-12 col-lg-12 col-md-12">
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
                                            <div className="col-xl-12 col-lg-12 col-md-12">
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
                                                            if (!isSubmitting) {
                                                                sendContactForm();
                                                            }
                                                        }}
                                                        style={{
                                                            pointerEvents: isSubmitting ? 'none' : 'auto',
                                                            opacity: isSubmitting ? 0.7 : 1,
                                                        }}
                                                    >
                                                        {isSubmitting ? 'Sending...' : 'Send A Message'}
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
