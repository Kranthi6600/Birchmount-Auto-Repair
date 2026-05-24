import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg4.jpeg',
    heroAlt: 'Certified auto repair at Birchmount Auto Repair',
    title: 'Certified Auto Repair',
    text1: `When you bring your vehicle to Birchmount Auto Repair, you can trust that your car is in the hands of certified professionals. Our technicians hold industry certifications and undergo continuous training to stay current with the latest vehicle technology. Certified auto repair means your vehicle is serviced to the manufacturer's exact specifications, protecting both your safety and your investment.`,
    text2: `We are equipped to perform certified repairs on a wide range of makes and models, using approved repair procedures and OEM-grade components. Whether it's a routine service or a complex repair, our certification means every job is done right — documented, warrantied, and completed to the highest industry standard. We provide you with full repair documentation so your service history remains complete and verifiable.`,
    pointsList: [
        'Industry-certified technicians across all major vehicle brands',
        'Manufacturer-approved repair procedures followed on every job',
        'Full documentation provided for your service and warranty records',
        'OEM and approved-equivalent parts used in all certified repairs',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg4-1.jpeg',
            alt: 'Certified auto repair credentials',
            iconClass: 'icon-certified',
            title: 'Certified & Trained',
            text: 'Our team holds professional certifications and participates in ongoing manufacturer training programs. This ensures your vehicle receives the standard of care its manufacturer intended.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg4-2.jpeg',
            alt: 'Warranty protected auto repair',
            iconClass: 'icon-medal',
            title: 'Warranty Protection',
            text: 'Certified repairs performed to manufacturer specifications help protect your existing warranty. All work is documented and provided to you upon completion to maintain your vehicle\'s complete service record.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'What does "certified auto repair" mean?',
            answer: 'Certified auto repair means repairs are performed by technicians who hold recognized industry certifications, follow manufacturer-approved procedures, and use parts and materials that meet or exceed OEM specifications. It ensures your vehicle is repaired to the highest standard.',
        },
        {
            id: 2,
            question: 'Will certified repairs maintain my vehicle\'s manufacturer warranty?',
            answer: 'Yes. Under Canadian consumer protection regulations, independent shops can perform certified repairs without voiding your manufacturer warranty, provided the work is performed to the manufacturer\'s specifications. We document all work to protect your warranty status.',
            isActive: true,
        },
        {
            id: 3,
            question: 'Do certified repairs cost more than standard repairs?',
            answer: 'Certified repairs reflect the higher training, tooling, and parts standards required to service modern vehicles correctly. However, the cost of doing a repair properly the first time is almost always less than correcting an improper repair down the road.',
        },
        {
            id: 4,
            question: 'What certifications do your technicians hold?',
            answer: 'Our technicians hold credentials from recognized automotive certification programs and participate in ongoing manufacturer training. We are happy to discuss our team\'s qualifications when you visit our shop.',
        },
    ],
};

export default function CertifiedAutoRepairMain() {
    return <ServiceDetailTemplate {...data} />;
}
