import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import PaintDentRepairMain from '@/features/paint-dent-repair/PaintDentRepairMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Paint & Dent Repair"
                subTitle="Services"
                thirdTitle="Paint & Dent Repair"
                bgImage="/assets/images/services/servicebanner7.jpeg"
            />
            <PaintDentRepairMain />
            <FooterOne />
        </>
    );
};

export default page;
