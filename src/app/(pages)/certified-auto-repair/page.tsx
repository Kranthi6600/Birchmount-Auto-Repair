import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import CertifiedAutoRepairMain from '@/features/certified-auto-repair/CertifiedAutoRepairMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Certified Auto Repair"
                subTitle="Services"
                thirdTitle="Certified Auto Repair"
                bgImage="/assets/images/services/servicebanner5.jpeg"
            />
            <CertifiedAutoRepairMain />
            <FooterOne />
        </>
    );
};

export default page;
