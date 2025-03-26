import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div>
      {/* Barra de navegação principal */}
      <nav className="navbar">
        <div className="navbar-logo">Eu</div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>


    </div>
  );
};

export default Navbar;
