import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SelectedWorks() {
  return (
    <Container breakpoints='lg'>
    <h1>Selected Works</h1>
        <Row>
            <Container fluid="md">
                <h3>Project Title</h3>
            </Container>
        </Row>
        <Row>
            <Container fluid="md">
                <h3>Project Title</h3>
            </Container>
        </Row>
        <Row>
            <Container fluid="md">
                <h3>Project Title</h3>
            </Container>
        </Row>
        <Row>
            <Container fluid="md">
                <h3>Project Title</h3>
            </Container>
        </Row>
    </Container>
  );
}

export default SelectedWorks;