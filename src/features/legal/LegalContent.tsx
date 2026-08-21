"use client";

import React, { useEffect, useState } from 'react';
import type { LegalDocument } from '@/contents/legal/privacyData';

interface LegalContentProps {
    document: LegalDocument;
}

const LegalContent: React.FC<LegalContentProps> = ({ document: doc }) => {
    const [activeId, setActiveId] = useState<string>(doc.sections[0]?.id ?? '');

    useEffect(() => {
        const sectionEls = doc.sections
            .map((s) => document.getElementById(s.id))
            .filter((el): el is HTMLElement => el !== null);

        if (sectionEls.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible[0]) {
                    setActiveId(visible[0].target.id);
                }
            },
            { rootMargin: '-120px 0px -70% 0px', threshold: 0 }
        );

        sectionEls.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [doc.sections]);

    const lastUpdated = new Date(doc.lastUpdated).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <section className="legal-content">
            <div className="container">
                <div className="row">
                    {/* Sidebar: Table of Contents */}
                    <div className="col-xl-4 col-lg-4">
                        <aside className="legal-content__sidebar">
                            <div className="legal-content__toc">
                                <h3 className="legal-content__toc-title">On This Page</h3>
                                <ul className="legal-content__toc-list list-unstyled">
                                    {doc.sections.map((section) => (
                                        <li key={section.id}>
                                            <a
                                                href={`#${section.id}`}
                                                className={activeId === section.id ? 'active' : ''}
                                            >
                                                {section.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>

                    {/* Main content */}
                    <div className="col-xl-8 col-lg-8">
                        <div className="legal-content__main">
                            <div className="legal-content__head">
                                <h1 className="legal-content__title">{doc.title}</h1>
                                <p className="legal-content__summary">{doc.summary}</p>
                                <p className="legal-content__updated">
                                    <span className="far fa-clock"></span> Last Updated: {lastUpdated}
                                </p>
                            </div>

                            <div className="legal-content__sections">
                                {doc.sections.map((section) => (
                                    <article
                                        key={section.id}
                                        id={section.id}
                                        className="legal-content__section"
                                    >
                                        <h2 className="legal-content__section-title">
                                            {section.title}
                                        </h2>
                                        {section.intro && (
                                            <p className="legal-content__section-intro">
                                                {section.intro}
                                            </p>
                                        )}
                                        {section.body.map((paragraph, idx) => (
                                            <p key={idx} className="legal-content__paragraph">
                                                {paragraph}
                                            </p>
                                        ))}
                                        {section.points && section.points.length > 0 && (
                                            <ul className="legal-content__points list-unstyled">
                                                {section.points.map((point, idx) => (
                                                    <li key={idx}>
                                                        <span className="fas fa-check-circle"></span>
                                                        {point.text}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LegalContent;
