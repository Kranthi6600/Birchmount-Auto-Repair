import React from 'react';
import Banner from '@/features/banner/Banner';
import Footer from '@/components/footers/Footer';
import TestimonialsSec from '@/features/testimonials/TestimonialsSec';
import { SITE_URL } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/testimonials`,
  },
  openGraph: {
    url: `${SITE_URL}/testimonials`,
  },
};

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