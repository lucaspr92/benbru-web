export type CategoryId = "panaderia" | "pasteleria" | "salados" | "cafeteria" | "almacen";

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
    name: "Panadería",
    tagline: "Elaboración diaria y tradicional de panificados y facturas.",
    description: "Facturas surtidas, especialidades hojaldradas, chipá caliente y panes caseros recién horneados."
  },
  {
    id: "pasteleria",
    name: "Pastelería & Tortas",
    tagline: "Tartas y postres clásicos. Disponibles por porciones o enteras.",
    description: "Pastafrola, tartas de ricota y coco, Selva Negra, Balcarce, Chajá y brownies con dulce de leche."
  },
  {
    id: "salados",
    name: "Salados & Sándwiches",
    tagline: "Sándwiches de miga frescos, prepizzas a la piedra y empanadas.",
    description: "Variedad de triples de miga tradicionales, prepizzas caseras y empanadas con masa artesanal."
  },
  {
    id: "cafeteria",
    name: "Cafetería",
    tagline: "Café de especialidad, bebidas calientes y frías para acompañar.",
    description: "Espresso, Flat White, Cappuccino, submarino e Iced Latte preparados con café seleccionado."
  },
  {
    id: "almacen",
    name: "Almacén, Bebidas & Fuego",
    tagline: "Bebidas frías, lácteos, yerba, hielo, carbón y leña para tus asados.",
    description: "Todo lo que necesitás para tu estadía en Costa del Este: agua en bidón, cervezas, lácteos, hielo y leña."
  }
];

export const products: Product[] = [
  // ================= PANADERÍA =================
  {
    id: "facturas-surtidas",
    name: "Facturas Surtidas",
    category: "panaderia",
    shortDescription: "Medialunas de manteca, de grasa, vigilantes, sacramentos y cañoncitos de dulce de leche.",
    longDescription: "Nuestras tradicionales facturas horneadas en varias tandas al día. Masa hojaldrada, almíbar dorado y el mejor dulce de leche repostero y crema pastelera.",
    tags: ["Horneado Diario", "Favorito del Mate"],
    featured: true,
    image: "/images/productos/facturas.webp",
    alt: "Bandeja de facturas surtidas recién horneadas"
  },
  {
    id: "libritos",
    name: "Libritos de Grasa Hojaldrados",
    category: "panaderia",
    shortDescription: "Capitas crocantes de hojaldre criollo, secos y dorados.",
    longDescription: "Clásico infaltable de la panadería argentina. Hojaldre fino que se desarma capa por capa, con el tostado justo para acompañar el mate.",
    tags: ["Hojaldre Criollo", "Para el Mate"],
    featured: false,
    image: "/images/productos/libritos.webp",
    alt: "Libritos de grasa hojaldrados crocantes"
  },
  {
    id: "bizcochitos",
    name: "Bizcochitos de Grasa",
    category: "panaderia",
    shortDescription: "Bizcochitos tradicionales, crocantes por fuera y suaves por dentro.",
    longDescription: "Elaborados diariamente con masa clásica, toque de sal justo y textura crujiente. El compañero inseparable de cada mañana y tarde en la playa.",
    tags: ["Clásico Argentino", "Crocante"],
    featured: true,
    image: "/images/productos/bizcochitos.webp",
    alt: "Bizcochitos de grasa dorados"
  },
  {
    id: "cremona",
    name: "Cremona Hojaldrada",
    category: "panaderia",
    shortDescription: "Gran corona de hojaldre crocante y tierno en su centro.",
    longDescription: "Hermosa pieza hojaldrada con cortes en flor. Dorada a fuego de horno parejo, ideal para compartir en familia a la hora del mate.",
    tags: ["Hojaldrada", "Para Compartir"],
    featured: false,
    image: "/images/productos/cremona.webp",
    alt: "Cremona de hojaldre recién salida del horno"
  },
  {
    id: "chipa",
    name: "Chipá Tradicional",
    category: "panaderia",
    shortDescription: "Bocados de almidón de mandioca y abundante queso reggianito y sardo.",
    longDescription: "Crocantes por fuera y súper gomosos y elásticos por dentro. Horneados continuamente durante el día para que los disfrutes bien calientes.",
    tags: ["Sin TACC (Apto Celíacos)", "Puro Queso", "Recién Salido"],
    featured: true,
    image: "/images/productos/chipa.webp",
    alt: "Chipás de queso dorados y humeantes"
  },
  {
    id: "palmeritas",
    name: "Palmeritas Acarameladas",
    category: "panaderia",
    shortDescription: "Hojaldre dulce caramelizado al horno, crujientes e irresistibles.",
    longDescription: "Elaboradas con finas láminas de hojaldre enrolladas con abundante azúcar que se carameliza en el horno hasta lograr un brillo y crujido único.",
    tags: ["Caramelizadas", "Dulces"],
    featured: false,
    image: "/images/productos/palmeritas.webp",
    alt: "Palmeritas hojaldradas y caramelizadas"
  },
  {
    id: "rosquitas",
    name: "Rosquitas Azucaradas",
    category: "panaderia",
    shortDescription: "Rosquitas esponjosas de masa tierna cubiertas con azúcar.",
    longDescription: "Masa aromática con un toque cítrico y vainilla, horneadas hasta dorar y rebozadas en azúcar cristal.",
    tags: ["Dulce Tradicional"],
    featured: false,
    image: "/images/productos/rosquitas.webp",
    alt: "Rosquitas azucaradas doradas"
  },
  {
    id: "palitos-anis",
    name: "Palitos de Anís",
    category: "panaderia",
    shortDescription: "Secos, aromáticos y crujientes con semillas naturales de anís.",
    longDescription: "Especialidad tradicional de la panadería artesanal. Masa seca y quebradiza con el inconfundible aroma y sabor del anís estrellado.",
    tags: ["Artesanal", "Sabor Tradicional"],
    featured: false,
    image: "/images/productos/palitos-anis.webp",
    alt: "Palitos de anís secos y crocantes"
  },
  {
    id: "pan-tradicional",
    name: "Pan Tradicional (Flauta / Miñón)",
    category: "panaderia",
    shortDescription: "Corteza crocante y miga tierna. Horneado continuo todas las mañanas y tardes.",
    longDescription: "El pan de mesa de todos los días. Elaborado con harina seleccionada y fermentación controlada para lograr ese crocante que dura todo el día.",
    tags: ["Horneado Continuo", "Pan de Mesa"],
    featured: true,
    image: "/images/productos/pan-tradicional.webp",
    alt: "Pan tradicional flauta y miñones crujientes"
  },
  {
    id: "pan-casero",
    name: "Pan Casero de Campo",
    category: "panaderia",
    shortDescription: "Miga densa y húmeda, corteza rústica y sabor reconfortante.",
    longDescription: "Elaborado como en las casas de campo, con un toque de grasa noble que le otorga una miga esponjosa, elástica y duradera.",
    tags: ["Estilo Campo", "Rústico"],
    featured: false,
    image: "/images/productos/pan-casero.webp",
    alt: "Pan casero redondo con corte rústico"
  },
  {
    id: "negritos",
    name: "Negritos de Salvado",
    category: "panaderia",
    shortDescription: "Panes individuales de salvado puro y harina integral.",
    longDescription: "Miga rica en fibra natural, liviana y nutritiva. Perfectos para armar sandwiches saludables o acompañar tostadas en el desayuno.",
    tags: ["Integral", "Con Salvado"],
    featured: false,
    image: "/images/productos/negritos.webp",
    alt: "Panes individuales negritos de salvado"
  },
  {
    id: "figazas",
    name: "Figazas de Manteca & Grasa",
    category: "panaderia",
    shortDescription: "Masa ultra suave y blanca con una fina película dorada.",
    longDescription: "Figacitas clásicas, ideales para rellenar con jamón y queso, bondiola o carnes al asador. Miga tierna y esponjosa.",
    tags: ["Ultra Suaves", "Para Sandwiches"],
    featured: false,
    image: "/images/productos/figazas.webp",
    alt: "Figacitas de manteca y grasa tiernas"
  },

  // ================= PASTELERÍA =================
  {
    id: "invertida-manzana",
    name: "Tarta Invertida de Manzana",
    category: "pasteleria",
    shortDescription: "Manzanas fileteadas caramelizadas sobre bizcochuelo tierno. (Porción o Entera)",
    longDescription: "Manzanas frescas cocidas lentamente en caramelo de manteca y canela, coronando una base suave de bizcochuelo húmedo. Podés pedirla por porción individual o tarta entera.",
    tags: ["Porción o Entera", "Fruta Natural"],
    featured: true,
    image: "/images/productos/invertida-manzana.webp",
    alt: "Tarta invertida de manzana con caramelo brillante"
  },
  {
    id: "tarta-ricota",
    name: "Tarta de Ricota Tradicional",
    category: "pasteleria",
    shortDescription: "Relleno cremoso de ricota fresca aromatizada con ralladura de limón. (Porción o Entera)",
    longDescription: "Masa dulce quebradiza rellena con abundante ricota fresca tamizada, perfumada con limón y vainilla natural, espolvoreada con azúcar impalpable.",
    tags: ["Porción o Entera", "Clásico Imbatible"],
    featured: false,
    image: "/images/productos/tarta-ricota.webp",
    alt: "Tarta de ricota suave con azúcar impalpable"
  },
  {
    id: "ricota-dulce-leche",
    name: "Tarta de Ricota con Dulce de Leche",
    category: "pasteleria",
    shortDescription: "Base crocante, generoso colchón de dulce de leche y ricota cremosa. (Porción o Entera)",
    longDescription: "La combinación perfecta entre la frescura suave de la ricota casera y la intensidad dulce del dulce de leche repostero argentino.",
    tags: ["Porción o Entera", "Dulce de Leche"],
    featured: true,
    image: "/images/productos/ricota-dulce-leche.webp",
    alt: "Tarta de ricota y dulce de leche"
  },
  {
    id: "tarta-coco",
    name: "Tarta de Coco & Dulce de Leche",
    category: "pasteleria",
    shortDescription: "Masa sablée, abundante dulce de leche y cubierta de coco dorado. (Porción o Entera)",
    longDescription: "Un clásico de la repostería artesanal. Masa crocante rellena de dulce de leche repostero y coronada con una capa crocante de coco rallado tostado.",
    tags: ["Porción o Entera", "Favorito"],
    featured: true,
    image: "/images/productos/tarta-coco.webp",
    alt: "Tarta de coco dorado y dulce de leche"
  },
  {
    id: "pastafrola",
    name: "Pasta Frola Artesanal",
    category: "pasteleria",
    shortDescription: "Tradicional masa mantecosa con dulce de membrillo o batata. (Porción o Entera)",
    longDescription: "Elaborada con masa suave aromatizada con vainilla y cubierta con el clásico enrejado. Disponible en variedades de membrillo intenso o batata suave.",
    tags: ["Porción o Entera", "Membrillo / Batata"],
    featured: true,
    image: "/images/productos/pastafrola.webp",
    alt: "Pasta frola con enrejado clásico y dulce brillante"
  },
  {
    id: "postre-balcarce",
    name: "Postre Balcarce",
    category: "pasteleria",
    shortDescription: "Bizcochuelo, crema chantilly, dulce de leche, merengue seco y nueces. (Porción o Entero)",
    longDescription: "El emblema de la provincia de Buenos Aires. Suaves capas de bizcochuelo húmedo, abundante dulce de leche, nueces picadas, merengue crocante y coco rallado en los bordes.",
    tags: ["Porción o Entera", "Especialidad Bonaerense"],
    featured: true,
    image: "/images/productos/postre-balcarce.webp",
    alt: "Postre Balcarce con crema, merengue y nueces"
  },
  {
    id: "selva-negra",
    name: "Torta Selva Negra",
    category: "pasteleria",
    shortDescription: "Bizcochuelo húmedo de chocolate, cerezas al licor, crema chantilly y rulos de chocolate. (Porción o Entera)",
    longDescription: "Pastelería europea clásica elaborada con cacao amargo de primera calidad, relleno de crema fresca y cerezas maceradas, decorada con abundante chocolate en virutas.",
    tags: ["Porción o Entera", "Chocolate & Cerezas"],
    featured: false,
    image: "/images/productos/selva-negra.webp",
    alt: "Torta Selva Negra con rulos de chocolate y cerezas"
  },
  {
    id: "brownie-nuez",
    name: "Brownie con Dulce de Leche & Merengue",
    category: "pasteleria",
    shortDescription: "Base intensa de chocolate con nueces, dulce de leche y merengue italiano. (Porción o Entero)",
    longDescription: "Brownie húmedo y denso con puro chocolate semi-amargo y nueces tostadas, cubierto por una generosa capa de dulce de leche y picos de merengue suave flameado.",
    tags: ["Porción o Entera", "Puro Chocolate"],
    featured: true,
    image: "/images/productos/brownie-nuez.webp",
    alt: "Brownie húmedo con dulce de leche y merengue italiano"
  },
  {
    id: "bombon-suizo",
    name: "Torta Bombón Suizo",
    category: "pasteleria",
    shortDescription: "Base de galletitas, corazón de dulce de leche y mousse de chocolate crocante. (Porción o Entera)",
    longDescription: "Un deleite para los amantes de los postres golosos. Capas de crema chantilly, dulce de leche y cobertura crujiente de chocolate semiamargo.",
    tags: ["Porción o Entera", "Gourmet"],
    featured: false,
    image: "/images/productos/bombon-suizo.webp",
    alt: "Torta Bombón Suizo con baño brillante de chocolate"
  },
  {
    id: "chaja",
    name: "Postre Chajá",
    category: "pasteleria",
    shortDescription: "Bizcochuelo etéreo, duraznos en almíbar, crema chantilly y merengues crocantes. (Porción o Entero)",
    longDescription: "Postre fresco y liviano. El contraste perfecto entre la suavidad de la crema fresca, los duraznos jugosos y el crujido inconfundible del merengue casero seco.",
    tags: ["Porción o Entera", "Con Duraznos"],
    featured: false,
    image: "/images/productos/chaja.webp",
    alt: "Postre Chajá con merengue seco y duraznos"
  },

  // ================= SALADOS Y SÁNDWICHES =================
  {
    id: "sandwiches-miga",
    name: "Sándwiches de Miga Triples (Variedad)",
    category: "salados",
    shortDescription: "Jamón y queso, jamón y tomate, jamón y huevo, primavera, salame y queso.",
    longDescription: "Elaborados diariamente con pan de miga extra suave y fresco. Rellenos abundantes: Jamón cocido natural, queso tybo cremoso, tomate fresco, huevo picado, lechuga y mayonesa suave.",
    tags: ["Miga Fresca", "Surtidos Tradicionales"],
    featured: true,
    image: "/images/productos/sandwiches-miga.webp",
    alt: "Bandeja de sándwiches de miga triples recién armados"
  },
  {
    id: "prepizzas-muzzarella",
    name: "Pre-pizza con Salsa y Muzzarella",
    category: "salados",
    shortDescription: "Masa a la piedra casera con salsa de tomate condimentada y abundante queso muzzarella.",
    longDescription: "Piso crocante y masa liviana de fácil digestión. Lista para calentar al horno o a la parrilla en tu casa o cabaña. ¡Ideal para resolver la cena en minutos!",
    tags: ["A la Piedra", "Lista para Hornear"],
    featured: true,
    image: "/images/productos/prepizzas-muzzarella.webp",
    alt: "Pre-pizza casera con salsa y muzzarella derretida"
  },
  {
    id: "prepizzas-fugazzeta",
    name: "Pre-pizza Fugazzeta Casera",
    category: "salados",
    shortDescription: "Masa crujiente cubierta con abundante cebolla dulce en juliana, queso y orégano.",
    longDescription: "Cebollas doradas y desglasadas que aportan dulzor natural sobre una base generosa de queso y masa artesanal a la piedra.",
    tags: ["Cebolla Dorada", "A la Piedra"],
    featured: false,
    image: "/images/productos/prepizzas-fugazzeta.webp",
    alt: "Pre-pizza de fugazzeta con cebollas doradas"
  },
  {
    id: "empanadas-artesanales",
    name: "Empanadas Caseras al Horno",
    category: "salados",
    shortDescription: "Carne a cuchillo, carne suave, pollo, jamón y queso, humita y verdura.",
    longDescription: "Masa casera dorada y crujiente con rellenos abundantes y jugosos. Elaboradas en el día con condimentos equilibrados y materias primas de calidad.",
    tags: ["Sabores Clásicos", "Al Horno"],
    featured: true,
    image: "/images/productos/empanadas.webp",
    alt: "Empanadas caseras doradas con repulgue tradicional"
  },

  // ================= CAFETERÍA =================
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
    tags: ["Frío", "Ideal Playa"],
    featured: true,
    image: "/images/productos/iced-latte.webp",
    alt: "Vaso de café helado Iced Latte con capas de leche y espresso"
  },

  // ================= ALMACÉN, BEBIDAS & FUEGO =================
  {
    id: "bebidas-aguas-gaseosas",
    name: "Bebidas Frías (Agua, Saborizadas & Gaseosas)",
    category: "almacen",
    shortDescription: "Agua mineral con/sin gas, saborizadas Levité/Aquarius, línea Coca-Cola y Cepita.",
    longDescription: "Bebidas bien frías listas para consumir en el local, llevar a la playa o acompañar tus almuerzos y meriendas. Variedad de tamaños individuales y familiares.",
    tags: ["Bien Frías", "Variedad"],
    featured: false,
    image: "/images/productos/bebidas-aguas.webp",
    alt: "Botellas y latas de bebidas frías, aguas y gaseosas"
  },
  {
    id: "gatorade-hidratacion",
    name: "Gatorade (Línea Hidratación)",
    category: "almacen",
    shortDescription: "Sabores manzana, cool blue, naranja y frutos rojos. Frías de heladera.",
    longDescription: "La bebida isotónica ideal para hidratarse luego de una caminata por los senderos de Costa del Este o un día de playa y deporte.",
    tags: ["Hidratación", "Deportes"],
    featured: false,
    image: "/images/productos/gatorade.webp",
    alt: "Botellas de Gatorade de varios sabores"
  },
  {
    id: "cervezas-lata-botella",
    name: "Cervezas (Lata & Botella)",
    category: "almacen",
    shortDescription: "Variedad de marcas clásicas y rubias/rojas/negras en lata y botella fría.",
    longDescription: "Cervezas heladas listas para llevar al atardecer en la playa o disfrutar junto al asado y las picadas en Costa del Este.",
    tags: ["Heladas", "Lata & Botella"],
    featured: false,
    image: "/images/productos/cervezas.webp",
    alt: "Cervezas frías en lata y botella"
  },
  {
    id: "yerba-mate",
    name: "Yerba Mate (Playadito, Amanda & Mañanita)",
    category: "almacen",
    shortDescription: "Paquetes de 500g y 1kg de las marcas preferidas para el mate.",
    longDescription: "Nunca te quedes sin yerba en tus vacaciones. Contamos con las marcas más elegidas: Playadito tradicional suave, Amanda clásica y Mañanita.",
    tags: ["Para el Mate", "500g / 1kg"],
    featured: true,
    image: "/images/productos/yerba-mate.webp",
    alt: "Paquetes de yerba mate Playadito y Amanda"
  },
  {
    id: "galletitas-condor",
    name: "Galletitas Cóndor (Chica & Grande)",
    category: "almacen",
    shortDescription: "Las tradicionales galletitas secas crocantes para el mate o la picada.",
    longDescription: "El clásico indiscutido de la costa. Paquete chico y grande de galletitas secas Cóndor, perfectas para untar con manteca o dulce de leche.",
    tags: ["Clásico de la Costa", "Chica / Grande"],
    featured: false,
    image: "/images/productos/galletitas-condor.webp",
    alt: "Paquetes de galletitas secas Cóndor"
  },
  {
    id: "lacteos-almacen",
    name: "Lácteos Frescos (Leche, Manteca, Yogurt & Crema)",
    category: "almacen",
    shortDescription: "Leche entera/descremada, manteca de primera marca, yogurt y crema de leche.",
    longDescription: "Lácteos frescos de heladera para resolver el desayuno, las recetas caseras o las meriendas en tu casa o cabaña.",
    tags: ["Frescos", "Primeras Marcas"],
    featured: false,
    image: "/images/productos/lacteos.webp",
    alt: "Leche, manteca y yogures frescos"
  },
  {
    id: "agua-bidon",
    name: "Agua en Bidón (6L / 10L)",
    category: "almacen",
    shortDescription: "Bidones de agua mineral pura para cabañas, casas y consumo familiar.",
    longDescription: "Agua mineral baja en sodio en presentación de bidón grande, esencial para tu estadía cómoda en Costa del Este.",
    tags: ["Esencial para Cabañas", "6L / 10L"],
    featured: true,
    image: "/images/productos/agua-bidon.webp",
    alt: "Bidón grande de agua mineral"
  },
  {
    id: "bolsa-hielo",
    name: "Bolsa de Hielo en Cubos",
    category: "almacen",
    shortDescription: "Bolsa de hielo cristalino en rolos para conservadoras, bebidas y asados.",
    longDescription: "Mantené tus bebidas heladas en la playa o durante el almuerzo. Hielo en cubos disponible siempre en nuestro freezer.",
    tags: ["Para la Playa", "Conservadoras"],
    featured: false,
    image: "/images/productos/hielo.webp",
    alt: "Bolsa de cubos de hielo transparentes"
  },
  {
    id: "carbon-asado",
    name: "Carbón Vegetal (Bolsa Chica & Grande)",
    category: "almacen",
    shortDescription: "Carbón de quebracho seleccionado de encendido rápido y buena brasa.",
    longDescription: "Todo listo para el asado en el bosque. Carbón de excelente calidad que rinde y dura, disponible en presentación chica o grande.",
    tags: ["Para el Asado", "Chico / Grande"],
    featured: true,
    image: "/images/productos/carbon.webp",
    alt: "Bolsa de carbón vegetal para asado"
  },
  {
    id: "lena-fuego",
    name: "Leña Seca para Hogar & Parrilla",
    category: "almacen",
    shortDescription: "Atado de leña dura bien estacionada, ideal para salamandras, hogares y asados.",
    longDescription: "Leña seca seleccionada que prende fácil y genera brasas duraderas y calor reconfortante para las noches frescas de Costa del Este.",
    tags: ["Para Hogar & Asado", "Seca y Estacionada"],
    featured: true,
    image: "/images/productos/lena.webp",
    alt: "Atado de leña seca de quebracho"
  }
];
