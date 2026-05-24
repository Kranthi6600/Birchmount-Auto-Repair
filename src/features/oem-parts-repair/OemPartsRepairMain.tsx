import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg19.jpeg',
    heroAlt: 'OEM parts repair at Birchmount Auto Repair',
    title: 'OEM Parts Repair',
    text1: `Original Equipment Manufacturer (OEM) parts are produced by your vehicle's manufacturer — or to their exact specification — and are the gold standard for vehicle repairs. At Birchmount Auto Repair, we source and install genuine OEM parts for customers who want repairs that maintain their vehicle's original quality, warranty status, and resale value. Whether specified by your insurance policy or your personal preference, OEM parts deliver the precise fit, function, and durability your vehicle was designed for.`,
    text2: `Aftermarket parts can vary widely in quality, but OEM parts are manufactured to exact tolerances and undergo the same testing as the original components installed at the factory. This means correct fitment every time, consistent performance, and no guesswork about compatibility. We source OEM parts through authorized suppliers and install them following manufacturer repair procedures, so every repair meets the standard your vehicle deserves.`,
    pointsList: [
        'Genuine OEM and OEM-equivalent parts sourced through authorized suppliers',
        'Maintains manufacturer warranty and insurance policy OEM requirements',
        'Exact fit and finish — no fitment issues or compatibility concerns',
        'All repairs documented with part numbers for your records',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg19-1.jpeg',
            alt: 'OEM parts quality assurance',
            iconClass: 'icon-settings-1',
            title: 'Factory Quality',
            text: 'OEM parts are manufactured to the same specifications as the original components in your vehicle. They are tested for performance, durability, and compatibility — giving you confidence that every repair maintains the quality your vehicle was built with.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg19-2.jpeg',
            alt: 'OEM parts and warranty protection',
            iconClass: 'icon-certified',
            title: 'Warranty Protection',
            text: 'Using OEM parts helps protect existing manufacturer warranties and ensures your insurance policy\'s OEM part requirements are met. We document every part installed with its OEM part number for your complete records.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'What is the difference between OEM and aftermarket parts?',
            answer: 'OEM parts are made by the vehicle\'s manufacturer or to their exact specification. Aftermarket parts are made by third-party manufacturers and vary widely in quality. While many premium aftermarket parts perform well, OEM parts guarantee the correct fit and the same performance as the original components.',
        },
        {
            id: 2,
            question: 'Does my insurance policy require OEM parts?',
            answer: 'Some comprehensive insurance policies include OEM parts endorsements, particularly for newer vehicles. Review your policy or ask your insurer. We work with all major Ontario insurers and can confirm whether your policy requires OEM parts as part of your repair.',
            isActive: true,
        },
        {
            id: 3,
            question: 'Are OEM parts worth the extra cost?',
            answer: 'For safety-critical components, structural parts, and items that affect your vehicle\'s resale value, OEM parts are generally worth the investment. They provide guaranteed fit and performance, protect your warranty, and ensure your vehicle meets its original design specifications.',
        },
        {
            id: 4,
            question: 'How long does it take to get OEM parts?',
            answer: 'OEM part availability varies by vehicle make and model. Parts for common vehicles are typically available within one to three business days. Specialty or rare parts may take longer. We advise you of parts lead times before your repair begins.',
        },
    ],
};

export default function OemPartsRepairMain() {
    return <ServiceDetailTemplate {...data} />;
}
