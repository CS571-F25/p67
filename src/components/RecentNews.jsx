import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import NewsCard from './NewsCard';
import '../styles/RecentNews.css';

export default function RecentNews(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Get API key from environment variables or fallback
    const API_KEY = import.meta.env.VITE_NEWSAPI_KEY || 'YOUR_NEWS_API_KEY';
    
    // Build API URL with healthcare-focused search parameters
    const buildNewsURL = () => {
        const baseURL = 'https://newsapi.org/v2/everything';
        const params = new URLSearchParams({
            q: 'private practices OR healthcare clinics',
            searchIn: 'title,description',
            language: 'en',
            sortBy: 'publishedAt',
            pageSize: '9',
            from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Last 30 days
            apiKey: API_KEY
        });
        return `${baseURL}?${params.toString()}`;
    };
    
    const NEWS_API_URL = buildNewsURL();

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                setError(null);

                // For development/testing, you can use this sample data instead of the API call
                if (API_KEY === 'YOUR_NEWS_API_KEY') {
                    setTimeout(() => {
                        setArticles(sampleArticles);
                        setLoading(false);
                    }, 1000);
                    return;
                }

                const response = await fetch(NEWS_API_URL);
                
                if (!response.ok) {
                    if (response.status === 401) {
                        throw new Error('Invalid API key. Please check your NewsAPI key.');
                    } else if (response.status === 429) {
                        throw new Error('Rate limit exceeded. Please try again later.');
                    } else {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                }
                
                const data = await response.json();
                
                if (data.status === 'ok') {
                    // Filter out articles with missing essential information
                    const validArticles = data.articles.filter(article => 
                        article.title && 
                        article.title !== '[Removed]' &&
                        article.description &&
                        article.url
                    );
                    
                    setArticles(validArticles.slice(0, 9)); // Limit to 9 articles
                } else {
                    throw new Error(data.message || 'Failed to fetch news');
                }
            } catch (err) {
                console.error('Error fetching news:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="recent-news-container">
            <Container className="py-5">
                <div className="text-center mb-5">
                    <h1 className="page-title">Healthcare Industry News</h1>
                    <p className="page-subtitle">
                        Stay informed about the latest developments in healthcare technology, practice management, 
                        telemedicine, and digital transformation in medical practices
                    </p>
                </div>

                {loading && (
                    <div className="text-center py-5">
                        <Spinner animation="border" variant="primary" />
                        <p className="mt-3 text-muted">Loading latest news...</p>
                    </div>
                )}

                {error && (
                    <Alert variant="danger" className="text-center">
                        <Alert.Heading>Unable to Load News</Alert.Heading>
                        <p>{error}</p>
                        <hr />
                        <p className="mb-0">
                            <small>
                                To use live news data, please register for a free API key at{' '}
                                <a href="https://newsapi.org/register" target="_blank" rel="noopener noreferrer">
                                    NewsAPI.org
                                </a>{' '}
                                and update the API_KEY in the RecentNews component.
                            </small>
                        </p>
                    </Alert>
                )}

                {!loading && !error && (
                    <Row className="g-4">
                        {articles.map((article, index) => (
                            <Col key={index} xs={12} md={6} lg={4}>
                                <NewsCard article={article} />
                            </Col>
                        ))}
                    </Row>
                )}

                {!loading && !error && articles.length === 0 && (
                    <Alert variant="info" className="text-center">
                        <Alert.Heading>No News Articles Found</Alert.Heading>
                        <p>There are currently no articles to display.</p>
                    </Alert>
                )}
            </Container>
        </div>
    );
}