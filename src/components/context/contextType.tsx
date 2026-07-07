
export interface contextType {
    isMobileManu: boolean;
    setIsMobileManu: React.Dispatch<React.SetStateAction<boolean>>;
    isSidebar: boolean;
    setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>;
    isSearch: boolean;
    setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
    activeSection: string;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
    registerSection: (id: string, element: HTMLElement | null) => void;
    scrollToSection: (id: string) => void;
}