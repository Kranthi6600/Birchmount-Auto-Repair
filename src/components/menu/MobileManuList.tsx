"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion"
import useFixproContext from '../context/useFixproContext';
import { blogList, homeList, pagesList, servicesList, shopList, type MenuItem } from './menuContent';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


const MobileManuList: React.FC = () => {
    const { setIsMobileManu } = useFixproContext();
    const [isHome, setIsHome] = useState<boolean>(false);
    const [isPages, setIsPages] = useState<boolean>(false);
    const [isCars, setIsCars] = useState<boolean>(false);
    const [isShop, setIsShop] = useState<boolean>(false);
    const [isBlog, setIsBlog] = useState<boolean>(false);
    const currentPath = usePathname();
    const findLocation = (array: MenuItem[]): boolean => {
        return array.some(item => item?.menuLink === currentPath);
    };
    const closeMobileManu = () => {
        setIsMobileManu(false)
        setIsHome(false)
        setIsPages(false)
        setIsCars(false)
        setIsShop(false)
        setIsBlog(false)
    }
    return (
        <ul className="main-menu__list mobileManulist">
            <li className="dropdown">
                <a href="#" className={`${isHome || findLocation(homeList) ? "expanded" : ""}`}>
                    Home
                    <button className={`${isHome ? "expanded" : ""}`} onClick={() => setIsHome((pre) => (!pre))} > <i className="fa fa-angle-down"></i></button>
                </a>
                <ul className="shadow-box" style={{ display: `${isHome ? "block" : "none"}` }}>
                    {
                        homeList.map((Item: MenuItem) => (
                            <motion.li
                                onClick={closeMobileManu}
                                initial={{ x: -70, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.1 * Item?.id,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.01, once: true }}
                                key={Item?.id} className={`${currentPath === Item?.menuLink ? "current" : ""}`}>
                                <Link href={Item?.menuLink}>{Item?.menuItem}</Link>
                            </motion.li>
                        ))
                    }
                </ul>
            </li>
            <li className={`${currentPath === "/about" ? "current" : ""}`} onClick={closeMobileManu}>
                <Link href="/about">About Us</Link>
            </li>
            <li className="dropdown">
                <a href="#" className={`${isPages || findLocation(pagesList) ? "expanded" : ""}`}>
                    Pages
                    <button onClick={() => setIsPages((pre) => (!pre))} className={`${isPages ? "expanded" : ""}`} > <i className="fa fa-angle-down"></i></button>
                </a>
                <ul className="shadow-box" style={{ display: `${isPages ? "block" : "none"}` }}>
                    {
                        pagesList.map((Item: MenuItem) => (
                            <motion.li
                                onClick={closeMobileManu}
                                initial={{ x: -70, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.1 * Item?.id,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.01, once: true }}
                                key={Item?.id} className={`${currentPath === Item?.menuLink ? "current" : ""}`}>
                                <Link href={Item?.menuLink}>{Item?.menuItem}</Link>
                            </motion.li>
                        ))
                    }
                </ul>
            </li>
            <li className="dropdown">
                <a href="#" className={`${isCars || findLocation(servicesList) ? "expanded" : ""}`}>
                    Services
                    <button className={`${isCars ? "expanded" : ""}`} onClick={() => setIsCars((pre) => (!pre))} > <i className="fa fa-angle-down"></i></button>
                </a>
                <ul className="shadow-box" style={{ display: `${isCars ? "block" : "none"}` }}>
                    {
                        servicesList.map((Item: MenuItem) => (
                            <motion.li
                                onClick={closeMobileManu}
                                initial={{ x: -70, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.1 * Item?.id,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.01, once: true }}
                                key={Item?.id} className={`${currentPath === Item?.menuLink ? "current" : ""}`} >
                                <Link href={Item?.menuLink}>{Item?.menuItem}</Link>
                            </motion.li>
                        ))
                    }
                </ul>
            </li>
            <li className="dropdown">
                <a href="#" className={`${isShop || findLocation(shopList) ? "expanded" : ""}`}>
                    Shop
                    <button className={`${isShop ? "expanded" : ""}`} onClick={() => setIsShop((pre) => (!pre))} > <i className="fa fa-angle-down"></i></button>

                </a>
                <ul className="shadow-box" style={{ display: `${isShop ? "block" : "none"}` }}>
                    {
                        shopList.map((Item: MenuItem) => (
                            <motion.li
                                onClick={closeMobileManu}
                                initial={{ x: -70, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.1 * Item?.id,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.01, once: true }}
                                key={Item?.id} className={`${currentPath === Item?.menuLink ? "current" : ""}`} >
                                <Link href={Item?.menuLink}>{Item?.menuItem}</Link>
                            </motion.li>
                        ))
                    }
                </ul>
            </li>
            <li className="dropdown">
                <a href="#" className={`${isBlog || findLocation(blogList) ? "expanded" : ""}`}>
                    Blog
                    <button className={`${isBlog ? "expanded" : ""}`} onClick={() => setIsBlog((pre) => (!pre))} > <i className="fa fa-angle-down"></i></button>
                </a>
                <ul className="shadow-box" style={{ display: `${isBlog ? "block" : "none"}` }}>
                    {
                        blogList.map((Item: MenuItem) => (
                            <motion.li
                                onClick={closeMobileManu}
                                initial={{ x: -70, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.1 * Item?.id,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.01, once: true }}
                                key={Item?.id} className={`${currentPath === Item?.menuLink ? "current" : ""}`} >
                                <Link href={Item?.menuLink}>{Item?.menuItem}</Link>
                            </motion.li>
                        ))
                    }
                </ul>
            </li>
            <li className={`${currentPath === "/contact" ? "current" : ""}`} onClick={closeMobileManu}>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    );
};

export default MobileManuList;