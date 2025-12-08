import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/QuizSelector.css';

export default function QuizSelector({ quizSets, onSelectQuiz }) {
    const [previousScores, setPreviousScores] = useState({});

    useEffect(() => {
        // Load previous scores from localStorage
        const savedScores = localStorage.getItem('assessmentScores');
        if (savedScores) {
            setPreviousScores(JSON.parse(savedScores));
        }
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
        });
    };

    const getScoreColor = (score) => {
        if (score >= 80) return 'score-excellent';
        if (score >= 60) return 'score-good';
        if (score >= 40) return 'score-average';
        return 'score-poor';
    };

    const getScoreLabel = (score) => {
        if (score >= 80) return 'Excellent';
        if (score >= 60) return 'Good';
        if (score >= 40) return 'Needs Improvement';
        return 'Critical';
    };

    return (
        <div className="quiz-selector-container">
            <section className="selector-hero">
                <Container>
                    <Row>
                        <Col lg={10} className="mx-auto text-center">
                            <h1 className="selector-title">Practice Modernization Assessment</h1>
                            <p className="selector-subtitle">
                                Take one of our comprehensive assessments to evaluate your practice's 
                                performance and discover opportunities for improvement. Each assessment 
                                takes about 5 minutes to complete.
                            </p>
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
                                <Col key={key} lg={4} md={6}>
                                    <div className="quiz-card">
                                        <div className="quiz-icon">{quiz.icon}</div>
                                        <h3 className="quiz-card-title">{quiz.title}</h3>
                                        <p className="quiz-card-description">{quiz.description}</p>
                                        
                                        <div className="quiz-meta">
                                            <span className="quiz-questions">
                                                {quiz.questions.length} Questions
                                            </span>
                                            <span className="quiz-duration">
                                                ~5 minutes
                                            </span>
                                        </div>

                                        {previousScore && (
                                            <div className="previous-score">
                                                <div className="score-badge-container">
                                                    <span className={`score-badge ${getScoreColor(previousScore.score)}`}>
                                                        {previousScore.score}%
                                                    </span>
                                                    <span className="score-label">
                                                        {getScoreLabel(previousScore.score)}
                                                    </span>
                                                </div>
                                                <span className="score-date">
                                                    Last taken: {formatDate(previousScore.date)}
                                                </span>
                                            </div>
                                        )}

                                        <button 
                                            className="quiz-start-button"
                                            onClick={() => onSelectQuiz(key)}
                                        >
                                            {previousScore ? 'Retake Assessment' : 'Start Assessment'}
                                        </button>
                                    </div>
                                </Col>
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
