import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import AboutOne from '@/features/home/AboutOne';
import BlogOne from '@/features/home/BlogOne';
import Feature from '@/features/home/Feature';
import MainSlider from '@/features/home/MainSlider';
import Pricing from '@/features/home/Pricing';
import Project from '@/features/home/Project';
import ServiceOne from '@/features/home/ServiceOne';
import Testimonial from '@/features/testimonials/Testimonial';
import WhyChoose from '@/features/home/WhyChoose';
import { SITE_URL } from '@/lib/site';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Birchmount Auto Repair | Auto Body, Collision & Mechanical Repair in Scarborough",
  description: "Trusted auto repair shop in Scarborough, ON. Expert auto body repair, collision repair, engine diagnostics, brake service, transmission repair, insurance claim assistance, and vehicle maintenance. Certified technicians, fair prices, same-day service. Call (416) 757-8368.",
  keywords: [
    "auto repair Scarborough",
    "car repair Scarborough",
    "auto body repair",
    "collision repair",
    "engine diagnostics",
    "brake service",
    "transmission repair",
    "oil change Scarborough",
    "car maintenance",
    "insurance claim repairs",
    "mechanic Scarborough Ontario",
    "auto shop near me",
    "vehicle repair Toronto",
    "Birchmount Auto Repair",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Birchmount Auto Repair | Auto Body, Collision & Mechanical Repair in Scarborough",
    description: "Trusted auto repair shop in Scarborough, ON. Expert auto body, collision, mechanical repairs, insurance claims, and maintenance. Certified technicians, fair prices. Call (416) 757-8368.",
    url: SITE_URL,
    type: "website",
    siteName: "Birchmount Auto Repair",
    locale: "en_CA",
    images: [{ url: '/assets/images/banner-pop/pop1.jpeg', width: 1200, height: 630, alt: 'Birchmount Auto Repair - Scarborough Auto Body & Collision Repair' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Birchmount Auto Repair | Auto Body, Collision & Mechanical Repair in Scarborough",
    description: "Trusted auto repair shop in Scarborough, ON. Expert auto body, collision, mechanical repairs, insurance claims, and maintenance. Call (416) 757-8368.",
    images: ['/assets/images/banner-pop/pop1.jpeg'],
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
  category: "Auto Repair",
  authors: [{ name: "Birchmount Auto Repair" }],
  creator: "Birchmount Auto Repair",
  publisher: "Birchmount Auto Repair",
};

const page: React.FC = () => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Birchmount Auto Repair",
    "image": `${SITE_URL}/assets/images/banner-pop/pop1.jpeg`,
    "description": "Trusted auto repair shop in Scarborough, ON. Expert auto body repair, collision repair, engine diagnostics, brake service, transmission repair, insurance claim assistance, and vehicle maintenance.",
    "url": SITE_URL,
    "telephone": "+14167578368",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Birchmount Road",
      "addressLocality": "Scarborough",
      "addressRegion": "ON",
      "postalCode": "M1K",
      "addressCountry": "CA",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.7250",
      "longitude": "-79.2700",
    },
    "areaServed": [
      { "@type": "City", "name": "Scarborough" },
      { "@type": "City", "name": "Toronto" },
      { "@type": "AdministrativeArea", "name": "Ontario" },
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00",
      },
    ],
    "sameAs": [
      "https://www.facebook.com/birchmountautorepair",
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Auto Repair Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Auto Body Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Collision Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Engine Diagnostics" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brake Service" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transmission Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Car Paint Services" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Insurance Claim Repairs" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vehicle Maintenance" } },
      ],
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200",
    },
  };

  return (
    <div className='page-wrapper'>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <Header />
      <MainSlider />
      <Feature />
      <AboutOne />
      <ServiceOne />
      <WhyChoose />
      <Project />
      <Pricing />
      <Testimonial />
      <BlogOne />
      <Footer />
    </div>
  );
};

export default page;