import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <div className="homepage">
        <Navbar />

        {/* Hero Section - Planet Background */}
        <div className="homepage-hero">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <img className="HomeLogo" src="/images/logo.svg" alt="Home Logo" />
              </Col>
              <Col md={6}>
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

        {/* White Section - Main Content */}
        <div className="homepage-content">
          <Container>

            {/* Mission Statement */}
            <Row className="page1 justify-content-center">
              <Col md={10}>
                <h2>Join NOVA and the Galactic Greening Initiative on a mission to revive forgotten planets—by making sustainable swaps right here on Earth.</h2>
              </Col>
            </Row>

            {/* First Z Layout - Image Left, Text Right */}
            <Row className="align-items-center my-5">
              <Col md={6}>
                <img className="nova2" src="/images/nova-2.svg" alt="NOVA 2" />
              </Col>
              <Col md={6} className="button-description">
                <h2>Swap Smarter. Live Greener.</h2>
                <p>
                  NOVA helps you find eco-friendly alternatives to everyday household products. 
                  From shampoo bottles to kitchen wraps, discover greener choices and reduce your 
                  carbon footprint—all while earning points for your interplanetary mission.
                </p>
                <a href="/Ecoswap" className="home-button">Explore Product Swaps</a>
              </Col>
            </Row>

            {/* Second Z Layout - Text Left, Image Right */}
            <Row className="align-items-center my-5 flex-md-row-reverse">
              <Col md={6}>
                <img className="planets" src="/images/planets.svg" alt="Planets" />
              </Col>
              <Col md={6} className="button-description">
                <h2>Restore the Galaxy, One Green Choice at a Time.</h2>
                <p>
                  As Nova’s Earth-side assistant, you’ll help fund planetary restoration 
                  by making real-world sustainable decisions. Every swap you make earns 
                  you Green Points, unlocking plants, creatures, and terrain on your assigned planet.
                </p>
                <a href="/Planet" className="home-button">See Your Planet</a>
              </Col>
            </Row>

            {/* Footer Image */}
            <Row className="justify-content-center mt-5">
              <Col md={8}>
                <img className="footer" src="/images/home-footer.svg" alt="Footer" />
              </Col>
            </Row>

          </Container>
        </div>

      </div>
    </>
  );
}