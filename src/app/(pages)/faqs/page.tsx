import React from 'react';
import Banner from '@/features/banner/Banner';
import Footer from '@/components/footers/Footer';
import FaqSec from '@/features/faq/FaqSec';
import { SITE_URL } from '@/lib/site';
import { faqData } from '@/contents/faq/faqData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FAQs | Birchmount Auto Repair - Scarborough, ON",
  description: "Frequently asked questions about auto repair services at Birchmount Auto Repair in Scarborough. Get answers on oil changes, brake repair, engine diagnostics, warranties, appointments, location, and more.",
  keywords: [
    "auto repair FAQ Scarborough",
    "car repair questions",
    "oil change frequency",
    "brake repair signs",
    "check engine light",
    "auto repair warranty",
    "mechanic Scarborough FAQ",
    "walk-in auto repair",
  ],
  alternates: {
    canonical: `${SITE_URL}/faqs`,
  },
  openGraph: {
    title: "FAQs | Birchmount Auto Repair - Scarborough, ON",
    description: "Frequently asked questions about auto repair services at Birchmount Auto Repair in Scarborough. Get answers on oil changes, brake repair, diagnostics, warranties, and more.",
    url: `${SITE_URL}/faqs`,
    type: "website",
    siteName: "Birchmount Auto Repair",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs | Birchmount Auto Repair - Scarborough, ON",
    description: "Frequently asked questions about auto repair services at Birchmount Auto Repair in Scarborough. Get answers on oil changes, brake repair, diagnostics, warranties, and more.",
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

const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
        },
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
            "name": "FAQs",
            "item": `${SITE_URL}/faqs`,
        },
    ],
};

const page: React.FC = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([faqPageSchema, breadcrumbSchema]),
                }}
            />
            <Banner title='Our Faq' subTitle='Faq' bgImage='/assets/images/faq/faqbanner.jpeg'/>
            <FaqSec />
            <Footer />
        </>
    );
};

export default page;