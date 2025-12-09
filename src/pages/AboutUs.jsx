import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import CoreValues from '../components/CoreValues';
import ServicePillars from '../components/ServicePillars';
import TeamMembers from '../components/TeamMembers';
import '../styles/AboutUs.css';
import logo from '../assets/Logo_Icon_Antonyx_Consulting.png';


export default function AboutUs(props) {
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
            <TeamMembers />
        </div>
    );
}