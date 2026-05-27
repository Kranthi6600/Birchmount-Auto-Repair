import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import CollisionRepairMain from '@/features/collision-repair/CollisionRepairMain';

const page: React.FC = () => {
    return (
        <>
            <Banner
                title="Collision Repair"
                subTitle="Services"
                thirdTitle="Collision Repair"
                bgImage="/assets/images/services/servicebanner3.jpeg"
            />
            <CollisionRepairMain />
            <FooterOne />
        </>
    );
};

export default page;
