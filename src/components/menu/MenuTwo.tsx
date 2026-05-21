"use client";
import React from 'react';
const logo = "/assets/images/resources/logo-2.png"
import MenuList from './MenuList';
import useBirchmountAutoRepairContext from '../context/useBirchmountAutoRepairContext';
import SinglePageManuList from './SinglePageManuList';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
const MenuTwo: React.FC = () => {
    const { setIsSearch, setIsSidebar, setIsMobileManu, cartCount } = useBirchmountAutoRepairContext();
    const currentPath = usePathname();
    const isOnePage = currentPath.includes("single-page")
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
        <div className="main-menu-two__wrapper">
            <div className="main-menu-two__wrapper-inner">
                <div className="main-menu-two__left">
                    <div className="main-menu-two__logo">
                        <Link href="/"><Image src={logo} width={138} height={40} alt="Logo" /></Link>
                    </div>
                </div>
                <div className="main-menu-two__main-menu-box">
                    <Link href="#" onClick={handlMobileMenu} className="mobile-nav__toggler"><i className="fa fa-bars"></i></Link>
                    {
                        isOnePage ? <SinglePageManuList /> : <MenuList />
                    }
                </div>
                <div className="main-menu-two__right">
                    <div className="main-menu-two__call">
                        <div className="main-menu-two__call-icon">
                            <i className="icon-call"></i>
                        </div>
                        <div className="main-menu-two__call-content">
                            <p className="main-menu-two__call-sub-title">Call Anytime</p>
                            <h5 className="main-menu-two__call-number"><a href="tel:4167578368">(416) 757-8368</a></h5>
                        </div>
                    </div>
                    <div className="main-menu-two__nav-sidebar-icon" onClick={handlSidebar}>
                        <a className="navSidebar-button" href="#">
                            <span className="icon-dots-menu-one"></span>
                            <span className="icon-dots-menu-two"></span>
                            <span className="icon-dots-menu-three"></span>
                        </a>
                    </div>
                    <div className="main-menu-two__btn-box">
                        <Link href="/contact" className="thm-btn">Get A Quote<span className="icon-arrow-right"></span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuTwo;