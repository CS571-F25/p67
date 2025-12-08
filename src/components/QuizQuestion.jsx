import React from 'react';
import '../styles/QuizQuestion.css';

export default function QuizQuestion({ question, selectedValue, onAnswer }) {
    return (
        <div className="quiz-question-container">
            <h2 className="question-text">{question.question}</h2>
            
            <div className="options-container">
                {question.options.map((option, index) => (
                    <div 
                        key={index}
                        className={`option-item ${selectedValue === option.value ? 'selected' : ''}`}
                        onClick={() => onAnswer(question.id, option.value)}
                        role="button"
                        tabIndex={0}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                onAnswer(question.id, option.value);
                            }
                        }}
                        aria-label={`Option ${index + 1}: ${option.text}`}
                    >
                        <div className="option-radio">
                            {selectedValue === option.value && <div className="radio-selected"></div>}
                        </div>
                        <span className="option-text">{option.text}</span>
                        {selectedValue === option.value && (
                            <div className="selected-indicator">✓</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
