import React from 'react';
import '../styles/ScoreGauge.css';

export default function ScoreGauge({ score, level }) {
    const circumference = 2 * Math.PI * 90; // radius = 90
    const progress = (score / 100) * circumference;

    const getLevelColor = () => {
        switch(level) {
            case 'excellent': return '#28a745';
            case 'good': return '#17a2b8';
            case 'fair': return '#ffc107';
            case 'needs-improvement': return '#dc3545';
            default: return '#E85C2A';
        }
    };

    const getLevelLabel = () => {
        switch(level) {
            case 'excellent': return 'Excellent';
            case 'good': return 'Good';
            case 'fair': return 'Fair';
            case 'needs-improvement': return 'Needs Improvement';
            default: return '';
        }
    };

    return (
        <div className="score-gauge-container">
            <div className="gauge-wrapper">
                <svg className="gauge-svg" viewBox="0 0 200 200">
                    {/* Background circle */}
                    <circle
                        className="gauge-background"
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="#e9ecef"
                        strokeWidth="20"
                    />
                    {/* Progress circle */}
                    <circle
                        className="gauge-progress"
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke={getLevelColor()}
                        strokeWidth="20"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - progress}
                        strokeLinecap="round"
                        transform="rotate(-90 100 100)"
                    />
                </svg>
                <div className="gauge-content">
                    <div className="score-value">{score}</div>
                    <div className="score-max">/100</div>
                </div>
            </div>
            <div className="score-level" style={{ color: getLevelColor() }}>
                {getLevelLabel()}
            </div>
        </div>
    );
}
