import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg11.jpeg',
    heroAlt: 'Suspension repair at Birchmount Auto Repair',
    title: 'Suspension Repair',
    text1: `Your vehicle's suspension system is responsible for maintaining contact between your tires and the road, absorbing bumps and vibrations, and keeping your vehicle stable through corners and braking. When suspension components wear out or fail, ride quality suffers and — more importantly — vehicle safety is compromised. At Birchmount Auto Repair, our suspension specialists diagnose and repair all suspension system components to restore the safe, comfortable ride your vehicle was designed to deliver.`,
    text2: `Suspension wear is often gradual and easy to overlook until problems become serious. Our multi-point inspection evaluates shocks, struts, springs, control arms, ball joints, tie rod ends, sway bar links, and bushings. We identify worn and failing components, provide a transparent written estimate, and perform repairs using quality replacement parts. Following any suspension work, we perform a wheel alignment to ensure your vehicle tracks straight and handles correctly.`,
    pointsList: [
        'Full suspension inspection covering all components and mounts',
        'Shocks, struts, ball joints, control arms, and bushings replaced',
        'Wheel alignment included following any suspension repair',
        'All makes and models serviced — domestic and import',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg11-1.jpeg',
            alt: 'Suspension component inspection',
            iconClass: 'icon-technician-1',
            title: 'Expert Diagnosis',
            text: 'Our technicians inspect every component of the suspension system to identify wear and failure — including shocks, struts, ball joints, tie rods, control arm bushings, and sway bar end links — ensuring nothing is missed.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg11-2.jpeg',
            alt: 'Suspension safety and handling',
            iconClass: 'icon-certified',
            title: 'Restored Safety & Handling',
            text: 'A properly functioning suspension keeps your vehicle stable under hard braking, maintains steering precision, and ensures all four tires maintain proper contact with the road — critical for safety in all driving conditions.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'What are signs that my suspension needs repair?',
            answer: 'Common warning signs include a rough or bouncy ride, excessive body roll when cornering, vehicle nose-diving under braking, uneven tire wear, clunking or knocking sounds over bumps, or your vehicle pulling to one side. Any of these symptoms warrant a suspension inspection.',
        },
        {
            id: 2,
            question: 'How long do shocks and struts last?',
            answer: 'Shocks and struts typically last between 80,000 and 150,000 kilometres depending on driving conditions and vehicle type. Vehicles that frequently encounter potholes, rough roads, or heavy loads may require replacement sooner. We recommend an inspection every 50,000 kilometres.',
            isActive: true,
        },
        {
            id: 3,
            question: 'Does suspension repair require a wheel alignment?',
            answer: 'Yes. Any suspension repair that affects the geometry of the wheel — such as replacing struts, control arms, ball joints, or tie rod ends — requires a wheel alignment afterward to ensure proper handling and even tire wear.',
        },
        {
            id: 4,
            question: 'Can worn suspension cause tire damage?',
            answer: 'Absolutely. Worn shocks and struts reduce tire contact with the road, leading to uneven wear and reduced braking effectiveness. Worn ball joints or tie rods can cause tires to run at improper angles, accelerating wear dramatically. Suspension maintenance protects your tire investment.',
        },
    ],
};

export default function SuspensionRepairMain() {
    return <ServiceDetailTemplate {...data} />;
}
