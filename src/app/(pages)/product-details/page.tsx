import React from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import ProductDetailsMain from '@/features/product-details/ProductDetailsMain';
import ProductDescription from '@/features/product-details/ProductDescription';
import ProductCarousel from '@/features/product-details/ProductCarousel';

const page: React.FC = () => {
    return (
        <>
            <Banner title='Product Details' subTitle='Product Details' />
            <ProductDetailsMain />
            <ProductDescription />
            <ProductCarousel />
            <FooterOne />
        </>
    );
};

export default page; 