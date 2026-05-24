import ServiceDetailTemplate, { ServiceDetailProps } from '../service-shared/ServiceDetailTemplate';

const data: ServiceDetailProps = {
    heroImg: '/assets/images/services/serviceimg17.jpeg',
    heroAlt: 'Windshield replacement at Birchmount Auto Repair',
    title: 'Windshield Replacement',
    text1: `Your windshield is far more than a window — it is a structural component of your vehicle that contributes to roof strength and supports proper airbag deployment. It also houses increasingly common ADAS (Advanced Driver Assistance Systems) cameras and sensors that require precise calibration after any glass replacement. At Birchmount Auto Repair, we install OEM-quality glass using proper adhesive systems and perform all necessary sensor recalibration to restore your vehicle completely.`,
    text2: `A cracked or chipped windshield that obstructs your vision or compromises the glass's structural integrity should be replaced without delay. We begin by removing the damaged glass carefully to avoid damaging the surrounding body and seals. New glass is set with manufacturer-approved adhesive and allowed to cure fully before the vehicle is returned. All ADAS cameras, rain sensors, and heating elements are reconnected and tested, and where required, camera calibration is performed to restore the full functionality of your vehicle's safety systems.`,
    pointsList: [
        'OEM-quality glass installed with approved adhesive systems',
        'Full adhesive cure time observed before vehicle return',
        'ADAS camera and rain sensor recalibration performed',
        'Seal and water leak testing included with every replacement',
    ],
    imgBoxData: [
        {
            id: 1,
            image: '/assets/images/services/serviceimg17-1.jpeg',
            alt: 'OEM quality windshield glass',
            iconClass: 'icon-affordable-price',
            title: 'OEM-Quality Glass',
            text: 'We install glass that meets or exceeds OEM specifications for optical clarity, UV protection, and structural strength. Quality glass is non-negotiable when it comes to protecting your vehicle\'s structural integrity and your visibility.',
        },
        {
            id: 2,
            image: '/assets/images/services/serviceimg17-2.jpeg',
            alt: 'ADAS camera recalibration',
            iconClass: 'icon-laptop',
            title: 'ADAS Recalibration',
            text: 'Modern windshields house forward-facing cameras for lane departure warning, automatic emergency braking, and other driver assistance features. We perform all required static or dynamic recalibration to restore these systems to manufacturer accuracy.',
        },
    ],
    faqData: [
        {
            id: 1,
            question: 'Can a cracked windshield be repaired rather than replaced?',
            answer: 'Small chips and cracks shorter than about 15cm that are not in the driver\'s line of sight can often be repaired with resin injection rather than a full replacement. However, cracks that compromise the driver\'s view, extend to the edge of the glass, or affect structural integrity require full replacement.',
        },
        {
            id: 2,
            question: 'Does windshield replacement affect my ADAS safety systems?',
            answer: 'Yes, if your vehicle has a forward-facing camera mounted on the windshield — which is common on most modern vehicles — the camera must be recalibrated after replacement to ensure systems like automatic emergency braking and lane-keeping assistance work correctly. We perform this calibration as part of our replacement service.',
            isActive: true,
        },
        {
            id: 3,
            question: 'How long does windshield replacement take?',
            answer: 'The installation itself typically takes one to two hours. However, the adhesive requires a curing period — usually one to two hours — before the vehicle can be safely driven. Including ADAS calibration, allow approximately three to four hours for a full windshield replacement.',
        },
        {
            id: 4,
            question: 'Is windshield replacement covered by insurance?',
            answer: 'Many Ontario comprehensive insurance policies cover windshield replacement with no deductible or a reduced deductible. Contact your insurance provider to confirm your coverage. We work directly with all major Ontario insurers to process glass claims.',
        },
    ],
};

export default function WindshieldReplacementMain() {
    return <ServiceDetailTemplate {...data} />;
}
