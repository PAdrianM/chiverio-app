import React, { useState } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      {/* Botón hamburguesa (PRIMERO - izquierda en móvil) */}
      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Logo + Brand (SEGUNDO - centro en móvil, izquierda en desktop) */}
      <div className="navbar-left">
        <span className="logo">🖥️</span>
        <span className="brand">Tu Chiverio</span>
      </div>

      {/* Carrito móvil (TERCERO - derecha en móvil) */}
      <button className="cart-btn-mobile">
        <i className="fas fa-shopping-cart"></i>
      </button>

      {/* Links de navegación (Desktop) */}
      <nav className={`nav-menu desktop`}>
        <ul className="navbar-links">
          <li>
            <a href="#pcs" onClick={handleLinkClick}>
              De Escritorio
            </a>
          </li>
          <li>
            <a href="#laptops" onClick={handleLinkClick}>
              Laptops
            </a>
          </li>
          <li>
            <a href="#licenses" onClick={handleLinkClick}>
              Licencias
            </a>
          </li>
        </ul>
      </nav>

      {/* Buscador + carrito (Desktop) */}
      <div className="navbar-right">
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search" />
        </div>
        <button className="cart-btn">
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>

      {/* Menú lateral móvil */}
      <nav className={`nav-menu side ${menuOpen ? "active" : ""}`}>
        <ul className="navbar-links">
          <li>
            <a href="#pcs" onClick={handleLinkClick}>
              PCs
            </a>
          </li>
          <li>
            <a href="#laptops" onClick={handleLinkClick}>
              Laptops
            </a>
          </li>
          <li>
            <a href="#licenses" onClick={handleLinkClick}>
              Licenses
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
