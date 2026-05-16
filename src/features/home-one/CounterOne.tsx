import React from 'react';

import counterOneBg from '@/assets/images/backgrounds/counter-one-bg.jpg';
import CounterUp from '@/components/elements/CounterUp';
import JarallaxSection from '@/components/elements/JarallaxSection'; 

interface CounterItem {
    id: number;
    iconClass: string;
    count: number;
    suffix: string;
    label: string;
}

const counterItems: CounterItem[] = [
    {
        id: 1,
        iconClass: 'icon-project-complete',
        count: 1.25,
        suffix: 'K',
        label: 'Successful Projects',
    },
    {
        id: 2,
        iconClass: 'icon-technician-1',
        count: 500,
        suffix: '+',
        label: 'Experts Staffs',
    },
    {
        id: 3,
        iconClass: 'icon-happy-customer',
        count: 1.33,
        suffix: 'K',
        label: 'Happy customer',
    },
    {
        id: 4,
        iconClass: 'icon-project-complete',
        count: 100,
        suffix: '%',
        label: 'Quality Products',
    },
];

const CounterOne: React.FC = () => {
    return (
        <JarallaxSection className="counter-one"
            imgSrc={counterOneBg.src}
            overlayOpacity={0.8}
        >
            <div className="container">
                <ul className="row list-unstyled">
                    {counterItems.map((item) => (
                        <li key={item.id} className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-one__single">
                                <div className="counter-one__icon">
                                    <span className={item.iconClass}></span>
                                </div>
                                <div className="counter-one__count-box">
                                    <h3 className="odometer"><CounterUp ending={item?.count} /></h3>
                                    <span>{item.suffix}</span>
                                </div>
                                <p className="counter-one__count-text">{item.label}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </JarallaxSection>
    );
};

export default CounterOne;