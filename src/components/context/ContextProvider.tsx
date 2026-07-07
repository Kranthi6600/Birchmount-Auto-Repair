"use client";
import React, { useCallback, useMemo, useRef, useState } from 'react';
import type { contextType } from './contextType';
import BirchmountAutoRepairContext from './BirchmountAutoRepairContext';


const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
    const [isMobileManu, setIsMobileManu] = useState<boolean>(false);
    const [isSidebar, setIsSidebar] = useState(false);
    const [isSearch, setIsSearch] = useState(false)
    const [activeSection, setActiveSection] = useState<string>("home");

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
        activeSection, setActiveSection,
        scrollToSection,
        registerSection
    }), [
        isMobileManu, setIsMobileManu,
        isSidebar, setIsSidebar,
        isSearch, setIsSearch,
        activeSection, setActiveSection,
        scrollToSection,
        registerSection
    ])

    return (
        <BirchmountAutoRepairContext.Provider value={info}>
            {children}
        </BirchmountAutoRepairContext.Provider>
    );
};

export default ContextProvider;