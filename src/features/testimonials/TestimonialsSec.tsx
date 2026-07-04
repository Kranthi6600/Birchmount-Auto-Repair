import React from "react";
import Image from "next/image";
import Link from "next/link";
import { testimonialData as testimonials } from "@/contents/testimonials/testimonialData";

// ─── Component ────────────────────────────────────────────────────────────────

const TestimonialsSec: React.FC = () => {
    return (
        <section className="testimonial-page">
            <div className="container">
                <div className="row">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="col-xl-6 col-lg-6">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__single-bdr"></div>
                                <div className="testimonial-one__quote">
                                    <span className="fas fa-quote-right"></span>
                                </div>
                                <div className="testimonial-one__client-info-box">
                                    <div className="testimonial-one__client-info">
                                        <div className="testimonial-one__client-img-box">
                                            <div className="testimonial-one__client-img">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={`${testimonial.name} - ${testimonial.subTitle}`}
                                                    width={80} height={80}
                                                    style={{ width: 'auto', height: 'auto' }}
                                                />
                                            </div>
                                        </div>
                                        <div className="testimonial-one__client-content">
                                            <h3 className="testimonial-one__client-name">
                                                <Link href="/testimonials">{testimonial.name}</Link>
                                            </h3>
                                            <p className="testimonial-one__client-sub-title">
                                                {testimonial.subTitle}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="testimonial-one__client-ratting">
                                        {Array.from({ length: testimonial.rating }, (_, i) => (
                                            <span key={i} className="fas fa-star"></span>
                                        ))}
                                    </div>
                                </div>
                                <p className="testimonial-one__text">{testimonial.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSec;