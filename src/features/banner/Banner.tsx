import Link from 'next/link';
import React from 'react';
type BannerProp = {
    title: string;
    subTitle?: string;
    subTitleLink?: string;
    thirdTitle?: string;
    bgImage?: string;
    headingTag?: 'h1' | 'h2' | 'h3';
}
const Banner: React.FC<BannerProp> = ({ title, subTitle = "", subTitleLink = '/services', thirdTitle, bgImage, headingTag = 'h3' }) => {
    const Heading = headingTag;
    return (
        <section className="page-header">
            <div className="page-header__bg" style={bgImage ? { backgroundImage: `url(${bgImage})`, opacity: 1 } : undefined}>

            </div>
            <div className="container">
                <div className="page-header__inner">
                    <Heading style={{ fontWeight: 'bold' }}>{title}</Heading>
                    <div className="thm-breadcrumb__inner">
                        <ul className="thm-breadcrumb list-unstyled">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><Link href="/">Home</Link></li>
                                <li><span className="icon-angle-right"></span></li>
                                {
                                    subTitleLink && thirdTitle && subTitle ? <>
                                        <li><Link href={subTitleLink}>{subTitle}</Link></li>
                                        <li><span className="icon-angle-right"></span></li>
                                        <li>{thirdTitle}</li>
                                    </> : <li><Link href={"#"}>{subTitle || title}</Link></li>
                                }

                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;