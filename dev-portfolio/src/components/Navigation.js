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
          <Navbar.Brand href="#home" style={styles.navLinks}>MACKENZIE LUKIC</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home" style={styles.navLinks}>INFO</Nav.Link>
              <Nav.Link href="#link" style={styles.navLinks}>WORK</Nav.Link>
              <button className='buttonLight'>GET IN TOUCH</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Navigation;
