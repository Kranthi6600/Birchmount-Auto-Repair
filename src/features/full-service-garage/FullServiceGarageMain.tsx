import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg26.jpeg',
    heroAlt: 'Full service garage at Birchmount Auto Repair',
    title: 'Full Service Garage',
    text1: `Birchmount Auto Repair is Scarborough's full-service garage — one location where every automotive need is handled by a single, experienced team. From the routine to the complex, we cover mechanical repairs, auto body and collision work, paint services, computer diagnostics, wheel alignment, suspension, brakes, and preventive maintenance. Our fully equipped facility and certified technicians mean you never need to visit multiple shops or explain your vehicle's history to someone new.`,
    text2: `Being a true full-service garage means more than just offering a wide range of services — it means having the equipment, training, and parts to execute every one of those services to a professional standard. We invest continuously in our tools, technology, and team training so that whether you need a simple oil change or a complex accident repair, you receive the same high standard of workmanship and customer care. Birchmount Auto Repair is the last shop you will ever need.`,
    pointsList: [
        'Complete mechanical, body, paint, and diagnostics under one roof',
        'Certified technicians trained across all vehicle makes and models',
        'State-of-the-art equipment for every type of automotive service',
        'Complete service history maintained — your vehicle\'s lifelong home',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg26-1.jpeg',
            alt: 'Full service garage equipment',
            iconClass: 'icon-setting',
            title: 'Fully Equipped',
            text: 'Our facility is equipped with professional-grade tools for mechanical repair, computer diagnostics, frame straightening, wheel alignment, and paint application. We have what it takes to handle any vehicle, any job, to the highest standard.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg26-2.jpeg',
            alt: 'Trusted full service garage Scarborough',
            iconClass: 'icon-certified',
            title: 'Trusted in Scarborough',
            text: 'For years, Scarborough drivers have trusted Birchmount Auto Repair as their full-service automotive home. Our reputation is built on honest service, fair pricing, quality workmanship, and a genuine commitment to every customer\'s satisfaction.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'What services does a full-service garage offer?',
            answer: 'A full-service garage handles every category of automotive work: mechanical repairs and maintenance, auto body and collision repair, paint services, computer diagnostics, wheel alignment, suspension and brake service, windshield replacement, and more — all in one location with one trusted team.',
        },
        {
            id: 2,
            question: 'Why is it better to use a full-service garage than multiple specialists?',
            answer: 'One shop managing all your vehicle\'s needs means consistent workmanship, a complete and accurate service history, no risk of conflicting advice from different providers, and a team that knows your vehicle well. It is more convenient and often results in better long-term outcomes for your vehicle.',
            isActive: true,
        },
        {
            id: 3,
            question: 'Can you handle both body repairs and mechanical work on the same visit?',
            answer: 'Yes. Because we are a full-service facility, we can address multiple issues on the same visit — for example, completing a brake service at the same time as a paint repair. This saves you time and reduces the number of vehicle drop-offs required.',
        },
        {
            id: 4,
            question: 'Do you work with all vehicle makes and models?',
            answer: 'Yes. Our technicians are trained and equipped to service all major domestic and import vehicle makes and models — from everyday compact cars to SUVs, trucks, luxury vehicles, and hybrids. Whatever you drive, we can take care of it.',
        },
    ],
};

export default function FullServiceGarageMain() {
    return <ServiceDetailTemplate {...data} />;
}
