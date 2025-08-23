import React, { useState } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      {/* Logo + Brand */}
      <div className="navbar-left">
        <span className="logo">🖥️</span>
        <span className="brand">Tu Chiverio</span>
      </div>

      {/* Links de navegación */}
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

      {/* Buscador + carrito */}
      <div className="navbar-right">
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search" />
        </div>
        <button className="cart-btn">
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>

      {/* Botón hamburguesa (solo móvil) */}
      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

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
