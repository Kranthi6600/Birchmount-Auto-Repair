"use client";
import React from 'react';
const brand2Img1 = "/assets/images/brand/brand-2-1.png";
const brand2Img2 = "/assets/images/brand/brand-2-2.png";
const brand2Img3 = "/assets/images/brand/brand-2-3.png";
const brand2Img4 = "/assets/images/brand/brand-2-4.png";
const brand2Img5 = "/assets/images/brand/brand-2-5.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';
interface BrandItem {
    id: number;
    image: string | StaticImageData;
    alt: string;
}

const brandItems: BrandItem[] = [
    { id: 1, image: brand2Img1, alt: 'Brand partner 1' },
    { id: 2, image: brand2Img2, alt: 'Brand partner 2' },
    { id: 3, image: brand2Img3, alt: 'Brand partner 3' },
    { id: 4, image: brand2Img4, alt: 'Brand partner 4' },
    { id: 5, image: brand2Img5, alt: 'Brand partner 5' },
    { id: 6, image: brand2Img2, alt: 'Brand partner 2' },
];

const BrandThree: React.FC = () => {
    return (
        <section className="brand-two">
            <div className="container">
                <div className="brand-two__inner">
                    <div className="brand-two__carousel  ">
                        <Swiper
                            slidesPerView={5}
                            modules={[Navigation, Autoplay]}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            speed={1000}
                            breakpoints={{
                                0: { slidesPerView: 1, spaceBetween: 10 },
                                768: { slidesPerView: 2, spaceBetween: 10 },
                                992: { slidesPerView: 3, spaceBetween: 20 },
                                1200: { slidesPerView: 4, spaceBetween: 20 },
                                1300: { slidesPerView: 5, spaceBetween: 20 },
                            }}
                        >
                            {brandItems.map((brand) => (
                                <SwiperSlide key={brand.id}>
                                    <div className="brand-two__single">
                                        <div className="brand-two__img">
                                            <Image src={brand.image} width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt={brand.alt} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandThree;