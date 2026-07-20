"use client";

import React, { useState } from "react";
import Scene3DStyles from "./Scene3DStyles";

const MobileHero3D: React.FC = () => {
    const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

    const baseStyle: React.CSSProperties = {
        padding: "0.7rem 1.4rem",
        borderRadius: "30px",
        fontSize: "0.7rem",
        letterSpacing: "0.05em",
        textDecoration: "none",
        textTransform: "uppercase",
        display: "inline-block",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        whiteSpace: "nowrap",
    };

    return (
        <>
            <Scene3DStyles />

            <section
                className="mobile-hero-3d"
                style={{
                    position: "relative",
                    width: "100%",
                    minHeight: "100vh",
                    background:
                        "linear-gradient(180deg, #ffffff 0%, #f5f5f5 40%, #fafafa 70%, #ffffff 100%)",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {/* Subtle grid background */}
                <div
                    className="hero-grid-bg"
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `
                            linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
                        `,
                        backgroundSize: "40px 40px",
                        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                        WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                    }}
                />

                {/* Floating gradient orbs */}
                <div
                    className="hero-orb-1"
                    style={{
                        position: "absolute",
                        top: "10%",
                        left: "5%",
                        width: 200,
                        height: 200,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)",
                        filter: "blur(30px)",
                    }}
                />
                <div
                    className="hero-orb-2"
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: "5%",
                        width: 180,
                        height: 180,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(0,0,0,0.08) 0%, transparent 70%)",
                        filter: "blur(28px)",
                    }}
                />
                <div
                    className="hero-orb-3"
                    style={{
                        position: "absolute",
                        bottom: "8%",
                        left: "25%",
                        width: 150,
                        height: 150,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(0,0,0,0.07) 0%, transparent 70%)",
                        filter: "blur(25px)",
                    }}
                />

                {/* Corner accent lines */}
                <div style={{ position: "absolute", top: 0, left: 0, width: "2px", height: "35%", background: "linear-gradient(180deg, rgba(0,0,0,0.3), transparent)" }} />
                <div style={{ position: "absolute", top: 0, left: 0, width: "35%", height: "2px", background: "linear-gradient(90deg, rgba(0,0,0,0.3), transparent)" }} />
                <div style={{ position: "absolute", bottom: 0, right: 0, width: "2px", height: "35%", background: "linear-gradient(0deg, rgba(0,0,0,0.3), transparent)" }} />
                <div style={{ position: "absolute", bottom: 0, right: 0, width: "35%", height: "2px", background: "linear-gradient(270deg, rgba(0,0,0,0.3), transparent)" }} />

                {/* Content */}
                <div
                    style={{
                        position: "relative",
                        zIndex: 10,
                        textAlign: "center",
                        maxWidth: "90%",
                        padding: "2rem 1.5rem",
                    }}
                >
                    <h2
                        className="text-anim-title-left"
                        style={{
                            fontSize: "clamp(1.4rem, 6vw, 2rem)",
                            fontWeight: 800,
                            letterSpacing: "0.06em",
                            margin: 0,
                            color: "#000000",
                            fontFamily: "var(--font-archivo), sans-serif",
                            lineHeight: 1.2,
                        }}
                    >
                        BIRCHMOUNT AUTO REPAIR
                    </h2>

                    <div
                        className="text-anim-divider"
                        style={{
                            width: "50px",
                            height: "3px",
                            margin: "1rem auto",
                            borderRadius: "2px",
                            background: "linear-gradient(90deg, transparent, #000000, transparent)",
                            boxShadow: "0 0 12px rgba(0,0,0,0.5)",
                        }}
                    />

                    <p
                        className="text-anim-subtitle"
                        style={{
                            fontSize: "clamp(0.7rem, 3vw, 0.85rem)",
                            color: "#000000",
                            fontWeight: 500,
                            letterSpacing: "0.08em",
                            textShadow: "0 0 20px rgba(0,0,0,0.3)",
                            textTransform: "uppercase",
                            margin: 0,
                        }}
                    >
                        Precision. Performance. Perfection.
                    </p>

                    <p
                        className="text-anim-desc-left"
                        style={{
                            fontSize: "clamp(0.7rem, 2.5vw, 0.8rem)",
                            color: "rgba(0,0,0,0.6)",
                            marginTop: "1.2rem",
                            letterSpacing: "0.02em",
                            fontStyle: "italic",
                            fontWeight: 300,
                            fontFamily: "var(--font-titillium), sans-serif",
                            lineHeight: 1.6,
                            margin: "1.2rem auto 0",
                            maxWidth: "320px",
                        }}
                    >
                        Scarborough&apos;s trusted auto repair shop — where craftsmanship meets cutting-edge diagnostics.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            gap: "0.8rem",
                            justifyContent: "center",
                            marginTop: "1.8rem",
                            flexWrap: "wrap",
                        }}
                    >
                        <a
                            href="/contact"
                            className="text-anim-btn-1"
                            onMouseEnter={() => setHoveredBtn("Book an Appointment")}
                            onMouseLeave={() => setHoveredBtn(null)}
                            style={{
                                ...baseStyle,
                                background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
                                color: "#ffffff",
                                fontWeight: 700,
                                boxShadow: hoveredBtn === "Book an Appointment"
                                    ? "0 8px 30px rgba(0,0,0,0.25)"
                                    : "0 0 24px rgba(0,0,0,0.08)",
                                transform: hoveredBtn === "Book an Appointment"
                                    ? "translateY(-3px) scale(1.03)"
                                    : "translateY(0) scale(1)",
                            }}
                        >
                            Book an Appointment
                        </a>
                        <a
                            href="/services"
                            className="text-anim-btn-2"
                            onMouseEnter={() => setHoveredBtn("View Our Services")}
                            onMouseLeave={() => setHoveredBtn(null)}
                            style={{
                                ...baseStyle,
                                background: hoveredBtn === "View Our Services"
                                    ? "rgba(0,0,0,0.08)"
                                    : "transparent",
                                color: "#000000",
                                border: `1px solid ${hoveredBtn === "View Our Services" ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.2)"}`,
                                fontWeight: 600,
                                boxShadow: hoveredBtn === "View Our Services"
                                    ? "0 8px 30px rgba(0,0,0,0.15)"
                                    : "none",
                                transform: hoveredBtn === "View Our Services"
                                    ? "translateY(-3px) scale(1.03)"
                                    : "translateY(0) scale(1)",
                            }}
                        >
                            View Our Services
                        </a>
                    </div>
                </div>

                {/* Scroll hint */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "1.5rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        color: "rgba(0,0,0,0.4)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        animation: "bounce 2s infinite",
                    }}
                >
                    Scroll to explore
                    <style>{`
                        @keyframes bounce {
                            0%, 100% { transform: translateX(-50%) translateY(0); }
                            50% { transform: translateX(-50%) translateY(-8px); }
                        }
                    `}</style>
                </div>
            </section>
        </>
    );
};

export default MobileHero3D;
