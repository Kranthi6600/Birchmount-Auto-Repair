import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import FaqSec from '@/features/faq/FaqSec';

const page: React.FC = () => {
    return (
        <>
            <Banner title='Our Faq' subTitle='Faq' />
            <FaqSec />
            <FooterOne />
        </>
    );
};

export default page;