import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg2.jpeg',
    heroAlt: 'Collision repair at Birchmount Auto Repair',
    title: 'Collision Repair',
    text1: `A collision is one of the most stressful events a vehicle owner can experience. At Birchmount Auto Repair, our collision repair specialists are equipped to handle everything from minor impact damage to severe structural repairs. We restore your vehicle to its pre-accident condition using the latest repair technology, OEM-quality parts, and precision frame measurement systems.`,
    text2: `Every collision repair starts with a thorough safety inspection to identify both visible and hidden structural damage. Our technicians follow manufacturer repair procedures and use computerized measuring equipment to ensure your vehicle's geometry is perfectly restored before any cosmetic work begins. We communicate with you and your insurance company every step of the way for a smooth, stress-free experience.`,
    pointsList: [
        'Computer-aided structural measurement and realignment',
        'Insurance coordination and direct billing available',
        'OEM and certified aftermarket replacement parts',
        'Final quality inspection before every vehicle return',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg2-1.jpeg',
            alt: 'Collision structural repair',
            iconClass: 'icon-affordable-price',
            title: 'Structural Precision',
            text: 'We use computerized frame measurement systems to verify and restore your vehicle\'s structural geometry to factory specifications — ensuring safe handling after every collision.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg2-2.jpeg',
            alt: 'Insurance claim collision repair',
            iconClass: 'icon-medal',
            title: 'Seamless Insurance Process',
            text: 'Our experienced team liaises directly with insurance adjusters, handles all documentation, and ensures your claim moves forward quickly so your vehicle is returned as soon as possible.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'How long does collision repair take?',
            answer: 'Timeline depends on damage severity and parts availability. Minor collision repairs may take two to four days, while significant structural damage can take one to two weeks. We provide a detailed repair schedule and keep you updated throughout the process.',
        },
        {
            id: 2,
            question: 'Is my vehicle safe to drive after a collision?',
            answer: 'Not necessarily. Even minor-looking collisions can damage structural components, airbag systems, or alignment. We strongly recommend having your vehicle inspected immediately after any accident — even if it appears cosmetic.',
            isActive: true,
        },
        {
            id: 3,
            question: 'Do you use OEM parts for collision repairs?',
            answer: 'We use OEM (original equipment manufacturer) parts whenever possible and when specified by your insurance policy. We also work with certified aftermarket parts that meet or exceed OEM standards for fit, finish, and safety.',
        },
        {
            id: 4,
            question: 'Will collision repair affect my vehicle\'s resale value?',
            answer: 'A professional collision repair performed to manufacturer standards preserves your vehicle\'s structural integrity and appearance. Proper documentation of the repair can also help demonstrate the quality of work done when you sell the vehicle.',
        },
    ],
};

export default function CollisionRepairMain() {
    return <ServiceDetailTemplate {...data} />;
}
