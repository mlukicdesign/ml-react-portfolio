import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles/herostyles.css";
import { motion } from "framer-motion";

function HeroSection() {
  const animationVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const textEntranceVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <Container fluid className="darkbg heroFixed">
      <Container fluid="md" className="heroContainer">
        <Row>
          <Col>
            <motion.h1
              className="name-heading"
              initial="hidden"
              animate="visible"
              variants={animationVariants}
            >
              MACKENZIE LUKIC
            </motion.h1>
            <Row>
              <Col>
                <a href="#profile">EXPLORE</a>
              </Col>
              <Col></Col>
            </Row>
          </Col>
          <Col className="left-col">
            <motion.h3
              className="intro-text"
              initial="hidden"
              animate="visible"
              variants={textEntranceVariants}
            >
              A designer & developer focused on functional,{" "}
              <span>clean and considered creative solutions.</span>
            </motion.h3>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HeroSection;
