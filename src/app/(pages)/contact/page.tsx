import Contact from '@/features/contact/Contact';
import Banner from '@/features/banner/Banner';
import Footer from '@/components/footers/Footer';
import { SITE_URL } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | Birchmount Auto Repair - Scarborough, ON",
  description: "Get in touch with Birchmount Auto Repair in Scarborough, ON. Call (416) 757-8368, email birchmountautorepair@gmail.com, or visit us at 1064 Birchmount Rd. Free quotes, same-day service available.",
  keywords: [
    "contact Birchmount Auto Repair",
    "auto repair Scarborough contact",
    "car repair phone number Scarborough",
    "auto body shop contact Scarborough",
    "mechanic near me Scarborough",
    "free quote auto repair Scarborough",
    "Birchmount Road auto repair",
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Us | Birchmount Auto Repair - Scarborough, ON",
    description: "Get in touch with Birchmount Auto Repair in Scarborough, ON. Call (416) 757-8368, email us, or visit 1064 Birchmount Rd. Free quotes available.",
    url: `${SITE_URL}/contact`,
    type: "website",
    siteName: "Birchmount Auto Repair",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Birchmount Auto Repair - Scarborough, ON",
    description: "Get in touch with Birchmount Auto Repair in Scarborough, ON. Call (416) 757-8368, email us, or visit 1064 Birchmount Rd. Free quotes available.",
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

const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Birchmount Auto Repair",
    "description": "Get in touch with Birchmount Auto Repair in Scarborough, ON.",
    "url": `${SITE_URL}/contact`,
    "mainEntity": {
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
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday"],
                "opens": "09:00",
                "closes": "16:00",
            },
        ],
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
            "name": "Contact",
            "item": `${SITE_URL}/contact`,
        },
    ],
};

const ContactPage = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([contactPageSchema, breadcrumbSchema]),
                }}
            />
            <Banner title='Contact' subTitle='Contact Us' bgImage='/assets/images/contactus/contactbanner.jpeg'/>
            <Contact />
            <Footer />
        </>
    );
};

export default ContactPage;