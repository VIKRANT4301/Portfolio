import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">VIKRANT CHAKOLE</Link>
      </div>

      <nav className={isMobileMenuOpen ? 'nav open' : 'nav'}>
        <Link to="/" onClick={toggleMobileMenu}>Home</Link>
        <Link to="/about" onClick={toggleMobileMenu}>About</Link>
        <Link to="/projects" onClick={toggleMobileMenu}>Projects</Link>
        <Link to="/contact" onClick={toggleMobileMenu}>Contact</Link>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={toggleMobileMenu}>Resume</a>
      </nav>

      <button className="menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Header;
