import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import TowingRoadsideAssistanceMain from '@/features/towing-roadside-assistance/TowingRoadsideAssistanceMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Towing & Roadside Assistance"
                subTitle="Services"
                thirdTitle="Towing & Roadside Assistance"
                bgImage="/assets/images/services/servicebanner19.jpeg"
            />
            <TowingRoadsideAssistanceMain />
            <FooterOne />
        </>
    );
};

export default page;
