import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import WindshieldReplacementMain from '@/features/windshield-replacement/WindshieldReplacementMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Windshield Replacement"
                subTitle="Services"
                thirdTitle="Windshield Replacement"
                bgImage="/assets/images/services/servicebanner18.jpeg"
            />
            <WindshieldReplacementMain />
            <FooterOne />
        </>
    );
};

export default page;
