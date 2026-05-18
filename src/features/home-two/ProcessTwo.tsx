import React from 'react';

const processOneBg = "/assets/images/backgrounds/process-one-bg.jpg";
import JarallaxSection from '@/components/elements/JarallaxSection';
import FadeInAdvanced, { type AnimationVariant } from '@/components/elements/FadeInAdvanced';
import TextAnimation from '@/components/elements/TextAnimation';

interface ProcessItem {
    id: number;
    iconClass: string;
    title: string;
    text: string;
    isReversed: boolean;
    animationClass: AnimationVariant;
    animationDelay: number;
}

const processItems: ProcessItem[] = [
    {
        id: 1,
        iconClass: 'icon-call',
        title: 'Drive In or Call',
        text: 'Call us at (416) 757-8368 or drop by — no appointment required for most services.',
        isReversed: false,
        animationClass: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 2,
        iconClass: 'icon-technician-1',
        title: 'Free Inspection',
        text: 'Our certified technicians diagnose your vehicle and provide a clear, no-obligation estimate.',
        isReversed: true,
        animationClass: 'fadeInLeft',
        animationDelay: 200,
    },
    {
        id: 3,
        iconClass: 'icon-settings-1',
        title: 'We Get to Work',
        text: 'Approved repairs are completed by our expert team using quality parts, often the same day.',
        isReversed: false,
        animationClass: 'fadeInRight',
        animationDelay: 100,
    },
    {
        id: 4,
        iconClass: 'icon-product-return',
        title: 'Back on the Road',
        text: 'We quality-check every repair before you leave and back all work with our service warranty.',
        isReversed: true,
        animationClass: 'fadeInRight',
        animationDelay: 200,
    },
];

const ProcessTwo: React.FC = () => {
    return (
        <section className="process-one">
            <JarallaxSection imgSrc={processOneBg} className="process-one__bg jarallax" >
                <div className=""></div>
            </JarallaxSection>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h6 className="section-title__tagline">
                        <span className="section-title__tagline-border"></span>Work Process
                    </h6>
                    <h3 className="section-title__title title-animation">
                        <TextAnimation>Simple Steps to Get <br /> Your Car Fixed Right.</TextAnimation>
                    </h3>
                </div>
                <div className="row">
                    {processItems.map((item) => (
                        <FadeInAdvanced
                            key={item.id}
                            className={`col-xl-3 col-lg-6 col-md-6`}
                            variant={item?.animationClass}
                            delay={item.animationDelay}
                        >
                            <div className={`process-one__single${item.isReversed ? ' process-one__single--two' : ''}`}>
                                {!item.isReversed && (
                                    <div className="process-one__icon-box">
                                        <div className="process-one__count"></div>
                                        <div className="process-one__icon">
                                            <span className={item.iconClass}></span>
                                        </div>
                                    </div>
                                )}
                                <div className="process-one__content">
                                    <h4 className="process-one__title">{item.title}</h4>
                                    <p className="process-one__text">{item.text}</p>
                                </div>
                                {item.isReversed && (
                                    <div className="process-one__icon-box">
                                        <div className="process-one__count"></div>
                                        <div className="process-one__icon">
                                            <span className={item.iconClass}></span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </FadeInAdvanced>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessTwo;