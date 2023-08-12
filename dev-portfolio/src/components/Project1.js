import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from  'framer-motion';
import './styles/projectPagestyles.css';


function Project1() {
    return (
    <Container fluid className='container-light profileSection' id="profile">
    <Container className='containerStyle'>
      <Row className='projectRow'>
        <Col className='projectCol'>
          <h2>CONSIDERED DESIGN, STRIKING BALANCE BETWEEN FUNCTION & FORM</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Enim scelerisque viverra scelerisque scelerisque egestas rhoncus neque. Lorem suspendisse nec tincidunt donec dignissim. 
            Amet feugiat vulputate habitant dui purus sed nunc in tempor. Integer mauris sed cursus ut eu leo nunc fermentum. Augue eget felis vitae bibendum amet. Nibh facilisis nulla sapien quam molestie. Tortor tortor nam est mi eget dolor. Ut sed vestibulum risus sagittis. Aliquam sed dui varius dictum eu vestibulum volutpat aenean platea.</p>
          <button className='buttonDark'>CAPABILTIES</button>
        </Col>
        </Row>
    </Container>
  </Container>
    )
}

export default Project1;