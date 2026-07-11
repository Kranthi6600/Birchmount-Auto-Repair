"use client";

import React, { useState } from "react";
import Scene3DStyles from "./Scene3DStyles";

const ContactForm3D: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name.trim() || !formData.email.trim()) return;

        setIsSubmitting(true);
        try {
            await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setSubmitted(false), 4000);
        } catch {
            // silently fail
        } finally {
            setIsSubmitting(false);
        }
    };

    const formStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        gap: "0.7rem",
        width: "100%",
        maxWidth: "380px",
        marginTop: 0,
        marginRight: "auto",
        marginBottom: 0,
        marginLeft: "auto",
        pointerEvents: "auto",
    };

    const inputStyle: React.CSSProperties = {
        width: "100%",
        padding: "0.6rem 0.9rem",
        background: "rgba(0,0,0,0.03)",
        border: "1px solid rgba(0,0,0,0.12)",
        borderRadius: "10px",
        color: "#000",
        fontSize: "0.7rem",
        fontFamily: "inherit",
        outline: "none",
        transition: "all 0.3s ease",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        boxSizing: "border-box",
    };

    const textareaStyle: React.CSSProperties = {
        ...inputStyle,
        minHeight: "70px",
        resize: "vertical",
    };

    const labelStyle: React.CSSProperties = {
        fontSize: "0.55rem",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "rgba(0,0,0,0.7)",
        marginBottom: "-0.5rem",
    };

    const buttonStyle: React.CSSProperties = {
        padding: "0.6rem 1.5rem",
        background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
        color: "#ffffff",
        border: "none",
        borderRadius: "10px",
        fontSize: "0.65rem",
        fontWeight: 700,
        letterSpacing: "0.05em",
        cursor: isSubmitting ? "not-allowed" : "pointer",
        opacity: isSubmitting ? 0.7 : 1,
        pointerEvents: "auto",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        boxShadow: isHovered ? "0 8px 30px rgba(0,0,0,0.2)" : "0 0 24px rgba(0,0,0,0.08)",
        transform: isHovered ? "translateY(-3px) scale(1.02)" : "translateY(0) scale(1)",
        filter: isHovered ? "brightness(1.15)" : "brightness(1)",
        fontFamily: "inherit",
    };

    return (
        <div style={formStyle}>
            <Scene3DStyles />

            <p style={{
                fontSize: "0.6rem",
                color: "rgba(0,0,0,0.5)",
                textAlign: "center",
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
                lineHeight: 1.5,
            }}>
                Please fill out the form below and we will get back to you as soon as possible.
            </p>

            {submitted ? (
                <div style={{
                    padding: "1.5rem",
                    textAlign: "center",
                    background: "rgba(0,0,0,0.04)",
                    border: "1px solid rgba(0,0,0,0.15)",
                    borderRadius: "12px",
                    animation: "contact3d-fade-in 0.4s ease",
                }}>
                    <p style={{ color: "#000000", fontSize: "0.75rem", fontWeight: 700, marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0 }}>
                        Message Sent!
                    </p>
                    <p style={{ color: "rgba(0,0,0,0.6)", fontSize: "0.65rem", marginTop: "0.4rem" }}>
                        We'll get back to you shortly.
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                        <label style={labelStyle}>Your Name</label>
                        <input
                            type="text"
                            name="name"
                            className="contact3d-input"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={inputStyle}
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                        <label style={labelStyle}>Your Email</label>
                        <input
                            type="email"
                            name="email"
                            className="contact3d-input"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={inputStyle}
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                        <label style={labelStyle}>Your Text</label>
                        <textarea
                            name="message"
                            className="contact3d-input"
                            placeholder="Tell us about your vehicle..."
                            value={formData.message}
                            onChange={handleChange}
                            style={textareaStyle}
                        />
                    </div>

                    <button type="submit" style={buttonStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        {isSubmitting ? "Sending..." : "Submit Now"}
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm3D;
