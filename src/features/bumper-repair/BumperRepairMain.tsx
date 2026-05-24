import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg8.jpeg',
    heroAlt: 'Bumper repair at Birchmount Auto Repair',
    title: 'Bumper Repair',
    text1: `Bumpers absorb low-speed impacts to protect your vehicle's more expensive structural components — but they take a beating in parking lots, traffic, and minor collisions. At Birchmount Auto Repair, our bumper repair specialists assess the damage and recommend the most cost-effective solution: repair or replacement. In many cases, a damaged bumper can be professionally repaired and refinished rather than replaced, saving you significant cost.`,
    text2: `Modern bumpers incorporate parking sensors, cameras, and pedestrian detection systems that must be carefully handled and recalibrated during any bumper work. Our technicians are trained to properly remove, repair or replace bumper assemblies while ensuring all integrated technology is reinstalled and calibrated correctly. All refinishing is done with computer-matched paint and clear coat to blend seamlessly with adjacent panels.`,
    pointsList: [
        'Assessment determines most cost-effective repair vs. replacement option',
        'Parking sensor and camera recalibration included where applicable',
        'Colour-matched paint and clear coat for seamless blending',
        'Both plastic and composite bumper materials serviced',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg8-1.jpeg',
            alt: 'Bumper repair and refinishing',
            iconClass: 'icon-damage',
            title: 'Repair or Replace',
            text: 'Not every damaged bumper needs to be replaced. Our technicians assess cracks, tears, and distortions to determine whether professional repair and refinishing will restore your bumper to like-new condition — often at a fraction of replacement cost.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg8-2.jpeg',
            alt: 'Sensor recalibration bumper',
            iconClass: 'icon-certified',
            title: 'Sensor Recalibration',
            text: 'Modern bumpers house critical safety technology. We handle parking sensors, radar modules, and backup cameras with care and perform any required recalibration after installation to ensure your safety systems function as intended.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'When should a bumper be repaired versus replaced?',
            answer: 'Minor cracks, scuffs, and shallow impact damage can often be repaired and refinished professionally. Major structural damage, complete separation from mounting points, or damage that affects integrated sensors may require full replacement. We assess every bumper individually and recommend the option that gives you the best result.',
        },
        {
            id: 2,
            question: 'Will bumper repair affect my parking sensors?',
            answer: 'Not if done correctly. Our technicians carefully remove sensors and cameras before any repair or refinishing work and reinstall and recalibrate them afterward. Your safety systems will function exactly as they did before the damage.',
            isActive: true,
        },
        {
            id: 3,
            question: 'How long does bumper repair take?',
            answer: 'A bumper repair with refinishing typically takes one to two days. Full bumper replacement may take slightly longer depending on parts availability. We can often provide a same-day or next-day turnaround for straightforward bumper repairs.',
        },
        {
            id: 4,
            question: 'Can you match the paint on my bumper exactly?',
            answer: 'Yes. We use computerized colour-matching technology to formulate an exact paint match based on your vehicle\'s paint code. The repaired bumper will blend seamlessly with your vehicle\'s existing colour and finish.',
        },
    ],
};

export default function BumperRepairMain() {
    return <ServiceDetailTemplate {...data} />;
}
