# Documento Funcional — Sitio Web Institucional de Panadería
### Especificación lista para desarrollo asistido por IA (vibe coding)

**Versión:** 1.0
**Tipo de producto:** Sitio web institucional / brand site (NO e-commerce)
**Referencias de benchmark:** Buenos Aires Bakery (cadena, foco en sucursales y novedades) y Suevia (artesanal, foco en líneas de producto y locales con contacto directo)

---

## 0. Cómo usar este documento

Este documento está escrito para ser **pegado directamente como contexto** en una herramienta de generación de código (Claude Code, Genie Code, GitHub Copilot, Cursor, v0, etc.).

Reglas para el agente de IA que desarrolle:

1. **No inventar funcionalidad fuera del alcance.** Todo lo que no esté en la sección 3 está explícitamente fuera de scope.
2. **No agregar backend, base de datos, login, carrito ni pasarela de pago.** Ver sección 2.3 (No-objetivos).
3. **Todo el contenido editable debe vivir en archivos de datos** (`/src/content/*.ts` o `.json`), nunca hardcodeado dentro de los componentes JSX.
4. Cada entrega debe cumplir el **Definition of Done** (sección 12) antes de darse por terminada.
5. Si hay ambigüedad, elegir la opción **más simple y con menos dependencias**.

---

## 1. Contexto y objetivo de negocio

### 1.1 Problema
La panadería tiene presencia en redes sociales pero no tiene un punto digital propio que consolide su identidad. Hoy el "link in bio" de Instagram no lleva a ningún lado que refuerce la marca.

### 1.2 Objetivo primario
Construir un sitio web que **genere identidad de marca** y funcione como destino del link in bio: que el visitante entienda en menos de 10 segundos qué es la panadería, qué ofrece, dónde está y cómo contactarla.

### 1.3 Objetivos secundarios
- Mostrar el catálogo de productos de forma visual y apetitosa (sin precios ni compra).
- Facilitar el contacto inmediato: WhatsApp, teléfono, Instagram, mapa.
- Dar soporte a pedidos por canales existentes (WhatsApp / apps de delivery de terceros).
- Ser la base para crecer más adelante (más sucursales, catering, newsletter).

### 1.4 KPIs de éxito
| KPI | Meta |
|---|---|
| Clics en botón de WhatsApp | > 15% de las visitas |
| Clics en "Cómo llegar" / mapa | > 10% de las visitas |
| Clics a Instagram | > 8% de las visitas |
| Lighthouse Performance (mobile) | ≥ 90 |
| Tiempo de carga LCP (4G) | < 2.5 s |
| Rebote en home | < 55% |

---

## 2. Alcance

### 2.1 Usuarios objetivo (personas)

| Persona | Necesidad | Qué busca en el sitio |
|---|---|---|
| **Vecino del barrio** | Saber qué venden y el horario | Horarios, dirección, fotos de productos |
| **Cliente que viene de Instagram** | Validar que la marca es "real" y linda | Identidad visual, historia, productos |
| **Cliente que quiere encargar** | Pedir una torta / desayuno / bandeja | Botón de WhatsApp directo y visible |
| **Empresa / evento** | Catering o desayunos corporativos | Sección catering + formulario/contacto |
| **Usuario de paso** | "¿Dónde está la más cercana?" | Mapa y direcciones con un clic |

### 2.2 En alcance (MVP)
Páginas: Home, Nosotros, Productos, Encargos & Catering, Locales, Contacto.
Funcionalidades: navegación responsive, galería de productos por categoría, botón flotante de WhatsApp, mapa embebido, formulario de contacto (sin backend propio), enlaces a redes, SEO local.

### 2.3 Fuera de alcance (No-objetivos — no implementar)
- ❌ Carrito, checkout, pagos, precios online.
- ❌ Cuentas de usuario, login, panel admin.
- ❌ Base de datos, API propia, servidor Node corriendo 24/7.
- ❌ Stock en tiempo real, reservas con calendario.
- ❌ Multi-idioma (solo español rioplatense).
- ❌ Blog con CMS (las novedades son estáticas en el MVP).

---

## 3. Requerimientos funcionales

> Nomenclatura: `RF-XX`. Prioridad MoSCoW: **M**ust / **S**hould / **C**ould.

### 3.1 Navegación y layout global

| ID | Requerimiento | Prioridad |
|---|---|---|
| RF-01 | Header fijo (sticky) con logo a la izquierda y menú a la derecha. Al hacer scroll > 80px el header reduce su altura y gana fondo sólido + sombra sutil. | M |
| RF-02 | En mobile (<768px) el menú se colapsa en hamburguesa que abre un panel a pantalla completa con animación de entrada. | M |
| RF-03 | Ítems de menú: Inicio · Nosotros · Productos · Encargos · Locales · Contacto. Más un CTA destacado "Pedí por WhatsApp". | M |
| RF-04 | Botón flotante de WhatsApp (FAB) visible en todas las páginas, esquina inferior derecha, con `aria-label`. | M |
| RF-05 | Footer con: logo, frase de marca, links de navegación, dirección(es), horarios, íconos de redes sociales, links a apps de pedido, copyright dinámico con el año actual. | M |
| RF-06 | El link activo del menú se resalta visualmente según la ruta actual. | S |
| RF-07 | Scroll suave para anclas internas y botón "volver arriba" tras 600px de scroll. | C |

### 3.2 Home (`/`)

| ID | Requerimiento | Prioridad |
|---|---|---|
| RF-10 | **Hero** a pantalla completa (min-height 85vh) con imagen/video de producto, título de marca, bajada de 1 línea y dos CTAs: "Ver productos" (primario) y "Pedí por WhatsApp" (secundario). | M |
| RF-11 | **Barra de valor**: 3 o 4 ítems con ícono + texto corto (ej: "Horneado todos los días", "Recetas artesanales", "Desde 19XX en el barrio", "Cafetería de especialidad"). | M |
| RF-12 | **Bloque Nosotros (teaser)**: imagen + 2 párrafos + link "Conocé nuestra historia". | M |
| RF-13 | **Grid de categorías de producto**: tarjetas con imagen de fondo, nombre de categoría y hover con zoom suave. Cada una linkea a `/productos#categoria`. | M |
| RF-14 | **Sección Locales (teaser)**: mapa o imagen + lista de direcciones con teléfono clickeable y botón "Cómo llegar". | M |
| RF-15 | **Franja de Instagram**: grilla de 6 fotos (estáticas en MVP) + CTA "Seguinos en @usuario". | S |
| RF-16 | **Novedades / Destacados**: hasta 3 tarjetas (nueva apertura, producto de temporada, promo). Si el array de datos está vacío, la sección no se renderiza. | S |
| RF-17 | **CTA final** de ancho completo con fondo de color de marca: "¿Querés encargar algo especial?" + botón WhatsApp. | M |

### 3.3 Nosotros (`/nosotros`)

| ID | Requerimiento | Prioridad |
|---|---|---|
| RF-20 | Hero secundario con título e imagen de apoyo. | M |
| RF-21 | Relato de la marca en 3 bloques alternados (imagen izq/der + texto): origen, el oficio/proceso, el presente. | M |
| RF-22 | Bloque de valores: 3–4 ítems con ícono, título y descripción breve. | S |
| RF-23 | Línea de tiempo simple (año + hito), opcional, solo si hay historia que contar. | C |

### 3.4 Productos (`/productos`)

| ID | Requerimiento | Prioridad |
|---|---|---|
| RF-30 | Listado por **categorías**: Panadería, Pastelería, Salados/Sandwichería, Cafetería, Línea Salud, Chocolatería. Las categorías se definen en el archivo de contenido, no en el código. | M |
| RF-31 | Filtro por categoría mediante chips/tabs en la parte superior; filtrado **client-side** sin recargar la página. Estado reflejado en la URL (`?cat=pasteleria`). | M |
| RF-32 | Tarjeta de producto: imagen (ratio 4:3), nombre, descripción corta (máx. 90 caracteres) y tags opcionales (ej: "sin TACC", "vegano", "de temporada"). **Sin precio ni botón de compra.** | M |
| RF-33 | Al hacer clic en una tarjeta se abre un modal/lightbox con imagen grande, descripción extendida y botón "Consultar por WhatsApp" que prellena el mensaje con el nombre del producto. | S |
| RF-34 | Aviso visible: "Los productos pueden variar según disponibilidad y sucursal." | M |
| RF-35 | Lazy loading de imágenes + placeholder blur. | M |

### 3.5 Encargos y Catering (`/encargos`)

| ID | Requerimiento | Prioridad |
|---|---|---|
| RF-40 | Explicación de los 3 tipos de encargo: tortas y eventos, box de desayuno/regalo, catering corporativo. | M |
| RF-41 | Galería de ejemplos (6–9 imágenes) por tipo de encargo. | S |
| RF-42 | Bloque "Cómo encargar" en 3 pasos numerados (elegís → nos escribís → retirás o te lo llevamos). | M |
| RF-43 | Datos operativos claros: anticipación mínima, seña, zonas de entrega, medios de pago aceptados en el local. Texto, no lógica. | M |
| RF-44 | CTA de WhatsApp con mensaje prellenado según el tipo de encargo seleccionado. | M |

### 3.6 Locales (`/locales`)

| ID | Requerimiento | Prioridad |
|---|---|---|
| RF-50 | Listado de sucursales en tarjetas: nombre/barrio, dirección, teléfono (click-to-call), horarios por día, servicios disponibles (cafetería, mesas, delivery). | M |
| RF-51 | Mapa embebido. **Opción A (recomendada MVP):** iframe de Google Maps con carga diferida. **Opción B:** Leaflet + OpenStreetMap con marcadores desde el archivo de datos, sin API key. | M |
| RF-52 | Botón "Cómo llegar" por sucursal que abre Google Maps con la dirección codificada. | M |
| RF-53 | Indicador dinámico "Abierto ahora / Cerrado" calculado en cliente contra los horarios del archivo de datos, con zona horaria `America/Argentina/Buenos_Aires`. | S |
| RF-54 | Si hay una sola sucursal, la página se renderiza en formato simple (una ficha grande + mapa), sin listado. | M |

### 3.7 Contacto (`/contacto`)

| ID | Requerimiento | Prioridad |
|---|---|---|
| RF-60 | Bloque de contactos directos: WhatsApp, teléfono, email, Instagram, Facebook, TikTok. Cada uno con su ícono y acción nativa (`wa.me`, `tel:`, `mailto:`). | M |
| RF-61 | Formulario: Nombre*, Email*, Teléfono, Motivo (select: Consulta general / Encargo / Catering / Franquicia / Trabajá con nosotros), Mensaje*. | M |
| RF-62 | Envío **sin backend propio**: usar Formspree / Web3Forms / Netlify Forms. La URL del endpoint va en variable de entorno. | M |
| RF-63 | Validación en cliente con mensajes de error en español, honeypot anti-spam y estados de UI: idle / enviando / éxito / error. | M |
| RF-64 | Sección "Trabajá con nosotros" con texto breve y link al mismo formulario con el motivo preseleccionado. | S |
| RF-65 | Newsletter (solo si se decide usar): input de email integrado con Mailchimp/Brevo embebido. Marcado como opcional. | C |

### 3.8 Redes sociales y pedidos (transversal — requerimiento clave del negocio)

| ID | Requerimiento | Prioridad |
|---|---|---|
| RF-70 | Los links de redes y pedidos se definen **una sola vez** en `src/content/site.ts` y se consumen desde header, footer, home y contacto. | M |
| RF-71 | Íconos de redes con `aria-label`, `target="_blank"` y `rel="noopener noreferrer"`. | M |
| RF-72 | Links a apps de delivery de terceros (PedidosYa, Rappi) si existen, agrupados bajo "Hacé tu pedido en:". | S |
| RF-73 | Helper `buildWhatsAppLink(phone, message)` que genere `https://wa.me/<phone>?text=<encoded>` reutilizable en todo el sitio. | M |

---

## 4. Requerimientos no funcionales

| ID | Categoría | Requerimiento |
|---|---|---|
| RNF-01 | Performance | Lighthouse mobile ≥ 90 en Performance, ≥ 95 en Accessibility, SEO y Best Practices. |
| RNF-02 | Performance | Imágenes en WebP/AVIF, `width`/`height` declarados, `loading="lazy"` salvo el hero. JS inicial < 150 KB gzip. |
| RNF-03 | Responsive | Mobile-first. Breakpoints: 360 / 640 / 768 / 1024 / 1280 / 1536. Probado en 360px y 1440px. |
| RNF-04 | Accesibilidad | WCAG 2.1 AA: contraste ≥ 4.5:1, navegación por teclado completa, focus visible, `alt` descriptivo, jerarquía correcta de headings (un solo `h1` por página). |
| RNF-05 | SEO | Meta title/description por página, Open Graph + Twitter Card, `sitemap.xml`, `robots.txt`, URLs limpias, JSON-LD `Bakery`/`LocalBusiness` con dirección, horarios, teléfono y geo. |
| RNF-06 | Compatibilidad | Últimas 2 versiones de Chrome, Safari, Firefox, Edge + Safari iOS y Chrome Android. |
| RNF-07 | Mantenibilidad | Cambiar un producto, horario o teléfono debe requerir editar **un solo archivo de datos**, sin tocar componentes. |
| RNF-08 | Legal | Aviso de cookies solo si se usa analytics. Link a política de privacidad simple. |
| RNF-09 | Seguridad | Sin secretos en el repo. Headers básicos vía plataforma de hosting. Todo por HTTPS. |
| RNF-10 | Costo | Hosting gratuito o de bajo costo (Vercel/Netlify/Cloudflare Pages). Sin servidores propios. |

---

## 5. Arquitectura técnica

### 5.1 Stack recomendado (decidido, no opcional)

| Capa | Elección | Motivo |
|---|---|---|
| Framework | **Astro 4+** (alternativa: Next.js 14 App Router) | Sitio mayormente estático, envía cero JS por defecto → performance ideal para brand site |
| UI | **React** en islas interactivas (menú, filtros, modal, formulario) | Ecosistema conocido, solo donde hace falta |
| Estilos | **Tailwind CSS** + tokens en `tailwind.config` | Velocidad de iteración, consistencia, ideal para vibe coding |
| Componentes | **shadcn/ui** (solo los necesarios) | Accesibles por defecto, copiables, sin lock-in |
| Íconos | **lucide-react** | Liviano, consistente |
| Animación | **Framer Motion** o CSS puro | Solo micro-interacciones, sin excesos |
| Mapa | **iframe Google Maps** (MVP) o **Leaflet + OSM** | Sin API key, sin costo |
| Formulario | **Web3Forms / Formspree** | Sin backend |
| Fuentes | **@fontsource** self-hosted | Sin request a Google Fonts, mejor LCP |
| Deploy | **Vercel** o **Netlify** con CI desde GitHub | Preview por PR, gratis |
| Analytics | **Vercel Analytics** o **Plausible** | Liviano, sin cookies invasivas |

> **Si el agente prefiere Next.js:** usar App Router, `export const dynamic = 'force-static'`, `next/image` y `next/font`. Mismo resto de la spec.

### 5.2 Estructura de carpetas

```
/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── productos/
│   │   ├── locales/
│   │   └── og/
│   ├── favicon.svg
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   ├── layout/        Header, Footer, MobileNav, WhatsAppFab, ScrollTop
│   │   ├── home/          Hero, ValueBar, AboutTeaser, CategoryGrid,
│   │   │                  LocationsTeaser, InstagramStrip, News, FinalCta
│   │   ├── products/      CategoryTabs, ProductCard, ProductModal
│   │   ├── locations/     LocationCard, MapEmbed, OpenNowBadge
│   │   ├── contact/       ContactForm, ContactChannels
│   │   └── ui/            Button, Card, Badge, Container, Section, Modal
│   ├── content/           ⚠️ ÚNICA fuente de verdad del contenido
│   │   ├── site.ts        marca, redes, whatsapp, seo por defecto
│   │   ├── products.ts    categorías + productos
│   │   ├── locations.ts   sucursales + horarios + geo
│   │   ├── about.ts       historia, valores, timeline
│   │   └── news.ts        novedades/destacados
│   ├── layouts/           BaseLayout.astro, PageLayout.astro
│   ├── lib/               whatsapp.ts, openNow.ts, seo.ts, utils.ts
│   ├── pages/             index, nosotros, productos, encargos, locales, contacto, 404
│   └── styles/            globals.css
├── .env.example
├── tailwind.config.ts
└── README.md
```

### 5.3 Modelo de contenido (contratos de datos)

```ts
// src/content/site.ts
export const site = {
  name: "Panadería <NOMBRE>",
  tagline: "Pan de verdad, todos los días.",
  description: "Panadería artesanal en <BARRIO>. Panificados, pastelería y cafetería.",
  url: "https://www.<dominio>.com.ar",
  email: "hola@<dominio>.com.ar",
  phoneDisplay: "+54 9 11 0000-0000",
  whatsapp: "5491100000000",            // solo dígitos, con código país
  whatsappDefaultMessage: "¡Hola! Quería hacerles una consulta 😊",
  social: {
    instagram: "https://instagram.com/<usuario>",
    facebook:  "https://facebook.com/<usuario>",
    tiktok:    "",                       // vacío = no se renderiza
  },
  ordering: [
    { name: "PedidosYa", url: "" },
    { name: "Rappi",     url: "" },
  ],
} as const;

// src/content/products.ts
export type ProductTag = "sin-tacc" | "vegano" | "temporada" | "destacado";
export interface Product {
  id: string;
  name: string;
  shortDescription: string;   // <= 90 caracteres
  longDescription?: string;
  image: string;              // /images/productos/<id>.webp
  alt: string;
  category: CategoryId;
  tags?: ProductTag[];
  featured?: boolean;
}
export interface Category {
  id: CategoryId;             // "panaderia" | "pasteleria" | ...
  name: string;
  description: string;
  cover: string;
  order: number;
}

// src/content/locations.ts
export interface OpeningHours {
  day: 0|1|2|3|4|5|6;         // 0 = domingo
  open: string;               // "07:00"
  close: string;              // "21:00"
  closed?: boolean;
}
export interface Location {
  id: string;
  name: string;               // "Sucursal Palermo"
  address: string;
  neighborhood: string;
  city: string;
  phoneDisplay: string;
  phoneLink: string;          // tel:+549...
  whatsapp?: string;
  hours: OpeningHours[];
  services: ("cafeteria" | "mesas" | "delivery" | "takeaway")[];
  geo: { lat: number; lng: number };
  mapsUrl: string;
  image?: string;
}
```

### 5.4 Helpers obligatorios

```ts
// src/lib/whatsapp.ts
export function buildWhatsAppLink(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// src/lib/openNow.ts
// Devuelve { isOpen: boolean; label: string } usando Intl con
// timeZone "America/Argentina/Buenos_Aires". Debe ejecutarse en cliente
// para evitar mismatch de hidratación.
```

---

## 6. Diseño e identidad visual

### 6.1 Principios
- **Calidez sobre minimalismo frío**: paleta tierra/horno, no blanco clínico.
- **La foto manda**: el producto es el héroe; la tipografía acompaña.
- **Aire y respiro**: espaciado generoso, secciones con `padding-y` amplio.
- **Cero stock photos genéricas**: si no hay fotos reales, usar placeholders marcados como `TODO: reemplazar por foto real`.

### 6.2 Design tokens (definir en `tailwind.config.ts`)

```
Colores
  --brand-900  #3A2318   marrón horno (texto sobre claro / fondos oscuros)
  --brand-700  #6B4423   marrón medio
  --brand-500  #C98A4B   caramelo (color principal de marca)
  --brand-300  #E8C39E   masa
  --brand-50   #FBF6EF   crema (fondo base del sitio)
  --accent     #A8332F   rojo horno (CTAs secundarios, badges)
  --ink        #1F1A17   texto principal
  --muted      #7A6E66   texto secundario
  --success    #2E7D52
  --error      #B23A35

Tipografía
  Display / títulos : una serif con carácter (Fraunces, Playfair Display o Lora)
  Cuerpo / UI       : sans legible (Inter, Plus Jakarta Sans o Outfit)
  Escala: 12 / 14 / 16 / 18 / 20 / 24 / 32 / 40 / 56 / 72
  Line-height: 1.6 en cuerpo, 1.1 en display

Espaciado: escala de 4px (4, 8, 12, 16, 24, 32, 48, 64, 96, 128)
Radios: sm 6px · md 12px · lg 20px · full 9999px
Sombras: suaves y cálidas, nunca negro puro (usar rgba marrón)
Container: max-width 1280px, padding lateral 16px mobile / 32px desktop
```

### 6.3 Micro-interacciones (moderadas)
- Fade-up al entrar en viewport (`IntersectionObserver`, 400ms, una sola vez).
- Hover en tarjetas: `translateY(-4px)` + sombra + zoom de imagen 1.05.
- Botones: cambio de fondo en 150ms, estado `:active` con scale 0.98.
- **Respetar `prefers-reduced-motion: reduce`** → desactivar todas las animaciones.

---

## 7. Contenido y copywriting

### 7.1 Tono de voz
Cercano, argentino, sin solemnidad. Frases cortas. Voseo. Nada de corporativo (“sinergia”, “excelencia”). Ejemplos: “Horneamos temprano para que llegues a tiempo.” / “Pedí tu torta por WhatsApp.”

### 7.2 Contenido mínimo a proveer por el cliente (checklist)
- [ ] Logo en SVG (versión clara y oscura)
- [ ] 1 foto hero horizontal ≥ 2000px
- [ ] 6 fotos de portada de categoría
- [ ] 18–30 fotos de producto (ratio 4:3)
- [ ] Texto de historia de la marca (200–400 palabras)
- [ ] Dirección, teléfono y horarios exactos de cada sucursal
- [ ] Usuarios de redes sociales
- [ ] Número de WhatsApp comercial
- [ ] Condiciones de encargo (anticipación, seña, entregas)

> **Regla para la IA:** si falta contenido, generar placeholders realistas y coherentes en español rioplatense, y listarlos todos en una sección `## TODO de contenido` del README.

---

## 8. SEO local

- `title` por página: `<Página> | <Marca> — Panadería en <Barrio>`
- JSON-LD tipo `Bakery` en el layout base con `name`, `image`, `address`, `telephone`, `openingHoursSpecification`, `geo`, `sameAs` (redes), `url`.
- Una entrada de JSON-LD por sucursal en `/locales`.
- OG image 1200×630 por página principal.
- Alt text descriptivo en todas las imágenes (no "imagen1.jpg").
- `sitemap.xml` y `robots.txt` generados en build.
- Recomendación operativa (fuera de código): crear/verificar el perfil de Google Business y linkear el sitio.

---

## 9. Plan de desarrollo por fases (vibe coding)

| Fase | Entregable | Criterio de cierre |
|---|---|---|
| **F0 — Setup** | Proyecto Astro + Tailwind + estructura de carpetas + tokens de diseño + `site.ts` | `npm run dev` levanta, tokens aplicados, Header/Footer con links reales |
| **F1 — Home** | Todas las secciones de RF-10 a RF-17 con contenido placeholder | Home responsive completa, Lighthouse ≥ 85 |
| **F2 — Productos** | `/productos` con categorías, filtros y modal | Filtro funciona, URL refleja categoría, modal accesible |
| **F3 — Locales + Nosotros** | Ambas páginas + mapa + badge Abierto/Cerrado | Mapa carga diferido, "Cómo llegar" abre correctamente |
| **F4 — Encargos + Contacto** | Ambas páginas + formulario funcionando | Email de prueba recibido, validaciones OK |
| **F5 — Pulido** | SEO, JSON-LD, OG, 404, accesibilidad, optimización de imágenes | Lighthouse ≥ 90/95/95/95, 0 errores de axe |
| **F6 — Deploy** | Producción en Vercel/Netlify + dominio + analytics | Sitio online con HTTPS y dominio propio |

---

## 10. Prompts sugeridos para el agente de IA

**Prompt de arranque (F0):**
> Actuá como frontend senior. Creá un proyecto Astro 4 con React, TypeScript y Tailwind CSS para un sitio institucional de panadería (NO e-commerce). Implementá la estructura de carpetas, los design tokens y los contratos de datos exactamente como están definidos en las secciones 5.2, 5.3 y 6.2 del documento funcional adjunto. Creá Header sticky, MobileNav, Footer y WhatsAppFab consumiendo `src/content/site.ts`. No hardcodees contenido en los componentes. No agregues backend ni dependencias fuera del stack indicado.

**Prompt por fase:**
> Implementá la fase <N> del documento funcional. Cubrí todos los requerimientos `RF-XX` listados para esa fase, respetando los RNF de la sección 4. Antes de codear, listá en una línea cada archivo que vas a crear o modificar. Al terminar, verificá el Definition of Done (sección 12) y reportá qué queda pendiente.

**Prompt de revisión crítica:**
> Revisá el código generado como si fueras un auditor externo. Buscá: contenido hardcodeado que debería estar en `/content`, problemas de accesibilidad (contraste, foco, labels), imágenes sin dimensiones, JS innecesario enviado al cliente, y cualquier dependencia que no aporte valor. No valides: encontrá problemas reales y proponé el fix concreto.

**Reglas permanentes para el agente (pegar en `CLAUDE.md` / `.cursorrules`):**
```
- Español rioplatense en todo el copy visible. Código y comentarios en inglés.
- Mobile-first siempre. Diseñar 360px antes que 1440px.
- Ningún componente accede a datos que no vengan de src/content/*.
- Nada de precios, carrito, login ni backend propio.
- Cada elemento interactivo debe ser accesible por teclado y tener aria-label si es solo ícono.
- Preferir CSS y HTML nativo antes que una librería nueva.
- Si una imagen no existe, generar placeholder y anotarlo en el TODO del README.
```

---

## 11. Riesgos y mitigaciones

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Fotos de producto de baja calidad | Alto — el sitio vive de la imagen | Definir guía de fotos (luz natural, fondo neutro, cenital y 45°); usar placeholders hasta tenerlas |
| Contenido del cliente que nunca llega | Medio | Lanzar con placeholders realistas y checklist de TODO visible |
| Horarios desactualizados | Medio | Centralizados en `locations.ts` + README con instrucción de edición en 1 paso |
| El cliente después quiere vender online | Medio | La arquitectura de contenido ya soporta agregar precios y un link a un checkout externo sin reescribir |
| Scope creep hacia e-commerce | Alto | Sección 2.3 como contrato explícito |

---

## 12. Definition of Done

Una fase se considera terminada cuando:

- [ ] Todos los `RF-XX` de la fase están implementados y verificables manualmente.
- [ ] Funciona correctamente en 360px, 768px y 1440px.
- [ ] Navegable 100% por teclado con foco visible.
- [ ] Lighthouse mobile ≥ 90 Performance / ≥ 95 Accessibility, SEO y Best Practices.
- [ ] Cero errores en consola y cero warnings de hidratación.
- [ ] Ningún texto de negocio hardcodeado fuera de `src/content/`.
- [ ] `npm run build` pasa sin errores ni warnings de TypeScript.
- [ ] README actualizado con instrucciones de edición de contenido y TODOs pendientes.

---

## 13. Anexo — Mapa de las referencias analizadas

| Elemento | Buenos Aires Bakery | Suevia | ¿Se toma? |
|---|---|---|---|
| Navegación simple por secciones | ✅ Productos / Sucursales / Franquicias / Novedades | ✅ Inicio / Quiénes somos / Productos / Box y Desayunos / Catering / Locales / Contacto | ✅ Adoptado (estructura base del menú) |
| Productos agrupados por categoría sin precio | ✅ Panadería, Pastelería, Salados | ✅ Pastelería, Sandwichería, Chocolatería, Línea Salud, Panadería | ✅ Adoptado (RF-30) |
| Mapa buscador de sucursales | ✅ Mapa interactivo | ➖ | ✅ Adoptado simplificado (RF-51) |
| Listado de locales con teléfono por dirección | ➖ | ✅ Dirección + teléfono por sucursal | ✅ Adoptado (RF-50) |
| Box, desayunos y catering corporativo | ➖ | ✅ | ✅ Adoptado (RF-40) |
| Novedades / aperturas | ✅ | ➖ | ✅ Adoptado como opcional (RF-16) |
| Newsletter | ✅ | ➖ | ⚠️ Opcional (RF-65) |
| Franquicias | ✅ | ➖ | ❌ Fuera de alcance (no aplica a panadería única) |
| Redes sociales y "Hacé tu pedido en" | ✅ | ✅ | ✅ Adoptado como requerimiento central (RF-70 a RF-73) |
| Relato de marca / historia | ➖ breve | ✅ Quiénes somos, desde 1980 | ✅ Adoptado y reforzado (RF-20 a RF-23) |
