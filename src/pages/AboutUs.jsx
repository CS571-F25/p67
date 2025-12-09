import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import EmployeeCard from '../components/EmployeeCard';
import '../styles/AboutUs.css';
import logo from '../assets/Logo_Icon_Antonyx_Consulting.png';
import { LuGoal } from "react-icons/lu";
import { FaRegLightbulb } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";


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
            <section className="values-section">
                <Container>
                    <Row>
                        <Col lg={8} className="mx-auto text-center">
                            <h2 className="section-title">Our Core Values</h2>
                            <p className="values-subtitle">
                                Three fundamental principles that shape how we work and deliver results.
                            </p>
                        </Col>
                    </Row>
                    
                    <div className="values-showcase">
                        <div className="value-block">
                            <div className="value-header">
                                <div className="value-icon-container">
                                    <MdRocketLaunch className="value-icon" />
                                </div>
                            </div>
                            <div className="value-content">
                                <h3 className="value-name">Modern Thinking</h3>
                                <div className="value-divider"></div>
                                <p className="value-text">
                                    We stay ahead of change — guiding clients toward modern, sustainable 
                                    solutions that drive real progress. Innovation is not just about new 
                                    technology; it's about new ways of thinking.
                                </p>
                            </div>
                        </div>
                        
                        <div className="value-block">
                            <div className="value-header">
                                <div className="value-icon-container">
                                    <FaRegLightbulb className="value-icon" />
                                </div>
                            </div>
                            <div className="value-content">
                                <h3 className="value-name">Practical Innovation</h3>
                                <div className="value-divider"></div>
                                <p className="value-text">
                                    We design systems and use technology that actually make operations 
                                    simpler, faster, and more human. Every innovation must serve a 
                                    real purpose and solve real problems.
                                </p>
                            </div>
                        </div>
                        
                        <div className="value-block">
                            <div className="value-header">
                                <div className="value-icon-container">
                                    <LuGoal className="value-icon" />
                                </div>
                            </div>
                            <div className="value-content">
                                <h3 className="value-name">Efficiency with Purpose</h3>
                                <div className="value-divider"></div>
                                <p className="value-text">
                                    Every improvement serves a clear goal: better workflows, better care, 
                                    better outcomes. We optimize systems to enhance what matters most — 
                                    exceptional patient care.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Service Pillars Section */}
            <section className="services-section">
                <Container>
                    <h2 className="section-title text-center">How We Help</h2>
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="service-pillar">
                                <h3 className="service-title">Operational Optimization</h3>
                                <p className="service-description">
                                    Build a strong foundation for efficiency and scalability.
                                </p>
                                <ul className="service-list">
                                    <li>Workflow redesign and process improvement</li>
                                    <li>Scheduling and patient flow optimization</li>
                                    <li>Billing and administrative streamlining</li>
                                    <li>Performance tracking and metrics dashboards</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="service-pillar">
                                <h3 className="service-title">Technology Integration</h3>
                                <p className="service-description">
                                    Modernize your systems with confidence.
                                </p>
                                <ul className="service-list">
                                    <li>EHR and practice management integration</li>
                                    <li>Automation of key workflows</li>
                                    <li>System implementation and training</li>
                                    <li>Data management and reporting setup</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="service-pillar">
                                <h3 className="service-title">Growth Enablement</h3>
                                <p className="service-description">
                                    Turn operational strength into sustainable business growth.
                                </p>
                                <ul className="service-list">
                                    <li>Patient acquisition and retention strategy</li>
                                    <li>Brand and digital presence development</li>
                                    <li>Marketing systems and referral pipelines</li>
                                    <li>ROI measurement and analytics</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="service-pillar">
                                <h3 className="service-title">Strategic Advisory</h3>
                                <p className="service-description">
                                    Partner with leadership to guide transformation.
                                </p>
                                <ul className="service-list">
                                    <li>Modernization roadmaps and execution plans</li>
                                    <li>Organizational structure and scalability planning</li>
                                    <li>Leadership and change management support</li>
                                    <li>Vendor and partner strategy</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

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