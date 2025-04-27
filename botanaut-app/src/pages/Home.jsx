import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../components/Navbar';

export default function Home() {
    return (
      <div className="homepage">
        <Navbar />
        <img className="greeting" src="/images/greeting.svg"/>
        <div className="homepage-content">
          <Container>
          <Row>
            <Col>
              <img className="HomeLogo" src="/images/logo.svg"/>
            </Col>
            <Col>
              <img className="nova1" src="/images/nova-1.svg"/>
            </Col>
          </Row>
          <Row className="page1">
            <Col>Join NOVA and the Galactic Greening Initiative on a mission to revive forgotten planets—by making sustainable swaps right here on Earth.</Col>
          </Row>
          <Row>
            <Col className="button-description">
              <h2>Swap Smarter. Live Greener.</h2>
              <p>NOVA helps you find eco-friendly alternatives to everyday household products. From shampoo bottles to kitchen wraps, discover greener choices and reduce your carbon footprint—all while earning points for your interplanetary mission.</p>
              <a href="/Ecoswap" class="home-button">Explore Product Swaps</a>
            </Col>
            <Col>
              <img className="nova2" src="/images/nova-2.svg"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <img className="planets" src="/images/planets.svg"/>
            </Col>
            <Col className="button-description">
              <h2>Restore the Galaxy, One Green Choice at a Time.</h2>
              <p>As Nova’s Earth-side assistant, you’ll help fund planetary restoration by making real-world sustainable decisions. Every swap you make earns you Green Points, which unlock plants, creatures, and terrain on your assigned planet.</p>
              <a href="Planet" class="home-button">See your planet</a>
            </Col>
          </Row>
          <Row>
            <img className="footer" src="/images/home-footer.svg"/>
          </Row>
        </Container>
      </div>
    </div>
    );
  }