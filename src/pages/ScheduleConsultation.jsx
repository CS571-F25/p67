import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import "../styles/ScheduleConsultation.css";

export default function ScheduleConsultation(props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    preferredDate: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Validation patterns
  const namePattern = /^[a-zA-Z\s'-]{2,50}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
  const messagePattern = /^.{0,500}$/;

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value) {
          error = "Name is required";
        } else if (!namePattern.test(value)) {
          error = "Name must be 2-50 characters and contain only letters, spaces, hyphens, or apostrophes";
        }
        break;
      case "email":
        if (!value) {
          error = "Email is required";
        } else if (!emailPattern.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case "phoneNumber":
        if (!value) {
          error = "Phone number is required";
        } else if (!phonePattern.test(value)) {
          error = "Please enter a valid phone number";
        }
        break;
      case "preferredDate":
        if (!value) {
          error = "Preferred date is required";
        } else {
          const selectedDate = new Date(value);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const nextMonthEnd = new Date(today.getFullYear(), today.getMonth() + 2, 0);
          
          if (selectedDate < today || selectedDate > nextMonthEnd) {
            const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1).toLocaleString('default', { month: 'long' });
            error = `Preferred date must be from today until the end of ${nextMonth}`;
          }
        }
        break;
      case "message":
        if (value && !messagePattern.test(value)) {
          error = "Additional details must be under 500 characters";
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Validate on change
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert("Please fix the errors below before submitting.");
      return;
    }

    const [year, month, day] = form.preferredDate.split("-");

    const formData = new FormData();
    formData.append("entry.1159605126", form.name);
    formData.append("entry.1879622146", form.email);
    formData.append("entry.2108618388", form.phoneNumber);
    formData.append("entry.447932127_year", year);
    formData.append("entry.447932127_month", month);
    formData.append("entry.447932127_day", day);
    formData.append("entry.860287489", form.message);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfQD5DG9CdM-BHIv3f6dXdILDXMT3FL0k6KxpEQ25yILSo-4A/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );
      setForm({ name: "", email: "", phoneNumber: "", preferredDate: "", message: "" });
      setErrors({});

      setSuccess(true);

      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error(error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="consultation-container">
      <div className="consultation-hero">
        <h1 className="consultation-title">Schedule a Consultation</h1>
        <p className="consultation-subtitle">
          Fill out the form below, and we will get back to you within 24 hours.
        </p>
      </div>

      <div className="consultation-content">
        {success && (
          <div className="consultation-success-message">
            Thank you! Your request has been received. We will contact you soon.
          </div>
        )}

        <Card className="consultation-card">
          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-4">
              <Form.Label for="name-input" className="consultation-label">Name</Form.Label>
              <Form.Control
                id="name-input"
                className={`consultation-input ${errors.name ? "is-invalid" : ""}`}
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                pattern="^[a-zA-Z\s'-]{2,50}$"
                placeholder="John Doe"
              />
              {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label for="email-input" className="consultation-label">Email</Form.Label>
              <Form.Control
                id="email-input"
                className={`consultation-input ${errors.email ? "is-invalid" : ""}`}
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                placeholder="john@example.com"
              />
              {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label for="phone-input" className="consultation-label">Phone Number</Form.Label>
              <Form.Control
                id="phone-input"
                className={`consultation-input ${errors.phoneNumber ? "is-invalid" : ""}`}
                required
                type="tel"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                pattern="^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$"
                placeholder="(123) 456-7890"
              />
              {errors.phoneNumber && <Form.Text className="text-danger">{errors.phoneNumber}</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label for="date-input" className="consultation-label">Preferred Date</Form.Label>
              <Form.Control
                id="date-input"
                className={`consultation-input ${errors.preferredDate ? "is-invalid" : ""}`}
                required
                type="date"
                name="preferredDate"
                value={form.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                max={new Date(new Date().getFullYear(), new Date().getMonth() + 2, 0).toISOString().split('T')[0]}
              />
              {errors.preferredDate && <Form.Text className="text-danger">{errors.preferredDate}</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label for="additional-details-input" className="consultation-label">Additional Details</Form.Label>
              <Form.Control
                id="additional-details-input"
                className={`consultation-input ${errors.message ? "is-invalid" : ""}`}
                as="textarea"
                rows={3}
                name="message"
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && <Form.Text className="text-danger">{errors.message}</Form.Text>}
            </Form.Group>

            <Button type="submit" className="submit-button">
              Submit
            </Button>

          </Form>
        </Card>
      </div>
    </div>
  );
}   