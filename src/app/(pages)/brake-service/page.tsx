import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import BrakeServiceMain from '@/features/brake-service/BrakeServiceMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Brake Service"
                subTitle="Services"
                thirdTitle="Brake Service"
                bgImage="/assets/images/services/servicebanner13.jpeg"
            />
            <BrakeServiceMain />
            <FooterOne />
        </>
    );
};

export default page;
