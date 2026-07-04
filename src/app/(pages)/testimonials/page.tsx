import React from 'react';
import Banner from '@/features/banner/Banner';
import Footer from '@/components/footers/Footer';
import TestimonialsSec from '@/features/testimonials/TestimonialsSec';
import { SITE_URL } from '@/lib/site';
import { testimonialData } from '@/contents/testimonials/testimonialData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Testimonials | Birchmount Auto Repair - Scarborough, ON",
  description: "Read customer reviews and testimonials for Birchmount Auto Repair in Scarborough. See why our clients trust us for auto body repair, collision repair, mechanical services, and more.",
  keywords: [
    "Birchmount Auto Repair reviews",
    "auto repair testimonials Scarborough",
    "car repair reviews Scarborough",
    "mechanic reviews Scarborough ON",
    "auto body shop reviews",
    "collision repair testimonials",
    "customer reviews auto repair",
  ],
  alternates: {
    canonical: `${SITE_URL}/testimonials`,
  },
  openGraph: {
    title: "Testimonials | Birchmount Auto Repair - Scarborough, ON",
    description: "Read customer reviews and testimonials for Birchmount Auto Repair in Scarborough. See why our clients trust us for auto body repair, collision repair, and mechanical services.",
    url: `${SITE_URL}/testimonials`,
    type: "website",
    siteName: "Birchmount Auto Repair",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimonials | Birchmount Auto Repair - Scarborough, ON",
    description: "Read customer reviews and testimonials for Birchmount Auto Repair in Scarborough. See why our clients trust us for auto body repair, collision repair, and mechanical services.",
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

const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Birchmount Auto Repair",
    "url": SITE_URL,
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": (testimonialData.reduce((sum, t) => sum + t.rating, 0) / testimonialData.length).toFixed(1),
        "reviewCount": testimonialData.length,
    },
    "review": testimonialData.map((t) => ({
        "@type": "Review",
        "author": {
            "@type": "Person",
            "name": t.name,
        },
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": t.rating,
            "bestRating": "5",
        },
        "reviewBody": t.text.replace(/"/g, ""),
    })),
};

const breadcrumbSchema = {
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
            "name": "Testimonials",
            "item": `${SITE_URL}/testimonials`,
        },
    ],
};

const page: React.FC = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([reviewSchema, breadcrumbSchema]),
                }}
            />
            <Banner title='Testimonials' subTitle='Testimonials' />
            <TestimonialsSec />
            <Footer />
        </>
    );
}; 
export default page;