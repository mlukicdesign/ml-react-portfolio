import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from  'framer-motion';
import './styles/projectPagestyles.css';
import greentrips from '../Images/greentrips-img.jpg';


function Project1() {
    return (
    <Container fluid className='container-light profileSection'>
    <Container className='containerStyle'>
      <Row className='projectRow'>
        <Container className=''>
          <img src={greentrips} alt='greentrips' className='projectImg'></img>
          </Container>
        <Col className='projectCol'>
          <h1>PROJECT TITLE <span>LOREM IPSUM</span></h1>
          <p className='projectContent'>Lorem ipsum dolor sit amet consectetur. Enim scelerisque viverra scelerisque scelerisque egestas rhoncus neque. Lorem suspendisse nec tincidunt donec dignissim. 
            Amet feugiat vulputate habitant dui purus sed nunc in tempor. Integer mauris sed cursus ut eu leo nunc fermentum. Augue eget felis vitae bibendum amet. Nibh facilisis nulla sapien quam molestie. Tortor tortor nam est mi eget dolor. Ut sed vestibulum risus sagittis. Aliquam sed dui varius dictum eu vestibulum volutpat aenean platea.</p>
          <h4>Technologies</h4>
          <p>
            Javascript, Node JS, API, Express, MongoDB, Mongoose, React, React Router, 
          </p>
          <h4 href="">View on Github</h4>
          <a className='buttonDark' href="/">Back to Home</a>
        <Row className='projectRow'>
        </Row>
        </Col>
        </Row>
    </Container>
  </Container>
    )
}

export default Project1;