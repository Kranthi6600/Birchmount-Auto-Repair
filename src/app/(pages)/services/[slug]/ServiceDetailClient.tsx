"use client";

import React from 'react';
import Banner from '@/features/banner/Banner';
import Footer from '@/components/footers/Footer';
import ServiceDetails from '@/features/service-shared/ServiceDetails';
import type { ApiService } from '@/lib/api';

interface ServiceDetailClientProps {
    service: Omit<ApiService, 'content' | 'description'> | null;
    slug: string;
    text1Slot?: React.ReactNode;
    text2Slot?: React.ReactNode;
}

export default function ServiceDetailClient({ service, slug, text1Slot, text2Slot }: ServiceDetailClientProps) {
    if (!service) {
        return (
            <>
                <Banner title="Service Not Found" subTitle="Services" bgImage="" headingTag='h1' />
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center py-5">
                                <h3>Service not found</h3>
                                <p>The service you are looking for does not exist.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        );
    }

    const faqData = (service.faqs && service.faqs.length > 0)
        ? service.faqs.map((f, idx) => ({
            id: idx + 1,
            question: f.question,
            answer: f.answer,
            isActive: idx === 0,
        }))
        : [];

    return (
        <>
            <Banner
                title={service.title}
                subTitle="Services"
                thirdTitle={service.title}
                bgImage={service.thumbnail || ''}
                headingTag='h1'
            />
            <ServiceDetails
                heroImg={service.thumbnail || ''}
                heroAlt={service.thumbnail_alt || service.title}
                title={service.title}
                text1=""
                text2=""
                text1Slot={text1Slot}
                text2Slot={text2Slot}
                pointsList={service.tags || []}
                imgBoxData={[]}
                faqData={faqData}
                slug={slug}
            />
            <Footer />
        </>
    );
}
