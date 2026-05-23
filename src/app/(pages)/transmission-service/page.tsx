import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import TransmissionServiceMain from '@/features/transmission-service/TransmissionServiceMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Transmission Service"
                subTitle="Services"
                thirdTitle="Transmission Service"
                bgImage="/assets/images/services/servicebanner5.jpeg"
            />
            <TransmissionServiceMain />
            <FooterOne />
        </>
    );
};

export default page;
