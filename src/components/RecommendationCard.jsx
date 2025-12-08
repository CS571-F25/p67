import React from 'react';
import '../styles/RecommendationCard.css';

export default function RecommendationCard({ recommendation }) {
    const getPriorityClass = () => {
        switch(recommendation.priority.toLowerCase()) {
            case 'critical': return 'priority-critical';
            case 'high': return 'priority-high';
            case 'medium': return 'priority-medium';
            case 'enhancement': return 'priority-enhancement';
            case 'growth': return 'priority-growth';
            case 'maintenance': return 'priority-maintenance';
            default: return 'priority-medium';
        }
    };

    return (
        <div className="recommendation-card">
            <div className={`priority-badge ${getPriorityClass()}`}>
                <span className="priority-text">{recommendation.priority}</span>
            </div>
            <h3 className="recommendation-title">{recommendation.title}</h3>
            <p className="recommendation-description">{recommendation.description}</p>
        </div>
    );
}
