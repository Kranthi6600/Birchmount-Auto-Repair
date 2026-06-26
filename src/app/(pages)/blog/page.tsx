import React from 'react';
import Banner from '@/features/banner/Banner';
import BlogStandartMain from '@/features/blog/BlogStandartMain';
import Footer from '@/components/footers/Footer';
import { SITE_URL } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    url: `${SITE_URL}/blog`,
  },
};

const page: React.FC = () => {
    return (
        <>
            <Banner title='Blog & News' bgImage='/assets/images/blog/blogbanner.jpeg'/>
            <BlogStandartMain />
            <Footer />
        </>
    );
};

export default page;