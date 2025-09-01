import React, { useState, useEffect } from 'react';
import Product from '../../cards/productCard/Product';
import type { ProductData } from '../../../pages/home/productServices';
import { productService } from '../../../pages/home/productServices';
import type { ProductCategory } from '../../../pages/home/productServices';
import './ContainerProduct.css';

interface ContainerProductProps {
  categoryTitle: string;
  apiEndpoint?: string;
  itemsPerPage?: number;
  category?: ProductCategory;
}

const ContainerProduct: React.FC<ContainerProductProps> = ({
  categoryTitle,
  // apiEndpoint,
  itemsPerPage = 10,
  category
}) => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalProducts, setTotalProducts] = useState(0);

  // Función para obtener productos usando el servicio
  const fetchProducts = async (page: number) => {
    try {
      setLoading(true);
      setError(null);

      let result;
      
      if (category) {
        // Si hay categoría específica, usar paginación con filtro
        result = await productService.getProductsWithPagination(
          page, 
          itemsPerPage, 
          category
        );
        setProducts(result.products);
        setTotalProducts(result.total);
      } else {
        // Si no hay categoría, obtener todos los productos con paginación
        result = await productService.getProductsWithPagination(
          page, 
          itemsPerPage
        );
        setProducts(result.products);
        setTotalProducts(result.total);
      }

      setLoading(false);
    } catch (err: any) {
      setError(err.message || 'Error al cargar productos');
      setProducts([]);
      setTotalProducts(0);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage, category]);

  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top when page changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAddToCart = async (productId: string) => {
    try {
      await productService.addToCart(productId, 1);
      console.log('Producto añadido al carrito:', productId);
      
      // Aquí puedes agregar lógica adicional como:
      // - Mostrar notificación de éxito
      // - Actualizar contador del carrito
      // - Actualizar estado global del carrito
      
    } catch (error: any) {
      console.error('Error al añadir al carrito:', error.message);
      // Mostrar notificación de error
    }
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const visiblePages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }

    return (
      <div className="container-product__pagination">
        <button
          className={`pagination-btn pagination-btn--prev ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {visiblePages.map((page) => (
          <button
            key={page}
            className={`pagination-btn pagination-btn--number ${currentPage === page ? 'active' : ''}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}

        <button
          className={`pagination-btn pagination-btn--next ${currentPage === totalPages ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    );
  };

  if (error) {
    return (
      <div className="container-product__error">
        <div className="error-content">
          <h3>Error al cargar productos</h3>
          <p>{error}</p>
          <button 
            className="error-retry-btn"
            onClick={() => fetchProducts(currentPage)}
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="container-product">
      <div className="container-product__header">
        <h2 className="container-product__title">{categoryTitle}</h2>
        <div className="title-decoration">
          <div className="decoration-line"></div>
        </div>
      </div>

      {loading ? (
        <div className="container-product__loading">
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
          <p>Cargando productos...</p>
        </div>
      ) : (
        <>
          <div className="container-product__grid">
            {products.map((product) => {
              // Obtener la imagen principal
              const primaryImage = product.images.find(img => img.isPrimary) || product.images[0];
              
              return (
                <Product
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={primaryImage?.url || '/images/placeholder.jpg'}
                  category={product.category}
                  onAddToCart={handleAddToCart}
                />
              );
            })}
          </div>

          {products.length === 0 && !loading && (
            <div className="container-product__empty">
              <p>No se encontraron productos en esta categoría.</p>
            </div>
          )}

          {renderPagination()}
        </>
      )}
    </section>
  );
};

export default ContainerProduct;