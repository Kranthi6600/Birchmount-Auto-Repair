import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';
import type { ApiService } from '@/lib/api';
import ServiceDetailClient from './ServiceDetailClient';
import { getServiceBySlug, getServices, API_REVALIDATE_SECONDS, API_REVALIDATE_LONG_SECONDS } from '@/lib/orchestrator';
import ServerContent from '@/components/elements/ServerContent';

async function fetchService(slug: string): Promise<ApiService | null> {
    return getServiceBySlug(slug, { revalidate: API_REVALIDATE_SECONDS }) as Promise<ApiService | null>;
}

export async function generateStaticParams() {
    try {
        const data = await getServices({ revalidate: API_REVALIDATE_LONG_SECONDS });
        return (data as unknown[]).map((s) => {
            const service = s as { slug: string };
            return { slug: service.slug };
        });
    } catch {
        return [];
    }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = await fetchService(slug);
    if (!service) return {};

    const canonical = `${SITE_URL}/services/${slug}`;

    return {
        title: service.meta_title || `${service.title} | Birchmount Auto Repair`,
        description: service.meta_description || service.description || undefined,
        keywords: service.meta_keywords || undefined,
        alternates: {
            canonical,
        },
        openGraph: {
            title: service.open_graph_title || service.meta_title || service.title,
            description: service.open_graph_description || service.meta_description || service.description || undefined,
            images: service.open_graph_image ? [{ url: service.open_graph_image }] : undefined,
            url: canonical,
        },
        twitter: {
            card: "summary_large_image",
            title: service.twitter_title || service.meta_title || service.title,
            description: service.twitter_description || service.meta_description || service.description || undefined,
            images: service.twitter_image ? [service.twitter_image] : undefined,
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
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = await fetchService(slug);

    if (!service) notFound();

    const canonical = `${SITE_URL}/services/${slug}`;

    const fallbackServiceSchema: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.meta_description || service.description || undefined,
        "image": service.thumbnail || undefined,
        "provider": {
            "@type": "Organization",
            "name": "Birchmount Auto Repair",
            "url": SITE_URL,
        },
        "serviceType": service.wehoware_service_categories?.name || "Auto Repair",
        "areaServed": {
            "@type": "Place",
            "url": SITE_URL,
        },
    };
    if (service.rating > 0) {
        fallbackServiceSchema["aggregateRating"] = {
            "@type": "AggregateRating",
            "ratingValue": service.rating,
            "reviewCount": service.reviews_count,
        };
    }

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
            {
                "@type": "ListItem",
                "position": 3,
                "name": service.title,
                "item": canonical,
            },
        ],
    };

    let serviceSchema: Record<string, unknown> = fallbackServiceSchema;
    if (service.service_schema) {
        // Strip properties not valid for schema.org Service (keywords)
        // and unwanted properties (offers) from the API-provided schema.
        const { keywords, offers, ...cleanedSchema } = service.service_schema as Record<string, unknown>;
        void keywords;
        void offers;
        serviceSchema = cleanedSchema;
    }

    const schemas: Record<string, unknown>[] = [
        serviceSchema,
        service.breadcrumb_schema ?? fallbackBreadcrumbSchema,
    ];
    if (service.faq_schema) {
        schemas.push(service.faq_schema as unknown as Record<string, unknown>);
    }

    const { content, description, ...serviceWithoutContent } = service;
    const text1Slot = <ServerContent html={description || ''} className="service-details__text-1" />;
    const text2Slot = <ServerContent html={content || ''} className="service-details__text-2" />;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemas),
                }}
            />
            <ServiceDetailClient service={serviceWithoutContent} slug={slug} text1Slot={text1Slot} text2Slot={text2Slot} />
        </>
    );
}
