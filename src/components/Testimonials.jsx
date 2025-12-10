import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import '../styles/Testimonials.css';

export default function Testimonials() {
    const testimonials = [
        {
            name: "Dr. John Doe",
            title: "Founder, Metropolitan Family Medicine",
            text: "Antonyx transformed how we manage our practice. Their approach to workflow redesign alone cut our administrative overhead by 35%, and their technology implementation was seamless. We're seeing better patient outcomes and happier staff.",
            rating: 5
        },
        {
            name: "Jane Smith",
            title: "Practice Administrator, Riverside Pediatrics",
            text: "Working with Antonyx was like having a strategic partner in the room. They understood our challenges intimately and delivered practical solutions that actually work. Our billing processes are now 40% faster.",
            rating: 5
        },
        {
            name: "Dr. John Smith",
            title: "Operations Director, Westside Health Clinic",
            text: "The assessment process was eye-opening. It identified gaps we didn't even know we had. The recommendations were tailored, actionable, and the implementation support was outstanding. Highly recommend.",
            rating: 4
        }
    ];

    return (
        <section className="testimonials-section">
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto text-center">
                        <h2 className="section-title">What Healthcare Leaders Are Saying</h2>
                        <p className="testimonials-subtitle">
                            Trusted by practices across the country to drive meaningful modernization.
                        </p>
                    </Col>
                </Row>

                <Row className="g-4 mt-5">
                    {testimonials.map((testimonial, index) => (
                        <Col key={index} lg={4} md={6}>
                            <div className="testimonial-card">
                                <div className="testimonial-stars">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="star" />
                                    ))}
                                </div>
                                <p className="testimonial-text">"{testimonial.text}"</p>
                                <div className="testimonial-author">
                                    <h3 className="author-name">{testimonial.name}</h3>
                                    <p className="author-title">{testimonial.title}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
