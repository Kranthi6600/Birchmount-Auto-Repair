import React from 'react';
import SlidingText from '@/components/elements/SlidingText';
import Footer from '@/components/footers/Footer';
import Banner from '@/features/banner/Banner';
import About from '@/features/home/About';
import Blog from '@/features/home/Blog';
import Service from '@/features/home/Service';
import Team from '@/features/home/Team';
import Testimonial from '@/features/testimonials/Testimonial';
import { SITE_URL } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    url: `${SITE_URL}/about`,
  },
};

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