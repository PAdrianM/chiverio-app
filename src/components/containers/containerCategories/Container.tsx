import React from "react";
import "./Container.css";
import Categories from "../../cards/categorieCards/Categories";
import laptopImage from "../../../assets/img/categoriesComponents/laptop-categorie.png";
import pcImage from "../../../assets/img/categoriesComponents/pc-categorie.png";
import licencesImage from "../../../assets/img/categoriesComponents/licences-categorie.png";
import serviceImage from "../../../assets/img/categoriesComponents/services-categorie.png";

const categoriesData = [
  {
    title: "PCs",
    description: "Armamos tu PC ideal con los componentes de tu preferencia. Tambien vendemos computadoras de escritorio de tus marcas preferidas.",
    link: "/categories/pcs",
    image: pcImage,
  },
  {
    title: "Laptops",
    description: "Potencia y portabilidad en un solo dispositivo, ideal para trabajar y jugar. Te ofrecemos las mejores marcas del mercado, DELL, HP, ASUS.",
    link: "/categories/laptops",
    image: laptopImage,
  },
  {
    title: "Licencias",
    description: "Software original para productividad y seguridad.",
    link: "/categories/licencias",
    image: licencesImage,
  },
  {
    title: "Servicios",
    description: "Mantenimiento, soporte y asesoría profesional.",
    link: "/categories/servicios",
    image: serviceImage,
  },
];

const Container: React.FC = () => {
  return (
    <section className="categories-container">
      {categoriesData.map((cat, idx) => (
        <Categories key={idx} {...cat} />
      ))}
    </section>
  );
};

export default Container;