"use client";

import React from 'react';
import { homeList, type MenuItem } from './menuContent';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useServices } from '@/hooks/useServices';

const MenuList: React.FC = () => {
    const currentPath = usePathname();
    const { data: apiServices, isLoading } = useServices();

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

    const findLocation = (array: MenuItem[]): boolean => {
        return array.some(item => item?.menuLink === currentPath);
    };

    const isInServices = findLocation(dynamicServicesList);

    return (
        <ul className="main-menu__list">
            <li className={`${findLocation(homeList) ? "current" : ""}`}>
                <Link href="/">Home </Link>
            </li>
            <li className={`dropdown ${isInServices ? "current" : ""}`}>
                <Link href="/services">Services</Link>
                <ul className="shadow-box">
                    {isLoading ? (
                        <li><span style={{ padding: '8px 16px', display: 'block' }}>Loading...</span></li>
                    ) : (
                        dynamicServicesList.map((item: MenuItem) => (
                            <li key={item.id} className={currentPath === item.menuLink ? "current" : ""}>
                                <Link href={item.menuLink}>{item.menuItem}</Link>
                            </li>
                        ))
                    )}
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