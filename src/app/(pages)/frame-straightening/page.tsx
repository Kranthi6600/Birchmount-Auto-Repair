import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import FrameStraighteningMain from '@/features/frame-straightening/FrameStraighteningMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Frame Straightening"
                subTitle="Services"
                thirdTitle="Frame Straightening"
                bgImage="/assets/images/services/servicebanner3.jpeg"
            />
            <FrameStraighteningMain />
            <FooterOne />
        </>
    );
};

export default page;
