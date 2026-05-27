import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import DentRemovalMain from '@/features/dent-removal/DentRemovalMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Dent Removal"
                subTitle="Services"
                thirdTitle="Dent Removal"
                bgImage="/assets/images/services/servicebanner24.jpeg"
            />
            <DentRemovalMain />
            <FooterOne />
        </>
    );
};

export default page;
