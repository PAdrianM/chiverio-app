import React from 'react';
import './AboutUs.css';
import pcImage from "../../assets/img/categoriesComponents/pc-categorie.png";

const AboutUs: React.FC = () => {
  return (
    <section className="about-us">
      <div className="about-us__container">
        <div className="about-us__content">
          <div className="about-us__text">
            <div className="about-us__header">
              <span className="about-us__subtitle">Quiénes somos?</span>
              <h2 className="about-us__title">Ofrecemos productos de alta calidad</h2>
            </div>
            
            <p className="about-us__description">
              En Tu Chiverio, nos especializamos en ofrecer los mejores componentes de PC, 
              laptops y celulares a precios competitivos. Nos enorgullecemos de brindar un 
              servicio de alta calidad, adaptado a las necesidades de nuestros clientes en 
              toda Guatemala.
            </p>

            <div className="about-us__stats">
              <div className="stat-card">
                <div className="stat-card__number">4.7+</div>
                <div className="stat-card__stars">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <div className="stat-card__label">Reseñas de Clientes</div>
                <p className="stat-card__text">
                  Nuestros productos son valorados con una calificación superior a 4.7 
                  estrellas por miles de usuarios satisfechos.
                </p>
              </div>

              <div className="stat-card">
                <div className="stat-card__number">A+</div>
                <div className="stat-card__stars">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <div className="stat-card__label">Calidad de Negocio</div>
                <p className="stat-card__text">
                  Nos comprometemos a ofrecer componentes de tecnología de primera 
                  clase para profesionales y entusiastas.
                </p>
              </div>
            </div>
          </div>

          <div className="about-us__visual">
            <div className="pc-image-container">
              <img 
                src={pcImage}
                alt="PC Gamer de alta calidad" 
                className="pc-image"
              />
              <div className="quality-badge">
                <div className="badge-content">
                  <span className="badge-number">#1</span>
                  <div className="badge-text">
                    <span>Top</span>
                    <span>Company</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;