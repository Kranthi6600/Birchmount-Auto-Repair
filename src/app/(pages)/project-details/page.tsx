import React from "react";  
import projectDetailsImg1 from "@/assets/images/project/project-details-img-1.jpg";
import projectDetailsTextImg from "@/assets/images/project/project-details-text-img.jpg";
import projectDetailsPointsImg from "@/assets/images/project/project-details-points-img.jpg";
import FooterOne from "@/components/footers/FooterOne";
import Banner from "@/features/banner/Banner";
import Link from "next/link";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProjectSection {
    title: string;
    text: string;
}

interface ResultPoint {
    id: number;
    text: string;
}

interface ProjectInfoItem {
    label: string;
    value: string;
}

interface ContactItem {
    iconClass: string;
    text: string;
    href?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const projectSections: ProjectSection[] = [
    {
        title: "About The Project Overview",
        text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborer et dolore magna aliqua. Out enigma ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute inure dolor in the reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur snit occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        title: "The Project Challenge",
        text: "Out enigma ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute inure dolor in the reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur snit occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        title: "The Result Of Our Project",
        text: "Out enigma ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute inure dolor in the reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur snit occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
];

const challengeInsetText =
    "The wise man therefore always holds in these matters to this principle of selection. He rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains to the selection point. But in certain to all this circumstances";

const resultPoints: ResultPoint[] = [
    { id: 1, text: "Fact that a reader will be distracted bioiiy dablea" },
    { id: 2, text: "Acted bioiiy the rea dablea content of a page" },
    { id: 3, text: "When looking at its layout toile point" },
    { id: 4, text: "Bioiiy the rea dablea content of a page looking" },
];

const projectInfoItems: ProjectInfoItem[] = [
    { label: "Client", value: "Jonathan Smith" },
    { label: "Category", value: "Upgrade Old Wiring" },
    { label: "Date", value: "02 June 2024" },
    { label: "Location", value: "12 Green Road 05 New York" },
];

const contactItems: ContactItem[] = [
    { iconClass: "icon-call", text: "+58 585 857 5084", href: "tel:585858575084" },
    { iconClass: "icon-envelope", text: "example@gmail.com", href: "mailto:example@gmail.com" },
    { iconClass: "icon-location", text: "4517 Washington Ave. Manchester, Kentucky 39495" },
];

// ─── Component ────────────────────────────────────────────────────────────────

const page: React.FC = () => {
    const [overview, challenge, result] = projectSections;

    return (
        <>
            <Banner title="Project Details" subTitle="Project Details" />
            <section className="project-details">
                <div className="container">
                    <div className="row">

                        {/* ── Left Column ── */}
                        <div className="col-xl-8 col-lg-7">
                            <div className="project-details__left">

                                <div className="project-details__img">
                                    <Image src={projectDetailsImg1} style={{width: "auto", height:"auto"}} alt="Project overview - electrical repair work" />
                                </div>

                                {/* Overview */}
                                <h3 className="project-details__title-1">{overview.title}</h3>
                                <p className="project-details__text-1">{overview.text}</p>

                                {/* Challenge */}
                                <h3 className="project-details__title-2">{challenge.title}</h3>
                                <p className="project-details__text-2">{challenge.text}</p>

                                <div className="project-details__text-and-img">
                                    <p className="project-details__text-3">{challengeInsetText}</p>
                                    <div className="project-details__text-img">
                                        <Image src={projectDetailsTextImg} style={{width: "auto", height:"auto"}} alt="Technician working on project challenge" />
                                    </div>
                                </div>

                                {/* Result */}
                                <h3 className="project-details__title-3">{result.title}</h3>
                                <p className="project-details__text-4">{result.text}</p>

                                <div className="project-details__img-and-points">
                                    <div className="project-details__points-img">
                                        <Image src={projectDetailsPointsImg} style={{width: "auto", height:"auto"}} alt="Project result highlights" />
                                    </div>
                                    <ul className="project-details__points list-unstyled">
                                        {resultPoints.map((point) => (
                                            <li key={point.id}>
                                                <div className="icon">
                                                    <span className="icon-arrow-right"></span>
                                                </div>
                                                <p>{point.text}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>

                        {/* ── Sidebar ── */}
                        <div className="col-xl-4 col-lg-5">
                            <div className="project-details__sidebar">

                                {/* Project Information */}
                                <div className="project-details__information">
                                    <h3 className="project-details__information-title">Project Information</h3>
                                    <ul className="project-details__information-list list-unstyled">
                                        {projectInfoItems.map((item) => (
                                            <li key={item.label}>
                                                <h4>{item.label} :</h4>
                                                <p>{item.value}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Get Started */}
                                <div className="service-details__get-started">
                                    <h3 className="service-details__get-started-title">Get Started Today</h3>
                                    <p className="service-details__get-started-text">
                                        Pianissimos of dulcimers qui therefore always holds in these matters to this principle
                                    </p>
                                    <ul className="service-details__get-started-points list-unstyled">
                                        {contactItems.map((item) => (
                                            <li key={item.iconClass}>
                                                <div className="icon">
                                                    <span className={item.iconClass}></span>
                                                </div>
                                                <p>
                                                    {item.href ? (
                                                        <a href={item.href}>{item.text}</a>
                                                    ) : (
                                                        item.text
                                                    )}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="service-details__get-started-btn-box">
                                        <Link href="/contact" className="service-details__get-started-btn thm-btn">
                                            Get In Touch
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* ── Previous / Next Navigation ── */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="project-details__previous-next">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <Link href="#" aria-label="Previous project icon">
                                                <span className="icon-arrow-right"></span>
                                            </Link>
                                        </div>
                                        <div className="text-box">
                                            <Link href="#">Previous Project</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="text-box">
                                            <Link href="#">Next Project</Link>
                                        </div>
                                        <div className="icon">
                                            <Link href="#" aria-label="Next project icon">
                                                <span className="icon-arrow-right"></span>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <FooterOne />
        </>
    );
};

export default page;