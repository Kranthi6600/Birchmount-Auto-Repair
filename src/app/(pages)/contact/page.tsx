import Contact from '@/features/contact/Contact';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';

const ContactPage = () => {
    return (
        <>
            <Banner title='Contact' subTitle='Contact Us' />
            <Contact />
            <FooterOne />
        </>
    );
};

export default ContactPage;