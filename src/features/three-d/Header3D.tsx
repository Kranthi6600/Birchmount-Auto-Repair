"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useServices } from "@/hooks/useServices";
import { type MenuItem } from "@/components/menu/menuContent";

const MenuList3D: React.FC = () => {
    const currentPath = usePathname();
    const { data: apiServices } = useServices();

    const dynamicServicesList: MenuItem[] = React.useMemo(() => {
        if (!apiServices) return [];
        const seen = new Set<string>();
        const items: MenuItem[] = [];
        apiServices.forEach((s) => {
            const cat = s.wehoware_service_categories;
            if (cat && !seen.has(cat.slug)) {
                seen.add(cat.slug);
                items.push({
                    id: items.length + 1,
                    menuItem: cat.name,
                    menuLink: `/services/${s.slug}`,
                });
            }
        });
        return items;
    }, [apiServices]);

    const findLocation = (array: MenuItem[]): boolean =>
        array.some((item) => item?.menuLink === currentPath);
    const isInServices = findLocation(dynamicServicesList);

    const linkStyle: React.CSSProperties = {
        color: "rgba(0,0,0,0.65)",
        textDecoration: "none",
        fontSize: "0.8rem",
        fontWeight: 600,
        letterSpacing: "0.03em",
        padding: "0.5rem 0.85rem",
        transition: "all 0.3s ease",
        display: "block",
    };

    const activeLinkStyle: React.CSSProperties = {
        color: "#000000",
        background: "rgba(0,0,0,0.08)",
        borderRadius: "8px",
    };


    return (
        <ul style={{ listStyle: "none", display: "flex", gap: 0, margin: 0, padding: 0, alignItems: "center" }}>
            <li style={{ position: "relative" }}>
                <Link href="/" style={{ ...linkStyle, ...(currentPath === "/" ? activeLinkStyle : {}) }}>Home</Link>
            </li>
            <li style={{ position: "relative" }}>
                <Link href="/services" style={{ ...linkStyle, ...(isInServices ? activeLinkStyle : {}) }}>Services</Link>
            </li>
            <li style={{ position: "relative" }}>
                <Link href="/about" style={{ ...linkStyle, ...(currentPath === "/about" ? activeLinkStyle : {}) }}>About</Link>
            </li>
            <li style={{ position: "relative" }}>
                <Link href="/blog" style={{ ...linkStyle, ...(currentPath === "/blog" ? activeLinkStyle : {}) }}>Blog</Link>
            </li>
            <li style={{ position: "relative" }}>
                <Link href="/contact" style={{ ...linkStyle, ...(currentPath === "/contact" ? activeLinkStyle : {}) }}>Contact</Link>
            </li>
            <li style={{ position: "relative" }}>
                <Link href="/faqs" style={{ ...linkStyle, ...(currentPath === "/faqs" ? activeLinkStyle : {}) }}>FAQs</Link>
            </li>
            <li style={{ position: "relative" }}>
                <Link href="/3d" style={{ ...linkStyle, ...(currentPath === "/3d" ? activeLinkStyle : {}) }}>3D</Link>
            </li>
        </ul>
    );
};

const Header3D: React.FC = () => {
    const [quoteHovered, setQuoteHovered] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const headerStyle: React.CSSProperties = {
        position: "fixed",
        top: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 2rem)",
        maxWidth: "1400px",
        zIndex: 200,
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(0,0,0,0.1)",
        borderRadius: "20px",
        padding: "0.6rem 1.5rem",
        boxShadow: "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)",
    };

    const innerStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
    };

    const callStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        gap: "0.6rem",
    };

    const btnStyle: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.6rem 1.4rem",
        background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
        color: "#ffffff",
        borderRadius: "30px",
        fontWeight: 700,
        fontSize: "0.75rem",
        textDecoration: "none",
        letterSpacing: "0.03em",
        boxShadow: "0 0 20px rgba(0,0,0,0.15)",
        transition: "box-shadow 0.3s ease",
    };

    return (
        <>
            <style>{`
                .glass-nav-3d {
                    position: relative;
                    overflow: hidden;
                }
                .glass-nav-3d::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.01) 50%, rgba(0,0,0,0.02) 100%);
                    border-radius: inherit;
                    pointer-events: none;
                    z-index: -1;
                }
                .glass-nav-3d::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(ellipse at 30% 0%, rgba(0,0,0,0.03) 0%, transparent 60%);
                    border-radius: inherit;
                    pointer-events: none;
                    z-index: -1;
                }
                .header3d-desktop-nav { display: flex; }
                .header3d-desktop-actions { display: flex; }
                .header3d-hamburger { display: none; }
                .header3d-mobile-menu { display: none; }

                @media (max-width: 768px) {
                    .header3d-desktop-nav { display: none !important; }
                    .header3d-desktop-actions { display: none !important; }
                    .header3d-hamburger {
                        display: flex !important;
                        align-items: center;
                        justify-content: center;
                        width: 40px;
                        height: 40px;
                        border: 1px solid rgba(0,0,0,0.12);
                        border-radius: 12px;
                        background: transparent;
                        cursor: pointer;
                        flexShrink: 0;
                        transition: background 0.3s ease;
                    }
                    .header3d-hamburger:hover {
                        background: rgba(0,0,0,0.05);
                    }
                    .header3d-hamburger span {
                        display: block;
                        position: relative;
                        width: 18px;
                        height: 2px;
                        background: #000;
                        border-radius: 2px;
                        transition: all 0.3s ease;
                    }
                    .header3d-hamburger span::before,
                    .header3d-hamburger span::after {
                        content: "";
                        position: absolute;
                        left: 0;
                        width: 18px;
                        height: 2px;
                        background: #000;
                        border-radius: 2px;
                        transition: all 0.3s ease;
                    }
                    .header3d-hamburger span::before { top: -6px; }
                    .header3d-hamburger span::after { top: 6px; }
                    .header3d-hamburger.open span { background: transparent; }
                    .header3d-hamburger.open span::before {
                        top: 0;
                        transform: rotate(45deg);
                    }
                    .header3d-hamburger.open span::after {
                        top: 0;
                        transform: rotate(-45deg);
                    }
                    .header3d-mobile-menu {
                        display: flex !important;
                        flex-direction: column;
                        gap: 0.3rem;
                        padding: 1rem 0 0.5rem;
                        border-top: 1px solid rgba(0,0,0,0.08);
                        margin-top: 0.6rem;
                    }
                    .header3d-mobile-menu a {
                        color: rgba(0,0,0,0.7) !important;
                        textDecoration: none;
                        fontSize: 0.85rem;
                        fontWeight: 600;
                        padding: 0.7rem 0.5rem;
                        borderRadius: 10px;
                        transition: all 0.2s ease;
                    }
                    .header3d-mobile-menu a:hover {
                        background: rgba(0,0,0,0.05);
                        color: #000 !important;
                    }
                    .header3d-mobile-menu .header3d-mobile-quote {
                        background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%) !important;
                        color: #fff !important;
                        textAlign: center;
                        borderRadius: 30px;
                        padding: 0.7rem 1.4rem;
                        marginTop: 0.5rem;
                    }
                    .header3d-mobile-menu .header3d-mobile-call {
                        display: flex;
                        align-items: center;
                        gap: 0.6rem;
                        padding: 0.7rem 0.5rem;
                        color: rgba(0,0,0,0.5) !important;
                        fontSize: 0.8rem;
                    }
                    .header3d-mobile-menu .header3d-mobile-call a {
                        color: #000 !important;
                        fontWeight: 700;
                        padding: 0;
                    }
                    .header3d-mobile-menu .header3d-mobile-call a:hover {
                        background: transparent !important;
                    }
                }
            `}</style>
            <header style={headerStyle} className="glass-nav-3d">
                <div style={innerStyle}>
                    <Link href="/" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", flexShrink: 0, textDecoration: "none", lineHeight: 1.1 }}>
                        <span style={{
                            fontSize: "1.1rem",
                            fontWeight: 900,
                            letterSpacing: "0.02em",
                            color: "#000000",
                        }}>
                            BIRCHMOUNT
                        </span>
                        <span style={{
                            fontSize: "0.58rem",
                            fontWeight: 700,
                            letterSpacing: "0.3em",
                            color: "#000000",
                            marginTop: "2px",
                            width: "100%",
                            textAlign: "center",
                        }}>
                            AUTO REPAIR
                        </span>
                    </Link>

                    <nav className="header3d-desktop-nav" style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                        <MenuList3D />
                    </nav>

                    <div className="header3d-desktop-actions" style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexShrink: 0 }}>
                        <div style={callStyle}>
                            <i className="icon-call" style={{ color: "#000000", fontSize: "1rem" }} />
                            <div>
                                <p style={{ margin: 0, fontSize: "0.58rem", color: "rgba(0,0,0,0.5)", letterSpacing: "0.05em" }}>Call Anytime</p>
                                <a
                                    href="tel:4167578368"
                                    style={{
                                        color: "#000",
                                        textDecoration: "none",
                                        fontSize: "0.82rem",
                                        fontWeight: 700,
                                    }}
                                >
                                    (416) 757-8368
                                </a>
                            </div>
                        </div>
                        <a
                            href="tel:4167578368"
                            onMouseEnter={() => setQuoteHovered(true)}
                            onMouseLeave={() => setQuoteHovered(false)}
                            style={{
                                ...btnStyle,
                                boxShadow: quoteHovered ? "0 8px 30px rgba(0,0,0,0.2)" : "0 0 20px rgba(0,0,0,0.1)",
                                transform: quoteHovered ? "translateY(-3px) scale(1.03)" : "translateY(0) scale(1)",
                                filter: quoteHovered ? "brightness(1.1)" : "brightness(1)",
                            }}
                        >
                            Call Now
                            <span style={{ fontSize: "0.7rem" }}>&rarr;</span>
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className={`header3d-hamburger ${mobileOpen ? "open" : ""}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span />
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileOpen && (
                    <div className="header3d-mobile-menu">
                        <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
                        <Link href="/services" onClick={() => setMobileOpen(false)}>Services</Link>
                        <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
                        <Link href="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
                        <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
                        <Link href="/faqs" onClick={() => setMobileOpen(false)}>FAQs</Link>
                        <Link href="/3d" onClick={() => setMobileOpen(false)}>3D</Link>
                        <div className="header3d-mobile-call">
                            <i className="icon-call" style={{ color: "rgba(0,0,0,0.5)", fontSize: "0.9rem" }} />
                            <a href="tel:4167578368" onClick={() => setMobileOpen(false)}>(416) 757-8368</a>
                        </div>
                        <a href="tel:4167578368" className="header3d-mobile-quote" onClick={() => setMobileOpen(false)}>
                            Call Now &rarr;
                        </a>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header3D;
