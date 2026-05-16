"use client";
import React, { useCallback, useMemo, useRef, useState } from 'react';
import type { contextType } from './contextType';
import FixproContext from './FixproContext';


const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
    const [isMobileManu, setIsMobileManu] = useState<boolean>(false);
    const [isSidebar, setIsSidebar] = useState(false);
    const [isSearch, setIsSearch] = useState(false)
    const [showVideoPopup, setShowVideoPopup] = useState<boolean>(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState<string>("");
    const [activeSection, setActiveSection] = useState<string>("home");
    const [cartCount, setCartCount] = useState<number>(4);

    const handleVideoClick = useCallback((
        e: React.MouseEvent<HTMLElement>,
        videoUrl: string = "https://www.youtube.com/watch?v=Get7rqXYrbQ"
    ): void => {
        e.preventDefault();
        setCurrentVideoUrl(videoUrl);
        setShowVideoPopup(true);
    }, [setCurrentVideoUrl, setShowVideoPopup]);


    const registerSection = useCallback((id: string, element: HTMLElement | null): void => {
        sectionRefs.current[id] = element;
    }, [sectionRefs])

    const scrollToSection = useCallback((id: string): void => {
        const element = sectionRefs.current[id];
        if (!element) return;
        const offset = id === 'home' ? 140 : 40;
        const top = element.offsetTop - offset;
        window.scrollTo({
            top,
            behavior: "smooth",
        });
    }, [sectionRefs])

    const info: contextType = useMemo(() => ({
        isMobileManu, setIsMobileManu,
        isSidebar, setIsSidebar,
        isSearch, setIsSearch,
        showVideoPopup, setShowVideoPopup,
        currentVideoUrl, setCurrentVideoUrl,
        handleVideoClick,
        activeSection, setActiveSection,
        cartCount, setCartCount,
        scrollToSection,
        registerSection
    }), [
        isMobileManu, setIsMobileManu,
        isSidebar, setIsSidebar,
        isSearch, setIsSearch,
        showVideoPopup, setShowVideoPopup,
        currentVideoUrl, setCurrentVideoUrl,
        handleVideoClick,
        activeSection, setActiveSection,
        cartCount, setCartCount,
        scrollToSection,
        registerSection
    ])

    return (
        <FixproContext.Provider value={info}>
            {children}
        </FixproContext.Provider>
    );
};

export default ContextProvider;