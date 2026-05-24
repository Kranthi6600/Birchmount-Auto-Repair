import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg22.jpeg',
    heroAlt: 'Car paint services at Birchmount Auto Repair',
    title: 'Car Paint Services',
    text1: `Your vehicle's paint is its first layer of protection against the elements — and the most visible statement of its condition and value. At Birchmount Auto Repair, our professional automotive painters deliver exceptional results across the full range of paint services, from precise spot repairs and panel resprays to complete vehicle refinishing. We use premium automotive-grade paint systems with computerized colour-matching to achieve results that are indistinguishable from the original factory finish.`,
    text2: `Every paint service begins with thorough surface preparation — the foundation of a flawless finish. We clean, degrease, sand, and prime the affected surfaces before any paint is applied. Our painters apply colour coats in multiple passes using professional spray equipment in a controlled environment, followed by a durable clear coat that protects the finish and delivers the depth and gloss your vehicle deserves. All paint work is inspected and polished before delivery.`,
    pointsList: [
        'Computerized colour-matching for seamless blending with existing finish',
        'Premium automotive paint systems with durable clear coat',
        'Surface preparation and priming performed to professional standard',
        'Spot repairs, panel resprays, and full vehicle refinishing available',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg22-1.jpeg',
            alt: 'Professional car painting',
            iconClass: 'icon-services',
            title: 'Professional Application',
            text: 'Our painters apply colour and clear coat using professional spray equipment in a clean, controlled environment. This ensures a smooth, even finish free of dust contamination, runs, or inconsistencies.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg22-2.jpeg',
            alt: 'Car paint colour matching',
            iconClass: 'icon-certified',
            title: 'Precise Colour Matching',
            text: 'Our computerized colour-matching system reads your vehicle\'s paint code and accounts for paint fade to formulate an exact match. The result is a seamless blend that makes repairs invisible even to a trained eye.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'Can you match the exact colour of my vehicle\'s paint?',
            answer: 'Yes. We use computerized colour-matching technology that reads your vehicle\'s paint code and adjusts the formula to account for natural fade and environmental variation. This allows us to create an exact match that blends seamlessly with the rest of your vehicle.',
        },
        {
            id: 2,
            question: 'What types of paint services do you offer?',
            answer: 'We offer spot repairs for small scratches and chips, single-panel resprays for localized damage, multi-panel paint work for larger areas, and complete vehicle refinishing. We also offer custom colour services for customers who want to change their vehicle\'s colour.',
            isActive: true,
        },
        {
            id: 3,
            question: 'How long does automotive paint work take?',
            answer: 'A spot repair or small panel can often be completed in one to two days. A multi-panel or full vehicle respray typically takes three to seven business days, allowing for proper drying and curing time between coats. We provide a timeline estimate before starting any paint work.',
        },
        {
            id: 4,
            question: 'How should I care for my vehicle after a paint job?',
            answer: 'For the first 30 days after a paint job, avoid automatic car washes with brushes, waxing or polishing, parking in direct sunlight for extended periods, and bird droppings or tree sap sitting on the surface. Hand washing with a mild automotive shampoo is safe after the first week.',
        },
    ],
};

export default function CarPaintServicesMain() {
    return <ServiceDetailTemplate {...data} />;
}
