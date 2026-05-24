import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg14.jpeg',
    heroAlt: 'Transmission repair at Birchmount Auto Repair',
    title: 'Transmission Repair',
    text1: `The transmission is one of the most complex and expensive components in your vehicle — and one of the most important to keep in good working order. At Birchmount Auto Repair, our drivetrain specialists service both automatic and manual transmissions, from routine fluid and filter changes to solenoid replacement and complete transmission rebuilds. We diagnose transmission issues accurately before recommending any repair, ensuring you only pay for what your vehicle actually needs.`,
    text2: `Transmission problems left untreated tend to worsen quickly and become significantly more expensive to repair. Early signs like slipping gears, delayed engagement, rough shifts, or transmission warning lights should be addressed promptly. Our technicians perform a thorough diagnostic including fluid inspection, fault code scanning, and a road test evaluation to pinpoint the cause before presenting you with a clear, detailed repair estimate.`,
    pointsList: [
        'Automatic and manual transmission service and repair',
        'Fluid and filter changes, solenoid replacement, and rebuilds',
        'Road test and electronic diagnostic before any work begins',
        'Transmission rebuild option for severely damaged units',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg14-1.jpeg',
            alt: 'Transmission diagnostic specialist',
            iconClass: 'icon-product-return',
            title: 'Drivetrain Specialists',
            text: 'Our transmission technicians have specialized training in both automatic and manual drivetrain systems. From simple fluid services to complex solenoid repairs and full rebuilds, we have the expertise your transmission demands.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg14-2.jpeg',
            alt: 'Transparent transmission repair estimate',
            iconClass: 'icon-certified',
            title: 'Honest Estimates',
            text: 'Transmission repair can be costly, which is why we perform a thorough diagnostic before recommending any work. We provide a transparent written estimate and explain all your options — including repair versus replacement — so you can make an informed decision.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'What are warning signs of transmission problems?',
            answer: 'Common signs include slipping gears, delayed or rough gear changes, the transmission warning light, a burning smell from the fluid, fluid leaks (typically red or brown fluid under the vehicle), grinding or whining noises, and refusal to go into gear. Any of these symptoms require prompt attention.',
        },
        {
            id: 2,
            question: 'How often should transmission fluid be changed?',
            answer: 'Most manufacturers recommend changing automatic transmission fluid every 60,000 to 100,000 kilometres. Some sealed units specify longer intervals, while vehicles used in heavy-duty conditions may need more frequent changes. Check your owner\'s manual or ask us for a recommendation specific to your vehicle.',
            isActive: true,
        },
        {
            id: 3,
            question: 'Is it better to repair or replace a failing transmission?',
            answer: 'It depends on the extent of damage and the vehicle\'s value. Minor issues like solenoids, sensors, or seals are usually worth repairing. Major internal damage may make a rebuild or a quality remanufactured unit more cost-effective. We present all options with honest recommendations.',
        },
        {
            id: 4,
            question: 'How long does transmission repair take?',
            answer: 'A transmission fluid and filter service can be done in two to three hours. Solenoid and sensor repairs may take one to two days. A complete transmission rebuild typically takes three to five business days depending on parts availability and the complexity of the work involved.',
        },
    ],
};

export default function TransmissionRepairMain() {
    return <ServiceDetailTemplate {...data} />;
}
