
export interface contextType {
    isMobileManu: boolean;
    setIsMobileManu: React.Dispatch<React.SetStateAction<boolean>>;
    isSidebar: boolean;
    setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>;
    isSearch: boolean;
    setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
    showVideoPopup: boolean;
    setShowVideoPopup: React.Dispatch<React.SetStateAction<boolean>>;
    currentVideoUrl: string;
    setCurrentVideoUrl: React.Dispatch<React.SetStateAction<string>>;
    handleVideoClick: (e: React.MouseEvent<HTMLElement>, videoUrl?: string) => void;
    activeSection: string;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
    cartCount: number;
    setCartCount: React.Dispatch<React.SetStateAction<number>>; 
    registerSection: (id: string, element: HTMLElement | null) => void;
    scrollToSection: (id: string) => void;
}