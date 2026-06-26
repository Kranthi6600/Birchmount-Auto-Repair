import Contact from '@/features/contact/Contact';
import Banner from '@/features/banner/Banner';
import Footer from '@/components/footers/Footer';
import { SITE_URL } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    url: `${SITE_URL}/contact`,
  },
};

const ContactPage = () => {
    return (
        <>
            <Banner title='Contact' subTitle='Contact Us' bgImage='/assets/images/contactus/contactbanner.jpeg'/>
            <Contact />
            <Footer />
        </>
    );
};

export default ContactPage;