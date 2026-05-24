import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg24.jpeg',
    heroAlt: 'Auto refinishing at Birchmount Auto Repair',
    title: 'Auto Refinishing',
    text1: `Over time, a vehicle's paint can oxidize, fade, chalk, or suffer extensive scratching that goes beyond what spot repairs can address. Auto refinishing — a complete exterior repaint — restores your vehicle to showroom condition and provides long-lasting protection against the elements. At Birchmount Auto Repair, our refinishing specialists prepare, prime, paint, and clear coat your vehicle using professional automotive paint systems and controlled environment application for a flawless, durable result.`,
    text2: `Our refinishing process begins with thorough preparation — the most critical step in any quality paint job. We disassemble or mask all trim, lights, and glass; address any surface rust or body damage; and sand the existing finish to create a proper bonding surface. Multiple coats of primer are applied and block-sanded before colour coats are applied in even, controlled passes. A final clear coat seals the finish, and the vehicle is polished and inspected before delivery.`,
    pointsList: [
        'Complete surface preparation including rust and damage treatment',
        'Multiple primer coats applied and block-sanded for a smooth base',
        'Professional colour application with computerized colour matching',
        'UV-resistant clear coat applied for lasting protection and gloss',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg24-1.jpeg',
            alt: 'Auto refinishing preparation',
            iconClass: 'icon-settings-1',
            title: 'Preparation is Everything',
            text: 'A perfect paint job starts with perfect preparation. We invest the time to properly sand, prime, and prepare every surface before a single coat of colour is applied — because the foundation determines the quality of the final finish.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg24-2.jpeg',
            alt: 'Showroom quality auto refinishing',
            iconClass: 'icon-certified',
            title: 'Showroom Finish',
            text: 'Our refinishing process delivers a deep, glossy finish that rivals a factory paint job. Every vehicle is polished and inspected under professional lighting before delivery to ensure the result meets our exacting standards.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'When is auto refinishing the right choice?',
            answer: 'Auto refinishing is typically the right choice when paint oxidation or fading is widespread, when extensive scratching affects multiple panels, when a colour change is desired, or when the overall appearance of the vehicle significantly affects its value or your satisfaction with it.',
        },
        {
            id: 2,
            question: 'How long does a complete auto refinishing take?',
            answer: 'A full vehicle refinish typically takes five to ten business days depending on the vehicle\'s size, the extent of any pre-existing body work required, and the paint system being applied. We provide a detailed timeline before starting any refinishing project.',
            isActive: true,
        },
        {
            id: 3,
            question: 'Will the new finish match if I only do part of the vehicle?',
            answer: 'Partial refinishing — for example, one side or the hood and roof — requires careful colour matching and blending at panel boundaries. Our painters are skilled at blending transitions so the refinished areas integrate well with the existing paint. A full vehicle respray eliminates any concern about blending.',
        },
        {
            id: 4,
            question: 'How long will the refinishing last?',
            answer: 'A professionally applied automotive refinish using quality paint systems and clear coat will last ten years or more with proper care. We recommend regular washing, waxing or sealant application, and prompt attention to chips and scratches to protect the finish over the long term.',
        },
    ],
};

export default function AutoRefinishingMain() {
    return <ServiceDetailTemplate {...data} />;
}
