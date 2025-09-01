import "./Pc.css";
import ContainerProduct from "../../../components/containers/containerProducts/ContainerProduct";

const PC = () => {
  return (
    <>
      <section id="categorias">
        <ContainerProduct 
          categoryTitle="Computadoras de Escritorio" 
          category="PC"
          itemsPerPage={12}
        />
      </section>
    </>
  );
};

export default PC;