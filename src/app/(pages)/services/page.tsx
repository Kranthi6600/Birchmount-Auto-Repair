import React from 'react';
import Banner from '@/features/banner/Banner';
import ServicesSec from '@/features/services/ServicesSec';
import Footer from '@/components/footers/Footer';
import { SITE_URL } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    url: `${SITE_URL}/services`,
  },
};

const page: React.FC = () => {
    return (
        <>
            <Banner title='Services' subTitle='Services' bgImage='/assets/images/services/servicebanner.jpeg' headingTag='h1'/>
            <ServicesSec />
            <Footer />
        </>
    );
};

export default page;