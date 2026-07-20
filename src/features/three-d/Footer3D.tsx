"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer3D: React.FC = () => {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const quickLinks = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
        { label: "FAQs", href: "/faqs" },
    ];

    const services = [
        "Collision Repair",
        "Engine Diagnostics",
        "Brake Service",
        "Oil Change",
        "Tire Alignment",
        "Transmission Repair",
    ];

    return (
        <footer
            className="footer3d-section"
            style={{
                position: "relative",
                width: "100%",
                background: "#ffffff",
                padding: "4rem 2rem 2rem",
                zIndex: 10,
                borderTop: "1px solid rgba(0,0,0,0.08)",
            }}
        >
            <div style={{ maxWidth: 1024, margin: "0 auto" }}>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "3rem",
                        justifyContent: "space-between",
                    }}
                >
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        style={{ flex: "1 1 240px" }}
                    >
                        <h3
                            style={{
                                fontSize: "1.4rem",
                                fontWeight: 900,
                                letterSpacing: "0.02em",
                                color: "#000",
                                margin: "0 0 0.3rem",
                                fontFamily: "var(--font-archivo), sans-serif",
                            }}
                        >
                            BIRCHMOUNT
                        </h3>
                        <p
                            style={{
                                fontSize: "0.58rem",
                                fontWeight: 700,
                                letterSpacing: "0.3em",
                                color: "rgba(0,0,0,0.5)",
                                margin: "0 0 1.2rem",
                            }}
                        >
                            AUTO REPAIR
                        </p>
                        <p
                            style={{
                                fontSize: "0.72rem",
                                color: "rgba(0,0,0,0.4)",
                                lineHeight: 1.7,
                                margin: 0,
                                maxWidth: 280,
                                fontFamily: "var(--font-titillium), sans-serif",
                            }}
                        >
                            Scarborough's trusted auto repair shop. Precision diagnostics,
                            expert craftsmanship, and honest service since day one.
                        </p>
                        <div style={{ display: "flex", gap: "0.8rem", marginTop: "1.5rem" }}>
                            {["facebook", "instagram", "twitter"].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    onMouseEnter={() => setHoveredLink(social)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    style={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        border: `1px solid ${hoveredLink === social ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.12)"}`,
                                        background: hoveredLink === social ? "rgba(0,0,0,0.06)" : "transparent",
                                        color: hoveredLink === social ? "#000" : "rgba(0,0,0,0.4)",
                                        fontSize: "0.7rem",
                                        textDecoration: "none",
                                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                        transform: hoveredLink === social ? "translateY(-3px)" : "translateY(0)",
                                    }}
                                >
                                    <i className={`fab fa-${social}`} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        style={{ flex: "0 0 auto" }}
                    >
                        <h4
                            style={{
                                fontSize: "0.65rem",
                                fontWeight: 700,
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                color: "rgba(0,0,0,0.6)",
                                margin: "0 0 1.2rem",
                            }}
                        >
                            Quick Links
                        </h4>
                        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        onMouseEnter={() => setHoveredLink(link.label)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                        style={{
                                            fontSize: "0.72rem",
                                            color: hoveredLink === link.label ? "#000" : "rgba(0,0,0,0.4)",
                                            textDecoration: "none",
                            transition: "color 0.3s ease",
                                            fontFamily: "var(--font-titillium), sans-serif",
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        style={{ flex: "0 0 auto" }}
                    >
                        <h4
                            style={{
                                fontSize: "0.65rem",
                                fontWeight: 700,
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                color: "rgba(0,0,0,0.6)",
                                margin: "0 0 1.2rem",
                            }}
                        >
                            Our Services
                        </h4>
                        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                            {services.map((service) => (
                                <li key={service}>
                                    <span
                                        onMouseEnter={() => setHoveredLink(service)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                        style={{
                                            fontSize: "0.72rem",
                                            color: hoveredLink === service ? "#000" : "rgba(0,0,0,0.4)",
                                            transition: "color 0.3s ease",
                                            cursor: "default",
                                            fontFamily: "var(--font-titillium), sans-serif",
                                        }}
                                    >
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        style={{ flex: "0 0 auto" }}
                    >
                        <h4
                            style={{
                                fontSize: "0.65rem",
                                fontWeight: 700,
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                color: "rgba(0,0,0,0.6)",
                                margin: "0 0 1.2rem",
                            }}
                        >
                            Get In Touch
                        </h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                                <i className="icon-call" style={{ color: "rgba(0,0,0,0.4)", fontSize: "0.8rem" }} />
                                <a
                                    href="tel:4167578368"
                                    onMouseEnter={() => setHoveredLink("phone")}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    style={{
                                        fontSize: "0.72rem",
                                        color: hoveredLink === "phone" ? "#000" : "rgba(0,0,0,0.4)",
                                        textDecoration: "none",
                                        transition: "color 0.3s ease",
                                        fontFamily: "var(--font-titillium), sans-serif",
                                    }}
                                >
                                    (416) 757-8368
                                </a>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                                <i className="icon-location" style={{ color: "rgba(0,0,0,0.4)", fontSize: "0.8rem" }} />
                                <span
                                    style={{
                                        fontSize: "0.72rem",
                                        color: "rgba(0,0,0,0.4)",
                                        fontFamily: "var(--font-titillium), sans-serif",
                                    }}
                                >
                                    Scarborough, ON
                                </span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                                <i className="icon-clock" style={{ color: "rgba(0,0,0,0.4)", fontSize: "0.8rem" }} />
                                <span
                                    style={{
                                        fontSize: "0.72rem",
                                        color: "rgba(0,0,0,0.4)",
                                        fontFamily: "var(--font-titillium), sans-serif",
                                    }}
                                >
                                    Mon–Fri: 8AM–6PM
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                    style={{
                        width: "100%",
                        height: 1,
                        background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)",
                        marginTop: "3rem",
                        marginBottom: "1.5rem",
                        transformOrigin: "left",
                    }}
                />

                {/* Bottom bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                    }}
                >
                    <p
                        style={{
                            fontSize: "0.65rem",
                            color: "rgba(0,0,0,0.3)",
                            margin: 0,
                            fontFamily: "var(--font-titillium), sans-serif",
                        }}
                    >
                        © {new Date().getFullYear()} Birchmount Auto Repair. All rights reserved.
                    </p>
                    <p
                        style={{
                            fontSize: "0.65rem",
                            color: "rgba(0,0,0,0.3)",
                            margin: 0,
                            fontFamily: "var(--font-titillium), sans-serif",
                        }}
                    >
                        Precision. Performance. Perfection.
                    </p>
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .footer3d-section {
                        padding-top: 0.5rem !important;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer3D;
