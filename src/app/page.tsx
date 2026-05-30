import FooterTwo from '@/components/footers/FooterTwo';
import HeaderTwo from '@/components/headers/HeaderTwo';
import AboutTwo from '@/features/home-two/AboutTwo';
import BlogTwo from '@/features/home-two/BlogTwo';
import FeatureTwo from '@/features/home-two/FeatureTwo';
import MainSliderTwo from '@/features/home-two/MainSliderTwo';
import PricingTwo from '@/features/home-two/PricingTwo';
import ProjectTwo from '@/features/home-two/ProjectTwo';
import ServiceTwo from '@/features/home-two/ServiceTwo';
import TestimonialThree from '@/features/home-three/TestimonialsThree';
import WhyChooseTwo from '@/features/home-two/WhyChooseTwo';
import React from 'react';

const page: React.FC = () => {
  return (
    <div className='page-wrapper'>
      <HeaderTwo />
      <MainSliderTwo />
      <FeatureTwo />
      <AboutTwo />
      <ServiceTwo />
      <WhyChooseTwo />
      <ProjectTwo />
      <PricingTwo />
      <TestimonialThree />
      <BlogTwo />
      <FooterTwo />
    </div>
  );
};

export default page;