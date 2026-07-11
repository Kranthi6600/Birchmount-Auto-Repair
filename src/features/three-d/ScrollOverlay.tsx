"use client";

import React, { useRef, useEffect, useState } from "react";
import Scene3DStyles from "./Scene3DStyles";

interface SectionButton {
    label: string;
    href: string;
    primary?: boolean;
}

interface Section {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    accent: string;
    buttons?: SectionButton[];
}

const sections: Section[] = [
    {
        id: "hero",
        title: "BIRCHMOUNT AUTO REPAIR",
        subtitle: "Precision. Performance. Perfection.",
        description: "Scarborough's trusted auto repair shop — where craftsmanship meets cutting-edge diagnostics.",
        accent: "#000000",
        buttons: [
            { label: "Book an Appointment", href: "/contact", primary: true },
            { label: "View Our Services", href: "/services" },
        ],
    },
    {
        id: "services",
        title: "EXPERT SERVICES",
        subtitle: "Every repair, done right.",
        description: "From collision repair to engine diagnostics, our certified technicians handle it all with precision and care.",
        accent: "#000000",
        buttons: [
            { label: "Explore Services", href: "/services", primary: true },
            { label: "Get a Free Estimate", href: "/contact" },
        ],
    },
    {
        id: "technology",
        title: "ADVANCED TECHNOLOGY",
        subtitle: "Diagnosing the future.",
        description: "State-of-the-art diagnostic equipment and 3D imaging technology to pinpoint issues before they become problems.",
        accent: "#000000",
        buttons: [
            { label: "See Our Technology", href: "/about", primary: true },
            { label: "Schedule Diagnostics", href: "/contact" },
        ],
    },
];

export const ScrollOverlay: React.FC<{ scrollProgress: React.MutableRefObject<number> }> = ({ scrollProgress }) => {
    const [activeSection, setActiveSection] = useState(0);
    const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);
    const rafRef = useRef<number>(0);

    useEffect(() => {
        const update = () => {
            const p = scrollProgress.current;
            const sectionIndex = Math.min(
                Math.floor(p * sections.length),
                sections.length - 1
            );
            setActiveSection(sectionIndex);
        };

        const onScroll = () => {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(update);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(rafRef.current);
        };
    }, [scrollProgress]);

    return (
        <>
            <Scene3DStyles />

            {/* Hero decorative elements — only visible on first section */}
            {activeSection === 0 && (
                <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", pointerEvents: "none", zIndex: 5, overflow: "hidden" }}>
                    {/* Subtle grid background */}
                    <div
                        className="hero-grid-bg"
                        style={{
                            position: "absolute",
                            inset: 0,
                            backgroundImage: `
                                linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
                            `,
                            backgroundSize: "60px 60px",
                            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                        }}
                    />

                    {/* Floating gradient orbs */}
                    <div
                        className="hero-orb-1"
                        style={{
                            position: "absolute",
                            top: "15%",
                            left: "8%",
                            width: 300,
                            height: 300,
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(0,0,0,0.12) 0%, transparent 70%)",
                            filter: "blur(40px)",
                        }}
                    />
                    <div
                        className="hero-orb-2"
                        style={{
                            position: "absolute",
                            top: "50%",
                            right: "10%",
                            width: 250,
                            height: 250,
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)",
                            filter: "blur(35px)",
                        }}
                    />
                    <div
                        className="hero-orb-3"
                        style={{
                            position: "absolute",
                            bottom: "10%",
                            left: "30%",
                            width: 200,
                            height: 200,
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(0,0,0,0.08) 0%, transparent 70%)",
                            filter: "blur(30px)",
                        }}
                    />

                    {/* Corner accent lines */}
                    <div style={{ position: "absolute", top: 0, left: 0, width: "2px", height: "40%", background: "linear-gradient(180deg, rgba(0,0,0,0.4), transparent)" }} />
                    <div style={{ position: "absolute", top: 0, left: 0, width: "40%", height: "2px", background: "linear-gradient(90deg, rgba(0,0,0,0.4), transparent)" }} />
                    <div style={{ position: "absolute", bottom: 0, right: 0, width: "2px", height: "40%", background: "linear-gradient(0deg, rgba(0,0,0,0.4), transparent)" }} />
                    <div style={{ position: "absolute", bottom: 0, right: 0, width: "40%", height: "2px", background: "linear-gradient(270deg, rgba(0,0,0,0.4), transparent)" }} />

                </div>
            )}

            {/* Fixed overlay content */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100vh",
                    pointerEvents: "none",
                    zIndex: 50,
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    paddingBottom: "6rem",
                }}
            >
                {sections.map((section, i) => (
                    <div
                        key={section.id}
                        style={{
                            position: "absolute",
                            opacity: activeSection === i ? 1 : 0,
                            transition: "opacity 0.6s ease",
                            textAlign: i % 2 === 0 ? "left" : "right",
                            maxWidth: "380px",
                            padding: "0 2rem",
                            pointerEvents: activeSection === i ? "auto" : "none",
                            left: i % 2 === 0 ? "5%" : "auto",
                            right: i % 2 === 1 ? "5%" : "auto",
                            bottom: "6rem",
                        }}
                    >
                        <>
                                <h2
                                    key={`title-${i}`}
                                    className={activeSection === i ? (i % 2 === 0 ? "text-anim-title-left" : "text-anim-title-right") : ""}
                                    style={{
                                        fontSize: "clamp(0.9rem, 2.5vw, 1.8rem)",
                                        fontWeight: 800,
                                        letterSpacing: "0.08em",
                                        marginTop: 0,
                                        marginRight: 0,
                                        marginBottom: 0,
                                        marginLeft: 0,
                                        fontFamily: "var(--font-archivo), sans-serif",
                                        color: "#000000",
                                    }}
                                >
                                    {section.title}
                                </h2>

                                <div
                                    key={`divider-${i}`}
                                    className={activeSection === i ? "text-anim-divider" : ""}
                                    style={{
                                        width: "60px",
                                        height: "3px",
                                        marginTop: "1.2rem",
                                        marginRight: i % 2 === 1 ? "0" : "auto",
                                        marginBottom: "1.2rem",
                                        marginLeft: i % 2 === 0 ? "0" : "auto",
                                        borderRadius: "2px",
                                        background: `linear-gradient(90deg, transparent, ${section.accent}, transparent)`,
                                        boxShadow: `0 0 12px ${section.accent}80`,
                                    }}
                                />

                                <p
                                    key={`subtitle-${i}`}
                                    className={activeSection === i ? "text-anim-subtitle" : ""}
                                    style={{
                                        fontSize: "clamp(0.65rem, 1.3vw, 0.85rem)",
                                        color: section.accent,
                                        marginTop: 0,
                                        fontWeight: 500,
                                        letterSpacing: "0.06em",
                                        textShadow: `0 0 20px ${section.accent}50`,
                                        textTransform: "uppercase",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {section.subtitle}
                                </p>
                                <p
                                    key={`desc-${i}`}
                                    className={activeSection === i ? (i % 2 === 0 ? "text-anim-desc-left" : "text-anim-desc-right") : ""}
                                    style={{
                                        fontSize: "clamp(0.62rem, 0.9vw, 0.75rem)",
                                        color: "rgba(0,0,0,0.6)",
                                        marginTop: "1.2rem",
                                        marginRight: "auto",
                                        marginBottom: 0,
                                        marginLeft: "auto",
                                        letterSpacing: "0.03em",
                                        fontStyle: "italic",
                                        fontWeight: 300,
                                        fontFamily: "var(--font-titillium), sans-serif",
                                    }}
                                >
                                    {section.description}
                                </p>

                                {section.buttons && (
                                    <div key={`buttons-${i}`} style={{
                                        display: "flex",
                                        gap: "1rem",
                                        justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                                        marginTop: "1.5rem",
                                        flexWrap: "nowrap",
                                        pointerEvents: activeSection === i ? "auto" : "none",
                                    }}>
                                        {section.buttons.map((btn, btnIdx) => {
                                            const isHovered = hoveredBtn === btn.label;
                                            const baseStyle: React.CSSProperties = {
                                                padding: "0.5rem 1rem",
                                                borderRadius: "30px",
                                                fontSize: "0.6rem",
                                                letterSpacing: "0.05em",
                                                textDecoration: "none",
                                                textTransform: "uppercase",
                                                display: "inline-block",
                                                cursor: "pointer",
                                                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                                whiteSpace: "nowrap",
                                            };
                                            const style: React.CSSProperties = btn.primary
                                                ? {
                                                      ...baseStyle,
                                                      background: `linear-gradient(135deg, #1a1a1a 0%, #000000 100%)`,
                                                      color: "#ffffff",
                                                      fontWeight: 700,
                                                      boxShadow: isHovered
                                                          ? `0 8px 30px rgba(0,0,0,0.2)`
                                                          : `0 0 24px rgba(0,0,0,0.08)`,
                                                      transform: isHovered
                                                          ? "translateY(-3px) scale(1.03)"
                                                          : "translateY(0) scale(1)",
                                                      filter: isHovered ? "brightness(1.1)" : "brightness(1)",
                                                  }
                                                : {
                                                      ...baseStyle,
                                                      background: isHovered
                                                          ? "rgba(0,0,0,0.08)"
                                                          : "transparent",
                                                      color: "#000000",
                                                      border: `1px solid ${isHovered ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.2)"}`,
                                                      fontWeight: 600,
                                                      boxShadow: isHovered
                                                          ? "0 8px 30px rgba(0,0,0,0.15)"
                                                          : "none",
                                                      transform: isHovered
                                                          ? "translateY(-3px) scale(1.03)"
                                                          : "translateY(0) scale(1)",
                                                  };
                                            return (
                                                <a
                                                    key={btn.label}
                                                    href={btn.href}
                                                    style={style}
                                                    className={activeSection === i ? `text-anim-btn-${btnIdx + 1}` : ""}
                                                    onMouseEnter={() => setHoveredBtn(btn.label)}
                                                    onMouseLeave={() => setHoveredBtn(null)}
                                                >
                                                    {btn.label}
                                                </a>
                                            );
                                        })}
                                    </div>
                                )}
                        </>
                    </div>
                ))}
            </div>

            {/* Scroll hint */}
            {activeSection === 0 && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "2rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 30,
                        color: "rgba(0,0,0,0.5)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        pointerEvents: "none",
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
            )}
        </>
    );
};
