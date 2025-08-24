import Banner from "../../components/banner/Banner";
import CategoriasContainer from "../../components/containers/containerCategories/Container";


const Home = () => {
return (
    <>
      {/* Sección de Banner */}
      <section id="inicio">
        <Banner />
      </section>
      {/* Sección de Productos */}
      <section id="productos">
        <CategoriasContainer />
      </section>

      {/* Sección de Beneficios */}
      <section id="beneficios">
        {/* <Beneficios /> */}
      </section>

      {/* Sección de Contacto (Formulario) */}
      <section id="contacto">
        {/* <CotizaForm /> */}
      </section>
    </>
  );
};

export default Home;