import React from 'react';
import SlidingText from '@/components/elements/SlidingText';
import FooterOne from '@/components/footers/FooterOne';
import Banner from '@/features/banner/Banner';
import AboutOne from '@/features/home-one/AboutOne';
import BlogOne from '@/features/home-one/BlogOne';
import BrandOne from '@/features/home-one/BrandOne';
import ServiceOne from '@/features/home-one/ServiceOne';
import TeamOne from '@/features/home-one/TeamOne';
import TestimonialOne from '@/features/home-one/TestimonialOne';
 
const page: React.FC = () => {
    return (
        <>
            <Banner title='About' subTitle='About' />
            <AboutOne secClass='about-page' />
            <ServiceOne />
            <SlidingText secClass='sliding-text-two' />
            <TeamOne />
            <BrandOne />
            <TestimonialOne />
            <BlogOne />
            <FooterOne />
        </>
    );
};

export default page;