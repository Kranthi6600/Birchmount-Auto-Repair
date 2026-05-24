import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import VehicleMaintenanceMain from '@/features/vehicle-maintenance/VehicleMaintenanceMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Vehicle Maintenance"
                subTitle="Services"
                thirdTitle="Vehicle Maintenance"
                bgImage="/assets/images/services/servicebanner6.jpeg"
            />
            <VehicleMaintenanceMain />
            <FooterOne />
        </>
    );
};

export default page;
