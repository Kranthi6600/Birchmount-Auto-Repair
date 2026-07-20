"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useBlogs } from "@/hooks/useBlogs";
import { stripHtml, type ApiBlog } from "@/lib/api";
import { useRef, useState } from "react";

const OVERLAP = 0.6;

const BlogCard: React.FC<{
    blog: ApiBlog;
    index: number;
    total: number;
    progress: MotionValue<number>;
}> = ({ blog, index, total, progress }) => {
    const [isHovered, setIsHovered] = useState(false);
    const dur = 1 / ((total - 1) * (1 - OVERLAP) + 1);
    const start = index * dur * (1 - OVERLAP);
    const end = start + dur;
    const inputRange = [0, start, end, 1] as [number, number, number, number];

    const y = useTransform(progress, inputRange, [300, 300, 0, 0]);
    const opacity = useTransform(progress, inputRange, [0, 0, 1, 1]);
    const rotate = useTransform(progress, inputRange, [index === 1 ? 20 : -20, index === 1 ? 20 : -20, index === 1 ? 1 : -10, index === 1 ? 1 : -10]);
    const scale = useTransform(progress, inputRange, [0.8, 0.8, 1, 1]);
    const excerpt = blog.excerpt
        ? stripHtml(blog.excerpt)
        : blog.content
          ? stripHtml(blog.content).slice(0, 120) + "..."
          : "";

    const date = blog.published_at
        ? new Date(blog.published_at).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
          })
        : "";

    return (
        <motion.article
            onMouseEnter={() => index === 1 && setIsHovered(true)}
            onMouseLeave={() => index === 1 && setIsHovered(false)}
            style={{
                width: 300,
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: index + 1,
                borderRadius: 16,
                overflow: "hidden",
                background: "#ffffff",
                border: `1px solid ${isHovered ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.08)"}`,
                display: "flex",
                flexDirection: "column",
                transformOrigin: "bottom left",
                y,
                opacity,
                rotate,
                scale: isHovered ? 1.05 : scale,
                boxShadow: isHovered ? "0 12px 40px rgba(0,0,0,0.15)" : "none",
                transition: "border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
        >
            <Link href={`/blog/${blog.slug}`} style={{ textDecoration: "none" }}>
                {/* Thumbnail */}
                <div style={{ position: "relative", height: 160, overflow: "hidden" }}>
                    {blog.thumbnail ? (
                        <Image
                            src={blog.thumbnail}
                            alt={blog.thumbnail_alt || blog.title}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="300px"
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
                            <span style={{ fontSize: "1.6rem", fontWeight: 800, color: "rgba(0,0,0,0.12)" }}>
                                {blog.title.charAt(0)}
                            </span>
                        </div>
                    )}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background:
                                "linear-gradient(180deg, transparent 50%, rgba(255,255,255,0.9) 100%)",
                            pointerEvents: "none",
                        }}
                    />
                    {blog.wehoware_blog_categories && (
                        <span
                            style={{
                                position: "absolute",
                                top: 12,
                                left: 12,
                                padding: "0.25rem 0.6rem",
                                borderRadius: 16,
                                background: "rgba(255,255,255,0.8)",
                                backdropFilter: "blur(8px)",
                                WebkitBackdropFilter: "blur(8px)",
                                fontSize: "0.45rem",
                                fontWeight: 600,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "rgba(0,0,0,0.7)",
                            }}
                        >
                            {blog.wehoware_blog_categories.name}
                        </span>
                    )}
                </div>

                {/* Body */}
                <div style={{ padding: "1.2rem" }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.6rem",
                            marginBottom: "0.6rem",
                        }}
                    >
                        {date && (
                            <span
                                style={{
                                    fontSize: "0.55rem",
                                    color: "rgba(0,0,0,0.35)",
                                    letterSpacing: "0.05em",
                                }}
                            >
                                {date}
                            </span>
                        )}
                        {blog.read_time && (
                            <>
                                <span style={{ fontSize: "0.55rem", color: "rgba(0,0,0,0.2)" }}>
                                    &middot;
                                </span>
                                <span style={{ fontSize: "0.55rem", color: "rgba(0,0,0,0.35)" }}>
                                    {blog.read_time} min read
                                </span>
                            </>
                        )}
                    </div>

                    <h3
                        style={{
                            fontSize: "0.9rem",
                            fontWeight: 700,
                            color: "#000",
                            margin: "0 0 0.5rem",
                            lineHeight: 1.4,
                            fontFamily: "var(--font-archivo), sans-serif",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}
                    >
                        {blog.title}
                    </h3>

                    {excerpt && (
                        <p
                            style={{
                                fontSize: "0.7rem",
                                color: "rgba(0,0,0,0.55)",
                                lineHeight: 1.6,
                                margin: 0,
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                fontFamily: "var(--font-titillium), sans-serif",
                            }}
                        >
                            {excerpt}
                        </p>
                    )}
                </div>
            </Link>
        </motion.article>
    );
};

const Blog3D: React.FC = () => {
    const { data: blogs, isLoading } = useBlogs(1, 2);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [viewAllHovered, setViewAllHovered] = useState(false);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "start center"],
    });

    return (
        <section
            className="blog3d-section"
            style={{
                position: "relative",
                width: "100%",
                background: "#ffffff",
                padding: "4rem 2rem 2rem",
                scrollMarginTop: "5rem",
                zIndex: 10,
            }}
        >
            <div style={{ height: "3rem", flexShrink: 0 }} />
            <div style={{ maxWidth: 1024, margin: "0 auto" }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{ marginBottom: "2.5rem" }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: "1rem",
                        }}
                    >
                        <div>
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
                                From Our Blog
                            </h2>
                        </div>
                        <Link
                            href="/blog"
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
                                padding: "0.6rem 1.4rem",
                                borderRadius: 30,
                                border: `1px solid ${viewAllHovered ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.15)"}`,
                                background: viewAllHovered ? "rgba(0,0,0,0.08)" : "transparent",
                                boxShadow: viewAllHovered ? "0 8px 30px rgba(0,0,0,0.15)" : "none",
                                transform: viewAllHovered ? "translateY(-3px) scale(1.03)" : "translateY(0) scale(1)",
                                filter: viewAllHovered ? "brightness(1.1)" : "brightness(1)",
                                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                whiteSpace: "nowrap",
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
                            background:
                                "linear-gradient(90deg, rgba(0,0,0,0.4), transparent)",
                        }}
                    />
                </motion.div>

                {/* Cards */}
                <div ref={sectionRef} className="blog3d-cards-row" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", flexWrap: "wrap", width: "100%" }}>
                    <div
                        style={{
                            display: "flex",
                            gap: 0,
                            flexWrap: "wrap",
                            overflow: "visible",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            height: 360,
                            width: 300,
                        }}
                    >
                        {isLoading
                            ? Array.from({ length: 2 }).map((_, i) => (
                                  <div
                                      key={i}
                                      style={{
                                          width: 300,
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                          zIndex: i + 1,
                                          borderRadius: 16,
                                          background: "rgba(0,0,0,0.02)",
                                          border: "1px solid rgba(0,0,0,0.06)",
                                      }}
                                  />
                              ))
                            : blogs?.map((blog, index) => (
                                  <BlogCard
                                      key={blog.id}
                                      blog={blog}
                                      index={index}
                                      total={blogs.length}
                                      progress={scrollYProgress}
                                  />
                              ))}
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .blog3d-section {
                        padding-bottom: 0 !important;
                    }
                    .blog3d-cards-row {
                        gap: 0.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Blog3D;
