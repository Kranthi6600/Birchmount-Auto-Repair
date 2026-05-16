import React from 'react'; 
import HeaderOne from '@/components/headers/HeaderOne';
import FooterOne from '@/components/footers/FooterOne';
import Banner from '@/features/banner/Banner';
import errorPageImg from '@/assets/images/resources/error-page-img1.png';
import Link from 'next/link';
import Image from 'next/image';

const Page: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderOne />
            <Banner title="404 Error" subTitle="404 Error" />
            <section className="error-page">
                <div className="container">
                    <div className="error-page__inner text-center">
                        <div className="error-page__img float-bob-y">
                            <Image src={errorPageImg} width={903} height={524} alt="404 error illustration" />
                        </div>

                        <div className="error-page__content">
                            <h2>Oops! Page Not Found!</h2>
                            <p>The page you are looking for does not exist. It might have been moved or deleted.</p>
                            <div className="btn-box">
                                <Link href="/" className="thm-btn">
                                    Back To Home <span className="icon-arrow-right"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterOne />
        </div>
    );
};

export default React.memo(Page);