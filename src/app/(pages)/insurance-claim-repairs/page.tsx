import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import InsuranceClaimRepairsMain from '@/features/insurance-claim-repairs/InsuranceClaimRepairsMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Insurance Claim Repairs"
                subTitle="Services"
                thirdTitle="Insurance Claim Repairs"
                bgImage="/assets/images/services/servicebanner6.jpeg"
            />
            <InsuranceClaimRepairsMain />
            <FooterOne />
        </>
    );
};

export default page;
