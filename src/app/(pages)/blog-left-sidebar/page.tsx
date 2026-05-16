import React from 'react'; 
import Banner from '@/features/banner/Banner';
import BlogLeftSidebarMain from '@/features/blog/BlogLeftSidebarMain';
import FooterOne from '@/components/footers/FooterOne';

const page: React.FC = () => {
    return (
        <>
            <Banner title='Blog Left Sidebar' />
            <BlogLeftSidebarMain />
            <FooterOne />
        </>
    );
};

export default page;