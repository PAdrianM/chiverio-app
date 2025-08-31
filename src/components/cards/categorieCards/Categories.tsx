import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

interface CategoryProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const Categories: React.FC<CategoryProps> = ({ title, description, link, image }) => {
  return (
    <Link to={link} className="category-card">
      <div className="category-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="category-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Categories;

// Componente Wrapper para usar con múltiples categorías
interface CategoriesWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const CategoriesWrapper: React.FC<CategoriesWrapperProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`categories-wrapper ${className}`}>
      <div className="categories-container">
        {children}
      </div>
    </div>
  );
};

// Hook personalizado para detectar scroll en mobile (opcional)
export const useHorizontalScroll = () => {
  React.useEffect(() => {
    const container = document.querySelector('.categories-container');
    if (!container) return;

    const handleWheel = (e: Event) => {
      const wheelEvent = e as WheelEvent;
      // Permitir scroll horizontal con la rueda del mouse en desktop
      if (window.innerWidth > 768) return;
      
      if (wheelEvent.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += wheelEvent.deltaY;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);
};