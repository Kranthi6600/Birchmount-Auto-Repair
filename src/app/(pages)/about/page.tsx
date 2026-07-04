import React from 'react';
import SlidingText from '@/components/elements/SlidingText';
import Footer from '@/components/footers/Footer';
import Banner from '@/features/banner/Banner';
import About from '@/features/home/About';
import Blog from '@/features/home/Blog';
import Service from '@/features/home/Service';
import Testimonial from '@/features/testimonials/Testimonial';
import { SITE_URL } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | Birchmount Auto Repair - Scarborough, ON",
  description: "Learn about Birchmount Auto Repair, Scarborough's trusted auto body and mechanical repair shop. Certified technicians, quality parts, and commitment to customer satisfaction since day one.",
  keywords: [
    "about Birchmount Auto Repair",
    "auto repair Scarborough",
    "car repair shop Scarborough",
    "certified mechanics Scarborough",
    "auto body repair Ontario",
    "collision repair Scarborough",
    "mechanic Scarborough ON",
  ],
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Us | Birchmount Auto Repair - Scarborough, ON",
    description: "Learn about Birchmount Auto Repair, Scarborough's trusted auto body and mechanical repair shop. Certified technicians, quality parts, and commitment to customer satisfaction.",
    url: `${SITE_URL}/about`,
    type: "website",
    siteName: "Birchmount Auto Repair",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Birchmount Auto Repair - Scarborough, ON",
    description: "Learn about Birchmount Auto Repair, Scarborough's trusted auto body and mechanical repair shop. Certified technicians, quality parts, and commitment to customer satisfaction.",
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

const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Birchmount Auto Repair",
    "description": "Learn about Birchmount Auto Repair, Scarborough's trusted auto body and mechanical repair shop.",
    "url": `${SITE_URL}/about`,
    "mainEntity": {
        "@type": "AutoRepair",
        "name": "Birchmount Auto Repair",
        "url": SITE_URL,
        "telephone": "+14167578368",
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
            "name": "About",
            "item": `${SITE_URL}/about`,
        },
    ],
};

const page: React.FC = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([aboutPageSchema, breadcrumbSchema]),
                }}
            />
            <Banner title='About' subTitle='About' bgImage='/assets/images/aboutus/aboutbanner1.png' />
            <About secClass='about-page' />
            <Service />
            <SlidingText secClass='sliding-text-two' />
            <Testimonial />
            <Blog />
            <Footer />
        </>
    );
};

export default page;