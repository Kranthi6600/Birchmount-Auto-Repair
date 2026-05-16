import React from 'react';
import Banner from '@/features/banner/Banner';
import InstallingCilingFanMain from '@/features/installing-ceiling-fan/InstallingCilingFanMain';
import FooterOne from '@/components/footers/FooterOne';

const page: React.FC = () => {
    return (
        <>
            <Banner title='Installing a ceiling fan' subTitle='Servics' thirdTitle='Installing a ceiling fan' />
            <InstallingCilingFanMain />
            <FooterOne />
        </>
    );
};

export default page;