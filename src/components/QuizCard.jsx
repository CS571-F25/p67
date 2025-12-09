import React from 'react';
import { Col } from 'react-bootstrap';

export default function QuizCard({ quiz, quizKey, previousScore, onSelectQuiz }) {
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
        <Col key={quizKey} lg={4} md={6}>
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
                    onClick={() => onSelectQuiz(quizKey)}
                >
                    {previousScore ? 'Retake Assessment' : 'Start Assessment'}
                </button>
            </div>
        </Col>
    );
}
