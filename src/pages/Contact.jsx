import React, { useState } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("https://formspree.io/f/yourFormId", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: "#0f172a", minHeight: "100vh" }} className="text-light py-5 px-3 position-relative">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/260970067982"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "50%",
          padding: "15px",
          fontSize: "24px",
          zIndex: 999,
        }}
      >
        <FaWhatsapp />
      </a>

      {/* About Section */}
      <div className="container text-center mb-5">
        <h1 className="mb-4" style={{ color: "#38bdf8" }}>About Me</h1>
        <p className="fs-5">
          I'm Reuben Ng'uni, a dedicated and innovative tech specialist with 4+ years in full-stack development, networking, and security systems.
          I specialize in building responsive MERN stack applications, configuring secure networks, and deploying CCTV solutions tailored to client needs.
        </p>
        <p className="fs-5">
          With a strong background in server management, cloud technologies, and UI/UX design, I aim to deliver robust digital solutions that solve real-world problems.
        </p>
      </div>

      {/* Contact Form */}
      <div className="container" style={{ maxWidth: "600px" }}>
        <h2 className="mb-4 text-center" style={{ color: "#38bdf8" }}>Contact Me</h2>

        {success && <Alert variant="success">✅ Message sent successfully!</Alert>}
        {error && <Alert variant="danger">❌ {error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={5}
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="outline-info" type="submit" className="w-100" disabled={loading}>
            {loading ? (
              <>
                <Spinner animation="border" size="sm" className="me-2" /> Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </Form>

        <div className="text-center mt-4">
          <p>Or reach me directly via:</p>
          <p>
            WhatsApp: <a href="https://wa.me/260970067982" className="text-info">+260 97006 7982</a><br />
            Email: <a href="mailto:ngunireubenjr@example.com" className="text-info">ngunireubenjr@example.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
