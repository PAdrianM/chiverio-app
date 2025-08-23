import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./Banner.css";

// Imports para shapes (formas de dispositivos)
import laptopShape from "../../assets/img/shapesBanner/laptop-shape.png";
import monitorShape from "../../assets/img/shapesBanner/monitor-shape.png";
import tabletShape from "../../assets/img/shapesBanner/tablet-shape.png";
import phoneShape from "../../assets/img/shapesBanner/phone-shape.png";

// Imports para screens slide 1
// import laptopScreen1 from '../assets/img/screensBanner/laptop-screen1.png';
// import desktopScreen1 from '../assets/img/screensBanner/desktop-screen1.png';
// import tabletScreen1 from '../assets/img/screensBanner/tablet-screen1.png';
// import phoneScreen1 from '../assets/img/screensBanner/phone-screen1.png';

// Imports para screens slide 2
// import laptopScreen2 from '../assets/img/screensBanner/laptop-screen2.png';
// import desktopScreen2 from '../assets/img/screensBanner/desktop-screen2.png';
// import tabletScreen2 from '../assets/img/screensBanner/tablet-screen2.png';
// import phoneScreen2 from '../assets/img/screensBanner/phone-screen2.png';

// Imports para screens slide 3
// import laptopScreen3 from '../assets/img/screensBanner/laptop-screen3.png';
// import desktopScreen3 from '../assets/img/screensBanner/desktop-screen3.png';
// import tabletScreen3 from '../assets/img/screensBanner/tablet-screen3.png';
// import phoneScreen3 from '../assets/img/screensBanner/phone-screen3.png';

interface DeviceImages {
  laptop: string;
  desktop: string;
  tablet: string;
  phone: string;
}

interface DeviceShapes {
  laptopShape: string;
  desktopShape: string;
  tabletShape: string;
  phoneShape: string;
}

interface BannerSlide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  deviceShapes: DeviceShapes;
  deviceImages: DeviceImages;
  buttonAction: () => void;
}

const Banner: React.FC = () => {

const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    speed: 800,
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
  };

  const slides: BannerSlide[] = [
    {
      id: 1,
      title: "Laptops, PC, Servicio Técnico, Software",
      subtitle:
        "Tenemos lo que necesitas para potenciar tu trabajo y entretenimiento. Descubre nuestra amplia gama de productos tecnológicos.",
      buttonText: "Explora nuestros productos",
      deviceImages: {
        laptop: "", // Aquí irá laptopScreen1 cuando lo descomente
        desktop: "", // Aquí irá desktopScreen1 cuando lo descomente
        tablet: "", // Aquí irá tabletScreen1 cuando lo descomente
        phone: "", // Aquí irá phoneScreen1 cuando lo descomente
      },
      deviceShapes: {
        laptopShape: laptopShape,
        desktopShape: monitorShape,
        tabletShape: tabletShape,
        phoneShape: phoneShape,
      },
      buttonAction: () => {
        
        console.log("Navegando a productos");
      },
    },
    {
      id: 2,
      title: "Servicio Técnico Especializado",
      subtitle:
        "Reparación y mantenimiento de equipos con garantía. Nuestros técnicos certificados cuidan tu tecnología.",
      buttonText: "Solicitar servicio",
      buttonAction: () => {
        console.log("Navegando a servicios");
      },
      deviceImages: {
        laptop: "", // Aquí irá laptopScreen1 cuando lo descomente
        desktop: "", // Aquí irá desktopScreen1 cuando lo descomente
        tablet: "", // Aquí irá tabletScreen1 cuando lo descomente
        phone: "", // Aquí irá phoneScreen1 cuando lo descomente
      },
      deviceShapes: {
        laptopShape: laptopShape,
        desktopShape: monitorShape,
        tabletShape: tabletShape,
        phoneShape: phoneShape,
      },
    },
    {
      id: 3,
      title: "Software & Soluciones",
      subtitle:
        "Desarrollo de software personalizado y soluciones tecnológicas adaptadas a tus necesidades empresariales.",
      buttonText: "Conocer soluciones",
      buttonAction: () => {
        console.log("Navegando a soluciones");
      },
      deviceImages: {
        laptop: "", // Aquí irá laptopScreen1 cuando lo descomente
        desktop: "", // Aquí irá desktopScreen1 cuando lo descomente
        tablet: "", // Aquí irá tabletScreen1 cuando lo descomente
        phone: "", // Aquí irá phoneScreen1 cuando lo descomente
      },
      deviceShapes: {
        laptopShape: laptopShape,
        desktopShape: monitorShape,
        tabletShape: tabletShape,
        phoneShape: phoneShape,
      },
    },
  ];

  const FloatingElements: React.FC = () => (
    <div className="floating-elements">
      <div className="floating-circle"></div>
      <div className="floating-circle"></div>
      <div className="floating-circle"></div>
    </div>
  );

  const DeviceGroup: React.FC = () => {
    const currentSlideData = slides[currentSlide];
    
    return (
      <div className="banner-devices">
        <div className="device-group">
          {/* Laptop Device */}
          <div className="device-container laptop-container">
            <div 
              className="device-shape"
              style={{ backgroundImage: `url(${currentSlideData.deviceShapes.laptopShape})` }}
            ></div>
            <div 
              className="device-screen laptop-screen"
              style={{ 
                backgroundImage: currentSlideData.deviceImages.laptop ? 
                  `url(${currentSlideData.deviceImages.laptop})` : 'none',
                backgroundColor: currentSlideData.deviceImages.laptop ? 'transparent' : '#1a1a1a'
              }}
            ></div>
          </div>

          {/* Desktop Device */}
          <div className="device-container desktop-container">
            <div 
              className="device-shape"
              style={{ backgroundImage: `url(${currentSlideData.deviceShapes.desktopShape})` }}
            ></div>
            <div 
              className="device-screen desktop-screen"
              style={{ 
                backgroundImage: currentSlideData.deviceImages.desktop ? 
                  `url(${currentSlideData.deviceImages.desktop})` : 'none',
                backgroundColor: currentSlideData.deviceImages.desktop ? 'transparent' : '#1a1a1a'
              }}
            ></div>
          </div>

          {/* Tablet Device */}
          <div className="device-container tablet-container">
            <div 
              className="device-shape"
              style={{ backgroundImage: `url(${currentSlideData.deviceShapes.tabletShape})` }}
            ></div>
            <div 
              className="device-screen tablet-screen"
              style={{ 
                backgroundImage: currentSlideData.deviceImages.tablet ? 
                  `url(${currentSlideData.deviceImages.tablet})` : 'none',
                backgroundColor: currentSlideData.deviceImages.tablet ? 'transparent' : '#1a1a1a'
              }}
            ></div>
          </div>

          {/* Phone Device */}
          <div className="device-container phone-container">
            <div 
              className="device-shape"
              style={{ backgroundImage: `url(${currentSlideData.deviceShapes.phoneShape})` }}
            ></div>
            <div 
              className="device-screen phone-screen"
              style={{ 
                backgroundImage: currentSlideData.deviceImages.phone ? 
                  `url(${currentSlideData.deviceImages.phone})` : 'none',
                backgroundColor: currentSlideData.deviceImages.phone ? 'transparent' : '#1a1a1a'
              }}
            ></div>
          </div>
        </div>
        <FloatingElements />
      </div>
    );
  };

  return (
    <div className="banner-container">
      <Slider {...sliderSettings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div className="banner-slide">
              <div className="banner-content">
                <h1 className="banner-title">{slide.title}</h1>
                <p className="banner-subtitle">{slide.subtitle}</p>
                <button className="banner-button" onClick={slide.buttonAction}>
                  {slide.buttonText}
                </button>
              </div>
              <DeviceGroup />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
