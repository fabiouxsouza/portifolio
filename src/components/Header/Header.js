import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna entre aberto e fechado
  };

  return (
    <header className="header">
      <div className="logo">Fabio Souza</div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="/" onClick={toggleMenu}>Home</a>
        <a href="/sobre" onClick={toggleMenu}>Sobre</a>
        <a href="/portfolio" onClick={toggleMenu}>Portfólio</a>
        <a href="/servicos" onClick={toggleMenu}>Serviços</a>
        <a href="/contato" onClick={toggleMenu}>Contato</a>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </button>
    </header>
  );
};

export default Header;