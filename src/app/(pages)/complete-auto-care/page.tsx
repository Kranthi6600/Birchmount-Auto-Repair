import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import CompleteAutoCareMain from '@/features/complete-auto-care/CompleteAutoCareMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Complete Auto Care"
                subTitle="Services"
                thirdTitle="Complete Auto Care"
                bgImage="/assets/images/services/servicebanner21.jpeg"
            />
            <CompleteAutoCareMain />
            <FooterOne />
        </>
    );
};

export default page;
