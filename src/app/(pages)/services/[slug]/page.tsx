import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';
import type { ApiService } from '@/lib/api';
import ServiceDetailClient from './ServiceDetailClient';

const CLIENT_ID = "1910ea08-b8ae-4968-8e69-c9b7c5e7bc78";
const API_BASE = "https://wehoware-saas.vercel.app";

async function fetchService(slug: string): Promise<ApiService | null> {
    try {
        const url = `${API_BASE}/api/public/services/${slug}?clientId=${CLIENT_ID}`;
        const res = await fetch(url, {
            headers: { Accept: "application/json" },
            next: { revalidate: 60 },
        });
        if (!res.ok) return null;
        const data = await res.json();
        return data?.service ?? data;
    } catch {
        return null;
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
    };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = await fetchService(slug);

    if (!service) notFound();

    return <ServiceDetailClient service={service} slug={slug} />;
}
