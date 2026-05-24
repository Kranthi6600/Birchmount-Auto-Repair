import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg10.jpeg',
    heroAlt: 'Wheel alignment at Birchmount Auto Repair',
    title: 'Wheel Alignment',
    text1: `Proper wheel alignment is one of the most important — and most overlooked — aspects of vehicle maintenance. When your wheels are out of alignment, your vehicle pulls to one side, your tires wear unevenly, and your fuel efficiency drops. At Birchmount Auto Repair, we use computerized four-wheel alignment equipment to measure and correct your vehicle's alignment angles to manufacturer specifications quickly and precisely.`,
    text2: `Alignment issues can develop gradually from normal driving over potholes and curbs, or suddenly after a collision or impact. Even small deviations from spec can accelerate tire wear and compromise handling. Our alignment service measures camber, caster, and toe angles on all four wheels and adjusts them to the factory settings for your specific vehicle. We then perform a test drive to confirm the vehicle tracks straight and handles correctly before returning it to you.`,
    pointsList: [
        'Computerized four-wheel alignment on all makes and models',
        'Camber, caster, and toe angles measured and corrected',
        'Alignment report printed showing before and after measurements',
        'Test drive performed to verify results before vehicle return',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg10-1.jpeg',
            alt: 'Computerized wheel alignment equipment',
            iconClass: 'icon-setting',
            title: 'Precision Equipment',
            text: 'Our computerized alignment system measures all four wheels simultaneously and compares the readings to your vehicle\'s manufacturer specifications — ensuring every adjustment is accurate to within fractions of a degree.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg10-2.jpeg',
            alt: 'Wheel alignment improves tire life',
            iconClass: 'icon-like',
            title: 'Extend Tire Life',
            text: 'Misalignment causes uneven and accelerated tire wear. Correcting your alignment protects your tire investment, improves fuel economy, and keeps your vehicle handling safely in all driving conditions.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'How do I know if my wheels need alignment?',
            answer: 'Common signs include your vehicle pulling to one side on a straight road, uneven or feathered tire wear, a steering wheel that is off-centre when driving straight, or a vibrating steering wheel. You should also have your alignment checked after any significant impact such as hitting a pothole or curb.',
        },
        {
            id: 2,
            question: 'How often should I have my alignment checked?',
            answer: 'Most manufacturers recommend checking alignment every 20,000 to 30,000 kilometres, or once a year. You should also check it any time you notice handling changes, after replacing suspension components, or after any collision or significant road impact.',
            isActive: true,
        },
        {
            id: 3,
            question: 'Does alignment affect fuel economy?',
            answer: 'Yes. Misaligned wheels create rolling resistance as tires are dragged slightly sideways rather than rolling freely in the direction of travel. Correcting your alignment can improve fuel economy by one to three percent and reduce tire wear significantly.',
        },
        {
            id: 4,
            question: 'How long does a wheel alignment take?',
            answer: 'A standard four-wheel alignment typically takes about 45 to 60 minutes. If additional suspension components need to be inspected or replaced before alignment can be set correctly, additional time may be required. We always advise you of any additional work needed before proceeding.',
        },
    ],
};

export default function WheelAlignmentMain() {
    return <ServiceDetailTemplate {...data} />;
}
