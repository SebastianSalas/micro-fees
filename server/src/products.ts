export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Martillo de Uña',
    price: 10.99,
    description: 'Un martillo de uña ideal para cualquier trabajo de carpintería.',
    image: 'http://localhost:8080/hammer.jpg',
    longDescription:
      'Nuestro Martillo de Uña está diseñado para proporcionar la máxima durabilidad y precisión. Con un mango ergonómico y una cabeza de acero endurecido, es perfecto para clavar y retirar clavos con facilidad. Ideal para profesionales y aficionados por igual.',
  },
  {
    id: 2,
    name: 'Destornillador Phillips',
    price: 3.99,
    description: 'Un destornillador Phillips de acero inoxidable.',
    image: 'http://localhost:8080/screwdriver.jpg',
    longDescription:
      'El Destornillador Phillips es una herramienta esencial en cualquier caja de herramientas. Fabricado con acero inoxidable de alta calidad, ofrece una gran resistencia y durabilidad. Su mango ergonómico facilita su uso, permitiendo aplicar la fuerza necesaria con comodidad.',
  },
  {
    id: 3,
    name: 'Llave Inglesa Ajustable',
    price: 14.99,
    description: 'Una llave inglesa ajustable para todas tus necesidades de reparación.',
    image: 'http://localhost:8080/wrench.jpg',
    longDescription:
      'La Llave Inglesa Ajustable es perfecta para trabajos de fontanería y mecánica. Con un mecanismo de ajuste suave y preciso, se adapta a diferentes tamaños de tuercas y tornillos. Su construcción robusta garantiza una larga vida útil y un rendimiento óptimo.',
  },
  {
    id: 5,
    name: 'Cinta Métrica',
    price: 5.99,
    description: 'Cinta métrica de 5 metros, precisa y duradera.',
    image: 'http://localhost:8080/tape-measure.jpg',
    longDescription:
      'Nuestra Cinta Métrica de 5 metros es la herramienta ideal para medir con precisión. Fabricada con materiales resistentes, es duradera y fácil de usar. Su diseño compacto permite llevarla en el bolsillo o en la caja de herramientas sin problemas.',
  },
  {
    id: 6,
    name: 'Alicates de Corte',
    price: 7.99,
    description: 'Alicates de corte precisos y resistentes.',
    image: 'http://localhost:8080/pliers.jpg',
    longDescription:
      'Los Alicates de Corte son esenciales para trabajos eléctricos y de bricolaje. Con cuchillas afiladas y un diseño ergonómico, permiten realizar cortes precisos con poco esfuerzo. Su construcción robusta asegura una larga vida útil, incluso con un uso intensivo.',
  },
  {
    id: 7,
    name: 'Taladro Eléctrico',
    price: 49.99,
    description: 'Taladro eléctrico de alta potencia para todo tipo de superficies.',
    image: 'http://localhost:8080/drill.jpg',
    longDescription:
      'El Taladro Eléctrico ofrece una gran potencia y versatilidad para perforar en madera, metal y concreto. Con varias velocidades ajustables y un diseño ergonómico, es una herramienta indispensable para cualquier proyecto de construcción o reparación. Incluye un set de brocas para diferentes aplicaciones.',
  },
  {
    id: 8,
    name: 'Nivel de Burbuja',
    price: 4.99,
    description: 'Nivel de burbuja de 30 cm para precisión en nivelación.',
    image: 'http://localhost:8080/level.jpg',
    longDescription:
      'El Nivel de Burbuja de 30 cm es una herramienta imprescindible para cualquier trabajo de construcción o decoración. Con burbujas de alta visibilidad y una base magnética, facilita la nivelación precisa en cualquier superficie. Su diseño ligero y resistente lo hace fácil de transportar y usar.',
  },
  {
    id: 9,
    name: 'Sierra de Mano',
    price: 12.99,
    description: 'Sierra de mano con hoja de acero templado para cortes precisos.',
    image: 'http://localhost:8080/handsaw.jpg',
    longDescription:
      'La Sierra de Mano es perfecta para cortes en madera y plásticos. Su hoja de acero templado garantiza cortes limpios y precisos, mientras que su mango ergonómico proporciona comodidad y control durante el uso. Ideal para proyectos de carpintería y bricolaje.',
  },
  {
    id: 10,
    name: 'Juego de Llaves Allen',
    price: 8.99,
    description: 'Juego de llaves Allen de diferentes tamaños.',
    image: 'http://localhost:8080/allen-keys.jpg',
    longDescription:
      'Este Juego de Llaves Allen incluye una variedad de tamaños para adaptarse a diferentes tornillos y pernos. Fabricadas en acero de alta resistencia, ofrecen durabilidad y precisión. Su diseño compacto permite un fácil almacenamiento y transporte.',
  },
  {
    id: 11,
    name: 'Cúter Retráctil',
    price: 3.99,
    description: 'Cúter retráctil con cuchilla ajustable y bloqueo de seguridad.',
    image: 'http://localhost:8080/utility-knife.jpg',
    longDescription:
      'El Cúter Retráctil es una herramienta versátil para cortar cartón, plástico y otros materiales. Su cuchilla ajustable y sistema de bloqueo de seguridad aseguran un uso preciso y seguro. Ideal para uso en casa, oficina o taller.',
  },
];

export default products;