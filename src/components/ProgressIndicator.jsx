import React from 'react';
import '../styles/ProgressIndicator.css';

export default function ProgressIndicator({ current, total, progress }) {
    return (
        <div className="progress-indicator-container">
            <div className="progress-header">
                <span className="progress-text">
                    Question {current} of {total}
                </span>
                <span className="progress-percentage">
                    {Math.round(progress)}% Complete
                </span>
            </div>
            <div className="progress-bar-container">
                <div 
                    className="progress-bar-fill" 
                    style={{ width: `${progress}%` }}
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
        </div>
    );
}
