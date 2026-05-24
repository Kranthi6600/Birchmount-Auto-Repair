import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg21.jpeg',
    heroAlt: 'Vehicle maintenance at Birchmount Auto Repair',
    title: 'Vehicle Maintenance',
    text1: `Regular vehicle maintenance is the single most effective way to protect your investment, prevent unexpected breakdowns, and keep your vehicle running reliably for hundreds of thousands of kilometres. At Birchmount Auto Repair, we offer a complete range of scheduled maintenance services following your manufacturer's recommended intervals. Our technicians keep detailed records of all maintenance performed so your vehicle's service history is always accurate and complete.`,
    text2: `From oil and filter changes to coolant flushes, transmission fluid services, spark plug replacements, serpentine belt changes, and air filter replacements, we cover every maintenance item your vehicle needs. We also conduct a multi-point inspection with every maintenance visit, flagging any emerging issues before they become costly repairs. Staying current on your vehicle's scheduled maintenance also helps protect your manufacturer's warranty.`,
    pointsList: [
        'Manufacturer-recommended maintenance intervals followed precisely',
        'Oil changes, filter replacements, and fluid flushes performed',
        'Spark plugs, belts, and hoses inspected and replaced as needed',
        'Multi-point inspection included with every maintenance visit',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg21-1.jpeg',
            alt: 'Scheduled vehicle maintenance',
            iconClass: 'icon-settings',
            title: 'Scheduled Maintenance',
            text: 'Following your vehicle\'s manufacturer maintenance schedule is the best way to prevent premature component wear and avoid unexpected breakdowns. We track your service intervals and remind you when the next service is due.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg21-2.jpeg',
            alt: 'Vehicle maintenance extends life',
            iconClass: 'icon-certified',
            title: 'Protect Your Investment',
            text: 'Regular maintenance extends engine life, improves fuel efficiency, and maintains resale value. A well-documented service history also demonstrates to future buyers that the vehicle has been cared for consistently — adding value at resale.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'How often should I get an oil change?',
            answer: 'For most modern vehicles using full synthetic oil, oil changes are typically recommended every 8,000 to 12,000 kilometres or once per year, whichever comes first. Older vehicles or those using conventional oil may require changes every 5,000 to 8,000 kilometres. Check your owner\'s manual or ask us for a recommendation specific to your vehicle and driving habits.',
        },
        {
            id: 2,
            question: 'What happens if I skip scheduled maintenance?',
            answer: 'Skipping maintenance allows components to wear faster, fluids to degrade, and small problems to develop into major failures. Missed maintenance can also void manufacturer warranties and reduce your vehicle\'s resale value. Consistent maintenance is always less expensive than repairs from neglect.',
            isActive: true,
        },
        {
            id: 3,
            question: 'Will you maintain my vehicle\'s service records?',
            answer: 'Yes. We keep complete service records for every vehicle we service. You can request a copy of your service history at any time. Maintaining accurate records is important for warranty claims, resale, and ensuring the correct maintenance is performed at the right intervals.',
        },
        {
            id: 4,
            question: 'Do you follow manufacturer maintenance schedules?',
            answer: 'Yes. We reference the manufacturer\'s recommended maintenance schedule for your specific vehicle, year, and engine. We do not push unnecessary services, and we will explain the purpose of every recommended maintenance item so you can make informed decisions.',
        },
    ],
};

export default function VehicleMaintenanceMain() {
    return <ServiceDetailTemplate {...data} />;
}
