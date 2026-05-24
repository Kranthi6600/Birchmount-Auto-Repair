import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg12.jpeg',
    heroAlt: 'Brake service at Birchmount Auto Repair',
    title: 'Brake Service',
    text1: `Your braking system is the single most important safety system on your vehicle. At Birchmount Auto Repair, our certified technicians perform thorough brake inspections, maintenance, and repairs to ensure your vehicle stops reliably and safely every time. We service all brake system components — pads, rotors, calipers, drums, brake lines, and hydraulic fluid — on all makes and models.`,
    text2: `We begin every brake service with a comprehensive inspection that measures pad thickness, checks rotor condition for wear and warping, tests caliper function, and assesses brake fluid condition. Based on our findings, we provide a transparent written estimate and perform only the repairs that are genuinely needed. Our technicians use quality OEM-equivalent or premium aftermarket parts, and every brake job is test-driven before the vehicle is returned to you.`,
    pointsList: [
        'Comprehensive brake inspection included with every service visit',
        'Pad thickness, rotor condition, and caliper function assessed',
        'Brake fluid condition and moisture content tested',
        'Test drive performed after every brake repair',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg12-1.jpeg',
            alt: 'Certified brake technicians',
            iconClass: 'icon-certified',
            title: 'Certified Technicians',
            text: 'Our brake specialists are fully trained and certified to service all vehicle makes and models, ensuring your stopping system is restored to peak performance with every repair or service.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg12-2.jpeg',
            alt: 'Brake service warranty',
            iconClass: 'icon-medal',
            title: 'Quality Parts & Warranty',
            text: 'We use premium brake components backed by manufacturer warranties. Our workmanship guarantee ensures that if any brake work we performed has an issue, we will make it right at no additional charge.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'What are signs that my brakes need service?',
            answer: 'Warning signs include squealing or grinding noises when braking, a soft or spongy brake pedal, your vehicle pulling to one side when you brake, vibration through the steering wheel or brake pedal, or your brake warning light illuminating. Any of these symptoms should prompt an immediate inspection.',
        },
        {
            id: 2,
            question: 'How often should brake pads be replaced?',
            answer: 'Brake pad life varies from 30,000 to 80,000 kilometres depending on driving habits, vehicle type, and pad material. City driving with frequent stops wears pads faster than highway driving. We recommend a brake inspection every 20,000 kilometres or annually.',
            isActive: true,
        },
        {
            id: 3,
            question: 'Do rotors always need to be replaced with brake pads?',
            answer: 'Not always. We measure rotor thickness and check for warping during every inspection. If rotors are within specification and have sufficient material remaining, they can often be resurfaced rather than replaced. We recommend the option that provides the best safety outcome and value.',
        },
        {
            id: 4,
            question: 'How long does a brake service take?',
            answer: 'A standard front or rear brake pad and rotor replacement typically takes one to two hours. A complete four-wheel brake service may take two to three hours. If additional work such as caliper replacement or brake line repair is needed, we will advise you of the additional time required.',
        },
    ],
};

export default function BrakeServiceMain() {
    return <ServiceDetailTemplate {...data} />;
}
