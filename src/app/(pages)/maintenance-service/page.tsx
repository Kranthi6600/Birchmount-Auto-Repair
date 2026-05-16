import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import MaintenanceMain from '@/features/maintenance/MaintenanceMain';

const page: React.FC = () => {
    return (
        <>
            <Banner title='Maintenance Service' subTitle='Service' thirdTitle='Maintenance Service' />
            <MaintenanceMain />
            <FooterOne />
        </>
    );
};

export default page;