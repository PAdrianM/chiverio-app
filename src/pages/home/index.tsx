import Banner from "../../components/banner/Banner";

const Home = () => {
return (
    <>
      {/* Sección de Banner */}
      <section id="inicio">
        <Banner />
      </section>
      {/* Sección de Productos */}
      <section id="productos">
        {/* <ProductCarousel products={products} /> */}
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