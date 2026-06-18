import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg18.jpeg',
    heroAlt: 'Towing and roadside assistance at Birchmount Auto Repair',
    title: 'Towing & Roadside Assistance',
    text1: `When your vehicle breaks down unexpectedly, you need a fast, reliable solution. Birchmount Auto Repair provides professional towing and roadside assistance services across Scarborough and the Greater Toronto Area. Whether you've been in a collision, suffered a mechanical failure, run out of fuel, or have a flat tyre, our team is ready to get you safely back on the road or transport your vehicle directly to our repair facility.`,
    text2: `Our towing service eliminates the hassle of dealing with multiple providers. Once your vehicle arrives at our Birchmount facility, our experienced technicians take over immediately — beginning diagnosis and repairs without delay. We work with all major insurance providers, so if your policy includes roadside assistance, we'll help coordinate coverage to minimise your out-of-pocket costs.`,
    pointsList: [
        'Professional towing to our Scarborough repair facility',
        'Roadside assistance for breakdowns and flat tyres',
        'Jump starts and fuel delivery',
        'Post-accident vehicle recovery',
        'Insurance coordination for towing coverage',
        'Safe handling of all vehicle types',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg18-1.jpeg',
            alt: 'Professional towing Scarborough',
            iconClass: 'icon-customer-support',
            title: 'Fast Response',
            text: 'We understand that a breakdown is stressful. Our team responds promptly, keeping you informed throughout the process and ensuring your vehicle is handled with care from the moment we arrive.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg18-2.jpeg',
            alt: 'Towing to repair shop',
            iconClass: 'icon-certified',
            title: 'Direct to Our Shop',
            text: 'Choosing our towing service means your vehicle goes straight to our Birchmount facility where our technicians are ready to begin repairs — no storage lots, no extra transfers, no delays.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'What areas do you provide towing and roadside assistance in?',
            answer: 'We primarily serve Scarborough and the surrounding Greater Toronto Area. Contact us directly with your location and we will confirm coverage and estimated response time.',
        },
        {
            id: 2,
            question: 'Is towing covered by my insurance?',
            answer: 'Many Ontario auto insurance policies include roadside assistance and towing coverage. Check your policy or contact your insurer to confirm. If covered, we can coordinate directly with your insurer to process the claim.',
            isActive: true,
        },
        {
            id: 3,
            question: 'What roadside services do you offer?',
            answer: 'We offer towing, flat tyre assistance, jump starts, fuel delivery, and lockout assistance. If you\'re not sure whether we can help with your situation, call us and we\'ll advise you on the best course of action.',
        },
        {
            id: 4,
            question: 'Can you tow a vehicle that was in an accident?',
            answer: 'Yes. We regularly tow post-accident vehicles and are experienced in safely securing and transporting damaged cars. Once at our facility, our collision repair team will assess and document the damage for your insurance claim.',
        },
    ],
};

export default function TowingRoadsideAssistanceMain() {
    return <ServiceDetailTemplate {...data} slug="towing-roadside-assistance" />;
}
