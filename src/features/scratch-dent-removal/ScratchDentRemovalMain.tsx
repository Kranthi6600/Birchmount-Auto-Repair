import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg9.jpeg',
    heroAlt: 'Scratch and dent removal at Birchmount Auto Repair',
    title: 'Scratch & Dent Removal',
    text1: `Scratches and dents are unavoidable facts of vehicle ownership — but they don't have to be permanent. At Birchmount Auto Repair, our scratch and dent removal technicians use a combination of paintless dent repair (PDR) and conventional refinishing techniques to eliminate damage and restore your vehicle's appearance. Whether you're dealing with a key scratch, a shopping cart ding, or hail damage, we have the right solution.`,
    text2: `We assess every scratch and dent individually before recommending a repair approach. Shallow dents with intact paint are ideal candidates for PDR, which requires no filler or repainting and can often be completed in just a few hours. Deeper scratches or dents where the paint has cracked require conventional repair with surface preparation, filler, primer, colour-matched paint, and clear coat. Either way, the result is a finish that looks as good as new.`,
    pointsList: [
        'PDR technique for paint-intact dents — no filler, no paint',
        'Conventional repair for scratches and paint-cracked dents',
        'Hail damage assessment and multi-panel PDR available',
        'Computer colour-matching ensures invisible repairs',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg9-1.jpeg',
            alt: 'Paintless dent repair tools',
            iconClass: 'icon-like',
            title: 'Paintless Dent Repair',
            text: 'PDR is the preferred method for eligible dents because it preserves your factory paint finish entirely. Using specialized tools and lighting, our technicians carefully work the metal back to its original shape from behind the panel.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg9-2.jpeg',
            alt: 'Scratch repair and refinishing',
            iconClass: 'icon-services',
            title: 'Scratch Correction',
            text: 'Surface scratches can often be polished out, while deeper paint scratches require careful preparation and colour-matched refinishing. Our painters blend the repaired area flawlessly so no evidence of the scratch remains.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'Can all scratches be completely removed?',
            answer: 'It depends on the scratch depth. Clear coat scratches can often be polished out entirely. Scratches that penetrate the paint layer require repainting. Scratches that reach bare metal also need a rust-prevention primer before refinishing. We assess each scratch and recommend the appropriate repair.',
        },
        {
            id: 2,
            question: 'Is paintless dent repair as durable as conventional repair?',
            answer: 'Yes. When PDR is the right method for the damage, the result is your original factory finish with no added materials — which is actually more durable than a repainted area. PDR simply reshapes the metal to its original form.',
            isActive: true,
        },
        {
            id: 3,
            question: 'Can you fix hail damage?',
            answer: 'Absolutely. Hail damage is one of the most common applications for PDR. Multiple small dents from hail can often be repaired entirely without paint, preserving your vehicle\'s factory finish and protecting its resale value. We provide free hail damage assessments.',
        },
        {
            id: 4,
            question: 'How long does scratch and dent removal take?',
            answer: 'Simple PDR repairs can be completed in two to four hours. More extensive repairs involving multiple panels, conventional filler, and paint work may take one to three days. We provide a time estimate as part of your free assessment.',
        },
    ],
};

export default function ScratchDentRemovalMain() {
    return <ServiceDetailTemplate {...data} />;
}
