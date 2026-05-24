import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg1.jpeg',
    heroAlt: 'Auto body repair at Birchmount Auto Repair',
    title: 'Auto Body Repair',
    text1: `Your vehicle's body is its first line of defence against the elements — and the first thing anyone notices. At Birchmount Auto Repair, our certified auto body technicians use advanced repair techniques and quality materials to restore every panel, seam, and surface to factory condition. Whether you've been in a fender bender, suffered parking lot damage, or dealt with rust and corrosion, our team handles it all with precision and care.`,
    text2: `We begin every job with a comprehensive assessment to identify all visible and hidden damage. Using industry-leading tools and OEM-grade materials, we reshape, replace, and refinish panels to seamlessly match your vehicle's original appearance. Our colour-matching technology ensures the repaired area blends perfectly, and every job is inspected before delivery to guarantee your satisfaction.`,
    pointsList: [
        'Full structural and cosmetic body damage assessment included',
        'OEM and premium aftermarket panels for all makes and models',
        'Computer colour-matching for invisible paint blending',
        'Rust removal and corrosion treatment before refinishing',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg1-1.jpeg',
            alt: 'Certified body repair technicians',
            iconClass: 'icon-certified',
            title: 'Certified Technicians',
            text: 'Our body repair specialists are factory-trained and certified across all major makes and models, ensuring every repair meets or exceeds manufacturer standards.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg1-2.jpeg',
            alt: 'Quality auto body workmanship',
            iconClass: 'icon-medal',
            title: 'Quality Guaranteed',
            text: 'Every auto body repair comes with our workmanship guarantee. We stand behind our work so you can drive away with complete confidence in your vehicle\'s appearance and safety.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'How long does auto body repair take?',
            answer: 'Repair time depends on the extent of damage. Minor dents and scratches can often be completed in one to two days, while more significant panel replacements or structural repairs may take three to seven business days. We provide a timeline estimate after your initial assessment.',
        },
        {
            id: 2,
            question: 'Will the repaired area match the rest of my vehicle?',
            answer: 'Yes. We use computerized paint-matching technology to precisely formulate a colour blend that matches your vehicle\'s existing finish. Our certified painters apply and blend the paint so the repair is virtually invisible.',
            isActive: true,
        },
        {
            id: 3,
            question: 'Can you work with my insurance company?',
            answer: 'Absolutely. We work with all major insurance providers in Ontario and can coordinate directly with your adjuster to streamline the claims process. We handle the paperwork so you can focus on getting back on the road.',
        },
        {
            id: 4,
            question: 'Do you repair rust damage?',
            answer: 'Yes. We treat rust and corrosion thoroughly before any refinishing begins. This includes removing affected metal, treating the underlying surface, and applying protective coatings to prevent future rust from returning.',
        },
    ],
};

export default function AutoBodyRepairMain() {
    return <ServiceDetailTemplate {...data} />;
}
