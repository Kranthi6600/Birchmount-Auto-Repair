"use client";

import React from 'react';
const logo = "/assets/images/logo1.PNG"
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
                        <Link href="/"><Image src={logo} width={200} height={60} style={{ width: 'auto', height: '60px' }} alt="Birchmount Auto Repair Logo" /></Link>
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
                            <h5 className="main-menu__call-number"><a href="tel:4167578368">(416) 757-8368</a></h5>
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