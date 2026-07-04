import React from 'react';
import Banner from '@/features/banner/Banner';
import ServicesSec from '@/features/services/ServicesSec';
import Footer from '@/components/footers/Footer';
import { SITE_URL } from '@/lib/site';
import type { Metadata } from 'next';
import { getServicesWithSchema, API_REVALIDATE_SECONDS } from '@/lib/orchestrator';

export const metadata: Metadata = {
  title: "Our Services | Birchmount Auto Repair - Scarborough, ON",
  description: "Explore our full range of auto repair services in Scarborough including auto body repair, collision repair, engine diagnostics, brake service, transmission repair, towing, insurance assistance, and vehicle maintenance.",
  keywords: [
    "auto repair services Scarborough",
    "auto body repair Scarborough",
    "collision repair Ontario",
    "engine diagnostics Scarborough",
    "brake service Scarborough",
    "transmission repair",
    "car maintenance Scarborough",
    "towing service Scarborough",
    "insurance claim repairs",
    "vehicle repair services",
  ],
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: "Our Services | Birchmount Auto Repair - Scarborough, ON",
    description: "Explore our full range of auto repair services in Scarborough including auto body repair, collision repair, engine diagnostics, brake service, transmission repair, towing, and more.",
    url: `${SITE_URL}/services`,
    type: "website",
    siteName: "Birchmount Auto Repair",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Birchmount Auto Repair - Scarborough, ON",
    description: "Explore our full range of auto repair services in Scarborough including auto body repair, collision repair, engine diagnostics, brake service, transmission repair, towing, and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
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