"use client";

import React, { useEffect, useState } from 'react';
import MenuOne from '../menu/MenuOne';

const HeaderOne: React.FC = () => {
    const [isStick, setIsSticky] = useState<boolean>(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [setIsSticky]);
    return (
        <>
            <header className="main-header">
                <div className="main-menu__top">
                    <div className="main-menu__top-inner">
                        <ul className="list-unstyled main-menu__contact-list">
                            <li>
                                <div className="icon">
                                    <i className="icon-call"></i>
                                </div>
                                <div className="text">
                                    <p><a href="tel:4167578368">(416) 757-8368</a></p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="icon-envelope"></i>
                                </div>
                                <div className="text">
                                    <p><a href="mailto:info@birchmountautorepair.ca">info@birchmountautorepair.ca</a>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="icon-location"></i>
                                </div>
                                <div className="text">
                                    <p>1064 Birchmount Rd, Scarborough, ON M1K 1S4</p>
                                </div>
                            </li>
                        </ul>
                        <p className="main-menu__top-welcome-text">Welcome to Birchmount Auto Repair — Scarborough&apos;s Trusted Mechanic</p>
                        <div className="main-menu__top-right">
                            <div className="main-menu__top-time">
                                <div className="main-menu__top-time-icon">
                                    <span className="icon-clock"></span>
                                </div>
                                <p className="main-menu__top-text">Mon–Fri: 8am–6pm | Sat: 9am–3pm</p>
                            </div>
                            <div className="main-menu__social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="main-menu">
                    <MenuOne />
                </nav>
            </header>
            <div className={`stricky-header stricked-menu main-menu ${isStick ? 'stricky-fixed' : ''}`}>
                <div className="sticky-header__content">
                    <MenuOne />
                </div>
            </div>
        </>
    );
};

export default HeaderOne;