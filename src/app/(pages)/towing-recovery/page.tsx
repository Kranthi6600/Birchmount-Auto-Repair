import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import TowingRecoveryMain from '@/features/towing-recovery/TowingRecoveryMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Towing & Recovery"
                subTitle="Services"
                thirdTitle="Towing & Recovery"
                bgImage="/assets/images/services/servicebanner2.png"
            />
            <TowingRecoveryMain />
            <FooterOne />
        </>
    );
};

export default page;
