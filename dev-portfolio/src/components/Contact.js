import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Button } from "react-bootstrap";
import "./styles/contactstyles.css";

function Contact() {
  return (
    <Container fluid className="footerGradient" id="contact">
      <Container className="contactContainer">
        <Row>
          <Col lg>
            <h2>LET'S WORK <span>TOGETHER</span></h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nunc suspendisse senectus
              tincidunt interdum at neque tincidunt viverra. Tristique nec et
              sit euismod.
            </p>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="name">
                <Form.Control type="text" placeholder="Enter your name" className="formField"/>
              </Form.Group>

              <Form.Group controlId="email">
                {/* <Form.Label>Email</Form.Label> */}
                <Form.Control type="email" placeholder="Enter your email" className="formField"/>
              </Form.Group>

              <Form.Group controlId="message">
                {/* <Form.Label>Message</Form.Label> */}
                <Form.Control
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
            <p>mlukicdesign</p>
            </Col>
            <Col className="rightAlign">
            <h4 className="footerHeading">LINKEDIN</h4>
            <p>mlukicdesign</p>
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
