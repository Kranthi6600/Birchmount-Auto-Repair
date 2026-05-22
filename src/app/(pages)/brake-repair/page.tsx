import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import BrakeRepairMain from '@/features/brake-repair/BrakeRepairMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Brake Repair & Service"
                subTitle="Services"
                thirdTitle="Brake Repair & Service"
                bgImage="/assets/images/services/servicebanner.jpeg"
            />
            <BrakeRepairMain />
            <FooterOne />
        </>
    );
};

export default page;
