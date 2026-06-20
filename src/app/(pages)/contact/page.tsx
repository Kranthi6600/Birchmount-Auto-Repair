import Contact from '@/features/contact/Contact';
import Banner from '@/features/banner/Banner';
import Footer from '@/components/footers/Footer';

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