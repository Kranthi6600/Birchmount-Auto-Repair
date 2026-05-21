import React from 'react';
import Banner from '@/features/banner/Banner';
import BlogStandartMain from '@/features/blog/BlogStandartMain';
import FooterOne from '@/components/footers/FooterOne';


const page: React.FC = () => {
    return (
        <>
            <Banner title='Blog & News' />
            <BlogStandartMain />
            <FooterOne />
        </>
    );
};

export default page;