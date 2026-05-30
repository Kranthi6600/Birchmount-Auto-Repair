"use client";

import React from 'react';
import { homeList, pagesList, serviceCategories, type MenuItem } from './menuContent';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuList: React.FC = () => {
    const currentPath = usePathname();
    const findLocation = (array: MenuItem[]): boolean => {
        return array.some(item => item?.menuLink === currentPath);
    };

    const isInServices = serviceCategories.some((cat) =>
        cat.services.some((s) => s.menuLink === currentPath)
    );

    return (
        <ul className="main-menu__list">
            <li className={`${findLocation(homeList) ? "current" : ""}`}>
                <Link href="/">Home </Link>
            </li>
            <li className={`dropdown ${isInServices ? "current" : ""}`}>
                <Link href="/services">Services</Link>
                <ul className="shadow-box services-mega-dropdown">
                    {serviceCategories.map((cat) => (
                        <li key={cat.id} style={{ padding: 0, border: 'none' }}>
                            <h4 style={{
                                fontSize: '12px',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.4px',
                                marginBottom: '8px',
                                paddingBottom: '6px',
                                borderBottom: '2px solid #2AB97E',
                                color: '#1a1a1a',
                                lineHeight: 1.3
                            }}>
                                {cat.title}
                            </h4>
                            <ul style={{ listStyle: 'none', padding: '0 0 0 16px', margin: 0 }}>
                                {cat.services.map((service) => {
                                    const active = currentPath === service.menuLink;
                                    return (
                                        <li key={service.id} style={{ marginBottom: '5px' }}>
                                            <Link
                                                href={service.menuLink}
                                                className={active ? "current" : ""}
                                                style={{
                                                    fontSize: '12px',
                                                    color: active ? '#2AB97E' : '#333',
                                                    fontWeight: active ? 600 : 400,
                                                    textDecoration: 'none',
                                                    transition: 'all 0.2s ease',
                                                    display: 'inline-block',
                                                    padding: '1px 0'
                                                }}
                                                onMouseEnter={(e) => {
                                                    (e.target as HTMLElement).style.color = '#2AB97E';
                                                    (e.target as HTMLElement).style.paddingLeft = '5px';
                                                }}
                                                onMouseLeave={(e) => {
                                                    (e.target as HTMLElement).style.color = active ? '#2AB97E' : '#333';
                                                    (e.target as HTMLElement).style.paddingLeft = '0px';
                                                }}
                                            >
                                                {service.menuItem}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
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
            <li className={`dropdown ${findLocation(pagesList) ? "current" : ""}`}>
                <Link href="/pages">Pages</Link>
                <ul className="shadow-box">
                    {
                        pagesList.map((item: MenuItem) => (
                            <li key={item?.id} className={currentPath === item?.menuLink ? "current" : ""}><Link href={item?.menuLink}>{item?.menuItem}</Link></li>
                        ))
                    }
                </ul>
            </li>
        </ul>
    );
};

export default MenuList;