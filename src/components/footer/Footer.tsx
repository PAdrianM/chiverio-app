import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__decoration">
          <div className="decoration-circle decoration-circle--1"></div>
          <div className="decoration-circle decoration-circle--2"></div>
          <div className="decoration-circle decoration-circle--3"></div>
        </div>
        
        <div className="footer__content">
          {/* Features Section */}
          <div className="footer__features">
            <div className="feature-card">
              <div className="feature-card__icon">
                <div className="icon-tech icon-tech--new"></div>
              </div>
              <div className="feature-card__content">
                <h3 className="feature-card__title">Producto Nuevo</h3>
                <p className="feature-card__description">
                  Nuestros productos son completamente nuevos, garantizados y listos para 
                  ofrecerte la mejor experiencia.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon">
                <div className="icon-tech icon-tech--warranty"></div>
              </div>
              <div className="feature-card__content">
                <h3 className="feature-card__title">180 Días de garantía</h3>
                <p className="feature-card__description">
                  Disfruta de una garantía extendida de 180 días. Si tienes algún inconveniente, 
                  estamos aquí para ayudarte.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon">
                <div className="icon-tech icon-tech--shipping"></div>
              </div>
              <div className="feature-card__content">
                <h3 className="feature-card__title">Envío Nacional</h3>
                <p className="feature-card__description">
                  Ofrecemos envíos rápidos a cualquier lugar del país. Recibe tu compra sin demoras.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon">
                <div className="icon-tech icon-tech--secure"></div>
              </div>
              <div className="feature-card__content">
                <h3 className="feature-card__title">100% Seguro</h3>
                <p className="feature-card__description">
                  Realiza tus pagos de manera segura con la opción de cuotas flexibles y 
                  protección total.
                </p>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="footer__main">
            {/* Payment Section */}
            <div className="footer__payment">
              <h3 className="footer__section-title">Pagos seguros y fáciles</h3>
              <p className="footer__payment-description">
                Realiza tus compras de manera rápida y segura con nuestras opciones de pago confiables, 
                incluyendo Visa Cuotas, Pago Contra Entrega, y más.
              </p>
              {/* <div className="payment-methods">
                <div className="payment-card">VISA</div>
                <div className="payment-card">PayPal</div>
                <div className="payment-card">MC</div>
                <div className="payment-card">Maestro</div>
              </div> */}
            </div>

            {/* Navigation Sections */}
            <div className="footer__nav-sections">
              <div className="footer__nav-column">
                <h3 className="footer__section-title">Soporte</h3>
                <ul className="footer__nav-list">
                  <li><a href="/contacto" className="footer__nav-link">Contact us</a></li>
                  <li><a href="/help" className="footer__nav-link">Help Center</a></li>
                </ul>
              </div>

              <div className="footer__nav-column">
                <h3 className="footer__section-title">Productos</h3>
                <ul className="footer__nav-list">
                  <li><a href="/pcs" className="footer__nav-link">PC's</a></li>
                  <li><a href="/laptops" className="footer__nav-link">Laptops</a></li>
                  <li><a href="/celulares" className="footer__nav-link">Celulares</a></li>
                  <li><a href="/perifericos" className="footer__nav-link">Periféricos</a></li>
                  <li><a href="/ofertas" className="footer__nav-link">Ofertas</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer__bottom">
            <div className="footer__brand">
              <div className="footer__logo">
                <span className="logo-text">TU CHIVERIO</span>
                <div className="logo-glow"></div>
              </div>
            </div>
            
            <div className="footer__copyright">
              <p>Copyright © 205 TuChiverio.com, All rights reserved. Powered by TegidoDigital.com</p>
            </div>

            <div className="footer__social">
              <a href="#" className="social-link">
                <div className="social-icon social-icon--facebook"></div>
              </a>
              <a href="#" className="social-link">
                <div className="social-icon social-icon--instagram"></div>
              </a>
              <a href="#" className="social-link">
                <div className="social-icon social-icon--tiktok"></div>
              </a>
              <a href="#" className="social-link">
                <div className="social-icon social-icon--whatsapp"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;