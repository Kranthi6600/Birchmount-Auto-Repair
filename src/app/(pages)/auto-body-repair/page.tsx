import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import AutoBodyRepairMain from '@/features/auto-body-repair/AutoBodyRepairMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Auto Body Repair"
                subTitle="Services"
                thirdTitle="Auto Body Repair"
                bgImage="/assets/images/services/servicebanner2.jpeg"
            />
            <AutoBodyRepairMain />
            <FooterOne />
        </>
    );
};

export default page;
