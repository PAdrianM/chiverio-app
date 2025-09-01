import './Licencia.css';
import ContainerProduct from "../../../components/containers/containerProducts/ContainerProduct";

const Licencias = () => {
  return (
    <>
      <section id="categorias">
        <ContainerProduct 
          categoryTitle="Licencias de Software" 
          category="Licencias"
          itemsPerPage={12}
        />
      </section>
    </>
  );
};

export default Licencias;