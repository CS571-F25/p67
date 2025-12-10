import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/QuizSelector.css';
import QuizCard from './QuizCard';

export default function QuizSelector({ quizSets, onSelectQuiz }) {
    const [previousScores, setPreviousScores] = useState({});

    useEffect(() => {
        // Load previous scores from localStorage
        const savedScores = localStorage.getItem('assessmentScores');
        if (savedScores) {
            setPreviousScores(JSON.parse(savedScores));
        }
    }, []);

    return (
        <div className="quiz-selector-container">
            <section className="selector-hero">
                <Container>
                    <Row>
                        <Col lg={10} className="mx-auto text-center">
                            <h1 className="selector-title">Practice Modernization Assessment</h1>
                            <h2 className="selector-subtitle">
                                Take one of our comprehensive assessments to evaluate your practice's 
                                performance and discover opportunities for improvement. Each assessment 
                                takes about 5 minutes to complete.
                            </h2>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="selector-content">
                <Container>
                    <Row className="g-4">
                        {Object.entries(quizSets).map(([key, quiz]) => {
                            const previousScore = previousScores[key];
                            
                            return (
                                <QuizCard 
                                    quiz={quiz} 
                                    quizKey={key} 
                                    previousScore={previousScore} 
                                    onSelectQuiz={onSelectQuiz}
                                />
                            );
                        })}
                    </Row>

                    <Row className="mt-5">
                        <Col lg={10} className="mx-auto">
                            <div className="selector-info">
                                <h3 className="info-title">Why Take These Assessments?</h3>
                                <div className="info-grid">
                                    <div className="info-item">
                                        <h4>Identify Gaps</h4>
                                        <p>Discover specific areas where your practice can improve</p>
                                    </div>
                                    <div className="info-item">
                                        <h4>Get Insights</h4>
                                        <p>Receive personalized recommendations based on your results</p>
                                    </div>
                                    <div className="info-item">
                                        <h4>Track Progress</h4>
                                        <p>Retake assessments to measure your modernization journey</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}
