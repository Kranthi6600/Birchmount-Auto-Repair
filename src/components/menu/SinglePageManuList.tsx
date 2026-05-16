"use client";
import React from 'react'; 
import useFixproContext from '../context/useFixproContext';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
interface SinglePageMenuItem {
    id: number;
    linkId: string;
    value: string;
}
const singlePageMenuListHomeOne: SinglePageMenuItem[] = [
    { id: 1, linkId: "home", value: "Home" },
    { id: 2, linkId: "about", value: "About" },
    { id: 3, linkId: "services", value: "Services" },
    { id: 4, linkId: "projects", value: "Projects" },
    { id: 5, linkId: "contact", value: "Contact" },
    { id: 6, linkId: "team", value: "Team" },
    { id: 7, linkId: "blog", value: "Blog" }
]
const singlePageMenuListHomeTwo: SinglePageMenuItem[] = [
    { id: 1, linkId: "home", value: "Home" },
    { id: 2, linkId: "about", value: "About" },
    { id: 3, linkId: "services", value: "Services" },
    { id: 4, linkId: "projects", value: "Projects" },
    { id: 5, linkId: "team", value: "Team" },
    { id: 6, linkId: "contact", value: "Contact" },
    { id: 7, linkId: "blog", value: "Blog" }
]
const singlePageMenuListHomeThree: SinglePageMenuItem[] = [
    { id: 1, linkId: "home", value: "Home" },
    { id: 2, linkId: "about", value: "About" },
    { id: 3, linkId: "services", value: "Services" },
    { id: 4, linkId: "contact", value: "Contact" },
    { id: 5, linkId: "projects", value: "Projects" },
    { id: 6, linkId: "team", value: "Team" },
    { id: 7, linkId: "blog", value: "Blog" }
]


const SinglePageManuList: React.FC = () => {
    const { activeSection, setIsMobileManu, scrollToSection } = useFixproContext();
    const currentPath = usePathname();

    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
        e.preventDefault();
        scrollToSection(id);
        setIsMobileManu(false);
    }
    return (
        <ul className="main-menu__list one-page-scroll-menu">
            {
                (
                    currentPath === "/single-page-home-one"
                        ?
                        singlePageMenuListHomeOne
                        : currentPath === "/single-page-home-two"
                            ? singlePageMenuListHomeTwo : singlePageMenuListHomeThree
                ).map((item: SinglePageMenuItem) => (
                    <li key={item?.id} className={`scrollToLink ${activeSection === item?.linkId ? "current" : ""}`}>
                        <Link href={`#${item?.linkId}`} onClick={(e) => handleScrollClick(e, item.linkId)}>{item?.value}</Link>
                    </li>
                ))
            }
        </ul>
    );
};

export default SinglePageManuList;