"use client";

import React from 'react';
import { homeList, servicesList, type MenuItem } from './menuContent';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuList: React.FC = () => {
    const currentPath = usePathname();
    const findLocation = (array: MenuItem[]): boolean => {
        return array.some(item => item?.menuLink === currentPath);
    };

    const isInServices = findLocation(servicesList);

    return (
        <ul className="main-menu__list">
            <li className={`${findLocation(homeList) ? "current" : ""}`}>
                <Link href="/">Home </Link>
            </li>
            <li className={`dropdown ${isInServices ? "current" : ""}`}>
                <Link href="/services">Services</Link>
                <ul className="shadow-box">
                    {servicesList.map((item: MenuItem) => (
                        <li key={item.id} className={currentPath === item.menuLink ? "current" : ""}>
                            <Link href={item.menuLink}>{item.menuItem}</Link>
                        </li>
                    ))}
                </ul>
            </li>
            <li className={currentPath === "/about" ? "current" : ""}>
                <Link href="/about">About</Link>
            </li>
            <li className={` ${currentPath === "/blog" ? "current" : ""}`}>
                <Link href="/blog">Blog</Link>
            </li>
            <li className={currentPath === "/contact" ? "current" : ""}>
                <Link href="/contact">Contact</Link>
            </li>
            <li className={currentPath === "/faqs" ? "current" : ""}>
                <Link href="/faqs">FAQs</Link>
            </li>
        </ul>
    );
};

export default MenuList;