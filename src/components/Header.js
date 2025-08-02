// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{
    padding: '20px',
    background: '#282c34',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }}>
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
  <img 
    src="/MYLOGO.png"  // Update with your actual image path
    alt="Sim-portal Logo"
    style={{ height: '40px' }} // Adjust size as needed
  />
</Link>

</Link>
    <nav style={{ display: 'flex', gap: '20px' }}>
      <Link to="/chemistry" style={{ color: 'white', textDecoration: 'none' }}>Chemistry</Link>
      <Link to="/physics" style={{ color: 'white', textDecoration: 'none' }}>Physics</Link>
      <Link to="/consult" style={{ color: 'white', textDecoration: 'none' }}>Projects</Link>
      <Link to="/stem" style={{ color: 'white', textDecoration: 'none' }}>Kits</Link>
      <Link to="/questions" style={{ color: 'white', textDecoration: 'none' }}>Q&A</Link>
    </nav>
  </header>
);

export default Header;
