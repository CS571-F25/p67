import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import EmployeeCard from '../components/EmployeeCard';
import CoreValues from '../components/CoreValues';
import ServicePillars from '../components/ServicePillars';
import '../styles/AboutUs.css';
import logo from '../assets/Logo_Icon_Antonyx_Consulting.png';


export default function AboutUs(props) {
    // Sample team data - replace with actual team information
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
        <div className="about-us-container">
            {/* Hero Section */}
            <section className="about-hero-section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="about-hero-content">
                                <h1 className="about-hero-title">
                                    Modernizing Healthcare, <br />
                                    One Practice at a Time
                                </h1>
                                <p className="about-hero-subtitle">
                                    We help healthcare practices bridge the gap between traditional operations 
                                    and modern, efficient systems that deliver better outcomes for everyone.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} className="text-center">
                            <div className="about-logo-container">
                                <Image src={logo} alt="Antonyx Consulting" className="about-logo" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Brand Story Section */}
            <section className="brand-story-section">
                <Container>
                    <Row>
                        <Col lg={8} className="mx-auto">
                            <h2 className="section-title">Our Story</h2>
                            <div className="story-content">
                                <p>
                                    Healthcare is evolving rapidly — but many private practices are falling behind. 
                                    Outdated tools, inefficient processes, and siloed systems make it harder to 
                                    deliver care efficiently.
                                </p>
                                <p>
                                    <strong>Antonyx Consulting was built to help healthcare leaders modernize with confidence.</strong>
                                </p>
                                <p>
                                    We combine strategic consulting, operational improvement, and hands-on implementation 
                                    to transform how clinics run — from scheduling to billing to patient engagement. 
                                    Our focus is practical: build systems that work, adopt technology that fits, 
                                    and create processes that scale.
                                </p>
                                <p className="story-emphasis">
                                    We don't just advise — we execute alongside you.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Core Values Section */}
            <CoreValues />

            {/* Service Pillars Section */}
            <ServicePillars />

            {/* Team Section */}
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
        </div>
    );
}