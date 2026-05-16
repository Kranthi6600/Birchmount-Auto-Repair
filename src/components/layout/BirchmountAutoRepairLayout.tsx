
import React from 'react';
import CustomCursor from '../elements/CustomCursor';
import SideBar from '../elements/SideBar';
import MobileNav from '../elements/MobileNav';
import ChatPopup from '../elements/ChatPopup';
import ScrollToTop from '../elements/ScrollToTop';
import VideoPopup from '../elements/VideoPopup';
import ContextProvider from '../context/ContextProvider';

const BirchmountAutoRepairLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <ContextProvider>
            <div className="custom-cursor">
                <CustomCursor enabled />
                {children}
                <SideBar />
                <MobileNav />
                <ChatPopup />
                <ScrollToTop />
                <VideoPopup />
            </div>
        </ContextProvider>
    );
};

export default BirchmountAutoRepairLayout;