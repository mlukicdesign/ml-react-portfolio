import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/profilestyles.css';
import profilepic from '../profilepic.png';
import { motion, useViewportScroll, useAnimation } from 'framer-motion';


const animationVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const textEntranceVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
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
          <p>Lorem ipsum dolor sit amet consectetur. Enim scelerisque viverra scelerisque scelerisque egestas rhoncus neque. Lorem suspendisse nec tincidunt donec dignissim. 
            Amet feugiat vulputate habitant dui purus sed nunc in tempor. Integer mauris sed cursus ut eu leo nunc fermentum. Augue eget felis vitae bibendum amet. Nibh facilisis nulla sapien quam molestie. Tortor tortor nam est mi eget dolor. Ut sed vestibulum risus sagittis. Aliquam sed dui varius dictum eu vestibulum volutpat aenean platea.</p>
          <button className='buttonDark'>CAPABILTIES</button>
        </Col>
        </Row>
    </Container>
  </Container>
  );
}

export default ProfileSection;