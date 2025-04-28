import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div className="logo-corner">
      <Link to="/">
        <img src="/images/logo.svg" alt="EcoNova Logo" />
      </Link>
    </div>
  );
}