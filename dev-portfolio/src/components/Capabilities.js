import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Accordion from "react-bootstrap/Accordion";
import "./styles/capabilitiesstyles.css";



function Capabilities() {
  return (
  <Container fluid className="capbg" id="capabilities">
    <Container className="capContainer">
      <Row>
        <h2>CAPABILTIES</h2>
      </Row>
      <Row>
        <Col className="frame">
          <h3>WEB <br/>DESIGN</h3>
          <p>
          Web design is my creative playground where I bring ideas to life with pixels and code. It's about translating concepts into captivating visuals that resonate with users. My designs prioritize intuitive navigation and engaging aesthetics, ensuring a seamless journey for every visitor. Through careful attention to detail, I aim to create web experiences that leave a lasting impression.
          </p>
        </Col>
        <Col className="frame">
          <h3>FRONT-END <br/>DEVELOPMENT</h3>
          <p>
          Front-end development is where I add functionality to the beauty of design. I enjoy crafting interactive elements that users can touch, click, and experience firsthand. With a focus on clean code and optimal user experience, I strive to make every website I work on responsive and user-friendly across devices. Transforming design into a dynamic reality is what truly excites me.
          </p>
        </Col>
        <Col className="frame">
          <h3>BACK-END <br/>DEVELOPMENT</h3>
          <p>
          Behind the scenes, in the realm of back-end development, I ensure that everything runs smoothly. From databases to server logic, I enjoy constructing the architecture that supports seamless functionality. My goal is to create robust and efficient systems that make the user experience seamless. I take pride in optimizing the technical foundation that powers websites and applications.
          </p>
        </Col>
      </Row>
    </Container>
  </Container>
  );
}

export default Capabilities;
