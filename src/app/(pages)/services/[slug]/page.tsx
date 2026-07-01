import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';
import type { ApiService } from '@/lib/api';
import ServiceDetailClient from './ServiceDetailClient';
import { getServiceBySlug, API_REVALIDATE_SECONDS } from '@/lib/orchestrator';

async function fetchService(slug: string): Promise<ApiService | null> {
    return getServiceBySlug(slug, { revalidate: API_REVALIDATE_SECONDS }) as Promise<ApiService | null>;
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
    };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = await fetchService(slug);

    if (!service) notFound();

    return <ServiceDetailClient service={service} slug={slug} />;
}
