import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/servicebanner13.jpeg',
    heroAlt: 'Rental car assistance at Birchmount Auto Repair',
    title: 'Rental Car Assistance',
    text1: `Being without your vehicle during repairs doesn't have to disrupt your daily routine. At Birchmount Auto Repair, we offer rental car assistance to keep you mobile while your vehicle is being repaired. We coordinate directly with rental providers and, where applicable, liaise with your insurance company to arrange coverage for your rental — so you're back on the road with minimal inconvenience.`,
    text2: `Whether your vehicle requires a quick same-day repair or an extended collision restoration, we can help arrange a suitable rental vehicle for the duration. Our team handles the coordination, allowing you to focus on your day while we take care of your car. Rental assistance is available in conjunction with insurance claims as well as self-pay repairs.`,
    pointsList: [
        'Rental coordination while your vehicle is in for repair',
        'Insurance-covered rental arrangement where applicable',
        'Self-pay rental options available',
        'Assistance with all major rental providers',
        'Available for all repair types — from minor to major',
        'Seamless handover when your vehicle is ready',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg1-1.jpeg',
            alt: 'Rental car coordination',
            iconClass: 'icon-customer-support',
            title: 'Hassle-Free Coordination',
            text: 'We manage the rental arrangement on your behalf — contacting the rental provider, confirming your insurance coverage, and ensuring a vehicle is ready for you as soon as possible after dropping off your car.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg1-2.jpeg',
            alt: 'Insurance rental coverage',
            iconClass: 'icon-certified',
            title: 'Insurance Coordination',
            text: 'Many collision and comprehensive insurance policies include rental car coverage. We work with your insurer to confirm entitlement and arrange billing directly where possible, so you don\'t have to pay out of pocket.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'Does my insurance cover a rental car?',
            answer: 'Many Ontario auto insurance policies include Loss of Use coverage, which pays for a rental vehicle while your car is being repaired after a covered incident. Check your policy or contact your insurer to confirm. We can also help verify your coverage.',
        },
        {
            id: 2,
            question: 'Can I get a rental if I am paying for repairs myself?',
            answer: 'Yes. If you are not making an insurance claim, we can still help coordinate a rental vehicle through our partner providers. Standard rental rates and terms apply, and we will assist with the booking process.',
            isActive: true,
        },
        {
            id: 3,
            question: 'How long can I keep the rental?',
            answer: 'The rental period typically covers the duration of your vehicle\'s repair. If your insurance policy includes rental coverage, there may be a daily or total dollar cap — we will help you understand what your policy allows.',
        },
        {
            id: 4,
            question: 'What types of rental vehicles are available?',
            answer: 'Availability depends on the rental provider and current stock. We will do our best to arrange a vehicle that suits your needs. If you have specific requirements, let us know and we will communicate them to the rental provider.',
        },
    ],
};

export default function RentalsMain() {
    return <ServiceDetailTemplate {...data} slug="rentals" />;
}
