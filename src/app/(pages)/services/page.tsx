import React from 'react';
import Banner from '@/features/banner/Banner';
import ServicesSec from '@/features/services/ServicesSec';
import FooterOne from '@/components/footers/FooterOne';

const page: React.FC = () => {
    return (
        <>
            <Banner title='Services' subTitle='Services' />
            <ServicesSec />
            <FooterOne />
        </>
    );
};

export default page;