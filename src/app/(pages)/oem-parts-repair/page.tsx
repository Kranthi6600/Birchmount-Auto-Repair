import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import OemPartsRepairMain from '@/features/oem-parts-repair/OemPartsRepairMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="OEM Parts Repair"
                subTitle="Services"
                thirdTitle="OEM Parts Repair"
                bgImage="/assets/images/services/servicebanner20.jpeg"
            />
            <OemPartsRepairMain />
            <FooterOne />
        </>
    );
};

export default page;
