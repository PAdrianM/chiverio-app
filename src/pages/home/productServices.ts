import img1 from '../../assets/img/demoImg/img-demo2.jpeg';
import img2 from '../../assets/img/demoImg/img-demo3.jpeg';
// services/productService.ts
export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductFeature {
  label: string;
  value: string;
}

export interface ProductData {
  id: string;
  name: string;
  price: number;
  images: ProductImage[];
  category: string;
  description: string;
  longDescription?: string;
  specifications: ProductSpecification[];
  features: ProductFeature[];
  inStock: boolean;
  stockQuantity: number;
  rating?: number;
  reviewCount?: number;
  tags?: string[];
}

// Mock data para desarrollo
const mockProducts: ProductData[] = [
  {
    id: '1',
    name: 'UltraBook Pro 15',
    price: 1299,
    images: [
      { id: '1-1', url: 'https://i.pinimg.com/736x/bc/0d/cb/bc0dcbcb2c489e0105c1f8de3f34b717.jpg', alt: 'UltraBook Pro 15 vista frontal', isPrimary: true },
      { id: '1-2', url: 'https://i.pinimg.com/736x/23/d1/c3/23d1c3377e3ab4b7a20b1af350e35ce7.jpg', alt: 'UltraBook Pro 15 vista lateral', isPrimary: false },
      { id: '1-3', url: 'https://i.pinimg.com/1200x/82/e2/bd/82e2bd6dca1e2dcc65fecaa3dbebed22.jpg', alt: 'UltraBook Pro 15 vista trasera', isPrimary: false },
      { id: '1-4', url: 'https://i.pinimg.com/736x/0c/fc/40/0cfc40b47f725abb1b64190122b0bbd6.jpg', alt: 'UltraBook Pro 15 teclado', isPrimary: false }
    ],
    category: 'Laptops',
    description: 'Laptop de alto rendimiento diseñada para profesionales que buscan potencia y portabilidad.',
    longDescription: 'La UltraBook Pro 15 combina un diseño elegante con un rendimiento excepcional. Equipada con procesador Intel Core i7 de última generación, 16GB de RAM y SSD de 512GB, esta laptop es perfecta para tareas exigentes como edición de video, programación y diseño gráfico. Su pantalla de 15.6" con resolución 4K ofrece colores vibrantes y gran precisión, mientras que su batería de larga duración te permite trabajar todo el día sin interrupciones.',
    specifications: [
      { label: 'Procesador', value: 'Intel Core i7-12700H' },
      { label: 'Memoria RAM', value: '16GB DDR4' },
      { label: 'Almacenamiento', value: '512GB SSD NVMe' },
      { label: 'Pantalla', value: '15.6" 4K IPS' },
      { label: 'Tarjeta Gráfica', value: 'NVIDIA RTX 3060' },
      { label: 'Sistema Operativo', value: 'Windows 11 Pro' },
      { label: 'Conectividad', value: 'WiFi 6, Bluetooth 5.2' },
      { label: 'Puertos', value: '3x USB-A, 2x USB-C, HDMI, Audio 3.5mm' }
    ],
    features: [
      { label: 'Peso', value: '1.8 kg' },
      { label: 'Batería', value: 'Hasta 12 horas' },
      { label: 'Cámara', value: 'HD 1080p' },
      { label: 'Audio', value: 'Sonido estéreo' }
    ],
    inStock: true,
    stockQuantity: 15,
    rating: 4.8,
    reviewCount: 124,
    tags: ['profesional', 'gaming', '4k', 'portátil']
  },
  {
    id: '2',
    name: 'PowerBook X17',
    price: 1799,
    images: [
      { id: '2-1', url: 'https://i.pinimg.com/736x/4a/f1/b9/4af1b9f2d9f835f1f8cf9f533c1905b4.jpg', alt: 'PowerBook X17 vista frontal', isPrimary: true },
      { id: '2-2', url: 'https://i.pinimg.com/736x/f6/cc/8d/f6cc8d80d11200389d581b991aa3d422.jpg', alt: 'PowerBook X17 vista lateral', isPrimary: false },
      { id: '2-3', url: 'https://i.pinimg.com/1200x/0f/f9/3d/0ff93d03875825bdd30f005842eafa5b.jpg', alt: 'PowerBook X17 abierta', isPrimary: false }
    ],
    category: 'Laptops',
    description: 'La máquina definitiva para gaming y productividad extrema.',
    longDescription: 'PowerBook X17 es la laptop gaming más potente de nuestra línea. Con procesador AMD Ryzen 9, 32GB de RAM y tarjeta gráfica RTX 4070, puede manejar los juegos más exigentes en configuraciones ultra. Su sistema de refrigeración avanzado mantiene las temperaturas bajo control durante sesiones intensas de gaming o trabajo pesado.',
    specifications: [
      { label: 'Procesador', value: 'AMD Ryzen 9 7900HX' },
      { label: 'Memoria RAM', value: '32GB DDR5' },
      { label: 'Almacenamiento', value: '1TB SSD NVMe' },
      { label: 'Pantalla', value: '17.3" QHD 165Hz' },
      { label: 'Tarjeta Gráfica', value: 'NVIDIA RTX 4070' },
      { label: 'Sistema Operativo', value: 'Windows 11 Home' },
      { label: 'Refrigeración', value: 'Sistema dual fan' },
      { label: 'Teclado', value: 'Mecánico RGB' }
    ],
    features: [
      { label: 'Peso', value: '2.5 kg' },
      { label: 'Batería', value: 'Hasta 8 horas' },
      { label: 'Cámara', value: 'HD 1080p con IR' },
      { label: 'Audio', value: 'THX Spatial Audio' }
    ],
    inStock: true,
    stockQuantity: 8,
    rating: 4.9,
    reviewCount: 89,
    tags: ['gaming', 'alto-rendimiento', '165hz', 'ryzen']
  },
  {
    id: '3',
    name: 'Pcer Xtreme 5000',
    price: 1799,
    images: [
      { id: '2-1', url: 'https://i.pinimg.com/1200x/12/67/3a/12673a033c5ef817ac91f1f11fbc3aaa.jpg', alt: 'Pcer Xtreme 5000 vista frontal', isPrimary: true },
      { id: '2-2', url: 'https://i.pinimg.com/736x/72/0e/58/720e58c7fd165960e730662d1f9ba1e3.jpg', alt: 'Pcer Xtreme 5000 vista lateral', isPrimary: false },
      { id: '2-3', url: 'https://i.pinimg.com/736x/9c/32/dd/9c32dd97c3f6fc74d77cb1bd8c7c2214.jpg', alt: 'Pcer Xtreme 5000 abierta', isPrimary: false }
    ],
    category: 'PC',
    description: 'La máquina definitiva para gaming y productividad extrema.',
    longDescription: 'Pcer Xtreme 5000 es la laptop gaming más potente de nuestra línea. Con procesador AMD Ryzen 9, 32GB de RAM y tarjeta gráfica RTX 4070, puede manejar los juegos más exigentes en configuraciones ultra. Su sistema de refrigeración avanzado mantiene las temperaturas bajo control durante sesiones intensas de gaming o trabajo pesado.',
    specifications: [
      { label: 'Procesador', value: 'AMD Ryzen 9 7900HX' },
      { label: 'Memoria RAM', value: '32GB DDR5' },
      { label: 'Almacenamiento', value: '1TB SSD NVMe' },
      { label: 'Pantalla', value: '17.3" QHD 165Hz' },
      { label: 'Tarjeta Gráfica', value: 'NVIDIA RTX 4070' },
      { label: 'Sistema Operativo', value: 'Windows 11 Home' },
      { label: 'Refrigeración', value: 'Sistema dual fan' },
      { label: 'Teclado', value: 'Mecánico RGB' }
    ],
    features: [
      { label: 'Peso', value: '2.5 kg' },
      { label: 'Batería', value: 'Hasta 8 horas' },
      { label: 'Cámara', value: 'HD 1080p con IR' },
      { label: 'Audio', value: 'THX Spatial Audio' }
    ],
    inStock: true,
    stockQuantity: 8,
    rating: 4.9,
    reviewCount: 89,
    tags: ['gaming', 'alto-rendimiento', '165hz', 'ryzen']
  },
  {
    id: '4',
    name: 'Dell G15',
    price: 1799,
    images: [
      { id: '2-1', url: 'https://i.pinimg.com/1200x/e6/cf/f7/e6cff78214481747051dd11c9c6d2366.jpg', alt: 'Dell G15 vista frontal', isPrimary: true },
      { id: '2-2', url: 'https://i.pinimg.com/736x/40/60/67/4060675368cb438aac54294f7f71bd64.jpg', alt: 'Dell G15 vista lateral', isPrimary: false },
      { id: '2-3', url: 'https://i.pinimg.com/1200x/2b/88/a2/2b88a2b648a25efd50c94c2bc91e8859.jpg', alt: 'Dell G15 abierta', isPrimary: false }
    ],
    category: 'PC',
    description: 'La máquina definitiva para gaming y productividad extrema.',
    longDescription: 'Dell G15 es la laptop gaming más potente de nuestra línea. Con procesador AMD Ryzen 9, 32GB de RAM y tarjeta gráfica RTX 4070, puede manejar los juegos más exigentes en configuraciones ultra. Su sistema de refrigeración avanzado mantiene las temperaturas bajo control durante sesiones intensas de gaming o trabajo pesado.',
    specifications: [
      { label: 'Procesador', value: 'AMD Ryzen 9 7900HX' },
      { label: 'Memoria RAM', value: '32GB DDR5' },
      { label: 'Almacenamiento', value: '1TB SSD NVMe' },
      { label: 'Pantalla', value: '17.3" QHD 165Hz' },
      { label: 'Tarjeta Gráfica', value: 'NVIDIA RTX 4070' },
      { label: 'Sistema Operativo', value: 'Windows 11 Home' },
      { label: 'Refrigeración', value: 'Sistema dual fan' },
      { label: 'Teclado', value: 'Mecánico RGB' }
    ],
    features: [
      { label: 'Peso', value: '2.5 kg' },
      { label: 'Batería', value: 'Hasta 8 horas' },
      { label: 'Cámara', value: 'HD 1080p con IR' },
      { label: 'Audio', value: 'THX Spatial Audio' }
    ],
    inStock: true,
    stockQuantity: 8,
    rating: 4.9,
    reviewCount: 89,
    tags: ['gaming', 'alto-rendimiento', '165hz', 'ryzen']
  },
  {
    id: '5',
    name: 'Pcer Xtreme 5000',
    price: 1799,
    images: [
      { id: '2-1', url: 'https://i.pinimg.com/1200x/12/67/3a/12673a033c5ef817ac91f1f11fbc3aaa.jpg', alt: 'Pcer Xtreme 5000 vista frontal', isPrimary: true },
      { id: '2-2', url: 'https://i.pinimg.com/736x/72/0e/58/720e58c7fd165960e730662d1f9ba1e3.jpg', alt: 'Pcer Xtreme 5000 vista lateral', isPrimary: false },
      { id: '2-3', url: 'https://i.pinimg.com/736x/9c/32/dd/9c32dd97c3f6fc74d77cb1bd8c7c2214.jpg', alt: 'Pcer Xtreme 5000 abierta', isPrimary: false }
    ],
    category: 'PC',
    description: 'La máquina definitiva para gaming y productividad extrema.',
    longDescription: 'Pcer Xtreme 5000 es la laptop gaming más potente de nuestra línea. Con procesador AMD Ryzen 9, 32GB de RAM y tarjeta gráfica RTX 4070, puede manejar los juegos más exigentes en configuraciones ultra. Su sistema de refrigeración avanzado mantiene las temperaturas bajo control durante sesiones intensas de gaming o trabajo pesado.',
    specifications: [
      { label: 'Procesador', value: 'AMD Ryzen 9 7900HX' },
      { label: 'Memoria RAM', value: '32GB DDR5' },
      { label: 'Almacenamiento', value: '1TB SSD NVMe' },
      { label: 'Pantalla', value: '17.3" QHD 165Hz' },
      { label: 'Tarjeta Gráfica', value: 'NVIDIA RTX 4070' },
      { label: 'Sistema Operativo', value: 'Windows 11 Home' },
      { label: 'Refrigeración', value: 'Sistema dual fan' },
      { label: 'Teclado', value: 'Mecánico RGB' }
    ],
    features: [
      { label: 'Peso', value: '2.5 kg' },
      { label: 'Batería', value: 'Hasta 8 horas' },
      { label: 'Cámara', value: 'HD 1080p con IR' },
      { label: 'Audio', value: 'THX Spatial Audio' }
    ],
    inStock: true,
    stockQuantity: 8,
    rating: 4.9,
    reviewCount: 89,
    tags: ['gaming', 'alto-rendimiento', '165hz', 'ryzen']
  },
  {
    id: '6',
    name: 'Dell G15',
    price: 1799,
    images: [
      { id: '2-1', url: 'https://i.pinimg.com/1200x/e6/cf/f7/e6cff78214481747051dd11c9c6d2366.jpg', alt: 'Dell G15 vista frontal', isPrimary: true },
      { id: '2-2', url: 'https://i.pinimg.com/736x/40/60/67/4060675368cb438aac54294f7f71bd64.jpg', alt: 'Dell G15 vista lateral', isPrimary: false },
      { id: '2-3', url: 'https://i.pinimg.com/1200x/2b/88/a2/2b88a2b648a25efd50c94c2bc91e8859.jpg', alt: 'Dell G15 abierta', isPrimary: false }
    ],
    category: 'PC',
    description: 'La máquina definitiva para gaming y productividad extrema.',
    longDescription: 'Dell G15 es la laptop gaming más potente de nuestra línea. Con procesador AMD Ryzen 9, 32GB de RAM y tarjeta gráfica RTX 4070, puede manejar los juegos más exigentes en configuraciones ultra. Su sistema de refrigeración avanzado mantiene las temperaturas bajo control durante sesiones intensas de gaming o trabajo pesado.',
    specifications: [
      { label: 'Procesador', value: 'AMD Ryzen 9 7900HX' },
      { label: 'Memoria RAM', value: '32GB DDR5' },
      { label: 'Almacenamiento', value: '1TB SSD NVMe' },
      { label: 'Pantalla', value: '17.3" QHD 165Hz' },
      { label: 'Tarjeta Gráfica', value: 'NVIDIA RTX 4070' },
      { label: 'Sistema Operativo', value: 'Windows 11 Home' },
      { label: 'Refrigeración', value: 'Sistema dual fan' },
      { label: 'Teclado', value: 'Mecánico RGB' }
    ],
    features: [
      { label: 'Peso', value: '2.5 kg' },
      { label: 'Batería', value: 'Hasta 8 horas' },
      { label: 'Cámara', value: 'HD 1080p con IR' },
      { label: 'Audio', value: 'THX Spatial Audio' }
    ],
    inStock: true,
    stockQuantity: 8,
    rating: 4.9,
    reviewCount: 89,
    tags: ['gaming', 'alto-rendimiento', '165hz', 'ryzen']
  },
  {
    id: '7',
    name: 'Pcer Xtreme 5000',
    price: 1799,
    images: [
      { id: '2-1', url: 'https://i.pinimg.com/1200x/12/67/3a/12673a033c5ef817ac91f1f11fbc3aaa.jpg', alt: 'Pcer Xtreme 5000 vista frontal', isPrimary: true },
      { id: '2-2', url: 'https://i.pinimg.com/736x/72/0e/58/720e58c7fd165960e730662d1f9ba1e3.jpg', alt: 'Pcer Xtreme 5000 vista lateral', isPrimary: false },
      { id: '2-3', url: 'https://i.pinimg.com/736x/9c/32/dd/9c32dd97c3f6fc74d77cb1bd8c7c2214.jpg', alt: 'Pcer Xtreme 5000 abierta', isPrimary: false }
    ],
    category: 'PC',
    description: 'La máquina definitiva para gaming y productividad extrema.',
    longDescription: 'Pcer Xtreme 5000 es la laptop gaming más potente de nuestra línea. Con procesador AMD Ryzen 9, 32GB de RAM y tarjeta gráfica RTX 4070, puede manejar los juegos más exigentes en configuraciones ultra. Su sistema de refrigeración avanzado mantiene las temperaturas bajo control durante sesiones intensas de gaming o trabajo pesado.',
    specifications: [
      { label: 'Procesador', value: 'AMD Ryzen 9 7900HX' },
      { label: 'Memoria RAM', value: '32GB DDR5' },
      { label: 'Almacenamiento', value: '1TB SSD NVMe' },
      { label: 'Pantalla', value: '17.3" QHD 165Hz' },
      { label: 'Tarjeta Gráfica', value: 'NVIDIA RTX 4070' },
      { label: 'Sistema Operativo', value: 'Windows 11 Home' },
      { label: 'Refrigeración', value: 'Sistema dual fan' },
      { label: 'Teclado', value: 'Mecánico RGB' }
    ],
    features: [
      { label: 'Peso', value: '2.5 kg' },
      { label: 'Batería', value: 'Hasta 8 horas' },
      { label: 'Cámara', value: 'HD 1080p con IR' },
      { label: 'Audio', value: 'THX Spatial Audio' }
    ],
    inStock: true,
    stockQuantity: 8,
    rating: 4.9,
    reviewCount: 89,
    tags: ['gaming', 'alto-rendimiento', '165hz', 'ryzen']
  },
  {
    id: '8',
    name: 'Dell G15',
    price: 1799,
    images: [
      { id: '2-1', url: 'https://i.pinimg.com/1200x/e6/cf/f7/e6cff78214481747051dd11c9c6d2366.jpg', alt: 'Dell G15 vista frontal', isPrimary: true },
      { id: '2-2', url: 'https://i.pinimg.com/736x/40/60/67/4060675368cb438aac54294f7f71bd64.jpg', alt: 'Dell G15 vista lateral', isPrimary: false },
      { id: '2-3', url: 'https://i.pinimg.com/1200x/2b/88/a2/2b88a2b648a25efd50c94c2bc91e8859.jpg', alt: 'Dell G15 abierta', isPrimary: false }
    ],
    category: 'PC',
    description: 'La máquina definitiva para gaming y productividad extrema.',
    longDescription: 'Dell G15 es la laptop gaming más potente de nuestra línea. Con procesador AMD Ryzen 9, 32GB de RAM y tarjeta gráfica RTX 4070, puede manejar los juegos más exigentes en configuraciones ultra. Su sistema de refrigeración avanzado mantiene las temperaturas bajo control durante sesiones intensas de gaming o trabajo pesado.',
    specifications: [
      { label: 'Procesador', value: 'AMD Ryzen 9 7900HX' },
      { label: 'Memoria RAM', value: '32GB DDR5' },
      { label: 'Almacenamiento', value: '1TB SSD NVMe' },
      { label: 'Pantalla', value: '17.3" QHD 165Hz' },
      { label: 'Tarjeta Gráfica', value: 'NVIDIA RTX 4070' },
      { label: 'Sistema Operativo', value: 'Windows 11 Home' },
      { label: 'Refrigeración', value: 'Sistema dual fan' },
      { label: 'Teclado', value: 'Mecánico RGB' }
    ],
    features: [
      { label: 'Peso', value: '2.5 kg' },
      { label: 'Batería', value: 'Hasta 8 horas' },
      { label: 'Cámara', value: 'HD 1080p con IR' },
      { label: 'Audio', value: 'THX Spatial Audio' }
    ],
    inStock: true,
    stockQuantity: 8,
    rating: 4.9,
    reviewCount: 89,
    tags: ['gaming', 'alto-rendimiento', '165hz', 'ryzen']
  },
  {
    id: '9',
    name: 'Pcer Xtreme 5000',
    price: 1799,
    images: [
      { id: '2-1', url: 'https://i.pinimg.com/1200x/12/67/3a/12673a033c5ef817ac91f1f11fbc3aaa.jpg', alt: 'Pcer Xtreme 5000 vista frontal', isPrimary: true },
      { id: '2-2', url: 'https://i.pinimg.com/736x/72/0e/58/720e58c7fd165960e730662d1f9ba1e3.jpg', alt: 'Pcer Xtreme 5000 vista lateral', isPrimary: false },
      { id: '2-3', url: 'https://i.pinimg.com/736x/9c/32/dd/9c32dd97c3f6fc74d77cb1bd8c7c2214.jpg', alt: 'Pcer Xtreme 5000 abierta', isPrimary: false }
    ],
    category: 'PC',
    description: 'La máquina definitiva para gaming y productividad extrema.',
    longDescription: 'Pcer Xtreme 5000 es la laptop gaming más potente de nuestra línea. Con procesador AMD Ryzen 9, 32GB de RAM y tarjeta gráfica RTX 4070, puede manejar los juegos más exigentes en configuraciones ultra. Su sistema de refrigeración avanzado mantiene las temperaturas bajo control durante sesiones intensas de gaming o trabajo pesado.',
    specifications: [
      { label: 'Procesador', value: 'AMD Ryzen 9 7900HX' },
      { label: 'Memoria RAM', value: '32GB DDR5' },
      { label: 'Almacenamiento', value: '1TB SSD NVMe' },
      { label: 'Pantalla', value: '17.3" QHD 165Hz' },
      { label: 'Tarjeta Gráfica', value: 'NVIDIA RTX 4070' },
      { label: 'Sistema Operativo', value: 'Windows 11 Home' },
      { label: 'Refrigeración', value: 'Sistema dual fan' },
      { label: 'Teclado', value: 'Mecánico RGB' }
    ],
    features: [
      { label: 'Peso', value: '2.5 kg' },
      { label: 'Batería', value: 'Hasta 8 horas' },
      { label: 'Cámara', value: 'HD 1080p con IR' },
      { label: 'Audio', value: 'THX Spatial Audio' }
    ],
    inStock: true,
    stockQuantity: 8,
    rating: 4.9,
    reviewCount: 89,
    tags: ['gaming', 'alto-rendimiento', '165hz', 'ryzen']
  },
  {
    id: '10',
    name: 'Dell G15',
    price: 1799,
    images: [
      { id: '2-1', url: 'https://i.pinimg.com/1200x/e6/cf/f7/e6cff78214481747051dd11c9c6d2366.jpg', alt: 'Dell G15 vista frontal', isPrimary: true },
      { id: '2-2', url: 'https://i.pinimg.com/736x/40/60/67/4060675368cb438aac54294f7f71bd64.jpg', alt: 'Dell G15 vista lateral', isPrimary: false },
      { id: '2-3', url: 'https://i.pinimg.com/1200x/2b/88/a2/2b88a2b648a25efd50c94c2bc91e8859.jpg', alt: 'Dell G15 abierta', isPrimary: false }
    ],
    category: 'PC',
    description: 'La máquina definitiva para gaming y productividad extrema.',
    longDescription: 'Dell G15 es la laptop gaming más potente de nuestra línea. Con procesador AMD Ryzen 9, 32GB de RAM y tarjeta gráfica RTX 4070, puede manejar los juegos más exigentes en configuraciones ultra. Su sistema de refrigeración avanzado mantiene las temperaturas bajo control durante sesiones intensas de gaming o trabajo pesado.',
    specifications: [
      { label: 'Procesador', value: 'AMD Ryzen 9 7900HX' },
      { label: 'Memoria RAM', value: '32GB DDR5' },
      { label: 'Almacenamiento', value: '1TB SSD NVMe' },
      { label: 'Pantalla', value: '17.3" QHD 165Hz' },
      { label: 'Tarjeta Gráfica', value: 'NVIDIA RTX 4070' },
      { label: 'Sistema Operativo', value: 'Windows 11 Home' },
      { label: 'Refrigeración', value: 'Sistema dual fan' },
      { label: 'Teclado', value: 'Mecánico RGB' }
    ],
    features: [
      { label: 'Peso', value: '2.5 kg' },
      { label: 'Batería', value: 'Hasta 8 horas' },
      { label: 'Cámara', value: 'HD 1080p con IR' },
      { label: 'Audio', value: 'THX Spatial Audio' }
    ],
    inStock: true,
    stockQuantity: 8,
    rating: 4.9,
    reviewCount: 89,
    tags: ['gaming', 'alto-rendimiento', '165hz', 'ryzen']
  },
  {
    id: '11',
    name: 'Pcer Xtreme 5000',
    price: 1799,
    images: [
      { id: '2-1', url: 'https://i.pinimg.com/1200x/12/67/3a/12673a033c5ef817ac91f1f11fbc3aaa.jpg', alt: 'Pcer Xtreme 5000 vista frontal', isPrimary: true },
      { id: '2-2', url: 'https://i.pinimg.com/736x/72/0e/58/720e58c7fd165960e730662d1f9ba1e3.jpg', alt: 'Pcer Xtreme 5000 vista lateral', isPrimary: false },
      { id: '2-3', url: 'https://i.pinimg.com/736x/9c/32/dd/9c32dd97c3f6fc74d77cb1bd8c7c2214.jpg', alt: 'Pcer Xtreme 5000 abierta', isPrimary: false }
    ],
    category: 'PC',
    description: 'La máquina definitiva para gaming y productividad extrema.',
    longDescription: 'Pcer Xtreme 5000 es la laptop gaming más potente de nuestra línea. Con procesador AMD Ryzen 9, 32GB de RAM y tarjeta gráfica RTX 4070, puede manejar los juegos más exigentes en configuraciones ultra. Su sistema de refrigeración avanzado mantiene las temperaturas bajo control durante sesiones intensas de gaming o trabajo pesado.',
    specifications: [
      { label: 'Procesador', value: 'AMD Ryzen 9 7900HX' },
      { label: 'Memoria RAM', value: '32GB DDR5' },
      { label: 'Almacenamiento', value: '1TB SSD NVMe' },
      { label: 'Pantalla', value: '17.3" QHD 165Hz' },
      { label: 'Tarjeta Gráfica', value: 'NVIDIA RTX 4070' },
      { label: 'Sistema Operativo', value: 'Windows 11 Home' },
      { label: 'Refrigeración', value: 'Sistema dual fan' },
      { label: 'Teclado', value: 'Mecánico RGB' }
    ],
    features: [
      { label: 'Peso', value: '2.5 kg' },
      { label: 'Batería', value: 'Hasta 8 horas' },
      { label: 'Cámara', value: 'HD 1080p con IR' },
      { label: 'Audio', value: 'THX Spatial Audio' }
    ],
    inStock: true,
    stockQuantity: 8,
    rating: 4.9,
    reviewCount: 89,
    tags: ['gaming', 'alto-rendimiento', '165hz', 'ryzen']
  },
  {
    id: '12',
    name: 'Dell G15',
    price: 1799,
    images: [
      { id: '2-1', url: 'https://i.pinimg.com/1200x/e6/cf/f7/e6cff78214481747051dd11c9c6d2366.jpg', alt: 'Dell G15 vista frontal', isPrimary: true },
      { id: '2-2', url: 'https://i.pinimg.com/736x/40/60/67/4060675368cb438aac54294f7f71bd64.jpg', alt: 'Dell G15 vista lateral', isPrimary: false },
      { id: '2-3', url: 'https://i.pinimg.com/1200x/2b/88/a2/2b88a2b648a25efd50c94c2bc91e8859.jpg', alt: 'Dell G15 abierta', isPrimary: false }
    ],
    category: 'PC',
    description: 'La máquina definitiva para gaming y productividad extrema.',
    longDescription: 'Dell G15 es la laptop gaming más potente de nuestra línea. Con procesador AMD Ryzen 9, 32GB de RAM y tarjeta gráfica RTX 4070, puede manejar los juegos más exigentes en configuraciones ultra. Su sistema de refrigeración avanzado mantiene las temperaturas bajo control durante sesiones intensas de gaming o trabajo pesado.',
    specifications: [
      { label: 'Procesador', value: 'AMD Ryzen 9 7900HX' },
      { label: 'Memoria RAM', value: '32GB DDR5' },
      { label: 'Almacenamiento', value: '1TB SSD NVMe' },
      { label: 'Pantalla', value: '17.3" QHD 165Hz' },
      { label: 'Tarjeta Gráfica', value: 'NVIDIA RTX 4070' },
      { label: 'Sistema Operativo', value: 'Windows 11 Home' },
      { label: 'Refrigeración', value: 'Sistema dual fan' },
      { label: 'Teclado', value: 'Mecánico RGB' }
    ],
    features: [
      { label: 'Peso', value: '2.5 kg' },
      { label: 'Batería', value: 'Hasta 8 horas' },
      { label: 'Cámara', value: 'HD 1080p con IR' },
      { label: 'Audio', value: 'THX Spatial Audio' }
    ],
    inStock: true,
    stockQuantity: 8,
    rating: 4.9,
    reviewCount: 89,
    tags: ['gaming', 'alto-rendimiento', '165hz', 'ryzen']
  },
  {
    id: '13',
    name: 'Pcer Xtreme 5000',
    price: 1799,
    images: [
      { id: '2-1', url: 'https://i.pinimg.com/1200x/12/67/3a/12673a033c5ef817ac91f1f11fbc3aaa.jpg', alt: 'Pcer Xtreme 5000 vista frontal', isPrimary: true },
      { id: '2-2', url: 'https://i.pinimg.com/736x/72/0e/58/720e58c7fd165960e730662d1f9ba1e3.jpg', alt: 'Pcer Xtreme 5000 vista lateral', isPrimary: false },
      { id: '2-3', url: 'https://i.pinimg.com/736x/9c/32/dd/9c32dd97c3f6fc74d77cb1bd8c7c2214.jpg', alt: 'Pcer Xtreme 5000 abierta', isPrimary: false }
    ],
    category: 'PC',
    description: 'La máquina definitiva para gaming y productividad extrema.',
    longDescription: 'Pcer Xtreme 5000 es la laptop gaming más potente de nuestra línea. Con procesador AMD Ryzen 9, 32GB de RAM y tarjeta gráfica RTX 4070, puede manejar los juegos más exigentes en configuraciones ultra. Su sistema de refrigeración avanzado mantiene las temperaturas bajo control durante sesiones intensas de gaming o trabajo pesado.',
    specifications: [
      { label: 'Procesador', value: 'AMD Ryzen 9 7900HX' },
      { label: 'Memoria RAM', value: '32GB DDR5' },
      { label: 'Almacenamiento', value: '1TB SSD NVMe' },
      { label: 'Pantalla', value: '17.3" QHD 165Hz' },
      { label: 'Tarjeta Gráfica', value: 'NVIDIA RTX 4070' },
      { label: 'Sistema Operativo', value: 'Windows 11 Home' },
      { label: 'Refrigeración', value: 'Sistema dual fan' },
      { label: 'Teclado', value: 'Mecánico RGB' }
    ],
    features: [
      { label: 'Peso', value: '2.5 kg' },
      { label: 'Batería', value: 'Hasta 8 horas' },
      { label: 'Cámara', value: 'HD 1080p con IR' },
      { label: 'Audio', value: 'THX Spatial Audio' }
    ],
    inStock: true,
    stockQuantity: 8,
    rating: 4.9,
    reviewCount: 89,
    tags: ['gaming', 'alto-rendimiento', '165hz', 'ryzen']
  },
  {
    id: '14',
    name: 'Dell G15',
    price: 1799,
    images: [
      { id: '2-1', url: 'https://i.pinimg.com/1200x/e6/cf/f7/e6cff78214481747051dd11c9c6d2366.jpg', alt: 'Dell G15 vista frontal', isPrimary: true },
      { id: '2-2', url: 'https://i.pinimg.com/736x/40/60/67/4060675368cb438aac54294f7f71bd64.jpg', alt: 'Dell G15 vista lateral', isPrimary: false },
      { id: '2-3', url: 'https://i.pinimg.com/1200x/2b/88/a2/2b88a2b648a25efd50c94c2bc91e8859.jpg', alt: 'Dell G15 abierta', isPrimary: false }
    ],
    category: 'PC',
    description: 'La máquina definitiva para gaming y productividad extrema.',
    longDescription: 'Dell G15 es la laptop gaming más potente de nuestra línea. Con procesador AMD Ryzen 9, 32GB de RAM y tarjeta gráfica RTX 4070, puede manejar los juegos más exigentes en configuraciones ultra. Su sistema de refrigeración avanzado mantiene las temperaturas bajo control durante sesiones intensas de gaming o trabajo pesado.',
    specifications: [
      { label: 'Procesador', value: 'AMD Ryzen 9 7900HX' },
      { label: 'Memoria RAM', value: '32GB DDR5' },
      { label: 'Almacenamiento', value: '1TB SSD NVMe' },
      { label: 'Pantalla', value: '17.3" QHD 165Hz' },
      { label: 'Tarjeta Gráfica', value: 'NVIDIA RTX 4070' },
      { label: 'Sistema Operativo', value: 'Windows 11 Home' },
      { label: 'Refrigeración', value: 'Sistema dual fan' },
      { label: 'Teclado', value: 'Mecánico RGB' }
    ],
    features: [
      { label: 'Peso', value: '2.5 kg' },
      { label: 'Batería', value: 'Hasta 8 horas' },
      { label: 'Cámara', value: 'HD 1080p con IR' },
      { label: 'Audio', value: 'THX Spatial Audio' }
    ],
    inStock: true,
    stockQuantity: 8,
    rating: 4.9,
    reviewCount: 89,
    tags: ['gaming', 'alto-rendimiento', '165hz', 'ryzen']
  },
  {
    id: '15',
    name: 'Pcer Xtreme 5000',
    price: 1799,
    images: [
      { id: '2-1', url: 'https://i.pinimg.com/1200x/12/67/3a/12673a033c5ef817ac91f1f11fbc3aaa.jpg', alt: 'Pcer Xtreme 5000 vista frontal', isPrimary: true },
      { id: '2-2', url: 'https://i.pinimg.com/736x/72/0e/58/720e58c7fd165960e730662d1f9ba1e3.jpg', alt: 'Pcer Xtreme 5000 vista lateral', isPrimary: false },
      { id: '2-3', url: 'https://i.pinimg.com/736x/9c/32/dd/9c32dd97c3f6fc74d77cb1bd8c7c2214.jpg', alt: 'Pcer Xtreme 5000 abierta', isPrimary: false }
    ],
    category: 'PC',
    description: 'La máquina definitiva para gaming y productividad extrema.',
    longDescription: 'Pcer Xtreme 5000 es la laptop gaming más potente de nuestra línea. Con procesador AMD Ryzen 9, 32GB de RAM y tarjeta gráfica RTX 4070, puede manejar los juegos más exigentes en configuraciones ultra. Su sistema de refrigeración avanzado mantiene las temperaturas bajo control durante sesiones intensas de gaming o trabajo pesado.',
    specifications: [
      { label: 'Procesador', value: 'AMD Ryzen 9 7900HX' },
      { label: 'Memoria RAM', value: '32GB DDR5' },
      { label: 'Almacenamiento', value: '1TB SSD NVMe' },
      { label: 'Pantalla', value: '17.3" QHD 165Hz' },
      { label: 'Tarjeta Gráfica', value: 'NVIDIA RTX 4070' },
      { label: 'Sistema Operativo', value: 'Windows 11 Home' },
      { label: 'Refrigeración', value: 'Sistema dual fan' },
      { label: 'Teclado', value: 'Mecánico RGB' }
    ],
    features: [
      { label: 'Peso', value: '2.5 kg' },
      { label: 'Batería', value: 'Hasta 8 horas' },
      { label: 'Cámara', value: 'HD 1080p con IR' },
      { label: 'Audio', value: 'THX Spatial Audio' }
    ],
    inStock: true,
    stockQuantity: 8,
    rating: 4.9,
    reviewCount: 89,
    tags: ['gaming', 'alto-rendimiento', '165hz', 'ryzen']
  },
  {
    id: '17',
    name: 'Dell G15',
    price: 1799,
    images: [
      { id: '2-1', url: 'https://i.pinimg.com/1200x/e6/cf/f7/e6cff78214481747051dd11c9c6d2366.jpg', alt: 'Dell G15 vista frontal', isPrimary: true },
      { id: '2-2', url: 'https://i.pinimg.com/736x/40/60/67/4060675368cb438aac54294f7f71bd64.jpg', alt: 'Dell G15 vista lateral', isPrimary: false },
      { id: '2-3', url: 'https://i.pinimg.com/1200x/2b/88/a2/2b88a2b648a25efd50c94c2bc91e8859.jpg', alt: 'Dell G15 abierta', isPrimary: false }
    ],
    category: 'PC',
    description: 'La máquina definitiva para gaming y productividad extrema.',
    longDescription: 'Dell G15 es la laptop gaming más potente de nuestra línea. Con procesador AMD Ryzen 9, 32GB de RAM y tarjeta gráfica RTX 4070, puede manejar los juegos más exigentes en configuraciones ultra. Su sistema de refrigeración avanzado mantiene las temperaturas bajo control durante sesiones intensas de gaming o trabajo pesado.',
    specifications: [
      { label: 'Procesador', value: 'AMD Ryzen 9 7900HX' },
      { label: 'Memoria RAM', value: '32GB DDR5' },
      { label: 'Almacenamiento', value: '1TB SSD NVMe' },
      { label: 'Pantalla', value: '17.3" QHD 165Hz' },
      { label: 'Tarjeta Gráfica', value: 'NVIDIA RTX 4070' },
      { label: 'Sistema Operativo', value: 'Windows 11 Home' },
      { label: 'Refrigeración', value: 'Sistema dual fan' },
      { label: 'Teclado', value: 'Mecánico RGB' }
    ],
    features: [
      { label: 'Peso', value: '2.5 kg' },
      { label: 'Batería', value: 'Hasta 8 horas' },
      { label: 'Cámara', value: 'HD 1080p con IR' },
      { label: 'Audio', value: 'THX Spatial Audio' }
    ],
    inStock: true,
    stockQuantity: 8,
    rating: 4.9,
    reviewCount: 89,
    tags: ['gaming', 'alto-rendimiento', '165hz', 'ryzen']
  },
  {
    id: '19',
    name: 'Licencia de Software',
    price: 300,
    images: [
      { id: '2-1', url: img1, alt: 'Pcer Xtreme 5000 vista frontal', isPrimary: true }
      // { id: '2-2', url: 'https://i.pinimg.com/736x/72/0e/58/720e58c7fd165960e730662d1f9ba1e3.jpg', alt: 'Pcer Xtreme 5000 vista lateral', isPrimary: false },
      // { id: '2-3', url: 'https://i.pinimg.com/736x/9c/32/dd/9c32dd97c3f6fc74d77cb1bd8c7c2214.jpg', alt: 'Pcer Xtreme 5000 abierta', isPrimary: false }
    ],
    category: 'Licencias',
    description: 'Licencia para antivirus.',
    longDescription: 'Licencia para antivirus con protección avanzada y actualizaciones automáticas.',
    specifications: [
      // { label: 'Procesador', value: 'AMD Ryzen 9 7900HX' },
      // { label: 'Memoria RAM', value: '32GB DDR5' },
      // { label: 'Almacenamiento', value: '1TB SSD NVMe' },
      // { label: 'Pantalla', value: '17.3" QHD 165Hz' },
      // { label: 'Tarjeta Gráfica', value: 'NVIDIA RTX 4070' },
      // { label: 'Sistema Operativo', value: 'Windows 11 Home' },
      // { label: 'Refrigeración', value: 'Sistema dual fan' },
      // { label: 'Teclado', value: 'Mecánico RGB' }
    ],
    features: [
      // { label: 'Peso', value: '2.5 kg' },
      // { label: 'Batería', value: 'Hasta 8 horas' },
      // { label: 'Cámara', value: 'HD 1080p con IR' },
      // { label: 'Audio', value: 'THX Spatial Audio' }
    ],
    inStock: true,
    stockQuantity: 8,
    rating: 4.9,
    reviewCount: 89,
    tags: ['gaming', 'alto-rendimiento', '165hz', 'ryzen']
  },
  {
    id: '18',
    name: 'Licencia de Software',
    price: 500,
    images: [
      { id: '2-1', url: img2, alt: 'Dell G15 vista frontal', isPrimary: true },
      // { id: '2-2', url: 'https://i.pinimg.com/736x/40/60/67/4060675368cb438aac54294f7f71bd64.jpg', alt: 'Dell G15 vista lateral', isPrimary: false },
      // { id: '2-3', url: 'https://i.pinimg.com/1200x/2b/88/a2/2b88a2b648a25efd50c94c2bc91e8859.jpg', alt: 'Dell G15 abierta', isPrimary: false }
    ],
    category: 'Licencias',
    description: 'Licencia de software para Dell G15.',
    longDescription: 'Licencia de software para manejar los juegos más exigentes en configuraciones ultra. Su sistema de refrigeración avanzado mantiene las temperaturas bajo control durante sesiones intensas de gaming o trabajo pesado.',
    specifications: [
      // { label: 'Procesador', value: 'AMD Ryzen 9 7900HX' },
      // { label: 'Memoria RAM', value: '32GB DDR5' },
      // { label: 'Almacenamiento', value: '1TB SSD NVMe' },
      // { label: 'Pantalla', value: '17.3" QHD 165Hz' },
      // { label: 'Tarjeta Gráfica', value: 'NVIDIA RTX 4070' },
      // { label: 'Sistema Operativo', value: 'Windows 11 Home' },
      // { label: 'Refrigeración', value: 'Sistema dual fan' },
      // { label: 'Teclado', value: 'Mecánico RGB' }
    ],
    features: [
      // { label: 'Peso', value: '2.5 kg' },
      // { label: 'Batería', value: 'Hasta 8 horas' },
      // { label: 'Cámara', value: 'HD 1080p con IR' },
      // { label: 'Audio', value: 'THX Spatial Audio' }
    ],
    inStock: true,
    stockQuantity: 8,
    rating: 4.9,
    reviewCount: 89,
    tags: ['gaming', 'alto-rendimiento', '165hz', 'ryzen']
  }
  // Agregar más productos mock según necesites...
];

// Simulación de categorías
export type ProductCategory = 'Laptops' | 'PC' | 'Licencias';

export const categories: Record<ProductCategory, string> = {
  'Laptops': 'Laptops',
  'PC': 'Computadoras de Escritorio',
  'Licencias': 'Licencias de Software'
};

class ProductService {
  // Simular delay de red
  private async simulateNetworkDelay(ms: number = 500): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Obtener todos los productos
  async getAllProducts(): Promise<ProductData[]> {
    await this.simulateNetworkDelay();
    return [...mockProducts];
  }

  // Obtener productos por categoría
  async getProductsByCategory(category: ProductCategory): Promise<ProductData[]> {
    await this.simulateNetworkDelay();
    return mockProducts.filter(product => product.category === category);
  }

  // Obtener producto por ID
  async getProductById(id: string): Promise<ProductData | null> {
    await this.simulateNetworkDelay();
    const product = mockProducts.find(product => product.id === id);
    return product || null;
  }

  // Obtener productos similares (misma categoría, excluyendo el actual)
  async getSimilarProducts(productId: string, limit: number = 4): Promise<ProductData[]> {
    await this.simulateNetworkDelay();
    
    const currentProduct = mockProducts.find(p => p.id === productId);
    if (!currentProduct) return [];

    const similarProducts = mockProducts.filter(
      product => product.category === currentProduct.category && product.id !== productId
    );

    return similarProducts.slice(0, limit);
  }

  // Buscar productos
  async searchProducts(query: string): Promise<ProductData[]> {
    await this.simulateNetworkDelay();
    
    const searchTerm = query.toLowerCase();
    return mockProducts.filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }

  // Obtener productos con paginación
  async getProductsWithPagination(
    page: number = 1, 
    limit: number = 10, 
    category?: ProductCategory
  ): Promise<{ products: ProductData[], total: number, totalPages: number }> {
    await this.simulateNetworkDelay();
    
    let filteredProducts = mockProducts;
    if (category) {
      filteredProducts = mockProducts.filter(product => product.category === category);
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    return {
      products: paginatedProducts,
      total: filteredProducts.length,
      totalPages: Math.ceil(filteredProducts.length / limit)
    };
  }

  // Verificar stock
  async checkStock(productId: string): Promise<{ inStock: boolean, quantity: number }> {
    await this.simulateNetworkDelay(200);
    
    const product = mockProducts.find(p => p.id === productId);
    return {
      inStock: product?.inStock || false,
      quantity: product?.stockQuantity || 0
    };
  }

  // Método para simular adding to cart (futuro)
  async addToCart(productId: string, quantity: number = 1): Promise<boolean> {
    await this.simulateNetworkDelay(300);
    
    const product = mockProducts.find(p => p.id === productId);
    if (!product || !product.inStock || product.stockQuantity < quantity) {
      throw new Error('Producto no disponible o sin stock suficiente');
    }

    // En el futuro aquí se haría la llamada real a la API
    console.log(`Producto ${productId} añadido al carrito (cantidad: ${quantity})`);
    return true;
  }
}

// Instancia singleton del servicio
export const productService = new ProductService();

// Tipos de exportación para uso en componentes
