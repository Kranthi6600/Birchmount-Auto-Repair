import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import EngineDiagnosticsMain from '@/features/engine-diagnostics/EngineDiagnosticsMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Engine Diagnostics"
                subTitle="Services"
                thirdTitle="Engine Diagnostics"
                bgImage="/assets/images/services/servicebanner14.jpeg"
            />
            <EngineDiagnosticsMain />
            <FooterOne />
        </>
    );
};

export default page;
