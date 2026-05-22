import React from 'react';
import SlidingText from '@/components/elements/SlidingText';
import FooterOne from '@/components/footers/FooterOne';
import Banner from '@/features/banner/Banner';
import AboutOne from '@/features/home-one/AboutOne';
import BlogOne from '@/features/home-one/BlogOne';
import BrandOne from '@/features/home-one/BrandOne';
import ServiceOne from '@/features/home-one/ServiceOne';
import TeamTwo from '@/features/home-two/TeamTwo';
import TestimonialThree from '@/features/home-three/TestimonialsThree';
 
const page: React.FC = () => {
    return (
        <>
            <Banner title='About' subTitle='About' bgImage='/assets/images/aboutus/aboutbanner1.png' />
            <AboutOne secClass='about-page' />
            <ServiceOne />
            <SlidingText secClass='sliding-text-two' />
            <TeamTwo />
            <BrandOne />
            <TestimonialThree />
            <BlogOne />
            <FooterOne />
        </>
    );
};

export default page;