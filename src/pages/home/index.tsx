import Banner from "../../components/banner/Banner";
import CategoriasContainer from "../../components/containers/containerCategories/Container";
import PromoBanner from "../../components/banner/bannerPromotional/PromoBanner";


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

      {/* Sección de Banner Promocional */}
      <section id="banner-promocional">
        <PromoBanner />
      </section>

      {/* Sección de Contacto (Formulario) */}
      <section id="contacto">
        {/* <CotizaForm /> */}
      </section>
    </>
  );
};

export default Home;