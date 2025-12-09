import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function ServicePillars() {
    const services = [
        {
            title: "Operational Optimization",
            description: "Build a strong foundation for efficiency and scalability.",
            items: [
                "Workflow redesign and process improvement",
                "Scheduling and patient flow optimization",
                "Billing and administrative streamlining",
                "Performance tracking and metrics dashboards"
            ]
        },
        {
            title: "Technology Integration",
            description: "Modernize your systems with confidence.",
            items: [
                "EHR and practice management integration",
                "Automation of key workflows",
                "System implementation and training",
                "Data management and reporting setup"
            ]
        },
        {
            title: "Growth Enablement",
            description: "Turn operational strength into sustainable business growth.",
            items: [
                "Patient acquisition and retention strategy",
                "Brand and digital presence development",
                "Marketing systems and referral pipelines",
                "ROI measurement and analytics"
            ]
        },
        {
            title: "Strategic Advisory",
            description: "Partner with leadership to guide transformation.",
            items: [
                "Modernization roadmaps and execution plans",
                "Organizational structure and scalability planning",
                "Leadership and change management support",
                "Vendor and partner strategy"
            ]
        }
    ];

    return (
        <section className="services-section">
            <Container>
                <h2 className="section-title text-center">How We Help</h2>
                <Row className="g-4">
                    {services.map((service, index) => (
                        <Col key={index} lg={6}>
                            <div className="service-pillar">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">
                                    {service.description}
                                </p>
                                <ul className="service-list">
                                    {service.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
