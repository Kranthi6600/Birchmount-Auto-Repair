import React from 'react';
import Banner from '@/features/banner/Banner';
import ServicesSec from '@/features/services/ServicesSec';
import Footer from '@/components/footers/Footer';

const page: React.FC = () => {
    return (
        <>
            <Banner title='Services' subTitle='Services' bgImage='/assets/images/services/servicebanner.jpeg' headingTag='h1'/>
            <ServicesSec />
            <Footer />
        </>
    );
};

export default page;