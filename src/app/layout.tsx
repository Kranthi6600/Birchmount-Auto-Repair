import type { Metadata } from "next";
import { Archivo, Titillium_Web } from "next/font/google";
import BirchmountAutoRepairLayout from "@/components/layout/BirchmountAutoRepairLayout";
import { SITE_URL } from "@/lib/site";
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
  title: "Birchmount Auto Repair | Auto Body, Collision & Mechanical Repair in Scarborough",
  description: "Birchmount Auto Repair provides professional auto body repair, collision repair, mechanical services, towing, insurance assistance, and rentals in Scarborough, Ontario.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    url: SITE_URL,
  },
  icons: {
    icon: [
      { url: '/assets/images/icon/logo.ico', sizes: '32x32' },
      { url: '/assets/images/icon/logo.ico', sizes: '48x48' },
      { url: '/assets/images/icon/logo.ico', sizes: '64x64' },
    ],
    apple: { url: '/assets/images/icon/logo.ico', sizes: '180x180' },
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
      </head>
      <body className={`${archivo.variable} ${titilliumWeb.variable}`}>
        <BirchmountAutoRepairLayout>
          {children}
        </BirchmountAutoRepairLayout>
      </body>
    </html>
  );
}
