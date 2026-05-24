import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import FullServiceGarageMain from '@/features/full-service-garage/FullServiceGarageMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Full Service Garage"
                subTitle="Services"
                thirdTitle="Full Service Garage"
                bgImage="/assets/images/services/servicebanner6.jpeg"
            />
            <FullServiceGarageMain />
            <FooterOne />
        </>
    );
};

export default page;
