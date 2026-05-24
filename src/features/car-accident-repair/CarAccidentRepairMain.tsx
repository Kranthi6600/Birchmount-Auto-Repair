import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg16.jpeg',
    heroAlt: 'Car accident repair at Birchmount Auto Repair',
    title: 'Car Accident Repair',
    text1: `An accident can be one of the most stressful experiences for any vehicle owner. At Birchmount Auto Repair, we take that stress off your shoulders with a complete accident repair service that addresses every aspect of the damage — from structural and mechanical repairs to body work, paint, and final detailing. We restore your vehicle to its pre-accident condition and handle insurance coordination from start to finish.`,
    text2: `Our process begins with a comprehensive safety and structural assessment to identify all damage — visible and hidden. We then work with your insurance company to approve the full scope of repairs before starting. Our team handles frame straightening, mechanical repairs, panel replacement, paint matching, and a final quality inspection — all in one location. You receive detailed repair documentation and a warranted vehicle upon completion.`,
    pointsList: [
        'Complete accident damage restoration from structural to cosmetic',
        'Direct insurance coordination and supplemental claim handling',
        'Frame and structural measurement and correction included',
        'Warranted workmanship and final quality inspection before delivery',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg16-1.jpeg',
            alt: 'Accident repair safety assessment',
            iconClass: 'icon-damage',
            title: 'Safety First',
            text: 'Every accident repair starts with a thorough safety assessment. We inspect structural integrity, airbag systems, steering, and braking to ensure no safety-critical damage is overlooked before cosmetic repairs begin.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg16-2.jpeg',
            alt: 'Complete accident repair restoration',
            iconClass: 'icon-certified',
            title: 'Complete Restoration',
            text: 'Our goal is to return your vehicle to exactly the condition it was in before the accident — structurally sound, mechanically correct, and cosmetically perfect. We don\'t cut corners, and we back every repair with our workmanship guarantee.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'What should I do immediately after a car accident?',
            answer: 'Ensure everyone is safe and call emergency services if needed. Exchange insurance information with the other party. Document the scene with photos. Report the accident to your insurance company. Then contact us — we can advise you on next steps and begin coordinating with your insurer.',
        },
        {
            id: 2,
            question: 'How long will my vehicle be in for accident repairs?',
            answer: 'Repair time varies widely based on damage severity. Minor accident repairs may take three to five days. Significant structural and cosmetic damage can take two to three weeks or longer, especially if parts need to be ordered. We provide an estimated completion date after the initial assessment.',
            isActive: true,
        },
        {
            id: 3,
            question: 'Will my vehicle drive the same after accident repair?',
            answer: 'Yes — that is our goal. We use manufacturer-approved repair procedures and quality parts to restore every system to its original specification. A post-repair wheel alignment, road test, and quality inspection confirm the vehicle handles and performs exactly as it should.',
        },
        {
            id: 4,
            question: 'What if my vehicle is a total loss?',
            answer: 'If your insurance company determines the vehicle is a total loss, we can assist with the assessment process and ensure the damage documentation is complete and accurate. We also provide inspection services for vehicles you are considering purchasing that may have accident history.',
        },
    ],
};

export default function CarAccidentRepairMain() {
    return <ServiceDetailTemplate {...data} />;
}
