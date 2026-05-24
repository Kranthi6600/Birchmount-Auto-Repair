import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg6.jpeg',
    heroAlt: 'Paint and dent repair at Birchmount Auto Repair',
    title: 'Paint & Dent Repair',
    text1: `Paint scratches and dents don't just affect how your vehicle looks — they can expose bare metal to moisture, leading to rust and corrosion over time. At Birchmount Auto Repair, our paint and dent repair specialists use both paintless dent repair (PDR) techniques and conventional repair methods to restore your vehicle's finish to its original, flawless condition without breaking the bank.`,
    text2: `Our process begins with an assessment to determine whether paintless dent repair is suitable or whether conventional filler and refinishing is the right approach. For PDR-eligible damage, we use specialized tools to carefully massage dents from behind the panel without disturbing the paint — preserving your factory finish. For deeper damage, we apply professional-grade filler, sand to perfection, and apply a computer-matched paint and clear coat finish that is virtually indistinguishable from the original.`,
    pointsList: [
        'Paintless dent repair (PDR) for eligible dents — no filler or paint needed',
        'Conventional repair with colour-matched refinishing for deeper damage',
        'Scratch correction from surface swirls to deep paint damage',
        'Anti-rust treatment applied before any panel refinishing',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg6-1.jpeg',
            alt: 'Paintless dent repair technique',
            iconClass: 'icon-services',
            title: 'Paintless Dent Repair',
            text: 'PDR is the fastest and most cost-effective method for eligible dents — no sanding, no filler, no paint. Our technicians manipulate the metal back to its original shape using precision tools, preserving your factory finish completely.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg6-2.jpeg',
            alt: 'Colour-matched paint refinishing',
            iconClass: 'icon-certified',
            title: 'Colour-Matched Refinishing',
            text: 'When conventional repair is needed, we use computerized colour-matching to blend the new paint perfectly with your vehicle\'s existing finish — so the repair is invisible from any angle.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'What is paintless dent repair and when can it be used?',
            answer: 'Paintless dent repair (PDR) is a technique that uses specialized tools to reshape dented metal from behind the panel without affecting the paint. It works best on shallow dents where the paint is intact — such as hail damage, door dings, and minor impact dents.',
        },
        {
            id: 2,
            question: 'How do you match the paint colour exactly?',
            answer: 'We use computerized paint-matching technology that reads your vehicle\'s paint code and formulates an exact colour match. This ensures the repaired area blends seamlessly with the surrounding panels and is virtually invisible.',
            isActive: true,
        },
        {
            id: 3,
            question: 'Can scratches be fully repaired or just covered?',
            answer: 'It depends on the depth of the scratch. Surface scratches that haven\'t penetrated the clear coat can often be polished out. Deeper scratches that reach the primer or bare metal require sanding, filling, and repainting. We assess each scratch individually and recommend the best approach.',
        },
        {
            id: 4,
            question: 'How long does paint and dent repair take?',
            answer: 'PDR repairs can often be completed in a few hours to one day. Conventional paint repairs involving filler, primer, paint, and clear coat typically take two to four days depending on the size and number of panels being repaired.',
        },
    ],
};

export default function PaintDentRepairMain() {
    return <ServiceDetailTemplate {...data} />;
}
