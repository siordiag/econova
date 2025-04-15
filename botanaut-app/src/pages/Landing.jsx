import TypeIt from "typeit-react";
import Button from 'react-bootstrap/Button';
import Logo from '../components/Logo';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Landing() {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-brand-primary">
      <Logo />
      <div className="landing-content">
      <TypeIt as="p" options={{ speed: 20, cursor: false }}>
          [Accessing Earth Status Report…]
        </TypeIt>

        <TypeIt as="p" options={{ speed: 20, startDelay: 1000, cursor: false }}>
          SYSTEM LOG: Climate instability detected.
        </TypeIt>

        <TypeIt as="p" options={{ speed: 20, startDelay: 3000, cursor: false }}>
          INITIATING: Project EcoNOVA
        </TypeIt>

        <TypeIt as="p" options={{ speed: 20, startDelay: 5000, cursor: false }}>
          Greetings, Cadet. I’m NOVA – your Eco-Companion.
        </TypeIt>

        <TypeIt as="p" options={{ speed: 10, startDelay: 7000, cursor: false }}>
          Our mission: Replace harmful household products with eco-friendly alternatives. Your choices can shift the balance.
        </TypeIt>

        <TypeIt
          as="p"
          options={{
            cursor: true,
            speed: 20,
            startDelay: 10000,
            afterComplete: () => setShowButton(true),
          }}
        >
        Ready to launch and start swapping?
        </TypeIt>
        {showButton && (
          <Button
            variant="outline-light"
            onClick={() => navigate('/home')}
            style={{ marginTop: '2rem' }}
          >
            Begin Mission
          </Button>
        )}
      </div>
    </div>
  );
}