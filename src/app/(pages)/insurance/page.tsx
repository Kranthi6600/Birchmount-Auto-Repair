import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import InsuranceMain from '@/features/insurance/InsuranceMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Insurance Claims"
                subTitle="Services"
                thirdTitle="Insurance Claims"
                bgImage="/assets/images/services/servicebanner6.jpeg"
            />
            <InsuranceMain />
            <FooterOne />
        </>
    );
};

export default page;
