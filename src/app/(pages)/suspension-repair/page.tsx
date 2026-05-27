import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import SuspensionRepairMain from '@/features/suspension-repair/SuspensionRepairMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Suspension Repair"
                subTitle="Services"
                thirdTitle="Suspension Repair"
                bgImage="/assets/images/services/servicebanner12.jpeg"
            />
            <SuspensionRepairMain />
            <FooterOne />
        </>
    );
};

export default page;
