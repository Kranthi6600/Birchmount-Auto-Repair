"use client";

import React from 'react';
import { blogList, homeList, pagesList, servicesList, shopList, type MenuItem } from './menuContent';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuList: React.FC = () => {
    const currentPath = usePathname();
    const findLocation = (array: MenuItem[]): boolean => {
        return array.some(item => item?.menuLink === currentPath);
    };
    return (
        <ul className="main-menu__list">
            <li className={`dropdown ${findLocation(homeList) ? "current" : ""}`}>
                <a href="#">Home </a>
                <ul className="shadow-box">
                    {
                        homeList.map((item: MenuItem) => (
                            <li key={item?.id} className={currentPath === item?.menuLink ? "current" : ""}><Link href={item?.menuLink}>{item?.menuItem}</Link></li>
                        ))
                    }
                </ul>
            </li>
            <li className={currentPath === "/about" ? "current" : ""}>
                <Link href="/about">About</Link>
            </li>
            <li className={`dropdown ${findLocation(pagesList) ? "current" : ""}`}>
                <a href="#">Pages</a>
                <ul className="shadow-box">
                    {
                        pagesList.map((item: MenuItem) => (
                            <li key={item?.id} className={currentPath === item?.menuLink ? "current" : ""}><Link href={item?.menuLink}>{item?.menuItem}</Link></li>
                        ))
                    }
                </ul>
            </li>
            <li className={`dropdown ${findLocation(servicesList) ? "current" : ""}`}>
                <a href="#">Services</a>
                <ul className="shadow-box">
                    {
                        servicesList.map((item: MenuItem) => (
                            <li key={item?.id} className={currentPath === item?.menuLink ? "current" : ""}><Link href={item?.menuLink}>{item?.menuItem}</Link></li>
                        ))
                    }
                </ul>
            </li>
            <li className={`dropdown ${findLocation(shopList) ? "current" : ""}`}>
                <a href="#">Shop</a>
                <ul className="shadow-box">
                    {
                        shopList.map((item: MenuItem) => (
                            <li key={item?.id} className={currentPath === item?.menuLink ? "current" : ""}><Link href={item?.menuLink}>{item?.menuItem}</Link></li>
                        ))
                    }
                </ul>
            </li>
            <li className={`dropdown ${findLocation(blogList) ? "current" : ""}`}>
                <a href="#">Blog</a>
                <ul className="shadow-box">
                    {
                        blogList.map((item: MenuItem) => (
                            <li key={item?.id} className={currentPath === item?.menuLink ? "current" : ""}><Link href={item?.menuLink}>{item?.menuItem}</Link></li>
                        ))
                    }
                </ul>
            </li>
            <li className={currentPath === "/contact" ? "current" : ""}>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    );
};

export default MenuList;