import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg25.jpeg',
    heroAlt: 'Computer diagnostics at Birchmount Auto Repair',
    title: 'Computer Diagnostics',
    text1: `Modern vehicles are essentially computers on wheels, with dozens of electronic control modules managing everything from engine performance and transmission shifts to ABS, airbags, and HVAC systems. When a warning light appears or your vehicle is not performing as it should, computer diagnostics is the fastest and most accurate way to identify the root cause. At Birchmount Auto Repair, we use professional-grade scan tools to access all vehicle modules and retrieve fault codes, live data, and system status across all makes and models.`,
    text2: `A fault code is a starting point, not a diagnosis. Our technicians go beyond reading codes to interpret the data in context — evaluating live sensor readings, freeze frame data, and system performance to identify the actual cause of the fault rather than just the symptom. This approach prevents unnecessary part replacement and ensures your vehicle is repaired correctly the first time. We provide a clear explanation of our findings and a written estimate before any repair work begins.`,
    pointsList: [
        'Full-system scan across all electronic control modules',
        'Fault codes, live data, and freeze frame data analysed',
        'Root-cause diagnosis beyond code reading — not just code clearing',
        'Clear written explanation of findings before repair authorization',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg25-1.jpeg',
            alt: 'Professional diagnostic scan tools',
            iconClass: 'icon-laptop',
            title: 'Professional Scan Tools',
            text: 'We use professional-grade diagnostic equipment capable of accessing all electronic systems on virtually any vehicle. Our tools go far beyond basic OBD-II readers, providing access to manufacturer-specific data and calibration functions.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg25-2.jpeg',
            alt: 'Accurate vehicle diagnostics',
            iconClass: 'icon-certified',
            title: 'Accurate Diagnosis',
            text: 'Our technicians interpret diagnostic data in the context of your vehicle\'s behaviour and symptoms. This means accurate fault identification and targeted repairs — no guessing, no unnecessary parts replacement, and no wasted money.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'What does a check engine light mean?',
            answer: 'A check engine light indicates that the engine management system has detected a fault and stored a diagnostic trouble code (DTC). The cause can range from a loose gas cap to a misfiring cylinder or a failing oxygen sensor. A diagnostic scan is the only way to determine the specific cause.',
        },
        {
            id: 2,
            question: 'Can I just clear the fault code without repairing the issue?',
            answer: 'Clearing a fault code without addressing the underlying cause will result in the light returning, often within a short drive. Unresolved faults can affect fuel economy, performance, and emissions, and some faults affect safety systems. We recommend diagnosing and repairing the root cause.',
            isActive: true,
        },
        {
            id: 3,
            question: 'How long does a computer diagnostic take?',
            answer: 'A basic diagnostic scan takes 30 to 60 minutes. More complex issues that require live data monitoring, component testing, or additional research may take longer. We always advise you of the time required and the diagnostic fee before starting.',
        },
        {
            id: 4,
            question: 'Can you diagnose all vehicle makes and models?',
            answer: 'Yes. Our professional diagnostic equipment supports all OBD-II compliant vehicles (1996 and newer) and includes manufacturer-specific access for all major domestic and import brands including Toyota, Honda, Ford, GM, Chrysler, BMW, Mercedes-Benz, Volkswagen, Audi, and many more.',
        },
    ],
};

export default function ComputerDiagnosticsMain() {
    return <ServiceDetailTemplate {...data} />;
}
