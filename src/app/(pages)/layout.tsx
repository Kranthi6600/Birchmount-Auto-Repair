import Header from '@/components/headers/Header';
import React from 'react';

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='page-wrapper'>
            <Header />
            {children}
        </div>
    );
};

export default layout;