import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg15.jpeg',
    heroAlt: 'Hybrid vehicle repair at Birchmount Auto Repair',
    title: 'Hybrid Vehicle Repair',
    text1: `Hybrid vehicles combine traditional internal combustion engines with high-voltage electric drive systems — and they require technicians with specialized training and equipment to service safely and correctly. At Birchmount Auto Repair, our hybrid-certified technicians are trained in high-voltage safety protocols and have the diagnostic tools required to service all major hybrid and plug-in hybrid (PHEV) vehicle platforms.`,
    text2: `From routine hybrid maintenance to complex high-voltage battery diagnostics and electric motor repairs, we handle hybrid vehicles with the specialized care they require. We service the regenerative braking system, battery management systems, inverter and converter units, and conventional engine components. All hybrid repairs are performed with strict adherence to manufacturer high-voltage safety standards, protecting both our technicians and your vehicle's sensitive electrical systems.`,
    pointsList: [
        'High-voltage safety certified technicians on all hybrid platforms',
        'Hybrid battery diagnostics, conditioning, and replacement',
        'Regenerative braking system inspection and repair',
        'Full engine and electric motor service to manufacturer specs',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg15-1.jpeg',
            alt: 'High-voltage hybrid safety training',
            iconClass: 'icon-chirger',
            title: 'High-Voltage Safety',
            text: 'Working on hybrid high-voltage systems requires specialized training, personal protective equipment, and strict protocols. Our technicians are certified in high-voltage safety, protecting both themselves and your vehicle throughout every repair.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg15-2.jpeg',
            alt: 'Hybrid vehicle diagnostics',
            iconClass: 'icon-laptop',
            title: 'Specialized Diagnostics',
            text: 'Hybrid vehicles require manufacturer-specific scan tools to access battery management, inverter, and electric drive system data. Our equipment and training ensure accurate diagnosis of both the electric and conventional systems in your vehicle.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'Is it safe to bring my hybrid to an independent repair shop?',
            answer: 'Yes, as long as the shop has technicians certified in high-voltage safety and the appropriate diagnostic equipment for hybrid vehicles. Our team holds the necessary certifications and uses manufacturer-compatible tools to service hybrid vehicles safely and correctly.',
        },
        {
            id: 2,
            question: 'How long does a hybrid battery last?',
            answer: 'Most hybrid batteries are designed to last 150,000 to 200,000 kilometres, and many exceed this considerably. Battery performance may decline gradually over time. We can perform battery health testing to assess the condition of your hybrid battery and advise on whether conditioning, cell replacement, or full battery replacement is needed.',
            isActive: true,
        },
        {
            id: 3,
            question: 'Does regenerative braking need maintenance?',
            answer: 'The regenerative braking system itself is generally low-maintenance, but because it reduces wear on the conventional brake components, brake pads and rotors on hybrids can last much longer and may seize or corrode from inactivity. We recommend periodic inspection of the full braking system on hybrid vehicles.',
        },
        {
            id: 4,
            question: 'Can you service my hybrid\'s conventional engine components?',
            answer: 'Absolutely. Hybrid vehicles still have a conventional internal combustion engine requiring oil changes, coolant service, spark plug replacement, and belt service at manufacturer-recommended intervals. We handle all conventional engine maintenance and repair alongside the hybrid-specific systems.',
        },
    ],
};

export default function HybridVehicleRepairMain() {
    return <ServiceDetailTemplate {...data} />;
}
