import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg23.jpeg',
    heroAlt: 'Dent removal at Birchmount Auto Repair',
    title: 'Dent Removal',
    text1: `Dents are one of the most common forms of vehicle damage — caused by hail, parking lot impacts, shopping carts, and minor collisions. At Birchmount Auto Repair, we offer professional dent removal using both paintless dent repair (PDR) and conventional techniques, depending on the nature and location of the damage. Our dent removal specialists restore your vehicle's panels to their original profile, eliminating damage without compromising the finish or the structural integrity of the panel.`,
    text2: `Paintless dent repair is our preferred method for eligible damage because it preserves your factory paint finish entirely — no filler, no paint, no risk of colour mismatch. Using specialized tools and precision lighting, our technicians work the metal back to its original form from behind the panel. For dents where the paint has cracked or where PDR is not suitable, we use professional body filler and refinishing techniques to achieve a perfect result. Either way, you get a panel that looks like the damage never happened.`,
    pointsList: [
        'Paintless dent repair (PDR) preserves factory paint — no filler needed',
        'Conventional repair for PDR-ineligible dents with colour-matched refinishing',
        'Hail damage repairs with multi-panel PDR assessment available',
        'Free assessment to determine the best repair approach',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg23-1.jpeg',
            alt: 'Paintless dent repair specialist',
            iconClass: 'icon-like',
            title: 'Paintless Dent Repair',
            text: 'PDR is the fastest and most cost-effective solution for eligible dents. Our skilled technicians use specialized tools and precision lighting to massage dented metal back to its original shape without disturbing a single layer of paint.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg23-2.jpeg',
            alt: 'Dent removal results',
            iconClass: 'icon-services',
            title: 'No Trace of Damage',
            text: 'Whether we use PDR or conventional repair techniques, our goal is the same: to remove every trace of the dent so your vehicle looks exactly as it did before the damage. We are not satisfied until the repair is invisible.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'Is every dent suitable for paintless dent repair?',
            answer: 'Not every dent is suitable for PDR. Factors that determine eligibility include the size and depth of the dent, its location on the panel, whether the paint is cracked or broken, and accessibility from behind the panel. Our technicians assess each dent individually and advise on the best repair method.',
        },
        {
            id: 2,
            question: 'How long does dent removal take?',
            answer: 'Simple PDR repairs can often be completed in two to four hours. Multiple dents or dents requiring conventional repair may take one to two days. Extensive hail damage affecting many panels may take longer. We provide a time estimate after the initial assessment.',
            isActive: true,
        },
        {
            id: 3,
            question: 'Will dent removal affect my vehicle\'s resale value?',
            answer: 'Professionally removed dents, especially those done with PDR that preserves the factory paint, have minimal to no negative impact on resale value. Leaving dents unrepaired — particularly if they allow moisture to contact bare metal — is more likely to reduce value through rust and further deterioration.',
        },
        {
            id: 4,
            question: 'Can you fix hail damage without repainting?',
            answer: 'In many hail damage cases, yes. Hail dents that have not cracked the paint are ideal candidates for PDR. This allows us to restore every dented panel without any painting, often at a lower cost and in less time than conventional repair. We provide free hail damage assessments.',
        },
    ],
};

export default function DentRemovalMain() {
    return <ServiceDetailTemplate {...data} />;
}
