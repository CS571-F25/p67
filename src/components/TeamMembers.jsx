import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EmployeeCard from './EmployeeCard';

export default function TeamMembers() {
    const teamMembers = [
        {
            name: "Dr. Antonio Silva",
            title: "Founder & Managing Partner",
            description: "Healthcare transformation strategist with 15+ years of experience modernizing medical practices. Specializes in operational optimization and technology integration for sustainable growth.",
            specialties: ["Strategic Planning", "Healthcare Operations", "Change Management"]
        },
        {
            name: "Sarah Chen",
            title: "Technology Integration Director",
            description: "Expert in EHR implementation and healthcare technology adoption. Leads digital transformation initiatives that streamline workflows and enhance patient care delivery.",
            specialties: ["EHR Systems", "Workflow Automation", "Data Analytics"]
        },
        {
            name: "Michael Rodriguez",
            title: "Operations Consultant",
            description: "Process improvement specialist focused on billing optimization and administrative efficiency. Helps practices reduce operational overhead while improving patient satisfaction.",
            specialties: ["Process Design", "Billing Optimization", "Quality Metrics"]
        }
    ];

    return (
        <section className="team-section">
            <Container>
                <h2 className="section-title text-center">Meet Our Team</h2>
                <p className="team-subtitle text-center">
                    Experienced healthcare professionals dedicated to your practice's success
                </p>
                <Row className="g-4">
                    {teamMembers.map((member, index) => (
                        <Col key={index} lg={4} md={6}>
                            <EmployeeCard employee={member} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
