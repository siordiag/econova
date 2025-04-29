import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './theme.css';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Ecoswap from './pages/Ecoswap';
import Planet from './pages/Planet';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function AppLayout() {
  return (
    <> 
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ecoswap" element={<Ecoswap />} />
        <Route path="/planet" element={<Planet />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}