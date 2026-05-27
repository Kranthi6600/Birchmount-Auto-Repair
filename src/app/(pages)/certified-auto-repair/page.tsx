import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import MechanicalRepairMain from '@/features/mechanical-repair/MechanicalRepairMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Mechanical Repair"
                subTitle="Services"
                thirdTitle="Mechanical Repair"
                bgImage="/assets/images/services/servicebanner5.jpeg"
            />
            <MechanicalRepairMain />
            <FooterOne />
        </>
    );
};

export default page;
