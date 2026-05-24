import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg20.jpeg',
    heroAlt: 'Complete auto care at Birchmount Auto Repair',
    title: 'Complete Auto Care',
    text1: `At Birchmount Auto Repair, we offer a truly complete auto care experience — everything your vehicle needs under one roof. From routine oil changes and tire rotations to collision repair, engine diagnostics, suspension work, and full paint services, our certified technicians handle it all. Having one trusted shop manage every aspect of your vehicle's care means consistent service quality, a complete documented history, and the convenience of dealing with one team you know and trust.`,
    text2: `Complete auto care at Birchmount means you never need to shop around for different specialists for different problems. Our team has the training, equipment, and experience to handle all vehicle systems — mechanical, electrical, structural, and cosmetic. We conduct a comprehensive multi-point inspection with every visit, catching emerging issues before they become expensive problems and keeping your vehicle running safely and reliably for years to come.`,
    pointsList: [
        'Full-range mechanical, body, paint, and diagnostics services',
        'Comprehensive multi-point inspection with every service visit',
        'Complete service history maintained for your vehicle',
        'One trusted team for every aspect of your vehicle\'s care',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg20-1.jpeg',
            alt: 'Complete auto care services',
            iconClass: 'icon-certified',
            title: 'All Services, One Shop',
            text: 'Our complete auto care offering means your vehicle gets consistent attention from technicians who know its history. No need to explain your vehicle\'s issues to a new shop — we know your car and provide proactive recommendations based on its full service record.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg20-2.jpeg',
            alt: 'Multi-point vehicle inspection',
            iconClass: 'icon-technician-1',
            title: 'Proactive Maintenance',
            text: 'Our multi-point inspection with every visit allows us to identify and flag developing issues before they cause a breakdown. We provide recommendations with clear priority levels so you can make informed decisions about your vehicle\'s maintenance.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'What is included in complete auto care?',
            answer: 'Complete auto care encompasses every service your vehicle may need over its life: oil changes, brake service, tire rotation, alignment, engine repairs, transmission service, body repair, paint work, diagnostics, electrical repairs, and much more. It\'s a holistic approach to vehicle ownership at a single trusted shop.',
        },
        {
            id: 2,
            question: 'Why is it better to use one shop for everything?',
            answer: 'When one shop knows your vehicle\'s complete history, they can catch patterns and emerging issues that a one-time-visit shop might miss. You also build a relationship with technicians who are invested in keeping your specific vehicle in great shape, rather than just solving the immediate complaint.',
            isActive: true,
        },
        {
            id: 3,
            question: 'Do you perform a multi-point inspection with every visit?',
            answer: 'Yes. We perform a multi-point inspection that covers fluid levels, brake condition, tire wear, suspension components, belts and hoses, and other maintenance items with every service visit. We report findings to you and flag any items that need attention — without pressure.',
        },
        {
            id: 4,
            question: 'Can you service all vehicle makes and models?',
            answer: 'Yes. Our technicians are trained across all major domestic and import vehicle brands. From everyday passenger cars to SUVs, trucks, minivans, and luxury vehicles, we have the equipment and expertise to provide complete care for virtually any vehicle.',
        },
    ],
};

export default function CompleteAutoCareMain() {
    return <ServiceDetailTemplate {...data} />;
}
