import HeaderOne from '@/components/headers/HeaderOne';
import React from 'react';

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='page-wrapper'>
            <HeaderOne />
            {children}
        </div>
    );
};

export default layout;