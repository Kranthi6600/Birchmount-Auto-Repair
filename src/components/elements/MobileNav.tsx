"use client";
import React from 'react';
import Logo from "@/assets/images/resources/logo-2.png"
import useFixproContext from '../context/useFixproContext';
import MobileManuList from '../menu/MobileManuList';
import SinglePageManuList from '../menu/SinglePageManuList';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
const MobileNav: React.FC = () => {
    const { isMobileManu, setIsMobileManu } = useFixproContext();
    const currentPath = usePathname();
    const isOnePage = currentPath.includes("single-page");

    return (
        <div className={`mobile-nav__wrapper ${isMobileManu ? "expanded" : ""}`}>
            <div className="mobile-nav__overlay mobile-nav__toggler" onClick={() => setIsMobileManu((pre) => (!pre))}></div>
            {/* <!-- /.mobile-nav__overlay --> */}
            <div className="mobile-nav__content">
                <span className="mobile-nav__close mobile-nav__toggler" onClick={() => setIsMobileManu((pre) => (!pre))}><i className="fa fa-times"></i></span>

                <div className="logo-box">
                    <Link href="/" aria-label="logo image" onClick={() => setIsMobileManu((pre) => (!pre))}>
                        <Image src={Logo} width={138} height={40} alt="Logo" />
                    </Link>
                </div>
                <div className="mobile-nav__container">
                    {
                        isOnePage ? <SinglePageManuList /> : <MobileManuList />
                    }
                </div>
                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <a href="mailto:needhelp@packageName__.com">needhelp@Fixpro</a>
                    </li>
                    <li>
                        <i className="fas fa-phone"></i>
                        <a href="tel:666-888-0000">666 888 0000</a>
                    </li>
                </ul>
                <div className="mobile-nav__top">
                    <div className="mobile-nav__social">
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-facebook-square"></a>
                        <a href="#" className="fab fa-pinterest-p"></a>
                        <a href="#" className="fab fa-instagram"></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;