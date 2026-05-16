import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import TestimonialsSec from '@/features/testimonials/TestimonialsSec';

const page: React.FC = () => {
    return (
        <>
            <Banner title='Testimonials' subTitle='Testimonials' />
            <TestimonialsSec />
            <FooterOne />
        </>
    );
}; 
export default page;