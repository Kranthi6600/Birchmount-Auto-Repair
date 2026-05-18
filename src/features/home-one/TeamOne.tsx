import React from 'react'; 

const team1 = "/assets/images/team/team-1-1.jpg";
const team2 = "/assets/images/team/team-1-2.jpg";
const team3 = "/assets/images/team/team-1-3.jpg";
const team4 = "/assets/images/team/team-1-4.jpg";
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import TextAnimation from '@/components/elements/TextAnimation';
import SectionWrapper from '@/components/elements/SectionWrapper';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string | StaticImageData;
    animationDirection: 'fadeInLeft' | 'fadeInRight';
    animationDelay: number;
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: 'Mike Kowalski',
        role: 'Master Technician',
        image: team1,
        animationDirection: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 2,
        name: 'James Osei',
        role: 'Diagnostic Specialist',
        image: team2,
        animationDirection: 'fadeInLeft',
        animationDelay: 300,
    },
    {
        id: 3,
        name: 'Tony Ferrara',
        role: 'Brake & Suspension Expert',
        image: team3,
        animationDirection: 'fadeInRight',
        animationDelay: 500,
    },
    {
        id: 4,
        name: 'Sandra Nguyen',
        role: 'Service Advisor',
        image: team4,
        animationDirection: 'fadeInRight',
        animationDelay: 700,
    },
];

const TeamOne: React.FC = () => {
    return (
        <SectionWrapper id='team' className="team-one">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h6 className="section-title__tagline">
                        <span className="section-title__tagline-border"></span>Expert Team
                    </h6>
                    <h3 className="section-title__title title-animation">
                        <TextAnimation animationStyle='style2'>
                            Meet Our Certified Technicians
                        </TextAnimation>
                    </h3>
                </div>
                <div className="row">
                    {teamMembers.map((member) => (
                        <FadeInAdvanced key={member?.id}
                            className='col-xl-3 col-lg-6 col-md-6'
                            variant={member?.animationDirection}
                            delay={member?.animationDelay}
                        >
                            <div className="team-one__single">
                                <div className="team-one__img-box">
                                    <div className="team-one__img">
                                        <Image src={member.image} width={278} height={0} sizes="100vw" style={{ height: "auto" }} alt={member.name} />
                                    </div>
                                </div>
                                <div className="team-one__content">
                                    <div className="team-one__title-box">
                                        <h3 className="team-one__title">
                                            <Link href="/team-details">{member.name}</Link>
                                        </h3>
                                        <div className="team-one__sub-title">{member.role}</div>
                                    </div>
                                    <div className="team-one__share-and-social">
                                        <div className="team-one__share">
                                            <span className="fas fa-share-alt"></span>
                                        </div>
                                        <div className="team-one__social">
                                            <Link href="#"><span className="icon-facebook"></span></Link>
                                            <Link href="#"><span className="icon-instagram"></span></Link>
                                            <Link href="#"><span className="icon-link-in"></span></Link>
                                            <Link href="#"><span className="icon-xpa"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default TeamOne;
