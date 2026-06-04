import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import CompleteAutoBodyRepairMain from '@/features/complete-auto-body-repair/CompleteAutoBodyRepairMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Complete Auto Body Repair"
                subTitle="Services"
                thirdTitle="Complete Auto Body Repair"
                bgImage="/assets/images/services/servicebanner2.jpeg"
            />
            <CompleteAutoBodyRepairMain />
            <FooterOne />
        </>
    );
};

export default page;
