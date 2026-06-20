import React from 'react';
import SlidingText from '@/components/elements/SlidingText';
import Footer from '@/components/footers/Footer';
import Banner from '@/features/banner/Banner';
import About from '@/features/home/About';
import Blog from '@/features/home/Blog';
import Service from '@/features/home/Service';
import Team from '@/features/home/Team';
import Testimonial from '@/features/testimonials/Testimonial';
 
const page: React.FC = () => {
    return (
        <>
            <Banner title='About' subTitle='About' bgImage='/assets/images/aboutus/aboutbanner1.png' />
            <About secClass='about-page' />
            <Service />
            <SlidingText secClass='sliding-text-two' />
            <Team />
            <Testimonial />
            <Blog />
            <Footer />
        </>
    );
};

export default page;