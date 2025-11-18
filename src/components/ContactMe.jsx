import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import "../styles/App.css";

export default function ContactMe(props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
  };

  return (
    <div>
      <h1 style={{ marginBottom: "1.5rem" }}>Let's Connect</h1>

      <Card
        className="card"
        style={{
          padding: "2rem",
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
      >
        <Form onSubmit={handleSubmit} style={{ width: "100%" }}>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="submit" variant="primary" style={{ backgroundColor: "#E85C2A", borderColor: "#E85C2A", borderRadius: 10 }}>
            Submit
          </Button>

        </Form>
      </Card>
    </div>
  );
}