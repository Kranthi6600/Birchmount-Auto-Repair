"use client";

import React, { useEffect, useState } from 'react';
import MenuTwo from '../menu/MenuTwo';

const HeaderTwo: React.FC = () => {
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
            <header className="main-header-two">
                <nav className="main-menu main-menu-two">
                    <MenuTwo />
                </nav>
            </header>

            <div className={`stricky-header stricked-menu main-menu main-menu-two ${isStick ? 'stricky-fixed' : ''}`}>
                <div className="sticky-header__content">
                    <MenuTwo />
                </div>
            </div>
        </>
    );
};

export default HeaderTwo;