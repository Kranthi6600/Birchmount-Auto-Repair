"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion"
import useBirchmountAutoRepairContext from '../context/useBirchmountAutoRepairContext';
import { useServices } from '@/hooks/useServices';
import type { ApiService } from '@/lib/api';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface MenuItem {
    id: number;
    menuItem: string;
    menuLink: string;
}

const MobileManuList: React.FC = () => {
    const { setIsMobileManu } = useBirchmountAutoRepairContext();
    const [isServices, setIsServices] = useState<boolean>(false);
    const currentPath = usePathname();
    const { data: apiServices, isLoading } = useServices();

    const servicesList: MenuItem[] = React.useMemo(() => {
        if (!apiServices) return [];
        const seen = new Set<string>();
        const items: MenuItem[] = [];
        apiServices.forEach((s: ApiService) => {
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

    const findLocation = (array: MenuItem[]): boolean => {
        return array.some(item => item?.menuLink === currentPath);
    };
    const closeMobileManu = () => {
        setIsMobileManu(false);
        setIsServices(false);
    };

    return (
        <ul className="main-menu__list mobileManulist">
            <li className={`${currentPath === "/" ? "current" : ""}`} onClick={closeMobileManu}>
                <Link href="/">Home</Link>
            </li>
            <li className="dropdown">
                <a href="#" className={`${isServices || findLocation(servicesList) ? "expanded" : ""}`}>
                    Services
                    <button className={`${isServices ? "expanded" : ""}`} onClick={() => setIsServices((pre) => !pre)} aria-label="Toggle services"><i className="fa fa-angle-down"></i></button>
                </a>
                <ul className="shadow-box" style={{ display: `${isServices ? "block" : "none"}` }}>
                    {isLoading ? (
                        <li><span style={{ padding: '12px 20px', display: 'block' }}>Loading...</span></li>
                    ) : (
                        servicesList.map((item: MenuItem) => (
                            <motion.li
                                onClick={closeMobileManu}
                                initial={{ x: -70, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.1 * item.id, ease: "easeOut" }}
                                viewport={{ amount: 0.01, once: true }}
                                key={item.id}
                                className={currentPath === item.menuLink ? "current" : ""}
                            >
                                <Link href={item.menuLink}>{item.menuItem}</Link>
                            </motion.li>
                        ))
                    )}
                </ul>
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
            <li className={`${currentPath === "/faqs" ? "current" : ""}`} onClick={closeMobileManu}>
                <Link href="/faqs">FAQs</Link>
            </li>
        </ul>
    );
};

export default MobileManuList;