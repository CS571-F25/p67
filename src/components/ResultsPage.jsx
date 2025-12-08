import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import ScoreGauge from './ScoreGauge';
import RecommendationCard from './RecommendationCard';
import '../styles/ResultsPage.css';

export default function ResultsPage({ score, quizType, quizTitle, onRetake, onBackToSelection }) {
    const getScoreLevel = () => {
        if (score >= 80) return 'excellent';
        if (score >= 60) return 'good';
        if (score >= 40) return 'fair';
        return 'needs-improvement';
    };

    const getScoreMessage = () => {
        if (score >= 80) {
            return {
                title: "Excellent! You're Leading the Way",
                message: "Your practice demonstrates strong modernization across key areas. Focus on maintaining these standards and exploring advanced capabilities."
            };
        }
        if (score >= 60) {
            return {
                title: "Good Progress, Room to Grow",
                message: "You've built a solid foundation with notable strengths. Strategic improvements in key areas can elevate your practice to the next level."
            };
        }
        if (score >= 40) {
            return {
                title: "Opportunities for Significant Improvement",
                message: "Your practice has foundational elements in place, but significant modernization opportunities exist. Targeted improvements can dramatically enhance efficiency."
            };
        }
        return {
            title: "Critical Need for Modernization",
            message: "Your practice would benefit greatly from comprehensive modernization. Immediate action in key areas can transform operations and patient outcomes."
        };
    };

    const getRecommendations = () => {
        const level = getScoreLevel();
        
        const recommendations = {
            'excellent': [
                {
                    title: "Advanced Analytics Implementation",
                    description: "Leverage AI and predictive analytics to gain deeper insights into patient outcomes and operational efficiency.",
                    priority: "Enhancement"
                },
                {
                    title: "Innovation Leadership",
                    description: "Stay ahead with emerging technologies like remote patient monitoring and telehealth expansion.",
                    priority: "Growth"
                },
                {
                    title: "Best Practice Sharing",
                    description: "Document and share your success strategies to maintain excellence across all departments.",
                    priority: "Maintenance"
                }
            ],
            'good': [
                {
                    title: "Workflow Automation",
                    description: "Identify remaining manual processes and implement automation to further reduce administrative burden.",
                    priority: "High"
                },
                {
                    title: "Patient Engagement Platform",
                    description: "Enhance patient communication and self-service capabilities through integrated digital tools.",
                    priority: "High"
                },
                {
                    title: "Staff Training Program",
                    description: "Establish continuous education programs to maximize technology adoption and efficiency.",
                    priority: "Medium"
                }
            ],
            'fair': [
                {
                    title: "EHR Optimization",
                    description: "Modernize your electronic health record system to improve data accessibility and workflow efficiency.",
                    priority: "Critical"
                },
                {
                    title: "Process Standardization",
                    description: "Document and optimize core workflows to reduce errors and improve consistency.",
                    priority: "High"
                },
                {
                    title: "Digital Patient Experience",
                    description: "Implement online scheduling, patient portals, and automated communications.",
                    priority: "High"
                }
            ],
            'needs-improvement': [
                {
                    title: "Comprehensive Modernization Strategy",
                    description: "Develop a phased roadmap to transition from manual processes to modern digital systems.",
                    priority: "Critical"
                },
                {
                    title: "Technology Foundation",
                    description: "Establish core systems including cloud-based EHR, practice management, and billing platforms.",
                    priority: "Critical"
                },
                {
                    title: "Change Management",
                    description: "Build staff buy-in and training programs to ensure successful technology adoption.",
                    priority: "Critical"
                }
            ]
        };

        return recommendations[level];
    };

    const scoreData = getScoreMessage();
    const recommendations = getRecommendations();

    return (
        <div className="results-page-container">
            <section className="results-hero">
                <Container>
                    <Row>
                        <Col lg={10} className="mx-auto text-center">
                            <h1 className="results-title">Your Assessment Results</h1>
                            <p className="results-subtitle">{quizTitle}</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="results-score-section">
                <Container>
                    <Row>
                        <Col lg={8} className="mx-auto">
                            <ScoreGauge score={score} level={getScoreLevel()} />
                            
                            <div className="score-message">
                                <h2 className="message-title">{scoreData.title}</h2>
                                <p className="message-text">{scoreData.message}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="recommendations-section">
                <Container>
                    <Row>
                        <Col lg={10} className="mx-auto">
                            <h2 className="section-title">Recommended Next Steps</h2>
                            <p className="section-subtitle">
                                Based on your assessment, here are prioritized recommendations to improve your practice:
                            </p>
                            
                            <Row className="g-4">
                                {recommendations.map((rec, index) => (
                                    <Col key={index} lg={4} md={6}>
                                        <RecommendationCard recommendation={rec} />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="results-actions-section">
                <Container>
                    <Row>
                        <Col lg={8} className="mx-auto">
                            <div className="results-actions">
                                <h3 className="actions-title">What's Next?</h3>
                                <p className="actions-text">
                                    Ready to transform your practice? Let's discuss how Antonyx Consulting 
                                    can help you implement these recommendations.
                                </p>
                                
                                <div className="action-buttons">
                                    <Link to="/contact" className="action-button primary">
                                        Schedule a Consultation
                                    </Link>
                                    <Link to="/about" className="action-button secondary">
                                        Learn About Our Services
                                    </Link>
                                </div>

                                <div className="quiz-actions">
                                    <button className="quiz-action-button" onClick={onRetake}>
                                        Retake This Assessment
                                    </button>
                                    <button className="quiz-action-button" onClick={onBackToSelection}>
                                        Take Another Assessment
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}
