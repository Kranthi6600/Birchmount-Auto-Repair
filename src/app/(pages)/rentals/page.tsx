import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import RentalsMain from '@/features/rentals/RentalsMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Rental Car Assistance"
                subTitle="Services"
                thirdTitle="Rental Car Assistance"
                bgImage="/assets/images/services/servicebanner7.jpeg"
            />
            <RentalsMain />
            <FooterOne />
        </>
    );
};

export default page;
