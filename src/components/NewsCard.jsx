import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import '../styles/NewsCard.css';

export default function NewsCard({ article }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <Card className="news-card h-100">
            <Card.Body className="d-flex flex-column">
                <div className="news-card-header mb-2">
                    <Badge className="news-source-badge">
                        {article.source?.name || 'Unknown Source'}
                    </Badge>
                    <small className="text-muted ms-auto">
                        {formatDate(article.publishedAt)}
                    </small>
                </div>
                
                <Card.Title className="news-card-title">
                    {article.title}
                </Card.Title>
                
                <Card.Text className="news-card-description flex-grow-1">
                    {article.description || 'No description available.'}
                </Card.Text>
                
                {article.author && (
                    <Card.Text className="news-card-author">
                        <small className="text-muted">By: {article.author}</small>
                    </Card.Text>
                )}
                
                <div className="mt-auto">
                    <a 
                        href={article.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary btn-sm"
                    >
                        Read Full Article →
                    </a>
                </div>
            </Card.Body>
        </Card>
    );
}
