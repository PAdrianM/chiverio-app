import React from 'react';
import './Product.css';

interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
  onAddToCart?: (productId: string) => void;
}

const Product: React.FC<ProductProps> = ({
  id,
  name,
  price,
  image,
  category,
  onAddToCart
}) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(id);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-GT', {
      style: 'currency',
      currency: 'GTQ'
    }).format(price);
  };

  return (
    <div className="product-card">
      <div className="product-card__decoration">
        <div className="decoration-glow"></div>
      </div>
      
      <div className="product-card__image-container">
        <img 
          src={image} 
          alt={name}
          className="product-card__image"
        />
        <div className="product-card__overlay">
          <div className="overlay-gradient"></div>
        </div>
        {category && (
          <div className="product-card__category">
            {category}
          </div>
        )}
      </div>

      <div className="product-card__content">
        <h3 className="product-card__name">{name}</h3>
        
        <div className="product-card__price-section">
          <span className="product-card__price">
            {formatPrice(price)}
          </span>
        </div>

        <button 
          className="product-card__add-btn"
          onClick={handleAddToCart}
        >
          <span className="btn-text">Añadir al Carrito</span>
          <div className="btn-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path 
                d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 18.1 16.1 19 15 19H9C7.9 19 7 18.1 7 17V13M17 13H7"
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="btn-ripple"></div>
        </button>
      </div>

      <div className="product-card__tech-border">
        <div className="tech-border-line tech-border-line--top"></div>
        <div className="tech-border-line tech-border-line--right"></div>
        <div className="tech-border-line tech-border-line--bottom"></div>
        <div className="tech-border-line tech-border-line--left"></div>
      </div>
    </div>
  );
};

export default Product;