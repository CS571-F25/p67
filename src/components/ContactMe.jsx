import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import "../App.css";

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
    e?.prventDefault();

    fetch("https://uwprod-my.sharepoint.com/personal/jpliszka_wisc_edu/_layouts/15/doc.aspx?sourcedoc={af7b924a-f4c1-4a74-b903-95fd5b8ddca8}&action=edit", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });
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