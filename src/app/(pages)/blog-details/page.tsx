import React from 'react'; 
import Banner from '@/features/banner/Banner';
import BlogDetailsMain from '@/features/blog/BlogDetailsMain';
import FooterOne from '@/components/footers/FooterOne';

const BlogDetails: React.FC = () => {
    return (
        <>
            <Banner title='Blog Details'/>
            <BlogDetailsMain />
            <FooterOne />
        </>
    );
};

export default BlogDetails;