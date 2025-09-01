import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    
        <Link to="/" className="navbar-left" onClick={handleLinkClick}>
          <span className="logo">🖥️</span>
          <span className="brand">Tu Chiverio</span>
        </Link>
      

      {/* Carrito móvil (TERCERO - derecha en móvil) */}
      <button className="cart-btn-mobile">
        <i className="fas fa-shopping-cart"></i>
      </button>

      {/* Links de navegación (Desktop) */}
      <nav className={`nav-menu desktop`}>
        <ul className="navbar-links">
           <li>
            <Link to="/" onClick={handleLinkClick}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/pc" onClick={handleLinkClick}>
              Computadoras
            </Link>
          </li>
          <li>
            <Link to="/laptops" onClick={handleLinkClick}>
              Laptops
            </Link>
          </li>
          <li>
            <Link to="/licencias" onClick={handleLinkClick}>
              Licencias
            </Link>
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
            <Link to="/" className="navbar-left" onClick={handleLinkClick}>
              <span className="logo">🖥️</span>
              <span className="brand">Tu Chiverio</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/pc" onClick={handleLinkClick}>
              Computadoras
            </Link>
          </li>
          <li>
            <Link to="/laptops" onClick={handleLinkClick}>
              Laptops
            </Link>
          </li>
          <li>
            <Link to="/licencias" onClick={handleLinkClick}>
              Licencias
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
