import React from "react";
import "./PromoBanner.css";

const PromoBanner: React.FC = () => {
  return (
    <section className="promo-banner">
      <div className="promo-banner__container">
        <div className="promo-banner__content">
          <div className="promo-banner__text">
            <h2 className="promo-banner__title">El mejor servicio</h2>
            <p className="promo-banner__description">
              En Tu Chiverio, te ofrecemos componentes de alta calidad para que
              lleves tu experiencia tecnológica al siguiente nivel. Contamos con
              un equipo comprometido y envíos rápidos para que recibas todo lo
              que necesitas en el menor tiempo posible.
            </p>
            <button className="promo-banner__button">Ver disponibles</button>
          </div>
          <div className="promo-banner__visual">
            <div className="promo-laptop-container">
              {/* Laptop Base */}
              <div className="laptop-base">
                <div className="laptop-keyboard">
                  <div className="keyboard-row">
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                  </div>
                  <div className="keyboard-row">
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                  </div>
                  <div className="trackpad"></div>
                </div>
              </div>

              {/* Laptop Screen */}
              <div className="promo-laptop-screen">
                <div className="screen-frame">
                  <div className="screen-content">
                    {/* Tu Chiverio Logo integrado en la pantalla */}
                    <div className="screen-logo">
                      <div className="logo-text">TU</div>
                      <div className="logo-text logo-text--main">CHIVERIO</div>
                      <div className="logo-domain">.COM</div>
                      <div className="logo-cursor">▶</div>
                    </div>
                    <div className="screen-glow"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="promo-banner__decoration">
              <div className="decoration-circle decoration-circle--1"></div>
              <div className="decoration-circle decoration-circle--2"></div>
              <div className="decoration-circle decoration-circle--3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
