import React from 'react';
import Banner from '@/features/banner/Banner';
import ServicesSec from '@/features/services/ServicesSec';
import Footer from '@/components/footers/Footer';
import { SITE_URL } from '@/lib/site';
import type { Metadata } from 'next';
import { getServicesWithSchema, API_REVALIDATE_SECONDS } from '@/lib/orchestrator';

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    url: `${SITE_URL}/services`,
  },
};

const fallbackServicesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Services",
    "description": "Auto repair services offered by Birchmount Auto Repair in Scarborough.",
    "url": `${SITE_URL}/services`,
};

const fallbackBreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": SITE_URL,
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": `${SITE_URL}/services`,
        },
    ],
};

const ServicesPage: React.FC = async () => {
    let apiSchema: { item_list?: Record<string, unknown> | null; collection_page?: Record<string, unknown> | null } | null = null;
    try {
        const result = await getServicesWithSchema({ revalidate: API_REVALIDATE_SECONDS });
        apiSchema = result.schema ?? null;
    } catch {
        apiSchema = null;
    }

    const schemas: Record<string, unknown>[] = [
        apiSchema?.collection_page ?? fallbackServicesSchema,
        fallbackBreadcrumbSchema,
    ];
    if (apiSchema?.item_list) {
        schemas.push(apiSchema.item_list);
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemas),
                }}
            />
            <Banner title='Services' subTitle='Services' bgImage='/assets/images/services/servicebanner.jpeg' headingTag='h1'/>
            <ServicesSec />
            <Footer />
        </>
    );
};

export default ServicesPage;