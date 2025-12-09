import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LuGoal } from "react-icons/lu";
import { FaRegLightbulb } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";

export default function CoreValues() {
    const values = [
        {
            icon: MdRocketLaunch,
            name: "Modern Thinking",
            description: "We stay ahead of change — guiding clients toward modern, sustainable solutions that drive real progress. Innovation is not just about new technology; it's about new ways of thinking."
        },
        {
            icon: FaRegLightbulb,
            name: "Practical Innovation",
            description: "We design systems and use technology that actually make operations simpler, faster, and more human. Every innovation must serve a real purpose and solve real problems."
        },
        {
            icon: LuGoal,
            name: "Efficiency with Purpose",
            description: "Every improvement serves a clear goal: better workflows, better care, better outcomes. We optimize systems to enhance what matters most — exceptional patient care."
        }
    ];

    return (
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
                    {values.map((value, index) => {
                        const IconComponent = value.icon;
                        return (
                            <div key={index} className="value-block">
                                <div className="value-header">
                                    <div className="value-icon-container">
                                        <IconComponent className="value-icon" />
                                    </div>
                                </div>
                                <div className="value-content">
                                    <h3 className="value-name">{value.name}</h3>
                                    <div className="value-divider"></div>
                                    <p className="value-text">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
