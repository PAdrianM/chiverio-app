import React from "react";
import "./Categories.css";

interface CategoryProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const Categories: React.FC<CategoryProps> = ({ title, description, link, image }) => {
  return (
    <a href={link} className="category-card">
      <div className="category-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="category-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Categories;