import React from "react";
import "./Container.css";
import Categories, { CategoriesWrapper, useHorizontalScroll } from "../../cards/categorieCards/Categories";
import laptopImage from "../../../assets/img/categoriesComponents/laptop-categorie.png";
import pcImage from "../../../assets/img/categoriesComponents/pc-categorie.png";
import licencesImage from "../../../assets/img/categoriesComponents/licences-categorie.png";
import serviceImage from "../../../assets/img/categoriesComponents/services-categorie.png";

const categoriesData = [
  {
    title: "PCs",
    description: "Armamos tu PC ideal con los componentes de tu preferencia. También vendemos computadoras de escritorio de tus marcas preferidas.",
    link: "/pc",
    image: pcImage,
  },
  {
    title: "Laptops", 
    description: "Potencia y portabilidad en un solo dispositivo, ideal para trabajar y jugar. Te ofrecemos las mejores marcas del mercado, DELL, HP, ASUS.",
    link: "/laptops",
    image: laptopImage,
  },
  {
    title: "Licencias",
    description: "Software original para productividad y seguridad.",
    link: "/licencias",
    image: licencesImage,
  },
  {
    title: "Servicios",
    description: "Mantenimiento, soporte y asesoría profesional.",
    link: "/servicios",
    image: serviceImage,
  },
];

const Container: React.FC = () => {
  // Hook para mejorar el scroll horizontal con rueda del mouse (opcional)
  useHorizontalScroll();
  
  return (
    <section className="categories-section">
      <div className="categories-header">
        <h2 className="categories-title">Categorías</h2>
        <div className="categories-title-accent"></div>
      </div>
      
      <CategoriesWrapper>
        {categoriesData.map((category, index) => (
          <Categories 
            key={`category-${index}`}
            title={category.title}
            description={category.description}
            link={category.link}
            image={category.image}
          />
        ))}
      </CategoriesWrapper>
    </section>
  );
};

export default Container;