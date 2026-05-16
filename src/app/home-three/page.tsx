import SlidingText from '@/components/elements/SlidingText';
import FooterThree from '@/components/footers/FooterThree';
import HeaderThree from '@/components/headers/HeaderThree';
import AboutThree from '@/features/home-three/AboutThree';
import BlogThree from '@/features/home-three/BlogThree';
import BrandThree from '@/features/home-three/BrandThree';
import CounterThree from '@/features/home-three/CounterThree';
import MainSliderThree from '@/features/home-three/MainSliderThree';
import ProcessThree from '@/features/home-three/ProcessThree';
import ProjectThree from '@/features/home-three/ProjectThree';
import ServiceThree from '@/features/home-three/ServiceThree';
import TeamThree from '@/features/home-three/TeamThree';
import TestimonialsThree from '@/features/home-three/TestimonialsThree';
import WhyChooseThree from '@/features/home-three/WhyChooseThree';
import ContactTwo from '@/features/home-two/ContactTwo';
import React from 'react';

const page: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <HeaderThree />
            <MainSliderThree />
            <AboutThree />
            <ServiceThree />
            <ContactTwo sectionClass='contact-two' />
            <ProjectThree />
            <WhyChooseThree />
            <CounterThree />
            <TeamThree />
            <ProcessThree />
            <SlidingText />
            <TestimonialsThree />
            <BrandThree />
            <BlogThree />
            <FooterThree />
        </div>
    );
};

export default page;