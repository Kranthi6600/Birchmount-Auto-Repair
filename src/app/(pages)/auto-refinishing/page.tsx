import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import AutoRefinishingMain from '@/features/auto-refinishing/AutoRefinishingMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Auto Refinishing"
                subTitle="Services"
                thirdTitle="Auto Refinishing"
                bgImage="/assets/images/services/servicebanner25.jpeg"
            />
            <AutoRefinishingMain />
            <FooterOne />
        </>
    );
};

export default page;
