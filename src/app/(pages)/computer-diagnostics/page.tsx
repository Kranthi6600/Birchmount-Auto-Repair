import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import ComputerDiagnosticsMain from '@/features/computer-diagnostics/ComputerDiagnosticsMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Computer Diagnostics"
                subTitle="Services"
                thirdTitle="Computer Diagnostics"
                bgImage="/assets/images/services/servicebanner26.jpeg"
            />
            <ComputerDiagnosticsMain />
            <FooterOne />
        </>
    );
};

export default page;
