import React from 'react';
import Banner from '@/features/banner/Banner';
import BlogStandartMain from '@/features/blog/BlogStandartMain';
import Footer from '@/components/footers/Footer';


const page: React.FC = () => {
    return (
        <>
            <Banner title='Blog & News' bgImage='/assets/images/blog/blogbanner.jpeg'/>
            <BlogStandartMain />
            <Footer />
        </>
    );
};

export default page;