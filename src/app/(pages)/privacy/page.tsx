import React from 'react';
import Banner from '@/features/banner/Banner';
import Footer from '@/components/footers/Footer';
import LegalContent from '@/features/legal/LegalContent';
import { privacyPolicyData } from '@/contents/legal/privacyData';
import { SITE_URL } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Birchmount Auto Repair - Scarborough, ON",
  description:
    "Read the Birchmount Auto Repair Privacy Policy to learn how we collect, use, share, and protect your personal information when you use our website and auto repair services in Scarborough, ON.",
  keywords: [
    "privacy policy Birchmount Auto Repair",
    "auto repair privacy policy Scarborough",
    "how we use your information",
    "data protection auto shop",
    "cookies policy",
    "PIPEDA privacy Ontario",
  ],
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  openGraph: {
    title: "Privacy Policy | Birchmount Auto Repair - Scarborough, ON",
    description:
      "Learn how Birchmount Auto Repair collects, uses, and protects your personal information when you use our website and services.",
    url: `${SITE_URL}/privacy`,
    type: "website",
    siteName: "Birchmount Auto Repair",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Birchmount Auto Repair - Scarborough, ON",
    description:
      "Learn how Birchmount Auto Repair collects, uses, and protects your personal information when you use our website and services.",
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

const privacyPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Birchmount Auto Repair",
    "description":
        "How Birchmount Auto Repair collects, uses, and protects your personal information.",
    "url": `${SITE_URL}/privacy`,
    "publisher": {
        "@type": "AutoRepair",
        "name": "Birchmount Auto Repair",
        "url": SITE_URL,
        "telephone": "+14167578368",
        "email": "birchmountautorepair@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "1064 Birchmount Rd",
            "addressLocality": "Scarborough",
            "addressRegion": "ON",
            "postalCode": "M1K 1S4",
            "addressCountry": "CA",
        },
    },
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
            "name": "Privacy Policy",
            "item": `${SITE_URL}/privacy`,
        },
    ],
};

const PrivacyPage: React.FC = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([privacyPageSchema, breadcrumbSchema]),
                }}
            />
            <Banner
                title='Privacy Policy'
                subTitle='Privacy Policy'
                bgImage='/assets/images/aboutus/aboutbanner1.png'
            />
            <LegalContent document={privacyPolicyData} />
            <Footer />
        </>
    );
};

export default PrivacyPage;
