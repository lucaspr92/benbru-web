# BenBru — Panadería & Cafetería (Costa del Este)

Sitio web institucional de alto rendimiento para **BenBru**, panadería artesanal de masa madre y cafetería de especialidad en Costa del Este, Provincia de Buenos Aires.

Diseñado y optimizado para máxima velocidad de carga, identidad visual artesanal basada en el logo oficial, y conversión directa hacia **WhatsApp** e **Instagram** como canales exclusivos de contacto y pedidos.

---

## 🎨 Identidad Visual & Paleta Oficial

Extraída del logo oficial `Benbru_logo.jpeg`:

| Token | Hex | Uso en el diseño |
| :--- | :--- | :--- |
| **Fondo Principal** | `#E9E3DD` | Beige crema cálido como base de lectura |
| **Fondo Alternativo** | `#E7E1D9` | Beige grisáceo para secciones alternadas y cards |
| **Fondo Elevado / Cards** | `#F4EFEB` | Superficies de tarjetas y contenedores |
| **Logo / Texto Principal** | `#3F2B1F` | Marrón chocolate oscuro para títulos y branding |
| **Texto Secundario** | `#5D4E44` | Marrón café para párrafos y descripciones |
| **Detalles Suaves / Bordes** | `#87786F` | Taupe / beige oscuro para líneas sutiles y metadatos |
| **Acento Cálido** | `#A66B38` | Caramelo y pan horneado para badges y destaques |
| **WhatsApp Oficial** | `#25D366` | Botones de acción directa de pedidos y consultas |

### Tipografías
*   **Display / Títulos**: *Playfair Display* (Serif elegante, armoniza con el logo clásico de espigas).
*   **Cuerpo / UI**: *Plus Jakarta Sans* (Sans-serif limpia y de alta legibilidad en pantallas móviles).

---

## 📍 Datos del Negocio & Contacto

*   **Local Físico**: Av. 2 y Los Alelíes, Costa del Este, Partido de La Costa, Provincia de Buenos Aires.
*   **Horario Habitual**: Todos los días de 8:00 a 20:30 hs.
*   **WhatsApp Oficial**: `+54 9 2257 52-0849` (`https://wa.me/5492257520849`)
*   **Instagram Oficial**: `@benbru.co` (`https://www.instagram.com/benbru.co`)
*   **Zonas de Cobertura de Delivery (8 localidades)**:
    1. Costa del Este
    2. Santa Teresita
    3. Mar del Tuyú
    4. Aguas Verdes
    5. La Lucila del Mar
    6. Costa Azul
    7. San Bernardo
    8. Mar de Ajó

---

## 🚀 Arquitectura Técnica

*   **Framework**: [Astro 5+](https://astro.build) (Static Site Generation — SSG). Cero JavaScript por defecto enviado al navegador en páginas estáticas.
*   **Islas de interactividad**: [React 19](https://react.dev) únicamente donde se necesita estado cliente:
    *   `src/components/layout/MobileNav.tsx`: Menú móvil desplegable accesible.
    *   `src/components/products/ProductCatalog.tsx`: Filtro de categorías sincronizado con URL (`?cat=...`) y lightbox de producto con WhatsApp prellenado.
    *   `src/components/layout/WhatsAppFab.tsx`: Botón flotante accesible con tooltip.
*   **Estilos**: [Tailwind CSS v4](https://tailwindcss.com) vía `@tailwindcss/vite` y `@theme`.
*   **SEO & Rendimiento**:
    *   Sitemap XML generado en build (`/sitemap-index.xml`).
    *   Robots.txt configurado.
    *   Imágenes WebP livianas con dimensiones explícitas (`loading="lazy"` y `fetchpriority="high"` en LCP).
    *   Schema.org `Bakery` JSON-LD con geolocalización en Costa del Este, horarios y redes.

---

## 🗂️ ¿Cómo editar el contenido? (Única fuente de verdad)

Todo el contenido editable vive en `src/content/`:

1.  **Datos generales y contacto (`src/content/site.ts`)**:
    *   Modificar teléfono de WhatsApp, mensajes predeterminados, usuario de Instagram, horarios o dirección del local.
2.  **Catálogo de productos (`src/content/products.ts`)**:
    *   Agregar, quitar o editar productos, categorías, fotos, tags ("Masa Madre", "Sin TACC", "Favorito") y descripciones.
3.  **Localidades y modalidades de entrega (`src/content/delivery.ts`)**:
    *   Editar tiempos de anticipación de encargos (tortas, boxes, catering) y localidades de delivery.
4.  **Historia y pilares de marca (`src/content/about.ts`)**:
    *   Ajustar el texto sobre el origen en Costa del Este y la filosofía del pan.

---

## 💻 Comandos de Desarrollo

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Compilar para producción (SSG)
pnpm build

# Previsualizar el build de producción
pnpm preview
```
