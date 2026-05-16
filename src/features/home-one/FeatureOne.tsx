import React from 'react'; 

import featureOneShape1 from '@/assets/images/shapes/feature-one-shape-1.png';
import FadeInAdvanced, { type AnimationVariant } from '@/components/elements/FadeInAdvanced';
import Link from 'next/link';
import Image from 'next/image';

interface FeatureItem {
    id: number;
    iconClass: string;
    title: string;
    to: string;
    text: string;
    animationType: AnimationVariant;
    animationDelay: number;
}

const featureItems: FeatureItem[] = [
    {
        id: 1,
        iconClass: 'icon-technician-1',
        title: 'Skilled \nTechnicians',
        to: '/team',
        text: 'The wise man therefore always holds in these matters to this principle of',
        animationType: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 2,
        iconClass: 'icon-services',
        title: '24/7\n Our Service',
        to: '/contact',
        text: 'The wise man therefore always holds in these matters to this principle of',
        animationType: 'fadeInUp',
        animationDelay: 200,
    },
    {
        id: 3,
        iconClass: 'icon-setting',
        title: 'Quality \nGuarantee',
        to: '/services',
        text: 'The wise man therefore always holds in these matters to this principle of',
        animationType: 'fadeInRight',
        animationDelay: 300,
    },
];

const FeatureOne: React.FC = () => {
    return (
        <section className="feature-one">
            <div className="container">
                <div className="row">
                    {featureItems.map((item) => (
                        <FadeInAdvanced
                            key={item?.id}
                            delay={item?.animationDelay}
                            variant={item?.animationType}
                            className={`col-xl-4 col-lg-4 wow `}
                        > 
                                <div className="feature-one__single">
                                    <div className="feature-one__single-inner">
                                        <div className="feature-one__shape-1">
                                            <Image src={featureOneShape1} width={230} height={230} alt="" />
                                        </div>
                                        <div className="feature-one__icon-and-title">
                                            <div className="feature-one__icon">
                                                <span className={item.iconClass}></span>
                                            </div>
                                            <h3 className="feature-one__title">
                                                <Link href={item.to}>
                                                    {item.title.split('\n').map((line, i) => (
                                                        <React.Fragment key={i}>
                                                            {line}
                                                            {i < item.title.split('\n').length - 1 && <br />}
                                                        </React.Fragment>
                                                    ))}
                                                </Link>
                                            </h3>
                                        </div>
                                        <p className="feature-one__text">{item.text}</p>
                                        <div className="feature-one__read-more">
                                            <Link href={item.to}>
                                                read more<span className="icon-arrow-right"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div> 
                        </FadeInAdvanced>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureOne;