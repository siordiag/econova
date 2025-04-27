import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="homepage">
        {/* HERO section with background */}
        <div className="homepage-hero">
          <Container>
            <Row>
              <Col>
                <img className="HomeLogo" src="/images/logo.svg" alt="Home Logo" />
              </Col>
              <Col>
                <img className="nova1" src="/images/nova-1.svg" alt="NOVA 1" />
              </Col>
            </Row>
            <Row className="justify-content-center mt-4">
              <div className="greeting-box">
                <h2>Greetings, Cadet.<br />I’m NOVA, your Eco-Companion.</h2>
              </div>
            </Row>
          </Container>
        </div>

        {/* Regular white content */}
        <div className="homepage-content">
          <Container>
            {/* rest of your rows */}
          </Container>
        </div>
        <Row className="page1">
            <Col>
              Join NOVA and the Galactic Greening Initiative on a mission to revive forgotten planets—by making sustainable swaps right here on Earth.
            </Col>
          </Row>
          <Row>
            <Col className="button-description">
              <h2>Swap Smarter. Live Greener.</h2>
              <p>
                NOVA helps you find eco-friendly alternatives to everyday household products. From shampoo bottles to kitchen wraps, discover greener choices and reduce your carbon footprint—all while earning points for your interplanetary mission.
              </p>
              <a href="/Ecoswap" className="home-button">Explore Product Swaps</a>
            </Col>
            <Col>
              <img className="nova2" src="/images/nova-2.svg" alt="NOVA 2" />
            </Col>
          </Row>
          <Row>
            <Col>
              <img className="planets" src="/images/planets.svg" alt="Planets" />
            </Col>
            <Col className="button-description">
              <h2>Restore the Galaxy, One Green Choice at a Time.</h2>
              <p>
                As Nova’s Earth-side assistant, you’ll help fund planetary restoration by making real-world sustainable decisions. Every swap you make earns you Green Points, which unlock plants, creatures, and terrain on your assigned planet.
              </p>
              <a href="/Planet" className="home-button">See your planet</a>
            </Col>
          </Row>
          <Row>
            <Col>
              <img className="footer" src="/images/home-footer.svg" alt="Footer" />
            </Col>
          </Row>

      </div>
    </>
  );
}
