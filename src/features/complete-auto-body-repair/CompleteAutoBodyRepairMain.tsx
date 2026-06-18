import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg2.jpeg',
    heroAlt: 'Complete auto body repair at Birchmount Auto Repair',
    title: 'Complete Auto Body Repair',
    text1: `At Birchmount Auto Repair, we offer a full range of auto body repair services designed to restore your vehicle to its pre-accident condition. From minor scratches and dents to major structural damage, our certified technicians have the skills, equipment, and experience to handle it all. We serve drivers across Scarborough and the Greater Toronto Area with honest assessments and quality workmanship you can trust.`,
    text2: `Every repair is carried out using manufacturer-approved techniques and premium materials, ensuring your vehicle not only looks great but is structurally sound and safe. We work with all major insurance providers to make the repair process as smooth and stress-free as possible — handling the paperwork so you can focus on getting back on the road.`,
    pointsList: [
        'Full collision and structural repair',
        'Paint matching and refinishing to factory standards',
        'Dent, scratch, and bumper repair',
        'Insurance claim coordination and direct billing',
        'OEM and high-quality replacement parts',
        'Lifetime warranty on workmanship',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg2-1.jpeg',
            alt: 'Auto body repair Scarborough',
            iconClass: 'icon-certified',
            title: 'Certified Technicians',
            text: 'Our I-CAR trained technicians bring expertise and precision to every repair. From panel replacement to colour matching, every step is completed to the highest industry standard.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg2-2.jpeg',
            alt: 'Auto body painting',
            iconClass: 'icon-paint',
            title: 'Factory-Quality Finish',
            text: 'Using computerised paint-matching technology and premium automotive paints, we restore your vehicle\'s finish so seamlessly that no one will know it was ever damaged.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'How long does a complete auto body repair take?',
            answer: 'Repair time depends on the extent of the damage. Minor repairs such as small dents or scratches may be completed in one to two days, while major collision repairs can take one to two weeks. We provide a detailed timeline estimate after our initial assessment.',
        },
        {
            id: 2,
            question: 'Will my insurance cover auto body repair?',
            answer: 'Most comprehensive and collision insurance policies cover auto body repair. We work directly with all major insurance providers in Ontario and can assist you in filing your claim and getting approval for repairs.',
            isActive: true,
        },
        {
            id: 3,
            question: 'Do you use OEM parts?',
            answer: 'Yes. We use Original Equipment Manufacturer (OEM) parts whenever possible to ensure your vehicle performs and looks exactly as it did before the damage. Where OEM parts are unavailable, we use high-quality aftermarket alternatives approved by your insurer.',
        },
        {
            id: 4,
            question: 'Is there a warranty on the repairs?',
            answer: 'Yes. We provide a lifetime warranty on all workmanship and a manufacturer\'s warranty on parts. If you experience any issues related to our repair work, bring your vehicle back and we will resolve it at no charge.',
        },
    ],
};

export default function CompleteAutoBodyRepairMain() {
    return <ServiceDetailTemplate {...data} slug="complete-auto-body-repair" />;
}
