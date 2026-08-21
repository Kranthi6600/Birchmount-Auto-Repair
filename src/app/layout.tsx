import type { Metadata } from "next";
import Script from "next/script";
import { Archivo, Titillium_Web } from "next/font/google";
import BirchmountAutoRepairLayout from "@/components/layout/BirchmountAutoRepairLayout";
import { SITE_URL } from "@/lib/site";
import { GTM_CONTAINER_ID } from "@/lib/config";
import "swiper/swiper-bundle.css";
import 'yet-another-react-lightbox/styles.css';

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const titilliumWeb = Titillium_Web({
  variable: "--font-titillium-web",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Birchmount Auto Repair | Auto Body, Collision & Mechanical Repair in Scarborough",
  description: "Birchmount Auto Repair provides professional auto body repair, collision repair, mechanical services, towing, insurance assistance, and rentals in Scarborough, Ontario.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    url: SITE_URL,
    siteName: "Birchmount Auto Repair",
    locale: "en_CA",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/assets/images/icon/logo.ico', sizes: '32x32' },
      { url: '/assets/images/icon/logo.ico', sizes: '48x48' },
      { url: '/assets/images/icon/logo.ico', sizes: '64x64' },
    ],
    apple: { url: '/assets/images/icon/logo.ico', sizes: '180x180' },
  },
  manifest: '/manifest.json',
  verification: {
    google: "DUBmJPgMIsPj5rdvTyBCWb-MB-GMGu0hsXifJgoyNkw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* eslint-disable-next-line @next/next/no-css-tags -- static theme CSS in public/ served as-is */}
        <link rel="stylesheet" href="/assets/css/combined.css?v=15" />
        <Script id="gtm-init" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');
        `}</Script>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1021355107157228');
          fbq('track', 'PageView');
        `}</Script>
        {/* Google Ads gtag.js */}
        <Script id="google-ads-gtag" strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-18309681466" />
        <Script id="google-ads-config" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18309681466');
        `}</Script>
      </head>
      <body className={`${archivo.variable} ${titilliumWeb.variable}`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Meta Pixel Code noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1021355107157228&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <BirchmountAutoRepairLayout>
          {children}
        </BirchmountAutoRepairLayout>
      </body>
    </html>
  );
}
