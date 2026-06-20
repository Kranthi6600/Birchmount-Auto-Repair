import React from 'react';
import Banner from '@/features/banner/Banner';
import Footer from '@/components/footers/Footer';
import TestimonialsSec from '@/features/testimonials/TestimonialsSec';

const page: React.FC = () => {
    return (
        <>
            <Banner title='Testimonials' subTitle='Testimonials' />
            <TestimonialsSec />
            <Footer />
        </>
    );
}; 
export default page;