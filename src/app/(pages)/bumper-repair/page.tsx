import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import BumperRepairMain from '@/features/bumper-repair/BumperRepairMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Bumper Repair"
                subTitle="Services"
                thirdTitle="Bumper Repair"
                bgImage="/assets/images/services/servicebanner9.jpeg"
            />
            <BumperRepairMain />
            <FooterOne />
        </>
    );
};

export default page;
