import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import ProductsMain from '@/features/products/ProductsMain';

const page: React.FC = () => {
    return (
        <>
            <Banner title='Products' subTitle='Products' />
            <ProductsMain />
            <FooterOne />
        </>
    );
};

export default page;