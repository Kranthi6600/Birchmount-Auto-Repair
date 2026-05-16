import React from 'react';
import Banner from '@/features/banner/Banner';
import PricingOne from '@/features/home-one/PricingOne';
import FooterOne from '@/components/footers/FooterOne';

const Pricing: React.FC = () => {
    return (
        <>
            <Banner title='Pricing' subTitle='Pricing' />
            <PricingOne secClass='pricing-page' />
            <FooterOne />
        </>
    );
};

export default Pricing;