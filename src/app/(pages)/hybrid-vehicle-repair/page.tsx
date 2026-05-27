import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import HybridVehicleRepairMain from '@/features/hybrid-vehicle-repair/HybridVehicleRepairMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Hybrid Vehicle Repair"
                subTitle="Services"
                thirdTitle="Hybrid Vehicle Repair"
                bgImage="/assets/images/services/servicebanner16.jpeg"
            />
            <HybridVehicleRepairMain />
            <FooterOne />
        </>
    );
};

export default page;
