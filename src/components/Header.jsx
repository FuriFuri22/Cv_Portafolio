import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Css/Header.css';

const Header = ({ scrollToSection } ) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 const closeMenu = () => {
    setMenuOpen(false);
  }
  return (
    <header className="header">
      <h1></h1>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/#home" smooth onClick={ (e) => {scrollToSection(e, '#home');closeMenu}} >Inicio</Link></li>
          <li><Link to="/#about" smooth onClick={(e) => {scrollToSection(e, '#about');closeMenu}} >Sobre mi</Link></li>
          <li><Link to="/#projects" smooth onClick={(e) => {scrollToSection(e, '#projects');closeMenu}} >Proyectos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;