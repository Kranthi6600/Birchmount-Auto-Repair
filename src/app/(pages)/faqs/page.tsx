import React from 'react';
import Banner from '@/features/banner/Banner';
import Footer from '@/components/footers/Footer';
import FaqSec from '@/features/faq/FaqSec';
import { SITE_URL } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/faqs`,
  },
  openGraph: {
    url: `${SITE_URL}/faqs`,
  },
};

const page: React.FC = () => {
    return (
        <>
            <Banner title='Our Faq' subTitle='Faq' bgImage='/assets/images/faq/faqbanner.jpeg'/>
            <FaqSec />
            <Footer />
        </>
    );
};

export default page;