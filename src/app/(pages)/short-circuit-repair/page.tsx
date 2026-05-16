import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import ShortCircuitMain from '@/features/short-circuit-repair/ShortCircuitMain';

const page: React.FC = () => {
    return (
        <>
            <Banner title='Short circuit repair' subTitle='Services' thirdTitle='Short circuit repair' />
            <ShortCircuitMain />
            <FooterOne />
        </>
    );
};

export default page;