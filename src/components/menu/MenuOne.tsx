"use client";

import React from 'react';
import logo from "@/assets/images/resources/logo-1.png"
import MenuList from './MenuList';
import useBirchmountAutoRepairContext from '../context/useBirchmountAutoRepairContext';
import SinglePageManuList from './SinglePageManuList';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';


const MenuOne: React.FC = () => {
    const { setIsSearch, setIsSidebar, setIsMobileManu, cartCount } = useBirchmountAutoRepairContext();
    const currentPath = usePathname();
    const isOnePage = currentPath.includes("single-page");

    const handleSearch = () => {
        setIsSearch(pre => !pre)
    }
    const handlSidebar = () => {
        setIsSidebar(pre => !pre)
    }
    const handlMobileMenu = () => {
        setIsMobileManu(pre => !pre)
    }
    return (
        <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
                <div className="main-menu__left">
                    <div className="main-menu__logo">
                        <Link href="/"><Image src={logo} width={138} height={40} alt="Logo" /></Link>
                    </div>
                </div>
                <div className="main-menu__main-menu-box">
                    <a href="#" onClick={handlMobileMenu} className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                    {
                        isOnePage ? <SinglePageManuList /> : <MenuList />
                    }
                </div>
                <div className="main-menu__right">
                    <div className="main-menu__call">
                        <div className="main-menu__call-icon">
                            <i className="icon-call"></i>
                        </div>
                        <div className="main-menu__call-content">
                            <p className="main-menu__call-sub-title">Call Anytime</p>
                            <h5 className="main-menu__call-number"><a href="tel:9288006780">+92 ( 8800 ) - 6780</a></h5>
                        </div>
                    </div>
                    <div className="main-menu__search-cart-box">
                        <div className="main-menu__search-box" onClick={handleSearch}>
                            <a href="#" className="main-menu__search searcher-toggler-box icon-search-interface-symbol"></a>
                        </div>
                        <div className="main-menu__cart-box">
                            <Link href="/cart" className="main-menu__cart">
                                <span className="far fa-shopping-cart"></span>
                                <span className="main-menu__cart-count">0{cartCount}</span>
                            </Link>
                        </div>
                    </div>
                    <div className="main-menu__nav-sidebar-icon" onClick={handlSidebar}>
                        <a className="navSidebar-button" href="#">
                            <span className="icon-dots-menu-one"></span>
                            <span className="icon-dots-menu-two"></span>
                            <span className="icon-dots-menu-three"></span>
                        </a>
                    </div>
                    <div className="main-menu__btn-box">
                        <Link href="/contact" className="thm-btn">Get A Quote<span className="icon-arrow-right"></span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuOne;