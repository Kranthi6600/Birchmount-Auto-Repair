import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import TransmissionRepairMain from '@/features/transmission-repair/TransmissionRepairMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Transmission Repair"
                subTitle="Services"
                thirdTitle="Transmission Repair"
                bgImage="/assets/images/services/servicebanner3.png"
            />
            <TransmissionRepairMain />
            <FooterOne />
        </>
    );
};

export default page;
