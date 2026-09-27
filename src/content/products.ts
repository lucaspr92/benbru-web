export type CategoryId = "panaderia" | "pasteleria" | "cafeteria" | "salados";

export interface Category {
  id: CategoryId;
  name: string;
  tagline: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  shortDescription: string;
  longDescription: string;
  tags?: string[];
  featured?: boolean;
  image: string;
  alt: string;
}

export const categories: Category[] = [
  {
    id: "panaderia",
    name: "Panadería & Masa Madre",
    tagline: "Corteza dorada, miga alveolada y fermentación lenta.",
    description: "Hogazas rústicas, baguettes tradicionales y panes de semillas elaborados 100% con masa madre viva."
  },
  {
    id: "pasteleria",
    name: "Pastelería & Bollería",
    tagline: "Hojaldres laminados con pura manteca y clásicos del obrador.",
    description: "Croissants clásicos y rellenos, pain au chocolat, medialunas de manteca, rollos de canela y tortas."
  },
  {
    id: "salados",
    name: "Salados & Sandwiches",
    tagline: "Elaborados con nuestros panes recién salidos del horno.",
    description: "Focaccias con aceite de oliva extra virgen, croissants rellenos de jamón crudo y queso brie, y tostados."
  },
  {
    id: "cafeteria",
    name: "Cafetería de Especialidad",
    tagline: "Granos de origen, tostado medio y calibrado diario.",
    description: "Espresso, Flat White, Cappuccino, Iced Latte y bebidas artesanales elaboradas por baristas."
  }
];

export const products: Product[] = [
  // Panadería
  {
    id: "hogaza-campo-masa-madre",
    name: "Hogaza de Campo Clásica",
    category: "panaderia",
    shortDescription: "Pan de masa madre con 36 hs de fermentación en frío, harina integral y harina pura.",
    longDescription: "Nuestra hogaza insignia. Corteza crocante y caramelizada, miga elástica y aireada, con notas sutilmente ácidas características del cultivo de masa madre natural.",
    tags: ["Masa Madre", "Fermentación 36h", "Sin aditivos"],
    featured: true,
    image: "/images/productos/hogaza.webp",
    alt: "Hogaza de campo con corteza dorada y cortes artísticos"
  },
  {
    id: "pan-semillas-masa-madre",
    name: "Hogaza Multisemillas",
    category: "panaderia",
    shortDescription: "Sésamo tostado, lino dorado, chía y semillas de girasol hidratadas en masa madre.",
    longDescription: "Elaborado con un blend de harinas y una generosa mezcla de semillas tostadas tanto en el interior como en la corteza, otorgando un sabor a frutos secos inigualable.",
    tags: ["Masa Madre", "Multisemillas"],
    featured: false,
    image: "/images/productos/pan-semillas.webp",
    alt: "Hogaza con semillas de sésamo y girasol tostadas"
  },
  {
    id: "baguette-tradicion",
    name: "Baguette Tradición Francesa",
    category: "panaderia",
    shortDescription: "Corteza extra crujiente, miga ligera y alveolada. Horneada varias veces al día.",
    longDescription: "Elaborada siguiendo el método tradicional francés con fermentación lenta sobre lino. Ideal para acompañar tus comidas o armar sandwiches gourmet.",
    tags: ["Horneado Continuo", "Tradicional"],
    featured: true,
    image: "/images/productos/baguette.webp",
    alt: "Baguettes doradas recién horneadas"
  },
  {
    id: "pan-brioche-molde",
    name: "Pan Brioche de Molde",
    category: "panaderia",
    shortDescription: "Masa ultra suave enriquecida con manteca de primera calidad y huevos de campo.",
    longDescription: "Un pan dulce, dorado y esponjoso. Perfecto para tostadas francesas, desayunos especiales o hamburguesas caseras de lujo.",
    tags: ["100% Manteca", "Esponjoso"],
    featured: false,
    image: "/images/productos/brioche.webp",
    alt: "Pan brioche dorado y tierno"
  },

  // Pastelería
  {
    id: "croissant-parisino",
    name: "Croissant Clásico de Manteca",
    category: "pasteleria",
    shortDescription: "Hojaldre francés tradicional laminado con 100% pura manteca, dorado y crujiente.",
    longDescription: "Capas infinitas de hojaldre fino que se deshacen en la boca. Dorado por fuera, alveolado y mantecoso por dentro.",
    tags: ["100% Manteca", "Favorito", "Artesanal"],
    featured: true,
    image: "/images/productos/croissant.webp",
    alt: "Croissant clásico francés de hojaldre dorado"
  },
  {
    id: "croissant-almendras",
    name: "Croissant de Almendras",
    category: "pasteleria",
    shortDescription: "Relleno y cubierto con crema frangipane de almendras tostadas y azúcar impalpable.",
    longDescription: "Nuestro croissant clásico llevado a su máxima expresión: horneado dos veces, bañado con almíbar de vainilla y relleno de abundante crema frangipane casera.",
    tags: ["Especialidad", "Almendras"],
    featured: true,
    image: "/images/productos/croissant-almendras.webp",
    alt: "Croissant con láminas de almendras tostadas"
  },
  {
    id: "pain-au-chocolat",
    name: "Pain au Chocolat",
    category: "pasteleria",
    shortDescription: "Hojaldre mantecoso relleno de dos barras de chocolate semi-amargo belga.",
    longDescription: "Un clásico imbatible. La combinación del hojaldre crujiente y caliente con el corazón de chocolate derretido.",
    tags: ["Chocolate Belga", "100% Manteca"],
    featured: false,
    image: "/images/productos/pain-au-chocolat.webp",
    alt: "Pain au chocolat dorado con relleno de chocolate"
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll con Glaseado",
    category: "pasteleria",
    shortDescription: "Rollo de canela suave y especiado con glaseado de queso crema suave.",
    longDescription: "Masa brioche tierna enrollada con abundante canela aromática, azúcar morena y coronada con nuestro cremoso frosting de queso crema.",
    tags: ["Glaseado Crema", "Recién Horneado"],
    featured: true,
    image: "/images/productos/cinnamon-roll.webp",
    alt: "Rollo de canela con glaseado blanco brillante"
  },
  {
    id: "tarta-frutos-rojos",
    name: "Tarta de Frutos Rojos del Bosque",
    category: "pasteleria",
    shortDescription: "Masa sableé crujiente, crema pastelera suave de vainilla natural y frutos rojos.",
    longDescription: "Frutillas, arándanos y frambuesas frescas sobre una suave crema pastelera infusionada con chauchas de vainilla natural.",
    tags: ["Fruta Fresca", "Temporada"],
    featured: false,
    image: "/images/productos/tarta-frutos.webp",
    alt: "Tarta con arándanos, frambuesas y crema"
  },

  // Salados
  {
    id: "focaccia-romero-oliva",
    name: "Focaccia al Romero & Aceite de Oliva",
    category: "salados",
    shortDescription: "Masa de alta hidratación con abundante aceite de oliva extra virgen, romero y sal marina.",
    longDescription: "Crocante en la base y esponjosa en el centro. Servida sola, con tomates cherry confitados o como base para compartir.",
    tags: ["Aceite de Oliva Extra Virgen", "Masa Madre"],
    featured: true,
    image: "/images/productos/focaccia.webp",
    alt: "Focaccia italiana con hierbas y tomates secos"
  },
  {
    id: "croissant-relleno-brie",
    name: "Croissant Jamón Crudo & Queso Brie",
    category: "salados",
    shortDescription: "Croissant hojaldrado caliente, jamón crudo estacionado, queso brie y rúcula fresca.",
    longDescription: "El contraste perfecto entre la manteca del hojaldre, la cremosidad del brie fundido y la intensidad del jamón crudo de primera línea.",
    tags: ["Gourmet", "Caliente"],
    featured: true,
    image: "/images/productos/croissant-relleno.webp",
    alt: "Croissant relleno de jamón crudo y brie"
  },
  {
    id: "sandwich-ciabatta-lomito",
    name: "Ciabatta de Masa Madre con Lomito Ahumado",
    category: "salados",
    shortDescription: "Pan ciabatta rústico, lomito ahumado, tomates asados, mozzarella fior di latte y pesto.",
    longDescription: "Un sandwich contundente y lleno de sabor con pan crujiente y miga llena de alveolos que absorbe el pesto artesanal de albahaca.",
    tags: ["Masa Madre", "Pesto Casero"],
    featured: false,
    image: "/images/productos/sandwich-ciabatta.webp",
    alt: "Sandwich de pan ciabatta con vegetales y queso fundido"
  },

  // Cafetería
  {
    id: "flat-white-especialidad",
    name: "Flat White de Especialidad",
    category: "cafeteria",
    shortDescription: "Doble shot de espresso de origen con microespuma de leche sedosa.",
    longDescription: "Para los amantes del café con cuerpo y balance. Sabor dulce natural de la leche emulsionada con la intensidad del grano de especialidad.",
    tags: ["Café de Especialidad", "Doble Shot"],
    featured: true,
    image: "/images/productos/flat-white.webp",
    alt: "Taza de Flat White con latte art de espiga"
  },
  {
    id: "cappuccino-italiano",
    name: "Cappuccino Tradicional",
    category: "cafeteria",
    shortDescription: "Espresso, leche vaporizada y generosa espuma coronada con cacao amargo.",
    longDescription: "El clásico de todas las mañanas, cremoso y reconfortante. Disponible también con leche vegetal de almendras o avena.",
    tags: ["Clásico", "Opciones Vegetales"],
    featured: false,
    image: "/images/productos/cappuccino.webp",
    alt: "Cappuccino espumoso en taza de cerámica"
  },
  {
    id: "iced-latte-vainilla",
    name: "Iced Latte Vainilla & Caramelo",
    category: "cafeteria",
    shortDescription: "Espresso frío sobre hielo, leche fresca y almíbar casero de vainilla natural.",
    longDescription: "La bebida más refrescante para los días soleados en la costa. Equilibrada, dulce y con el toque enérgico del café recién extraído.",
    tags: ["Frío", "Verano"],
    featured: true,
    image: "/images/productos/iced-latte.webp",
    alt: "Vaso de café helado Iced Latte con capas de leche y espresso"
  }
];
