import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import CarAccidentRepairMain from '@/features/car-accident-repair/CarAccidentRepairMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Car Accident Repair"
                subTitle="Services"
                thirdTitle="Car Accident Repair"
                bgImage="/assets/images/services/servicebanner17.jpeg"
            />
            <CarAccidentRepairMain />
            <FooterOne />
        </>
    );
};

export default page;
