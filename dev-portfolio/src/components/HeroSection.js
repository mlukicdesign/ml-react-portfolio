import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/herostyles.css';
import { motion } from "framer-motion"



function HeroSection() {

  const animationVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
  <Container fluid className='darkbg'>
    <Container fluid="md" className='heroContainer'>
      <Row>
        <Col>
              <motion.h1
      className='name-heading'
      initial='hidden'
      animate='visible'
      variants={animationVariants}
    >
      MACKENZIE LUKIC
    </motion.h1>
            <Row>
              <Col>
              <p>VIEW WORKS</p>
              </Col>
              <Col>
              <p>VIEW WORKS</p>
              </Col>
            </Row>
        </Col>
        <Col className='left-col'>
            <h4 className='intro-text'>A digital and brand designer focused on functional, clean and considered creative solutions.</h4>
        </Col>
      </Row>
    </Container>
  </Container>
  );
}

export default HeroSection;

