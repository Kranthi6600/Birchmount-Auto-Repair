import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg7.jpeg',
    heroAlt: 'Frame straightening at Birchmount Auto Repair',
    title: 'Frame Straightening',
    text1: `A vehicle's frame is its backbone — responsible for protecting occupants, supporting every mechanical system, and maintaining proper wheel geometry. When a collision bends or twists the frame, no amount of cosmetic repair will make the vehicle truly safe or drive correctly until the structure is restored. At Birchmount Auto Repair, we use computerized frame measurement and hydraulic straightening equipment to return your vehicle's structure to factory-precise tolerances.`,
    text2: `Our frame straightening process begins with a comprehensive structural scan using laser and computer-aided measuring systems. We compare your vehicle's measurements against manufacturer data points to identify every deviation from spec. Using professional straightening racks and precision hydraulic tools, our technicians apply controlled force to gradually restore the frame without introducing stress fractures or new distortions. A final measurement confirms the frame is within manufacturer tolerances before repairs continue.`,
    pointsList: [
        'Computerized laser and electronic frame measuring systems used',
        'Compared directly against manufacturer structural data points',
        'Hydraulic straightening equipment for precise, controlled correction',
        'Post-correction measurement confirms factory tolerances achieved',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg7-1.jpeg',
            alt: 'Computerized frame measurement',
            iconClass: 'icon-product-return',
            title: 'Computer-Aided Measurement',
            text: 'Our laser measurement systems capture hundreds of data points on your vehicle\'s structure and compare them to factory specifications. This pinpoints every deviation so our technicians know exactly what needs to be corrected.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg7-2.jpeg',
            alt: 'Frame straightening safety',
            iconClass: 'icon-certified',
            title: 'Safety First Approach',
            text: 'A properly straightened frame is non-negotiable for vehicle safety. Correct structural geometry ensures airbags deploy properly, crumple zones function as designed, and wheels track true — protecting you in any future incident.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'How do I know if my vehicle\'s frame is bent?',
            answer: 'Signs of frame damage include the vehicle pulling to one side while driving straight, uneven tire wear, doors or hood that don\'t close properly, visible crumpling or creasing in the vehicle\'s body, or a vehicle that tracks crooked after a collision. A professional inspection will confirm frame damage.',
        },
        {
            id: 2,
            question: 'Can a bent frame be fully repaired?',
            answer: 'In most cases, yes. Modern frame straightening equipment can restore vehicle frames to within manufacturer tolerances. Severely damaged frames — particularly those with extensive crumpling or tears — may require partial frame sections to be replaced rather than straightened.',
            isActive: true,
        },
        {
            id: 3,
            question: 'Is a vehicle safe to drive with frame damage?',
            answer: 'No. Frame damage compromises the vehicle\'s structural integrity, affects handling and alignment, and may prevent airbags and crumple zones from functioning correctly in a subsequent collision. A vehicle with frame damage should not be driven until it has been properly repaired.',
        },
        {
            id: 4,
            question: 'How long does frame straightening take?',
            answer: 'Frame straightening typically takes one to three days depending on the severity of the damage. It is usually performed as part of a broader collision repair, which may extend the overall timeline. We provide a complete repair estimate including frame work before starting.',
        },
    ],
};

export default function FrameStraighteningMain() {
    return <ServiceDetailTemplate {...data} />;
}
