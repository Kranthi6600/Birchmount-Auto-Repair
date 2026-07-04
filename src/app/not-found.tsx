import React from 'react';
import Header from '@/components/headers/Header';
import Footer from '@/components/footers/Footer';
import Banner from '@/features/banner/Banner';
import type { Metadata } from 'next';
const errorPageImg = '/assets/images/error/errorimg.jpeg';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

const Page: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <Banner title="404 Error" subTitle="404 Error" bgImage='/assets/images/error/errorbanner1.jpeg'/>
            <section className="error-page">
                <div className="container">
                    <div className="error-page__inner text-center">
                        <div className="error-page__img float-bob-y">
                            <Image src={errorPageImg} width={903} height={524} style={{ width: '100%', height: 'auto' }} sizes="(max-width: 768px) 100vw, 903px" alt="404 error illustration" />
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
            <Footer />
        </div>
    );
};

export default React.memo(Page);