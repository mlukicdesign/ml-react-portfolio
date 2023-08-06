import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Button } from "react-bootstrap";
import "./styles/contactstyles.css";

function Contact() {
  return (
    <Container fluid className="footerGradient">
      <Container className="contactContainer">
        <Row>
          <Col l>
            <h2>LET'S WORK TOGETHER</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nunc suspendisse senectus
              tincidunt interdum at neque tincidunt viverra. Tristique nec et
              sit euismod.
            </p>
          </Col>
          <Col l>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
    <Row className="footer">
        <Col>
        <h1 className="name-heading">MACKENZIE LUKIC</h1>
        </Col>
        <Col>
            <Row>
            <Col>
            <h4>Github</h4>
            <p>mlukicdesign</p>
            </Col>
            <Col>
            <h4>Github</h4>
            <p>mlukicdesign</p>
            </Col>
            </Row>
        </Col>
    </Row>
        <Row>
            <Col>@2023 All Rights Reserved</Col>
            <Col>Weather widget</Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
