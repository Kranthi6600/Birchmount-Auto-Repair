import type { Metadata } from "next";
import { Archivo, Titillium_Web } from "next/font/google";
import FixproLayout from "@/components/layout/FixproLayout";
import "swiper/swiper-bundle.css";
import 'yet-another-react-lightbox/styles.css';
import '@/assets/css/combined.css' 

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
  title: "Fixpro - Electronics & Gadgets Repair Services NextJs Template",
  description: "Fixpro – Modern Next Js template for gadgets, mobile, AC & computer repair services. Clean, responsive & fully documented",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${archivo.variable} ${titilliumWeb.variable}`}>
        <FixproLayout>
          {children}
        </FixproLayout>
      </body>
    </html>
  );
}
