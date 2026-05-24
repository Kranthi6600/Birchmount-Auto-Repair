import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg5.jpeg',
    heroAlt: 'Insurance claim repairs at Birchmount Auto Repair',
    title: 'Insurance Claim Repairs',
    text1: `Dealing with the aftermath of an accident is stressful enough without having to navigate a complicated insurance claim on your own. At Birchmount Auto Repair, we simplify the process by working directly with your insurance provider from start to finish. Our experienced team handles all adjuster coordination, damage documentation, and repair authorization so you can focus on what matters — getting back on the road.`,
    text2: `We are recognized by all major insurance companies operating in Ontario and have an established process for managing claims efficiently. Once your claim is approved, we begin repairs immediately using OEM or insurance-approved parts, following manufacturer procedures to restore your vehicle properly. We also handle supplemental claims if additional damage is discovered during the repair process, keeping you informed at every stage.`,
    pointsList: [
        'Direct billing to all major Ontario insurance providers',
        'Experienced with adjuster coordination and damage documentation',
        'Supplemental claims handled if additional damage is discovered',
        'Repairs performed to insurance-approved and OEM standards',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg5-1.jpeg',
            alt: 'Insurance claim repair coordination',
            iconClass: 'icon-medal',
            title: 'Adjuster Coordination',
            text: 'We communicate directly with your insurance adjuster to document damage, confirm repair scope, and receive authorization — removing the back-and-forth from your plate entirely.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg5-2.jpeg',
            alt: 'Stress-free insurance repair',
            iconClass: 'icon-certified',
            title: 'Stress-Free Process',
            text: 'From the first call to final vehicle pickup, we handle every administrative step so the claims process is as smooth and stress-free as possible for you and your family.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'Do I have the right to choose my own repair shop for an insurance claim?',
            answer: 'Yes. In Ontario, you have the legal right to choose your own repair facility for insurance-covered repairs. Your insurer may suggest preferred shops, but the final choice is yours. We will work with any insurer on your behalf.',
        },
        {
            id: 2,
            question: 'How do I start an insurance claim repair at your shop?',
            answer: 'Simply call us or come in after notifying your insurance company of the claim. We will coordinate with your insurer directly to get your vehicle assessed, the claim authorized, and repairs underway as quickly as possible.',
            isActive: true,
        },
        {
            id: 3,
            question: 'What happens if more damage is found during repairs?',
            answer: 'This is common in collision repairs. When we uncover hidden damage not visible in the original estimate, we document it with photos and notify your insurer directly. A supplemental claim is processed, and no additional out-of-pocket cost is passed to you beyond your deductible.',
        },
        {
            id: 4,
            question: 'Do you provide a rental car during insurance repairs?',
            answer: 'Many Ontario insurance policies include rental vehicle coverage during a covered repair. We can help you arrange a rental through your insurer. Ask us about this when you bring your vehicle in and we will assist with the coordination.',
        },
    ],
};

export default function InsuranceClaimRepairsMain() {
    return <ServiceDetailTemplate {...data} />;
}
