import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { GrUpdate } from 'react-icons/gr';
import { GiBullseye } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import Testimonials from '../components/Testimonials';
import '../styles/Home.css';

export default function Home(props) {
    const [typedText, setTypedText] = useState('');
    
    const fullText = "Modernizing Your Practice.";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length) {
                setTypedText(fullText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="home-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="typewriter">{typedText}</span>
                        <span className="cursor">|</span>
                    </h1>
                    <p className="hero-subtitle">
                        Antonyx Consulting helps healthcare practices modernize their operations, 
                        technology, and workflows so they can deliver care more efficiently, adapt faster, 
                        and operate like modern healthcare organizations.
                    </p>
                    <div className="hero-cta">
                        <button 
                            className="cta-button primary" 
                            onClick={() =>{}}
                        >
                            Get Started →
                        </button>
                        <Link to="/about" className="cta-button secondary">
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            <section className="positioning-section">
                <div className="container">
                    <h2 className="section-title">Bridging Traditional and Modern Healthcare</h2>
                    <p className="positioning-text">
                        Antonyx exists to close the gap between traditional private practices and the modern 
                        healthcare landscape. We bring operational clarity, modern tools, and real-world 
                        execution to help clinics perform like today's top-tier organizations — without 
                        sacrificing patient care or staff well-being.
                    </p>
                </div>
            </section>

            <section className="pillars-section">
                <div className="container">
                    <h2 className="section-title">Our Approach</h2>
                    <div className="pillars-grid">
                        {[
                            {
                                icon: <GrUpdate/>,
                                title: "Modernization",
                                description: "Transforming outdated systems and workflows into agile, efficient processes."
                            },
                            {
                                icon: <MdComputer />,
                                title: "Technology Enablement", 
                                description: "Simplifying digital adoption to empower teams and streamline operations."
                            },
                            {
                                icon: <GiBullseye />,
                                title: "Operational Excellence",
                                description: "Designing better systems that make healthcare work smarter."
                            }
                        ].map((pillar, index) => (
                            <div 
                                key={index}
                                className="pillar-card"
                            >
                                <div className="pillar-icon">{pillar.icon}</div>
                                <h3 className="pillar-title">{pillar.title}</h3>
                                <p className="pillar-description">{pillar.description}</p>
                                <div className="pillar-progress">
                                    <div className="progress-bar"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Testimonials />

            <section className="cta-section">
                <div className="cta-background">
                    <div className="gradient-overlay"></div>
                </div>
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Transform Your Practice?</h2>
                        <p className="cta-text">
                            Let's work together to modernize your healthcare operations and deliver better patient outcomes.
                        </p>
                        <div className="cta-actions">
                            <Link to="/schedule" className="cta-button primary large">
                                Schedule a Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}