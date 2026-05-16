import React from 'react';  
import Banner from '@/features/banner/Banner';
import WishlistMain from '@/features/wishlist/WishlistMain';
import FooterOne from '@/components/footers/FooterOne';
const page: React.FC = () => {
    return (
        <>
            <Banner title='Wishlist' subTitle='Wishlist'/>
            <WishlistMain />
            <FooterOne />
        </>
    );
};

export default page;