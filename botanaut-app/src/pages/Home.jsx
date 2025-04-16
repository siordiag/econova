import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Home() {
    return (
      <Container>
      <Row>
        <Col>
          <img className="HomeLogo" src="/images/logo.svg"/>
        </Col>
        <Col>
          <img className="nova1" src="/images/nova-1.svg"/>
        </Col>
      </Row>
      <Row>
        <div style={{width: '50%', height: '100%', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 100}}>Greetings Cadet</div>
      </Row>
      <Row className="page1">
        <Col>Join NOVA and the Galactic Greening Initiative on a mission to revive forgotten planets—by making sustainable swaps right here on Earth.</Col>
      </Row>
    </Container>
    );
  }