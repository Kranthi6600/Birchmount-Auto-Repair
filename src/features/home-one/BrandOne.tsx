"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import brand1 from "@/assets/images/brand/brand-1-1.png";
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
type BrandItem = {
    id: number;
    image: string | StaticImageData;
    link: string;
};
const brandData: BrandItem[] = [
    {
        id: 1,
        image: brand1,
        link: "#",
    },
    {
        id: 2,
        image: brand1,
        link: "#",
    },
    {
        id: 3,
        image: brand1,
        link: "#",
    },
    {
        id: 4,
        image: brand1,
        link: "#",
    },
    {
        id: 5,
        image: brand1,
        link: "#",
    },
    {
        id: 6,
        image: brand1,
        link: "#",
    },
    {
        id: 7,
        image: brand1,
        link: "#",
    },
    {
        id: 8,
        image: brand1,
        link: "#",
    },
];

const BrandOne: React.FC = () => {
    return (
        <section className="brand-one">
            <div className="container">
                <div className="brand-one__carousel   ">
                    <Swiper modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={5}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        speed={1000}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            492: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1000: {
                                slidesPerView: 5,
                            },
                        }}>


                        {brandData.map((brand) => (
                            <SwiperSlide key={brand.id}>
                                <div className="item" >
                                    <div className="brand-one__single">
                                        <div className="brand-one__img">
                                            <Link href={brand.link}>
                                                <Image src={brand.image} style={{ width: "auto", height: "auto" }} alt={`brand-${brand.id}`} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default BrandOne;