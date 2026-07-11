"use client";

import React, { useRef, useState } from "react";
// Services3D — horizontal scroll card gallery
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useServices } from "@/hooks/useServices";
import { stripHtml, type ApiService } from "@/lib/api";

const OVERLAP = 0.2;
const CARD_W = 320;
const CARD_H = 360;
const GAP = 24;

/* ── Card ─────────────────────────────────────────────── */

const ServiceCard: React.FC<{
    service: ApiService;
    index: number;
    total: number;
    progress: MotionValue<number>;
}> = ({ service, index, total, progress }) => {
    const dur = 1 / ((total - 1) * (1 - OVERLAP) + 1);
    const start = index * dur * (1 - OVERLAP);
    const end = start + dur;
    const inputRange = [0, start, end, 1] as [number, number, number, number];

    const y = useTransform(progress, inputRange, [-300, -300, 0, 0]);
    const opacity = useTransform(progress, inputRange, [0, 0, 1, 1]);
    const rotate = useTransform(progress, inputRange, [-12, -12, 0, 0]);
    const scale = useTransform(progress, inputRange, [0.82, 0.82, 1, 1]);

    const desc = service.description ? stripHtml(service.description) : "";

    return (
        <motion.div style={{ y, opacity, rotate, scale, flexShrink: 0 }}>
            <Link
                href={`/services/${service.slug}`}
                style={{ textDecoration: "none", display: "block" }}
            >
                <article
                    style={{
                        width: CARD_W,
                        height: CARD_H,
                        position: "relative",
                        borderRadius: 20,
                        overflow: "hidden",
                        background: "#ffffff",
                        border: "1px solid rgba(0,0,0,0.08)",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {/* Image */}
                    <div style={{ position: "relative", height: 180, flexShrink: 0, overflow: "hidden" }}>
                        {service.thumbnail ? (
                            <Image
                                src={service.thumbnail}
                                alt={service.thumbnail_alt || service.title}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes={`${CARD_W}px`}
                            />
                        ) : (
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: "linear-gradient(135deg, #f0f0f0, #e0e0e0)",
                                }}
                            >
                                <span style={{ fontSize: "2rem", fontWeight: 800, color: "rgba(0,0,0,0.12)" }}>
                                    {service.title.charAt(0)}
                                </span>
                            </div>
                        )}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 30%, transparent 60%, rgba(255,255,255,0.9) 100%)",
                                pointerEvents: "none",
                            }}
                        />
                        {service.wehoware_service_categories && (
                            <span
                                style={{
                                    position: "absolute",
                                    top: 16,
                                    left: 16,
                                    padding: "0.3rem 0.7rem",
                                    borderRadius: 20,
                                    background: "rgba(255,255,255,0.8)",
                                    backdropFilter: "blur(8px)",
                                    WebkitBackdropFilter: "blur(8px)",
                                    fontSize: "0.5rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.15em",
                                    textTransform: "uppercase",
                                    color: "rgba(0,0,0,0.7)",
                                }}
                            >
                                {service.wehoware_service_categories.name}
                            </span>
                        )}
                    </div>

                    {/* Body */}
                    <div
                        style={{
                            flex: 1,
                            padding: "1.5rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <div>
                            <h3
                                style={{
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    color: "#000",
                                    margin: "0 0 0.6rem",
                                    lineHeight: 1.3,
                                    fontFamily: "var(--font-archivo), sans-serif",
                                }}
                            >
                                {service.title}
                            </h3>
                            {desc && (
                                <p
                                    style={{
                                        fontSize: "0.75rem",
                                        color: "rgba(0,0,0,0.55)",
                                        lineHeight: 1.6,
                                        margin: 0,
                                        display: "-webkit-box",
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                        fontFamily: "var(--font-titillium), sans-serif",
                                    }}
                                >
                                    {desc}
                                </p>
                            )}
                        </div>
                        <span
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.4rem",
                                fontSize: "0.6rem",
                                fontWeight: 700,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: "rgba(0,0,0,0.5)",
                            }}
                        >
                            Learn More
                            <span style={{ fontSize: "0.8rem" }}>&rarr;</span>
                        </span>
                    </div>
                </article>
            </Link>
        </motion.div>
    );
};

/* ── Main ─────────────────────────────────────────────── */

const Services3D: React.FC = () => {
    const { data: services, isLoading } = useServices();
    const ref = useRef<HTMLDivElement>(null);
    const [viewAllHovered, setViewAllHovered] = useState(false);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const count = services?.length ?? 6;
    const trackW = count * CARD_W + (count - 1) * GAP;
    const visibleW = typeof window !== "undefined" ? window.innerWidth - 64 : 1024;
    const slideDistance = Math.max(trackW - visibleW, 0);
    const x = useTransform(scrollYProgress, [0, 0.4, 1], ["0%", "0%", `-${slideDistance}px`]);

    return (
        <section
            style={{
                position: "relative",
                width: "100%",
                background: "#ffffff",
                zIndex: 10,
            }}
        >
            <div ref={ref} style={{ height: "250vh", position: "relative" }}>
                <div
                    style={{
                        position: "sticky",
                        top: 0,
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        paddingTop: "6rem",
                        overflow: "hidden",
                    }}
                >
                    {/* Header */}
                    <div style={{ padding: "0 2rem", marginBottom: "2rem", flexShrink: 0 }}>
                        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                            <div>
                                <p
                                    style={{
                                        fontSize: "0.6rem",
                                        fontWeight: 600,
                                        letterSpacing: "0.3em",
                                        textTransform: "uppercase",
                                        color: "rgba(0,0,0,0.35)",
                                        margin: "0 0 0.6rem",
                                    }}
                                >
                                    What We Offer
                                </p>
                                <h2
                                    style={{
                                        fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                                        fontWeight: 800,
                                        letterSpacing: "0.01em",
                                        margin: 0,
                                        color: "#000000",
                                        fontFamily: "var(--font-archivo), sans-serif",
                                    }}
                                >
                                    Our Services
                                </h2>
                            </div>
                            <Link
                                href="/services"
                                onMouseEnter={() => setViewAllHovered(true)}
                                onMouseLeave={() => setViewAllHovered(false)}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.4rem",
                                    fontSize: "0.6rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    color: viewAllHovered ? "#000000" : "rgba(0,0,0,0.5)",
                                    textDecoration: "none",
                                    padding: "0.5rem 1.2rem",
                                    borderRadius: 30,
                                    border: `1px solid ${viewAllHovered ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.15)"}`,
                                    background: viewAllHovered ? "rgba(0,0,0,0.08)" : "transparent",
                                    boxShadow: viewAllHovered ? "0 8px 30px rgba(0,0,0,0.15)" : "none",
                                    transform: viewAllHovered ? "translateY(-3px) scale(1.03)" : "translateY(0) scale(1)",
                                    filter: viewAllHovered ? "brightness(1.1)" : "brightness(1)",
                                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                }}
                            >
                                View All
                                <span>&rarr;</span>
                            </Link>
                        </div>
                        <div
                            style={{
                                width: 48,
                                height: 2,
                                marginTop: "1.2rem",
                                borderRadius: 1,
                                background: "linear-gradient(90deg, rgba(0,0,0,0.4), transparent)",
                            }}
                        />
                    </div>

                    {/* Horizontal track — auto-scrolls based on vertical scroll */}
                    <div style={{ position: "relative", overflow: "hidden", flex: 1, display: "flex", alignItems: "center" }}>
                        <motion.div style={{ display: "flex", gap: `${GAP}px`, x, paddingLeft: "2rem" }}>
                            {isLoading
                                ? Array.from({ length: 6 }).map((_, i) => (
                                      <div
                                          key={i}
                                          style={{
                                              width: CARD_W,
                                              height: CARD_H,
                                              flexShrink: 0,
                                              borderRadius: 20,
                                              background: "rgba(0,0,0,0.02)",
                                              border: "1px solid rgba(0,0,0,0.06)",
                                          }}
                                      />
                                  ))
                                : services?.map((service, index) => (
                                      <ServiceCard
                                          key={service.id}
                                          service={service}
                                          index={index}
                                          total={services.length}
                                          progress={scrollYProgress}
                                      />
                                  ))}
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* end ref */}
        </section>
    );
};

export default Services3D;
