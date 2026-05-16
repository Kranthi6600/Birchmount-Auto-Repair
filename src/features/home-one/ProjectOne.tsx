"use client";

import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import projectOneShape1 from '@/assets/images/shapes/project-one-shape-1.png';
import project1 from '@/assets/images/project/project-1-1.jpg';
import project2 from '@/assets/images/project/project-1-2.jpg';
import project3 from '@/assets/images/project/project-1-3.jpg';
import project4 from '@/assets/images/project/project-1-4.jpg';
import project5 from '@/assets/images/project/project-1-5.jpg';
import project6 from '@/assets/images/project/project-1-6.jpg';
import project7 from '@/assets/images/project/project-1-7.jpg';
import Lightbox from 'yet-another-react-lightbox';
import TextAnimation from '@/components/elements/TextAnimation';
import SectionWrapper from '@/components/elements/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectItem {
    id: number;
    image: string;
    subTitle: string;
    title: string;
    to: string;
}

const projectItems: ProjectItem[] = [
    {
        id: 1,
        image: project1.src,
        subTitle: 'Express Electric',
        title: 'Charging issues',
        to: '/project-details',
    },
    {
        id: 2,
        image: project2.src,
        subTitle: 'Computer Repair',
        title: 'Hardware Update',
        to: '/project-details',
    },
    {
        id: 3,
        image: project3.src,
        subTitle: 'Express Electric',
        title: 'Charging issues',
        to: '/project-details',
    },
    {
        id: 4,
        image: project4.src,
        subTitle: 'Recovery',
        title: 'Hardware & Software',
        to: '/project-details',
    },
    {
        id: 5,
        image: project5.src,
        subTitle: 'Mac Repair',
        title: 'Apple Iphone Repair',
        to: '/project-details',
    },
    {
        id: 6,
        image: project6.src,
        subTitle: 'Camera Repair',
        title: 'Microphone Faults',
        to: '/project-details',
    },
    {
        id: 7,
        image: project7.src,
        subTitle: 'Express Electric',
        title: 'Battery Replacement',
        to: '/project-details',
    },
];

const ProjectOne: React.FC = () => {
    const [openLightBox, setOpenLightBox] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(0);
    const images: string[] = projectItems.map(project => project.image);
    return (
        <SectionWrapper id='projects' className="project-one">
            <div className="project-one__shape-1">
                <Image src={projectOneShape1} style={{ width: "auto", height: "auto" }} alt="Image" />
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h6 className="section-title__tagline">
                        <span className="section-title__tagline-border"></span>Latest Projects
                    </h6>
                    <h3 className="section-title__title title-animation"><TextAnimation>Our Completed Projects</TextAnimation></h3>
                </div>
                <div className="project-one__carousel  ">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        modules={[Autoplay]}
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 10 },
                            768: { slidesPerView: 2, spaceBetween: 20 },
                            992: { slidesPerView: 3, spaceBetween: 20 },
                            1200: { slidesPerView: 4, spaceBetween: 20 },
                        }}
                    >
                        {projectItems.map((project, idx) => (
                            <SwiperSlide key={project.id}>
                                <div className="item" >
                                    <div className="project-one__single">
                                        <div className="project-one__img-box">
                                            <div className="project-one__img">
                                                <Image src={project.image} width={378} height={419} alt="Image" />
                                                <div className="project-one__arrow">
                                                    <Link href="#" onClick={() => { setIndex(idx); setOpenLightBox(true) }} className="img-popup">
                                                        <span className="icon-arrow-right"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="project-one__content">
                                                <p className="project-one__sub-title">{project.subTitle}</p>
                                                <h3 className="project-one__title">
                                                    <Link href={project.to}>{project.title}</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <Lightbox
                open={openLightBox}
                close={() => setOpenLightBox(false)}
                index={index}
                slides={images.map((src) => ({ src }))}
            />
        </SectionWrapper>
    );
};

export default ProjectOne;