"use client";
import React from 'react';
const Logo = "/assets/images/logo1.PNG"
import useBirchmountAutoRepairContext from '../context/useBirchmountAutoRepairContext';
import MobileManuList from '../menu/MobileManuList';
import Link from 'next/link';
import Image from 'next/image';
const MobileNav: React.FC = () => {
    const { isMobileManu, setIsMobileManu } = useBirchmountAutoRepairContext();
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
                    <MobileManuList />
                </div>
                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <a href="mailto:needhelp@packageName__.com">needhelp@Birchmount Auto Repair</a>
                    </li>
                    <li>
                        <i className="fas fa-phone"></i>
                        <a href="tel:4167578368">(416) 757-8368</a>
                    </li>
                </ul>
                <div className="mobile-nav__top">
                    <div className="mobile-nav__social">
                        <a href="https://www.instagram.com/p/DZ_RDrcvByk/?igsh=MWN0MTNzOTVrN2hsYQ==" target="_blank" rel="noopener noreferrer" className="fab fa-instagram"></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;