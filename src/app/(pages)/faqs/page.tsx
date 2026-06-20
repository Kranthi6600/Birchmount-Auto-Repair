import React from 'react';
import Banner from '@/features/banner/Banner';
import Footer from '@/components/footers/Footer';
import FaqSec from '@/features/faq/FaqSec';

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