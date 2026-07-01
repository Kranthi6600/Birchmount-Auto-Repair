import React from 'react';
import Banner from '@/features/banner/Banner';
import BlogStandartMain from '@/features/blog/BlogStandartMain';
import Footer from '@/components/footers/Footer';
import { SITE_URL } from '@/lib/site';
import type { Metadata } from 'next';
import { getBlogs, API_REVALIDATE_SECONDS } from '@/lib/orchestrator';
import { DEFAULT_BLOG_PAGE_SIZE } from '@/lib/config';

export const metadata: Metadata = {
  title: "Auto Repair Blog | Birchmount Auto Repair - Scarborough, ON",
  description: "Expert auto repair tips, maintenance advice, and industry insights from Birchmount Auto Repair in Scarborough. Read our blog for brake care, oil change guides, winter driving tips, and more.",
  keywords: [
    "auto repair blog",
    "car repair tips",
    "auto maintenance advice",
    "Scarborough auto repair",
    "car care guide",
    "brake repair tips",
    "oil change advice",
    "winter car preparation",
    "engine diagnostics",
    "transmission repair",
  ],
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Auto Repair Blog | Birchmount Auto Repair - Scarborough, ON",
    description: "Expert auto repair tips, maintenance advice, and industry insights from Birchmount Auto Repair in Scarborough.",
    url: `${SITE_URL}/blog`,
    type: "website",
    siteName: "Birchmount Auto Repair",
    images: [{ url: '/assets/images/blog/blogbanner.jpeg', width: 1200, height: 630, alt: 'Birchmount Auto Repair Blog' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Repair Blog | Birchmount Auto Repair - Scarborough, ON",
    description: "Expert auto repair tips, maintenance advice, and industry insights from Birchmount Auto Repair in Scarborough.",
    images: ['/assets/images/blog/blogbanner.jpeg'],
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

const fallbackBlogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Birchmount Auto Repair Blog",
    "description": "Expert auto repair tips, maintenance advice, and industry insights from Birchmount Auto Repair in Scarborough.",
    "url": `${SITE_URL}/blog`,
    "publisher": {
        "@type": "Organization",
        "name": "Birchmount Auto Repair",
        "url": SITE_URL,
        "logo": {
            "@type": "ImageObject",
            "url": `${SITE_URL}/assets/images/icon/logo.ico`,
        },
    },
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
            "name": "Blog",
            "item": `${SITE_URL}/blog`,
        },
    ],
};

const BlogListPage: React.FC = async () => {
    let apiSchema: { item_list?: Record<string, unknown> | null; collection_page?: Record<string, unknown> | null } | null = null;
    try {
        const result = await getBlogs(1, DEFAULT_BLOG_PAGE_SIZE, { revalidate: API_REVALIDATE_SECONDS });
        apiSchema = result.schema ?? null;
    } catch {
        apiSchema = null;
    }

    const schemas: Record<string, unknown>[] = [
        apiSchema?.collection_page ?? fallbackBlogSchema,
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
            <Banner title='Blog' bgImage='/assets/images/blog/blogbanner.jpeg'/>
            <BlogStandartMain />
            <Footer />
        </>
    );
};

export default BlogListPage;