import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import AboutOne from '@/features/home/AboutOne';
import BlogOne from '@/features/home/BlogOne';
import Feature from '@/features/home/Feature';
import MainSlider from '@/features/home/MainSlider';
import Pricing from '@/features/home/Pricing';
import Project from '@/features/home/Project';
import ServiceOne from '@/features/home/ServiceOne';
import Testimonial from '@/features/testimonials/Testimonial';
import WhyChoose from '@/features/home/WhyChoose';
import { SITE_URL } from '@/lib/site';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    url: SITE_URL,
  },
};

const page: React.FC = () => {
  return (
    <div className='page-wrapper'>
      <Header />
      <MainSlider />
      <Feature />
      <AboutOne />
      <ServiceOne />
      <WhyChoose />
      <Project />
      <Pricing />
      <Testimonial />
      <BlogOne />
      <Footer />
    </div>
  );
};

export default page;