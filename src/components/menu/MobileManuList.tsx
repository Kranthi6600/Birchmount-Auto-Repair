"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import useBirchmountAutoRepairContext from '../context/useBirchmountAutoRepairContext';
import { pagesList, serviceCategories, type MenuItem } from './menuContent';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


const MobileManuList: React.FC = () => {
    const { setIsMobileManu } = useBirchmountAutoRepairContext();
    const [isServices, setIsServices] = useState<boolean>(false);
    const [isPages, setIsPages] = useState<boolean>(false);
    const [expandedCats, setExpandedCats] = useState<number[]>([]);
    const currentPath = usePathname();
    const findLocation = (array: MenuItem[]): boolean => {
        return array.some(item => item?.menuLink === currentPath);
    };
    const closeMobileManu = () => {
        setIsMobileManu(false);
        setIsServices(false);
        setIsPages(false);
        setExpandedCats([]);
    };

    const isInServices = serviceCategories.some((cat) =>
        cat.services.some((s) => s.menuLink === currentPath)
    );

    const toggleCat = (id: number) => {
        setExpandedCats((prev) => prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]);
    };

    return (
        <ul className="main-menu__list mobileManulist">
            <li className={`${currentPath === "/" ? "current" : ""}`} onClick={closeMobileManu}>
                <Link href="/">Home</Link>
            </li>
            <li className="dropdown">
                <a href="#" className={`${isServices || isInServices ? "expanded" : ""}`}>
                    Services
                    <button className={`${isServices ? "expanded" : ""}`} onClick={() => setIsServices((pre) => !pre)} aria-label="Toggle services"><i className="fa fa-angle-down"></i></button>
                </a>
                <div style={{ display: `${isServices ? "block" : "none"}` }}>
                    <ul style={{ listStyle: 'none', padding: '8px 0 8px 12px', margin: 0, borderLeft: '2px solid #e5e5e5' }}>
                        {serviceCategories.map((cat) => {
                            const isCatExpanded = expandedCats.includes(cat.id);
                            const hasActiveService = cat.services.some((s) => s.menuLink === currentPath);
                            return (
                                <li key={cat.id} style={{ marginBottom: '4px' }}>
                                    <button
                                        type="button"
                                        onClick={() => toggleCat(cat.id)}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            gap: '8px',
                                            padding: '8px 10px',
                                            borderRadius: '6px',
                                            fontSize: '13px',
                                            fontWeight: 600,
                                            border: 'none',
                                            background: isCatExpanded || hasActiveService ? 'rgba(200,16,46,0.08)' : 'transparent',
                                            color: isCatExpanded || hasActiveService ? '#c8102e' : '#333',
                                            cursor: 'pointer',
                                            textAlign: 'left'
                                        }}
                                    >
                                        <span>{cat.title}</span>
                                        <i className={`fa fa-angle-down`} style={{ transform: isCatExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}></i>
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {isCatExpanded && (
                                            <motion.ul
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25 }}
                                                style={{ overflow: 'hidden', listStyle: 'none', padding: '4px 0 4px 12px', margin: 0 }}
                                            >
                                                {cat.services.map((service) => {
                                                    const active = currentPath === service.menuLink;
                                                    return (
                                                        <li key={service.id}>
                                                            <Link
                                                                href={service.menuLink}
                                                                onClick={closeMobileManu}
                                                                className={active ? "current" : ""}
                                                                style={{
                                                                    display: 'block',
                                                                    padding: '6px 8px',
                                                                    fontSize: '13px',
                                                                    color: active ? '#c8102e' : '#555',
                                                                    fontWeight: active ? 600 : 400,
                                                                    textDecoration: 'none',
                                                                    borderRadius: '4px'
                                                                }}
                                                            >
                                                                {service.menuItem}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </li>
            <li className={`${currentPath === "/about" ? "current" : ""}`} onClick={closeMobileManu}>
                <Link href="/about">About</Link>
            </li>
            <li className={`${currentPath === "/blog" ? "current" : ""}`} onClick={closeMobileManu}>
                <Link href="/blog">Blog</Link>
            </li>
            <li className={`${currentPath === "/contact" ? "current" : ""}`} onClick={closeMobileManu}>
                <Link href="/contact">Contact</Link>
            </li>
            <li className="dropdown">
                <a href="#" className={`${isPages || findLocation(pagesList) ? "expanded" : ""}`}>
                    Pages
                    <button onClick={() => setIsPages((pre) => !pre)} className={`${isPages ? "expanded" : ""}`}><i className="fa fa-angle-down"></i></button>
                </a>
                <ul className="shadow-box" style={{ display: `${isPages ? "block" : "none"}` }}>
                    {pagesList.map((Item: MenuItem) => (
                        <motion.li
                            onClick={closeMobileManu}
                            initial={{ x: -70, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.1 * Item?.id, ease: "easeOut" }}
                            viewport={{ amount: 0.01, once: true }}
                            key={Item?.id}
                            className={`${currentPath === Item?.menuLink ? "current" : ""}`}>
                            <Link href={Item?.menuLink}>{Item?.menuItem}</Link>
                        </motion.li>
                    ))}
                </ul>
            </li>
        </ul>
    );
};

export default MobileManuList;