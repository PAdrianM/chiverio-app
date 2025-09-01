import "./Laptop.css";
import ContainerProduct from "../../../components/containers/containerProducts/ContainerProduct";

const Laptop = () => {
  return (
    <>
      <section id="categorias">
        <ContainerProduct 
          categoryTitle="Laptops" 
          category="Laptops"
          itemsPerPage={12}
        />
      </section>
    </>
  );
};

export default Laptop;