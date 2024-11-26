import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
      </nav>
      <div style={containerStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

// Styles for navigation
const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  padding: '10px',
  backgroundColor: '#f0f0f0',
  borderBottom: '1px solid #ddd',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontSize: '18px',
};

const containerStyle = {
  padding: '20px',
};

export default App;
