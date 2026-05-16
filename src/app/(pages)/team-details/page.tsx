import React from 'react';
import Banner from '@/features/banner/Banner';
import DetailsSecOne from '@/features/team/DetailsSecOne';
import DetailsSecContact from '@/features/team/DetailsSecContact';
import FooterOne from '@/components/footers/FooterOne';

const page: React.FC = () => {
    return (
        <>
            <Banner title='Team Details' subTitle='Team Details' />
            <DetailsSecOne />
            <DetailsSecContact />
            <FooterOne />
        </>
    );
};

export default page;