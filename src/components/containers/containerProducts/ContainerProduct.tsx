import React, { useState, useEffect } from 'react';
import Product from '../../cards/productCard/Product';
import './ContainerProduct.css';

interface ProductData {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

interface ContainerProductProps {
  categoryTitle: string;
  apiEndpoint?: string;
  itemsPerPage?: number;
  category?: string;
}

const ContainerProduct: React.FC<ContainerProductProps> = ({
  categoryTitle,
  apiEndpoint,
  itemsPerPage = 10,
  category
}) => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalProducts, setTotalProducts] = useState(0);

  // Dummy data para MUESTRA
  const dummyProducts: ProductData[] = [
    {
      id: '1',
      name: 'UltraBook Pro 15',
      price: 1299,
      image: '/images/laptop-1.jpg',
      category: 'Laptops',
      description: 'High-performance laptop for professionals'
    },
    {
      id: '2',
      name: 'PowerBook X17',
      price: 1799,
      image: '/images/laptop-2.jpg',
      category: 'Laptops',
      description: 'Ultimate gaming and productivity machine'
    },
    {
      id: '3',
      name: 'AirBook 13',
      price: 999,
      image: '/images/laptop-3.jpg',
      category: 'Laptops',
      description: 'Lightweight and portable for everyday use'
    },
    {
      id: '4',
      name: 'ZenBook S',
      price: 1499,
      image: '/images/laptop-4.jpg',
      category: 'Laptops',
      description: 'Premium design meets powerful performance'
    },
    {
      id: '5',
      name: 'EliteBook 840',
      price: 1199,
      image: '/images/laptop-5.jpg',
      category: 'Laptops',
      description: 'Business-grade reliability and security'
    },
    {
      id: '6',
      name: 'ThinkPad T14',
      price: 1399,
      image: '/images/laptop-6.jpg',
      category: 'Laptops',
      description: 'Legendary ThinkPad reliability'
    },
    {
      id: '7',
      name: 'Spectre x360',
      price: 1599,
      image: '/images/laptop-7.jpg',
      category: 'Laptops',
      description: '2-in-1 convertible with premium features'
    },
    {
      id: '8',
      name: 'Latitude 5520',
      price: 1099,
      image: '/images/laptop-8.jpg',
      category: 'Laptops',
      description: 'Reliable business laptop with great battery life'
    },
    {
      id: '9',
      name: 'Surface Laptop 4',
      price: 1699,
      image: '/images/laptop-9.jpg',
      category: 'Laptops',
      description: 'Microsoft Surface elegance and performance'
    },
    {
      id: '10',
      name: 'MacBook Pro 16',
      price: 2399,
      image: '/images/laptop-10.jpg',
      category: 'Laptops',
      description: 'Apple M1 Pro chip with incredible performance'
    },
    {
      id: '11',
      name: 'XPS 13',
      price: 1099,
      image: '/images/laptop-11.jpg',
      category: 'Laptops',
      description: 'Dell XPS premium ultrabook'
    },
    {
      id: '12',
      name: 'IdeaPad Flex 5',
      price: 799,
      image: '/images/laptop-12.jpg',
      category: 'Laptops',
      description: 'Flexible 2-in-1 design at great value'
    }
  ];

  // Función para consumir API la puedes cambiar si queres
  const fetchProducts = async (page: number) => {
    if (!apiEndpoint) {
      // Usar dummy data si no hay endpoint
      setLoading(true);
      
      // Pequeño delay de carga de la API
      setTimeout(() => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedProducts = dummyProducts.slice(startIndex, endIndex);
        
        setProducts(paginatedProducts);
        setTotalProducts(dummyProducts.length);
        setLoading(false);
      }, 500);
      
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Implementación para axios (descomentar cuando esté listo)
      /*
      const response = await axios.get(`${apiEndpoint}`, {
        params: {
          page,
          limit: itemsPerPage,
          category: category || undefined
        }
      });

      setProducts(response.data.products || response.data);
      setTotalProducts(response.data.total || response.data.length);
      */

      setLoading(false);
    } catch (err: any) {
      setError(err.message || 'Error al cargar productos');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage, apiEndpoint, category]);

  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top when page changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAddToCart = (productId: string) => {
    // Implementar lógica de carrito aquí
    console.log('Añadir al carrito:', productId);
    
    // Ejemplo de implementación futura:
    /*
    try {
      await addToCartAPI(productId);
      // Mostrar notificación de éxito
    } catch (error) {
      // Mostrar notificación de error
    }
    */
  };

  const renderPagination = () => {
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
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          {products.length === 0 && !loading && (
            <div className="container-product__empty">
              <p>No se encontraron productos en esta categoría.</p>
            </div>
          )}

          {totalPages > 1 && renderPagination()}
        </>
      )}
    </section>
  );
};

export default ContainerProduct;