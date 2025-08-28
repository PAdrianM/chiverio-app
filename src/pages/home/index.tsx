import Banner from "../../components/banner/Banner";
import CategoriasContainer from "../../components/containers/containerCategories/Container";
import PromoBanner from "../../components/banner/bannerPromotional/PromoBanner";
import AboutUs from "../../components/aboutUs/AboutUs";



const Home = () => {
return (
    <>
      {/* Sección de Banner */}
      <section id="inicio">
        <Banner />
      </section>
      {/* Sección de Categorias */}
      <section id="categorias">
        <CategoriasContainer />
      </section>

      {/* Sección de Banner Promocional */}
      <section id="banner-promocional">
        <PromoBanner />
      </section>

      {/* Sección de Contacto AboutUs */}
      <section id="about-us">
        <AboutUs />
      </section>
    </>
  );
};

export default Home;