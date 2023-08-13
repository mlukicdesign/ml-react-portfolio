import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles/navstyles.css';


const styles = {
  navLinks: {
    color: 'white',
    fontSize: '1rem',
    fontFamily: 'Arbeit-Regular',
    paddingRight: '1rem',
  }
}


function Navigation() {
    return (
      <Navbar expand="lg" className="navContainer" fixed='top'>
        <Container className='navBar'>
          <Navbar.Brand href="/" style={styles.navLinks}>MACKENZIE LUKIC</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/#profile" style={styles.navLinks}>ABOUT</Nav.Link>
              <Nav.Link href="/#capabilities" style={styles.navLinks}>PROCESS</Nav.Link>
              <Nav.Link href="/#works" style={styles.navLinks}>WORK</Nav.Link>
              <Nav.Link className='buttonLight' href="/#contact">GET IN TOUCH</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Navigation;
