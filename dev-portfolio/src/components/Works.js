import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './styles/projectstyles.css'
import { motion } from 'framer-motion';
import Background1 from '../Images/greentrips-bg.jpg'
import Background2 from '../Images/socialapi-bg.jpg'
import Background3 from '../Images/react-bg.jpg'
import Background4 from '../Images/techblog-bg.jpg'


// const styles = {
//   greenTrips: {
//     backgroundImage: "src"../Images/greentrips-img.jpg"
//   }
// }


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
          initial='hidden'
          animate='visible'
          whileHover='hover'
          className='projectContainer'
          style={{
            background: `url(${Background1})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <h3>Green Trips</h3>
          <a href='project1'>View Project</a>
        </motion.div>
        </Row>
        <Row>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          whileHover='hover'
          className='projectContainer'
          style={{
            background: `url(${Background2})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          
        >
          <h3>Social Network API</h3>
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
          style={{
            background: `url(${Background3})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <h3>Ravenous React</h3>
          <a href='project1'>View Project</a>
        </motion.div>
        </Row>
        <Row>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          whileHover='hover'
          className='projectContainer'
          style={{
            background: `url(${Background4})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <h3>MVC Tech Blog</h3>
          <a href='project1'>View Project</a>
        </motion.div>
        </Row>
    </Container>
  );
}

export default SelectedWorks;