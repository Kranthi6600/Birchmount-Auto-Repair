import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import ElectricalRepairMain from '@/features/electrical-repair/ElectricalRepairMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Electrical Repair"
                subTitle="Services"
                thirdTitle="Electrical Repair"
                bgImage="/assets/images/services/servicebanner6.jpeg"
            />
            <ElectricalRepairMain />
            <FooterOne />
        </>
    );
};

export default page;
