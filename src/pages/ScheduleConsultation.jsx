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

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
              <Form.Label className="consultation-label">Name</Form.Label>
              <Form.Control
                className="consultation-input"
                required
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="consultation-label">Email</Form.Label>
              <Form.Control
                className="consultation-input"
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="consultation-label">Phone Number</Form.Label>
              <Form.Control
                className="consultation-input"
                required
                type="tel"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="consultation-label">Preferred Date</Form.Label>
              <Form.Control
                className="consultation-input"
                required
                type="date"
                name="preferredDate"
                value={form.preferredDate}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="consultation-label">Additional Details</Form.Label>
              <Form.Control
                className="consultation-input"
                as="textarea"
                rows={3}
                name="message"
                value={form.message}
                onChange={handleChange}
              />
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