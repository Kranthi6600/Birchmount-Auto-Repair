import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg3.jpeg',
    heroAlt: 'Mechanical repair at Birchmount Auto Repair',
    title: 'Mechanical Repair',
    text1: `From minor tune-ups to complex engine overhauls, Birchmount Auto Repair is your trusted destination for all mechanical repair needs. Our team of experienced technicians diagnoses and repairs issues across all vehicle systems — engine, transmission, cooling, fuel, exhaust, and more — using state-of-the-art diagnostic tools and quality replacement parts.`,
    text2: `We believe in transparent communication and honest recommendations. Before any work begins, we provide a written estimate and explain exactly what needs to be done and why. Our goal is to fix your vehicle right the first time, so you can get back on the road with confidence. We service all makes and models, both domestic and import, and stand behind every repair with our workmanship guarantee.`,
    pointsList: [
        'Comprehensive multi-point mechanical inspection with every visit',
        'Honest estimates with no hidden fees before work begins',
        'Quality OEM and premium aftermarket parts used throughout',
        'All makes and models — domestic, import, and luxury vehicles',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg3-1.jpeg',
            alt: 'Expert mechanical technicians',
            iconClass: 'icon-technician-1',
            title: 'Experienced Technicians',
            text: 'Our mechanical team brings decades of combined experience across all major vehicle platforms. Whether your vehicle is a late-model import or a classic domestic, we have the expertise to diagnose and repair it correctly.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg3-2.jpeg',
            alt: 'Mechanical repair warranty',
            iconClass: 'icon-certified',
            title: 'Workmanship Guarantee',
            text: 'Every mechanical repair at Birchmount Auto Repair is backed by our workmanship guarantee. We stand behind the quality of our repairs so you drive away with complete peace of mind.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'How do I know when my vehicle needs mechanical repairs?',
            answer: 'Warning signs include unusual noises, warning lights on the dashboard, reduced performance, excessive fuel consumption, vibrations, or fluid leaks. If you notice any of these, bring your vehicle in for a diagnostic inspection as soon as possible.',
        },
        {
            id: 2,
            question: 'Do you provide written estimates before starting repairs?',
            answer: 'Yes, always. We provide a detailed written estimate before any work begins. We will explain what needs to be done, why it is necessary, and what the cost will be. No surprises on your bill.',
            isActive: true,
        },
        {
            id: 3,
            question: 'Can you service my vehicle if it is still under manufacturer warranty?',
            answer: 'Yes. Canadian law allows you to have your vehicle serviced by an independent shop without voiding your manufacturer warranty, as long as the work is performed to manufacturer specifications using appropriate parts. We document all work to support your warranty.',
        },
        {
            id: 4,
            question: 'What types of mechanical repairs do you handle?',
            answer: 'We handle a full range of mechanical repairs including engine repairs and rebuilds, cooling system service, fuel system repairs, exhaust repairs, starter and alternator replacement, belt and hose replacement, and much more. If your vehicle has a mechanical issue, we can fix it.',
        },
    ],
};

export default function MechanicalRepairMain() {
    return <ServiceDetailTemplate {...data} />;
}
