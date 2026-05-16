import React from 'react';
import Banner from '@/features/banner/Banner';
import BlogRightSidebarMain from '@/features/blog/BlogRightSidebarMain';
import FooterOne from '@/components/footers/FooterOne';


const page: React.FC = () => {
    return (
        <>
            <Banner title='Blog Right Sidebar' />
            <BlogRightSidebarMain />
            <FooterOne />
        </>
    );
};

export default page;