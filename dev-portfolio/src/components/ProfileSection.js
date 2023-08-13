import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/profilestyles.css';
import profilepic from '../Images/profilepic.png';
import { motion } from 'framer-motion';


const animationVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};


const styles = {
  profilepic: {
    position: "relative",
    bottom: "50px",
    width: '300px',
    height: 'auto',
  }
};


function ProfileSection() {
  return (
  <Container fluid className='container-light profileSection' id="profile">
    <Container className='containerStyle'>
      <Row>
      <Col md={4}>
        <motion.div
        initial='hidden'
        animate='visible'
        variants={animationVariants}
        >
          <img src={profilepic} style={styles.profilepic} alt="profile pic"></img>
        </motion.div>
      </Col>
        <Col>
          <h2>CONSIDERED DESIGN, STRIKING BALANCE BETWEEN FUNCTION & FORM</h2>
          <p>
In my design approach, I enjoy blending the realms of front-end and back-end development. It's all about crafting solutions that smoothly unite functionality and aesthetics, creating user experiences that feel just right. Throughout my projects, you'll find this balance between purpose and visual appeal, highlighting the intentional fusion of form and function that defines my work.</p>
          <a href="/" className='buttonDark'>CAPABILTIES</a>
        </Col>
        </Row>
    </Container>
  </Container>
  );
}

export default ProfileSection;