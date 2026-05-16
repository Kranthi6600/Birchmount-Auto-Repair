import React from 'react';
import SlidingText from '@/components/elements/SlidingText';
import FooterTwo from '@/components/footers/FooterTwo';
import HeaderTwo from '@/components/headers/HeaderTwo';
import CounterOne from '@/features/home-one/CounterOne';
import AboutTwo from '@/features/home-two/AboutTwo';
import BlogTwo from '@/features/home-two/BlogTwo';
import ContactTwo from '@/features/home-two/ContactTwo';
import FaqTwo from '@/features/home-two/FaqTwo';
import FeatureTwo from '@/features/home-two/FeatureTwo';
import MainSliderTwo from '@/features/home-two/MainSliderTwo';
import PricingTwo from '@/features/home-two/PricingTwo';
import ProcessTwo from '@/features/home-two/ProcessTwo';
import ProjectTwo from '@/features/home-two/ProjectTwo';
import ServiceTwo from '@/features/home-two/ServiceTwo';
import TeamTwo from '@/features/home-two/TeamTwo';
import TestimonialTwo from '@/features/home-two/TestimonialTwo';
import WhyChooseTwo from '@/features/home-two/WhyChooseTwo';

const page: React.FC = () => {
    return (
       <div className='page-wrapper'>
            <HeaderTwo />
            <MainSliderTwo />
            <FeatureTwo />
            <AboutTwo />
            <ServiceTwo />
            <WhyChooseTwo />
            <ProcessTwo />
            <ProjectTwo />
            <TeamTwo />
            <CounterOne />
            <FaqTwo />
            <SlidingText />
            <PricingTwo />
            <TestimonialTwo />
            <ContactTwo />
            <BlogTwo />
            <FooterTwo />
        </div>
    );
};

export default page;