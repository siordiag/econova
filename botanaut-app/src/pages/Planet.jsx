import { ProgressBar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Planet() {
  const progress = 0;

  return (    
    <div className="planet-bg">
      <div>
        <ProgressBar now={progress} label={`${progress}%`} variant="danger" />
          <Container>
          <Row>
            <Col>
              <img className="nova3" src="/images/nova-3.svg"/>
            </Col>
            <Col>
              <img className="planethead" src="/images/planet1.svg"/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
);
}