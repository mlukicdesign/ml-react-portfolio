import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import "./styles/capabilitiesstyles.css";



function Capabilities() {
  return (
  <Container fluid className="capbg" id="capabilities">
    <Container className="capContainer">
      <Row>
        <Col lg>
          <h2>CAPABILTIES</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Enim scelerisque viverra
            scelerisque scelerisque egestas rhoncus neque. Lorem suspendisse nec
            tincidunt donec dignissim. Amet feugiat vulputate habitant dui purus
            sed nunc in tempor. Integer mauris sed cursus ut eu leo nunc
            fermentum. Augue eget felis vitae bibendum amet. Nibh facilisis
            nulla sapien quam molestie. Tortor tortor nam est mi eget dolor. Ut
            sed vestibulum risus sagittis. Aliquam sed dui varius dictum eu
            vestibulum volutpat aenean platea.
          </p>
          <button className="buttonLight">CONTACT</button>
        </Col>
        <Col>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0" >
              <Accordion.Header >Accordion Item #1</Accordion.Header>
              <Accordion.Body className="accordionHeader">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  </Container>
  );
}

export default Capabilities;
