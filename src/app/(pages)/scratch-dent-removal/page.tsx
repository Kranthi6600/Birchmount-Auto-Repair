import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import ScratchDentRemovalMain from '@/features/scratch-dent-removal/ScratchDentRemovalMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Scratch & Dent Removal"
                subTitle="Services"
                thirdTitle="Scratch & Dent Removal"
                bgImage="/assets/images/services/servicebanner10.jpeg"
            />
            <ScratchDentRemovalMain />
            <FooterOne />
        </>
    );
};

export default page;
