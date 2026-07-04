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
        <link rel="stylesheet" href="/assets/css/combined.css" />
        <Script id="gtm-init" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');
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
        <BirchmountAutoRepairLayout>
          {children}
        </BirchmountAutoRepairLayout>
      </body>
    </html>
  );
}
