import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './styles/projectstyles.css'
import { motion } from 'framer-motion';

function SelectedWorks() {
    const containerVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        initial: { height: '250px' },
        hover: { height: '400px' , transition: { duration: 0.3 } },
        };

  return (
    <Container breakpoints='lg' className='Container' id='works'>
    <h1>Selected Works</h1>
        <Row>
        <motion.div
          variants={containerVariants}
          initial='initial'
          animate='visible'
          whileHover='hover'
          className='projectContainer'
        >
          <h3>Project Title</h3>
          <a href='project1'>Project Description Here</a>
        </motion.div>
        </Row>
        <Row>
        <motion.div
          variants={containerVariants}
          initial='initial'
          animate='visible'
          whileHover='hover'
          className='projectContainer'
        >
          <h3>Project Title</h3>
          <a href='project1'>Project Description Here</a>
        </motion.div>
        </Row>
        <Row>
        <motion.div
          variants={containerVariants}
          initial='initial'
          animate='visible'
          whileHover='hover'
          className='projectContainer'
        >
          <h3>Project Title</h3>
          <a href='project1'>Project Description Here</a>
        </motion.div>
        </Row>
        <Row>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          whileHover='hover'
          className='projectContainer'
        >
          <h3>Project Title</h3>
          <a href='project1'>Project Description Here</a>
        </motion.div>
        </Row>
    </Container>
  );
}

export default SelectedWorks;