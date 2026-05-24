import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg18.jpeg',
    heroAlt: 'Towing and recovery at Birchmount Auto Repair',
    title: 'Towing & Recovery',
    text1: `Breaking down on the side of the road is never convenient — but knowing that professional, reliable towing is available makes the situation much more manageable. Birchmount Auto Repair provides professional towing and vehicle recovery services to safely transport your disabled vehicle to our shop in Scarborough. Whether you've been in an accident, suffered a mechanical breakdown, or have a flat tyre, we will get your vehicle safely off the road and into our care.`,
    text2: `Our towing service is available to bring your vehicle directly to our repair facility, where our technicians can begin diagnosing and repairing the problem without delay. We handle all vehicle types with care, using appropriate equipment for each situation. Once your vehicle is in our shop, the same experienced team that recovered your vehicle will diagnose and repair it — providing a seamless, single-point-of-contact experience.`,
    pointsList: [
        'Professional towing directly to our Scarborough repair facility',
        'Proper equipment used to protect your vehicle during transport',
        'Suitable for post-accident vehicles, breakdowns, and flat tyres',
        'Seamless transition from tow to repair by the same team',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg18-1.jpeg',
            alt: 'Professional towing service',
            iconClass: 'icon-customer-support',
            title: 'Professional Service',
            text: 'Our towing operators handle your vehicle with the same care and professionalism that our repair technicians bring to every job. Your vehicle will be secured and transported safely, regardless of its condition.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg18-2.jpeg',
            alt: 'Towing to repair shop',
            iconClass: 'icon-certified',
            title: 'Direct to Our Shop',
            text: 'When you choose our towing service, your vehicle goes directly to our Birchmount repair facility where our team is ready to begin diagnosis and repairs — eliminating the need to arrange a separate tow from a storage lot.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'What types of vehicles can you tow?',
            answer: 'We provide towing for standard passenger vehicles, SUVs, minivans, and light trucks. For specialty vehicles or unusual recovery situations, contact us directly and we will advise on the best approach for your vehicle.',
        },
        {
            id: 2,
            question: 'Is towing covered by my insurance?',
            answer: 'Many Ontario auto insurance policies include roadside assistance and towing coverage. Check your policy documents or contact your insurer to confirm. Your policy may cover towing to a shop of your choice. If covered, we can assist with insurance coordination.',
            isActive: true,
        },
        {
            id: 3,
            question: 'What if my vehicle was in an accident?',
            answer: 'We frequently tow post-accident vehicles. Our operators are experienced with securing and transporting damaged vehicles safely. Once at our facility, our collision repair team takes over, beginning with a safety assessment and damage documentation for your insurance claim.',
        },
        {
            id: 4,
            question: 'How do I arrange towing to your shop?',
            answer: 'Call us directly and we will dispatch a tow to your location. Have your vehicle\'s location, make, and model ready when you call. If you are already working with a towing company through your insurer, you can request they deliver the vehicle to our Birchmount Road facility.',
        },
    ],
};

export default function TowingRecoveryMain() {
    return <ServiceDetailTemplate {...data} />;
}
