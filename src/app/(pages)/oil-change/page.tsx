import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import OilChangeMain from '@/features/oil-change/OilChangeMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Oil Change & Lube"
                subTitle="Services"
                thirdTitle="Oil Change & Lube"
                bgImage="/assets/images/services/servicebanner3.jpeg"
            />
            <OilChangeMain />
            <FooterOne />
        </>
    );
};

export default page;
