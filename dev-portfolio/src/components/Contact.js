import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Button } from "react-bootstrap";
import "./styles/contactstyles.css";
import { useState } from "react";

// Contact form logic

function Contact() {
  const [validated, setValidated] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setValidated(true);
      setShowSuccessMessage(true);
    }

    e.preventDefault();
  };

  return (
    <Container fluid className="footerGradient" id="contact">
      <Container className="contactContainer">
        <Row>
          <Col lg>
            <h2>
              LET'S WORK <span>TOGETHER</span>
            </h2>
            <p>
              I'm all about teaming up to tackle challenges and spark new ideas.
              Collaboration fuels innovation, and I'm ready to dive into
              projects that benefit from diverse expertise. If you're looking to
              bring your concept to life or push the boundaries of what's
              possible, let's connect our skills and make it happen. Your goals,
              my know-how – a winning combination."
            </p>
          </Col>
          <Col>
            <div>
              {showSuccessMessage ? (
                <div className="success-message">
                  <p>
                    Thank you for getting in contact. I'll get back to you
                    shortly!
                  </p>
                </div>
              ) : null}
            </div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your name"
                  className="formField"
                />
              </Form.Group>

              <Form.Group controlId="email">
                {/* <Form.Label>Email</Form.Label> */}
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter your email"
                  className="formField"
                />
              </Form.Group>

              <Form.Group controlId="message">
                {/* <Form.Label>Message</Form.Label> */}
                <Form.Control
                  required
                  as="textarea"
                  rows={4}
                  placeholder="Your challenge"
                  className="formField"
                />
              </Form.Group>

              <Button type="submit" className="formBtn">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="footer">
          <Col>
            <h1 className="name-footer">MACKENZIE LUKIC</h1>
          </Col>
          <Col>
            <Row>
              <Col className="rightAlign">
                <h4 className="footerHeading">GITHUB</h4>
                <a href="https://github.com/mlukicdesign" target="blank">
                  EXPLORE
                </a>
              </Col>
              <Col className="rightAlign">
                <h4 className="footerHeading">LINKEDIN</h4>
                <a
                  href="https://linkedin.com/in/mackenzie-lukic-380904147"
                  target="blank"
                >
                  CONNECT
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>@2023 All Rights Reserved</Col>
          <Col className="rightAlign">Weather widget</Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
