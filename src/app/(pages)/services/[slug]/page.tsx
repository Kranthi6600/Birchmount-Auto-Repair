"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Banner from '@/features/banner/Banner';
import Footer from '@/components/footers/Footer';
import ServiceDetails from '@/features/service-shared/ServiceDetails';
import { useService } from '@/hooks/useServices';

export default function ServiceDetailPage() {
    const params = useParams();
    const slug = typeof params.slug === 'string' ? params.slug : '';
    const { data: apiService, isLoading } = useService(slug);

    if (isLoading) {
        return (
            <>
                <Banner title="Loading..." subTitle="Services" bgImage="" headingTag='h1' />
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center py-5">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        );
    }

    if (!apiService) {
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

    const faqData = (apiService.faqs && apiService.faqs.length > 0)
        ? apiService.faqs.map((f, idx) => ({
            id: idx + 1,
            question: f.question,
            answer: f.answer,
            isActive: idx === 0,
        }))
        : [];

    return (
        <>
            <Banner
                title={apiService.title}
                subTitle="Services"
                thirdTitle={apiService.title}
                bgImage={apiService.thumbnail || ''}
                headingTag='h1'
            />
            <ServiceDetails
                heroImg={apiService.thumbnail || ''}
                heroAlt={apiService.thumbnail_alt || apiService.title}
                title={apiService.title}
                text1={apiService.description || ''}
                text2={apiService.content || ''}
                pointsList={apiService.tags || []}
                imgBoxData={[]}
                faqData={faqData}
                slug={slug}
            />
            <Footer />
        </>
    );
}
