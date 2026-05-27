import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import WheelAlignmentMain from '@/features/wheel-alignment/WheelAlignmentMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Wheel Alignment"
                subTitle="Services"
                thirdTitle="Wheel Alignment"
                bgImage="/assets/images/services/servicebanner11.jpeg"
            />
            <WheelAlignmentMain />
            <FooterOne />
        </>
    );
};

export default page;
