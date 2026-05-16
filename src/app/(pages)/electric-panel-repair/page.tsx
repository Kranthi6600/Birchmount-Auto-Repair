import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import ElectricPanelMain from '@/features/electric-panel-repair/ElectricPanelMain';

const page: React.FC = () => {
    return (
        <>
            <Banner title='Electric Panel Repair' subTitle='Services' thirdTitle='Electric Panel Repair' />
            <ElectricPanelMain />
            <FooterOne />
        </>
    );
};

export default page;