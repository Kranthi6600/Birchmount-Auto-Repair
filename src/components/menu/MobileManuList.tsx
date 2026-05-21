"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion"
import useBirchmountAutoRepairContext from '../context/useBirchmountAutoRepairContext';
import { pagesList, servicesList, type MenuItem } from './menuContent';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


const MobileManuList: React.FC = () => {
    const { setIsMobileManu } = useBirchmountAutoRepairContext();
    const [isServices, setIsServices] = useState<boolean>(false);
    const [isPages, setIsPages] = useState<boolean>(false);
    const currentPath = usePathname();
    const findLocation = (array: MenuItem[]): boolean => {
        return array.some(item => item?.menuLink === currentPath);
    };
    const closeMobileManu = () => {
        setIsMobileManu(false);
        setIsServices(false);
        setIsPages(false);
    };
    return (
        <ul className="main-menu__list mobileManulist">
            <li className={`${currentPath === "/" ? "current" : ""}`} onClick={closeMobileManu}>
                <Link href="/">Home</Link>
            </li>
            <li className="dropdown">
                <a href="#" className={`${isServices || findLocation(servicesList) ? "expanded" : ""}`}>
                    Services
                    <button className={`${isServices ? "expanded" : ""}`} onClick={() => setIsServices((pre) => !pre)}><i className="fa fa-angle-down"></i></button>
                </a>
                <ul className="shadow-box" style={{ display: `${isServices ? "block" : "none"}` }}>
                    {servicesList.map((Item: MenuItem) => (
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