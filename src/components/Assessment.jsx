import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import QuizSelector from './QuizSelector';
import QuizQuestion from './QuizQuestion';
import ProgressIndicator from './ProgressIndicator';
import ResultsPage from './ResultsPage';
import '../styles/Assessment.css';

// Quiz data sets
const quizSets = {
    technology: {
        title: "Technology Modernization Assessment",
        description: "Evaluate your practice's technology adoption and digital readiness",
        icon: "TECH",
        questions: [
            {
                id: 1,
                question: "How do patients primarily schedule appointments?",
                options: [
                    { text: "Phone calls only", value: 0 },
                    { text: "Phone and email", value: 25 },
                    { text: "Online portal available but rarely used", value: 50 },
                    { text: "Mostly online self-scheduling", value: 75 },
                    { text: "Fully automated online booking with reminders", value: 100 }
                ]
            },
            {
                id: 2,
                question: "What type of Electronic Health Record (EHR) system do you use?",
                options: [
                    { text: "Paper records only", value: 0 },
                    { text: "Basic digital system with limited features", value: 25 },
                    { text: "Standard EHR with some automation", value: 50 },
                    { text: "Modern cloud-based EHR", value: 75 },
                    { text: "Advanced EHR with AI and analytics", value: 100 }
                ]
            },
            {
                id: 3,
                question: "How are patient communications handled?",
                options: [
                    { text: "Phone calls and paper mail only", value: 0 },
                    { text: "Email when patients request it", value: 25 },
                    { text: "Mix of phone, email, and text", value: 50 },
                    { text: "Patient portal with secure messaging", value: 75 },
                    { text: "Integrated communication platform with automation", value: 100 }
                ]
            },
            {
                id: 4,
                question: "What percentage of your administrative workflows are automated?",
                options: [
                    { text: "0-10% (mostly manual)", value: 0 },
                    { text: "11-25% (some basic automation)", value: 25 },
                    { text: "26-50% (moderate automation)", value: 50 },
                    { text: "51-75% (mostly automated)", value: 75 },
                    { text: "76-100% (highly automated)", value: 100 }
                ]
            },
            {
                id: 5,
                question: "How do you handle billing and insurance claims?",
                options: [
                    { text: "Manual paper processing", value: 0 },
                    { text: "Basic software with manual entry", value: 25 },
                    { text: "Semi-automated with some manual review", value: 50 },
                    { text: "Mostly automated with integration", value: 75 },
                    { text: "Fully automated with real-time verification", value: 100 }
                ]
            },
            {
                id: 6,
                question: "Do you have data analytics capabilities for practice insights?",
                options: [
                    { text: "No analytics or reporting", value: 0 },
                    { text: "Basic manual spreadsheets", value: 25 },
                    { text: "Simple built-in reports", value: 50 },
                    { text: "Dashboard with key metrics", value: 75 },
                    { text: "Advanced analytics with predictive insights", value: 100 }
                ]
            },
            {
                id: 7,
                question: "How is staff training on technology handled?",
                options: [
                    { text: "No formal training", value: 0 },
                    { text: "One-time training when hired", value: 25 },
                    { text: "Occasional training sessions", value: 50 },
                    { text: "Regular structured training program", value: 75 },
                    { text: "Continuous learning with certification", value: 100 }
                ]
            },
            {
                id: 8,
                question: "How do you handle telehealth services?",
                options: [
                    { text: "Not offered", value: 0 },
                    { text: "Ad-hoc video calls when needed", value: 25 },
                    { text: "Basic telehealth platform", value: 50 },
                    { text: "Integrated telehealth system", value: 75 },
                    { text: "Full virtual care platform with remote monitoring", value: 100 }
                ]
            },
            {
                id: 9,
                question: "How secure is your patient data management?",
                options: [
                    { text: "Basic security measures", value: 0 },
                    { text: "HIPAA-compliant but minimal", value: 25 },
                    { text: "Standard security protocols", value: 50 },
                    { text: "Enhanced security with regular audits", value: 75 },
                    { text: "Enterprise-grade security with encryption", value: 100 }
                ]
            },
            {
                id: 10,
                question: "How often do you update your technology systems?",
                options: [
                    { text: "Rarely or never", value: 0 },
                    { text: "Only when absolutely necessary", value: 25 },
                    { text: "Every few years", value: 50 },
                    { text: "Annual reviews and updates", value: 75 },
                    { text: "Continuous updates and optimization", value: 100 }
                ]
            }
        ]
    },
    operations: {
        title: "Operational Efficiency Assessment",
        description: "Measure your practice's operational effectiveness and workflow optimization",
        icon: "OPS",
        questions: [
            {
                id: 1,
                question: "What is your average patient wait time?",
                options: [
                    { text: "Over 45 minutes", value: 0 },
                    { text: "30-45 minutes", value: 25 },
                    { text: "20-30 minutes", value: 50 },
                    { text: "10-20 minutes", value: 75 },
                    { text: "Under 10 minutes", value: 100 }
                ]
            },
            {
                id: 2,
                question: "How do you track and manage staff productivity?",
                options: [
                    { text: "No formal tracking", value: 0 },
                    { text: "Manual logs or observations", value: 25 },
                    { text: "Basic time tracking", value: 50 },
                    { text: "Performance metrics dashboard", value: 75 },
                    { text: "Comprehensive productivity analytics", value: 100 }
                ]
            },
            {
                id: 3,
                question: "How often do administrative errors occur (billing, scheduling, records)?",
                options: [
                    { text: "Daily", value: 0 },
                    { text: "Several times per week", value: 25 },
                    { text: "Once a week", value: 50 },
                    { text: "Few times per month", value: 75 },
                    { text: "Rarely (less than monthly)", value: 100 }
                ]
            },
            {
                id: 4,
                question: "What is your appointment no-show rate?",
                options: [
                    { text: "Over 20%", value: 0 },
                    { text: "15-20%", value: 25 },
                    { text: "10-15%", value: 50 },
                    { text: "5-10%", value: 75 },
                    { text: "Under 5%", value: 100 }
                ]
            },
            {
                id: 5,
                question: "How are patient flow and room utilization optimized?",
                options: [
                    { text: "Not managed, rooms often sit empty", value: 0 },
                    { text: "Basic scheduling without optimization", value: 25 },
                    { text: "Manual room assignment", value: 50 },
                    { text: "Scheduled with some optimization", value: 75 },
                    { text: "Fully optimized with real-time tracking", value: 100 }
                ]
            },
            {
                id: 6,
                question: "How long does it take to process insurance claims?",
                options: [
                    { text: "Over 30 days", value: 0 },
                    { text: "20-30 days", value: 25 },
                    { text: "10-20 days", value: 50 },
                    { text: "5-10 days", value: 75 },
                    { text: "Under 5 days", value: 100 }
                ]
            },
            {
                id: 7,
                question: "How do you handle inventory and supply management?",
                options: [
                    { text: "No formal system, reactive ordering", value: 0 },
                    { text: "Manual tracking with spreadsheets", value: 25 },
                    { text: "Basic inventory software", value: 50 },
                    { text: "Automated reordering system", value: 75 },
                    { text: "Predictive inventory with just-in-time delivery", value: 100 }
                ]
            },
            {
                id: 8,
                question: "What percentage of staff time is spent on administrative tasks vs. patient care?",
                options: [
                    { text: "Over 50% administrative", value: 0 },
                    { text: "40-50% administrative", value: 25 },
                    { text: "30-40% administrative", value: 50 },
                    { text: "20-30% administrative", value: 75 },
                    { text: "Under 20% administrative", value: 100 }
                ]
            },
            {
                id: 9,
                question: "How do you measure and track key performance indicators (KPIs)?",
                options: [
                    { text: "No KPI tracking", value: 0 },
                    { text: "Basic manual tracking", value: 25 },
                    { text: "Monthly manual reports", value: 50 },
                    { text: "Automated weekly dashboards", value: 75 },
                    { text: "Real-time KPI monitoring with alerts", value: 100 }
                ]
            },
            {
                id: 10,
                question: "How often do you review and optimize workflows?",
                options: [
                    { text: "Never or rarely", value: 0 },
                    { text: "Only when problems arise", value: 25 },
                    { text: "Annual review", value: 50 },
                    { text: "Quarterly optimization", value: 75 },
                    { text: "Continuous improvement program", value: 100 }
                ]
            }
        ]
    },
    patient: {
        title: "Patient Experience Assessment",
        description: "Evaluate how well your practice serves and engages patients",
        icon: "PATIENT",
        questions: [
            {
                id: 1,
                question: "How do you collect patient feedback?",
                options: [
                    { text: "We don't collect feedback", value: 0 },
                    { text: "Informal comments only", value: 25 },
                    { text: "Paper surveys occasionally", value: 50 },
                    { text: "Digital surveys after visits", value: 75 },
                    { text: "Automated multi-channel feedback system", value: 100 }
                ]
            },
            {
                id: 2,
                question: "What is your patient satisfaction score?",
                options: [
                    { text: "Don't track satisfaction", value: 0 },
                    { text: "Below 70%", value: 25 },
                    { text: "70-80%", value: 50 },
                    { text: "80-90%", value: 75 },
                    { text: "Above 90%", value: 100 }
                ]
            },
            {
                id: 3,
                question: "How easy is it for patients to access their medical records?",
                options: [
                    { text: "Must request in person with delays", value: 0 },
                    { text: "Can request by phone/email", value: 25 },
                    { text: "Basic portal with limited access", value: 50 },
                    { text: "Patient portal with full records", value: 75 },
                    { text: "Mobile app with instant access", value: 100 }
                ]
            },
            {
                id: 4,
                question: "What is your patient retention rate?",
                options: [
                    { text: "Below 60%", value: 0 },
                    { text: "60-70%", value: 25 },
                    { text: "70-80%", value: 50 },
                    { text: "80-90%", value: 75 },
                    { text: "Above 90%", value: 100 }
                ]
            },
            {
                id: 5,
                question: "How do you handle patient education and engagement?",
                options: [
                    { text: "No formal patient education", value: 0 },
                    { text: "Verbal instructions only", value: 25 },
                    { text: "Printed materials when asked", value: 50 },
                    { text: "Digital resources and portal content", value: 75 },
                    { text: "Personalized educational platform", value: 100 }
                ]
            },
            {
                id: 6,
                question: "How quickly do patients get appointment availability?",
                options: [
                    { text: "Weeks to months wait", value: 0 },
                    { text: "2-3 weeks", value: 25 },
                    { text: "1-2 weeks", value: 50 },
                    { text: "Within a few days", value: 75 },
                    { text: "Same-day or next-day availability", value: 100 }
                ]
            },
            {
                id: 7,
                question: "Do you send appointment reminders?",
                options: [
                    { text: "No reminders", value: 0 },
                    { text: "Manual phone calls sometimes", value: 25 },
                    { text: "Email reminders", value: 50 },
                    { text: "Automated email/SMS reminders", value: 75 },
                    { text: "Multi-channel reminders with confirmation", value: 100 }
                ]
            },
            {
                id: 8,
                question: "How do you handle patient complaints or concerns?",
                options: [
                    { text: "No formal process", value: 0 },
                    { text: "Ad-hoc responses when they arise", value: 25 },
                    { text: "Basic complaint log", value: 50 },
                    { text: "Structured resolution process", value: 75 },
                    { text: "Comprehensive feedback system with follow-up", value: 100 }
                ]
            },
            {
                id: 9,
                question: "How personalized is the patient experience?",
                options: [
                    { text: "Generic, one-size-fits-all approach", value: 0 },
                    { text: "Basic record of preferences", value: 25 },
                    { text: "Some customization for regular patients", value: 50 },
                    { text: "Personalized care plans", value: 75 },
                    { text: "Highly personalized with predictive care", value: 100 }
                ]
            },
            {
                id: 10,
                question: "How do you track patient outcomes and follow-up?",
                options: [
                    { text: "No formal tracking", value: 0 },
                    { text: "Basic notes in records", value: 25 },
                    { text: "Manual follow-up when needed", value: 50 },
                    { text: "Automated follow-up reminders", value: 75 },
                    { text: "Comprehensive outcome tracking with analytics", value: 100 }
                ]
            }
        ]
    }
};

export default function Assessment() {
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        // Load previous scores from localStorage on mount
        const savedScores = localStorage.getItem('assessmentScores');
        if (savedScores) {
            console.log('Previous scores loaded:', JSON.parse(savedScores));
        }
    }, []);

    const handleQuizSelect = (quizType) => {
        setSelectedQuiz(quizType);
        setCurrentQuestion(0);
        setAnswers([]);
        setShowResults(false);
        setScore(0);
    };

    const handleAnswer = (questionId, value) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = { questionId, value };
        setAnswers(newAnswers);
    };

    const handleNext = () => {
        if (currentQuestion < quizSets[selectedQuiz].questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleSubmit = () => {
        // Calculate final score
        const totalScore = answers.reduce((sum, answer) => sum + answer.value, 0);
        const maxScore = quizSets[selectedQuiz].questions.length * 100;
        const finalScore = Math.round((totalScore / maxScore) * 100);
        
        setScore(finalScore);
        
        // Save to localStorage
        const savedScores = JSON.parse(localStorage.getItem('assessmentScores') || '{}');
        savedScores[selectedQuiz] = {
            score: finalScore,
            date: new Date().toISOString(),
            answers: answers
        };
        localStorage.setItem('assessmentScores', JSON.stringify(savedScores));
        
        setShowResults(true);
    };

    const handleRetake = () => {
        setCurrentQuestion(0);
        setAnswers([]);
        setShowResults(false);
        setScore(0);
    };

    const handleBackToSelection = () => {
        setSelectedQuiz(null);
        setCurrentQuestion(0);
        setAnswers([]);
        setShowResults(false);
        setScore(0);
    };

    if (!selectedQuiz) {
        return <QuizSelector quizSets={quizSets} onSelectQuiz={handleQuizSelect} />;
    }

    if (showResults) {
        return (
            <ResultsPage 
                score={score}
                quizType={selectedQuiz}
                quizTitle={quizSets[selectedQuiz].title}
                onRetake={handleRetake}
                onBackToSelection={handleBackToSelection}
            />
        );
    }

    const currentQuizData = quizSets[selectedQuiz];
    const currentQuestionData = currentQuizData.questions[currentQuestion];
    const progress = ((currentQuestion + 1) / currentQuizData.questions.length) * 100;
    const isLastQuestion = currentQuestion === currentQuizData.questions.length - 1;
    const isAnswered = answers[currentQuestion] !== undefined;

    return (
        <div className="assessment-container">
            <section className="assessment-header">
                <Container>
                    <Row>
                        <Col lg={10} className="mx-auto text-center">
                            <h1 className="assessment-title">{currentQuizData.title}</h1>
                            <p className="assessment-subtitle">{currentQuizData.description}</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="assessment-content">
                <Container>
                    <Row>
                        <Col lg={8} className="mx-auto">
                            <ProgressIndicator 
                                current={currentQuestion + 1}
                                total={currentQuizData.questions.length}
                                progress={progress}
                            />
                            
                            <QuizQuestion
                                question={currentQuestionData}
                                selectedValue={answers[currentQuestion]?.value}
                                onAnswer={handleAnswer}
                            />

                            <div className="quiz-navigation">
                                <button 
                                    className="nav-button secondary"
                                    onClick={currentQuestion === 0 ? handleBackToSelection : handlePrevious}
                                >
                                    ← {currentQuestion === 0 ? 'Back to Selection' : 'Previous'}
                                </button>
                                
                                {isLastQuestion ? (
                                    <button 
                                        className="nav-button primary"
                                        onClick={handleSubmit}
                                        disabled={!isAnswered}
                                    >
                                        See Results
                                    </button>
                                ) : (
                                    <button 
                                        className="nav-button primary"
                                        onClick={handleNext}
                                        disabled={!isAnswered}
                                    >
                                        Next →
                                    </button>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}
