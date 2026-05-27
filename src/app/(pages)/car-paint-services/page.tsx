import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import CarPaintServicesMain from '@/features/car-paint-services/CarPaintServicesMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Car Paint Services"
                subTitle="Services"
                thirdTitle="Car Paint Services"
                bgImage="/assets/images/services/servicebanner23.jpeg"
            />
            <CarPaintServicesMain />
            <FooterOne />
        </>
    );
};

export default page;
