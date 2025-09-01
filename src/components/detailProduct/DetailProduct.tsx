import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { ProductData } from '../../pages/home/productServices';
import { productService } from '../../pages/home/productServices';
import './DetailProduct.css';

interface DetailProductProps {
  onAddToCart?: (productId: string, quantity: number) => void;
}

const DetailProduct: React.FC<DetailProductProps> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        setError('ID de producto no válido');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const productData = await productService.getProductById(id);
        
        if (!productData) {
          setError('Producto no encontrado');
        } else {
          setProduct(productData);
        }
      } catch (err: any) {
        setError(err.message || 'Error al cargar el producto');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleImageSelect = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= (product?.stockQuantity || 1)) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = async () => {
    if (!product) return;

    try {
      setIsAddingToCart(true);
      
      // Simular llamada al servicio
      await productService.addToCart(product.id, quantity);
      
      // Llamar al callback si está disponible
      if (onAddToCart) {
        onAddToCart(product.id, quantity);
      }

      // Mostrar feedback visual (podrías agregar una toast notification aquí)
      console.log(`Producto ${product.name} añadido al carrito`);
      
    } catch (err: any) {
      console.error('Error al añadir al carrito:', err.message);
      // Aquí podrías mostrar un mensaje de error al usuario
    } finally {
      setIsAddingToCart(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-GT', {
      style: 'currency',
      currency: 'GTQ'
    }).format(price);
  };

  const handleNavigateBack = () => {
    // Determinar la ruta de regreso basada en la categoría
    const categoryRoutes: { [key: string]: string } = {
      'Laptops': '/laptops',
      'PC': '/pc',
      'Licencias': '/licencias'
    };

    const backRoute = product ? categoryRoutes[product.category] : '/';
    navigate(backRoute);
  };

  if (loading) {
    return (
      <div className="detail-product">
        <div className="detail-product__container">
          <div className="detail-product__loading">
            <div className="loading-spinner">
              <div className="spinner"></div>
            </div>
            <p>Cargando producto...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="detail-product">
        <div className="detail-product__container">
          <div className="detail-product__error">
            <div className="error-content">
              <h3>Error al cargar producto</h3>
              <p>{error}</p>
              <button 
                className="error-retry-btn"
                onClick={() => window.location.reload()}
              >
                Reintentar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentImage = product.images[selectedImageIndex];

  return (
    <div className="detail-product">
      <div className="detail-product__container">
        {/* Breadcrumb */}
        <nav className="detail-product__breadcrumb">
          <span className="breadcrumb-item" onClick={() => navigate('/')}>
            Inicio
          </span>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-item" onClick={handleNavigateBack}>
            {product.category}
          </span>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-item breadcrumb-item--current">
            {product.name}
          </span>
        </nav>

        {/* Main Content */}
        <div className="detail-product__content">
          {/* Image Section */}
          <div className="detail-product__image-section">
            <div className="detail-product__main-image-container">
              <img 
                src={currentImage.url} 
                alt={currentImage.alt}
                className="detail-product__main-image"
              />
              <div className="image-overlay-gradient"></div>
            </div>

            {/* Thumbnails */}
            <div className="detail-product__thumbnails">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  className={`thumbnail-button ${selectedImageIndex === index ? 'thumbnail-button--active' : ''}`}
                  onClick={() => handleImageSelect(index)}
                >
                  <img 
                    src={image.url} 
                    alt={image.alt}
                    className="thumbnail-image"
                  />
                  <div className="thumbnail-border"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="detail-product__info-section">
            <div className="detail-product__category-badge">
              {product.category}
            </div>

            <h1 className="detail-product__title">{product.name}</h1>

            <div className="detail-product__price-section">
              <div className="price-label">Precio</div>
              <div className="detail-product__price">
                {formatPrice(product.price)}
              </div>
            </div>

            <p className="detail-product__description">
              {product.longDescription || product.description}
            </p>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="detail-product__features">
                <h3 className="features-title">Características Principales</h3>
                <div className="features-grid">
                  {product.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <span className="feature-label">{feature.label}</span>
                      <span className="feature-value">{feature.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Purchase Section */}
            <div className="detail-product__purchase-section">
              <div className="quantity-selector">
                <span className="quantity-label">Cantidad:</span>
                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <span className="quantity-display">{quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= (product.stockQuantity || 1)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              <button
                className="detail-product__add-to-cart-btn"
                onClick={handleAddToCart}
                disabled={!product.inStock || isAddingToCart}
              >
                <span className="btn-text">
                  {isAddingToCart ? 'Añadiendo...' : 
                   !product.inStock ? 'Sin Stock' : 
                   'Añadir al Carrito'}
                </span>
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

            {/* Specifications */}
            {product.specifications && product.specifications.length > 0 && (
              <div className="detail-product__specifications">
                <h3 className="specifications-title">Especificaciones Técnicas</h3>
                <div className="specifications-list">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="spec-item">
                      <span className="spec-label">{spec.label}</span>
                      <span className="spec-value">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;