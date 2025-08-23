import React, { useState } from 'react';
import './Navbar.css';

interface NavbarProps {
    logoText?: string;
    contactEmail?: string;
    menuItems?: Array<{
        label: string;
        href: string;
    }>;
}

export const Navbar: React.FC<NavbarProps> = ({
    logoText = "Tu Chiverío",
    contactEmail = "ventas@tuchiverio.com",
    menuItems = [
        { label: "Inicio", href: "#hero" },
        { label: "Productos", href: "#products" },
        { label: "Servicios", href: "#services" },
        { label: "Contacto", href: "#footer" }
    ]
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="logo">{logoText}</div>
            
            <button 
                className="menu-toggle" 
                aria-label="Toggle navigation menu"
                onClick={toggleMenu}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                {menuItems.map((item, index) => (
                    <a 
                        key={index}
                        href={item.href}
                        onClick={closeMenu}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
            
            <a 
                href={`mailto:${contactEmail}`} 
                className="cta-button"
            >
                Contáctanos
            </a>
        </header>
    );
};