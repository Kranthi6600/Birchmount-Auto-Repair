import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/servicebanner6.jpeg',
    heroAlt: 'Insurance claim repairs at Birchmount Auto Repair',
    title: 'Insurance Claims',
    text1: `Dealing with the aftermath of a collision is stressful enough — navigating an insurance claim shouldn't add to that burden. At Birchmount Auto Repair, we work directly with all major insurance providers in Ontario to manage your claim from start to finish. Our team handles the paperwork, communicates with your insurer, and ensures your vehicle is repaired to the highest standard with minimal disruption to your life.`,
    text2: `We are a trusted repair facility approved by leading insurers across the province. From the initial damage assessment and estimate submission to final quality inspection, every step is handled professionally. We use OEM and insurer-approved parts, and all repairs are backed by our workmanship warranty — giving you complete confidence that your vehicle is in safe hands.`,
    pointsList: [
        'Direct billing to all major insurance providers',
        'Full claim management from assessment to completion',
        'Approved repair facility for leading Ontario insurers',
        'OEM and insurer-approved parts used throughout',
        'Transparent communication with you and your insurer',
        'Workmanship warranty on all insurance repairs',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg5-1.jpeg',
            alt: 'Insurance claim repair process',
            iconClass: 'icon-certified',
            title: 'Approved Facility',
            text: 'As an approved repair facility for major insurers, we are qualified to carry out insurance-funded repairs to manufacturer standards. Your insurer can have full confidence in the quality and compliance of our work.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg5-2.jpeg',
            alt: 'Stress-free insurance claim',
            iconClass: 'icon-customer-support',
            title: 'Stress-Free Process',
            text: 'We manage all communication with your insurance company, submit detailed repair estimates, and keep you updated at every stage. Our goal is to make the claims process as smooth and hassle-free as possible.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'Which insurance companies do you work with?',
            answer: 'We work with all major Ontario insurance providers including Intact, Aviva, Desjardins, TD Insurance, Belairdirect, and many others. If you are unsure whether we work with your insurer, contact us and we will confirm.',
        },
        {
            id: 2,
            question: 'Do I need to get multiple estimates?',
            answer: 'In Ontario, you are generally not required to obtain multiple repair estimates. You have the right to choose your own repair shop. We will provide a detailed estimate that meets your insurer\'s requirements.',
            isActive: true,
        },
        {
            id: 3,
            question: 'How long does an insurance repair take?',
            answer: 'Timelines vary depending on the extent of damage and parts availability. Once your claim is approved, we will provide a repair schedule. We aim to complete all repairs as quickly as possible without compromising quality.',
        },
        {
            id: 4,
            question: 'What if my insurer and I disagree on the repair scope?',
            answer: 'We act as your advocate throughout the claims process. If there are discrepancies between our repair assessment and what your insurer has approved, we will work directly with them to ensure all necessary repairs are covered and your vehicle is restored properly.',
        },
    ],
};

export default function InsuranceMain() {
    return <ServiceDetailTemplate {...data} />;
}
