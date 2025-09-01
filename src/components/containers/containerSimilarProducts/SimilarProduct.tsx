import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ProductData } from '../../../pages/home/productServices';
import { productService } from '../../../pages/home/productServices';
import './SimilarProducts.css';

interface SimilarProductsProps {
  currentProductId: string;
  onAddToCart?: (productId: string) => void;
  limit?: number;
}

const SimilarProducts: React.FC<SimilarProductsProps> = ({ 
  currentProductId, 
  onAddToCart,
  limit = 4 
}) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const similarProducts = await productService.getSimilarProducts(currentProductId, limit);
        setProducts(similarProducts);
      } catch (err: any) {
        setError(err.message || 'Error al cargar productos similares');
      } finally {
        setLoading(false);
      }
    };

    if (currentProductId) {
      fetchSimilarProducts();
    }
  }, [currentProductId, limit]);

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
    // Scroll to top when navigating to new product
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = async (e: React.MouseEvent, productId: string) => {
    e.stopPropagation(); // Evitar que se dispare el click del card

    try {
      await productService.addToCart(productId, 1);
      
      if (onAddToCart) {
        onAddToCart(productId);
      }

      console.log(`Producto ${productId} añadido al carrito`);
    } catch (err: any) {
      console.error('Error al añadir al carrito:', err.message);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-GT', {
      style: 'currency',
      currency: 'GTQ'
    }).format(price);
  };

  if (loading) {
    return (
      <section className="similar-products">
        <div className="similar-products__container">
          <div className="similar-products__header">
            <h2 className="similar-products__title">Productos Similares</h2>
            <div className="title-decoration">
              <div className="decoration-line">
                <div className="decoration-dot"></div>
              </div>
            </div>
          </div>
          <div className="similar-products__loading">
            <div className="loading-spinner">
              <div className="spinner"></div>
            </div>
            <p>Cargando productos similares...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="similar-products">
        <div className="similar-products__container">
          <div className="similar-products__header">
            <h2 className="similar-products__title">Productos Similares</h2>
            <div className="title-decoration">
              <div className="decoration-line">
                <div className="decoration-dot"></div>
              </div>
            </div>
          </div>
          <div className="similar-products__error">
            <p>Error al cargar productos similares: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="similar-products">
        <div className="similar-products__container">
          <div className="similar-products__header">
            <h2 className="similar-products__title">Productos Similares</h2>
            <div className="title-decoration">
              <div className="decoration-line">
                <div className="decoration-dot"></div>
              </div>
            </div>
          </div>
          <div className="similar-products__empty">
            <p>No se encontraron productos similares.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="similar-products">
      <div className="similar-products__container">
        <div className="similar-products__header">
          <h2 className="similar-products__title">Productos Similares</h2>
          <div className="title-decoration">
            <div className="decoration-line">
              <div className="decoration-dot"></div>
            </div>
          </div>
        </div>

        <div className="similar-products__grid">
          {products.map((product) => {
            const primaryImage = product.images.find(img => img.isPrimary) || product.images[0];
            
            return (
              <div
                key={product.id}
                className="similar-product-card"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="similar-product-card__decoration">
                  <div className="decoration-glow"></div>
                </div>

                <div className="similar-product-card__image-container">
                  <img 
                    src={primaryImage.url} 
                    alt={primaryImage.alt}
                    className="similar-product-card__image"
                  />
                  <div className="overlay-gradient"></div>
                  
                  <div className="similar-product-card__category">
                    {product.category}
                  </div>
                </div>

                <div className="similar-product-card__content">
                  <h3 className="similar-product-card__name">{product.name}</h3>
                  
                  <div className="similar-product-card__price-section">
                    <div className="price-label">Precio</div>
                    <div className="similar-product-card__price">
                      {formatPrice(product.price)}
                    </div>
                  </div>

                  <button
                    className="similar-product-card__add-btn"
                    onClick={(e) => handleAddToCart(e, product.id)}
                    disabled={!product.inStock}
                  >
                    <span className="btn-text">
                      {!product.inStock ? 'Sin Stock' : 'Añadir al Carrito'}
                    </span>
                    <div className="btn-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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

                <div className="similar-product-card__tech-border">
                  <div className="tech-border-line tech-border-line--top"></div>
                  <div className="tech-border-line tech-border-line--right"></div>
                  <div className="tech-border-line tech-border-line--bottom"></div>
                  <div className="tech-border-line tech-border-line--left"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SimilarProducts;