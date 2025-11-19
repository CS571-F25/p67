import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/EmployeeCard.css';

export default function EmployeeCard({ employee }) {
    return (
        <Card className="employee-card h-100">
            <Card.Body className="d-flex flex-column text-center">
                <div className="employee-avatar mb-3">
                    <div className="avatar-placeholder">
                        {employee.name.split(' ').map(n => n[0]).join('')}
                    </div>
                </div>
                
                <Card.Title className="employee-name">
                    {employee.name}
                </Card.Title>
                
                <Card.Subtitle className="employee-title mb-3">
                    {employee.title}
                </Card.Subtitle>
                
                <Card.Text className="employee-description flex-grow-1">
                    {employee.description}
                </Card.Text>
                
                {employee.specialties && (
                    <div className="employee-specialties mt-auto">
                        {employee.specialties.map((specialty, index) => (
                            <span key={index} className="specialty-tag">
                                {specialty}
                            </span>
                        ))}
                    </div>
                )}
            </Card.Body>
        </Card>
    );
}
