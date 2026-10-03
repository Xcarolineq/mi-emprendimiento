# Spec de desarrollo — Nora — Fotografía Felina

> Guía: [Spec de desarrollo](../evaluacion/guias/fase-2-specs/07-spec-de-desarrollo.md)

## Insumos y prompt para el asistente de IA

```text
Lee DESIGN.md, docs/09-spec-diseno.md y docs/10-spec-desarrollo.md.
En la carpeta stitch/ o assets/ están las referencias visuales de cada pantalla.
Construye el sitio siguiendo exactamente docs/10-spec-desarrollo.md:
solo HTML5, CSS3 y JavaScript moderno, la estructura de archivos y la navegación definidas,
las variables de :root con los valores de DESIGN.md y la estructura
semántica de cada página. Usa el código de Stitch solo como referencia
visual. Al terminar, revisa cada criterio de aceptación y dime cuáles
se cumplen y cuáles no.
```

---

## 1. Estructura de archivos

```text
mi-emprendimiento/
├── index.html              # Aplicación web completa y SPA con enrutamiento de vistas
├── styles.css              # Sistema de estilos con variables de tokens de DESIGN.md
├── app.js                  # Lógica interactiva: catálogo, carrito, filtros, modales y WhatsApp
├── DESIGN.md               # Design System oficial en formato estándar
├── README.md               # Portada del proyecto, resumen y declaración de IA
├── assets/
│   └── img/                # Fotografías de Nora, mockups y avatares
│       ├── nora-hero.jpg
│       ├── nora-fineart.jpg
│       ├── nora-cozy.jpg
│       ├── nora-photobook.jpg
│       └── persona-avatar.jpg
├── docs/                   # Documentación técnica y académica de las 3 fases
│   ├── 01-brief.md
│   ├── 02-proto-personas.md
│   ├── 03-funcionalidades.md
│   ├── 04-tecnologias.md
│   ├── 05-arquitectura.md
│   ├── 06-moodboard.md
│   ├── 07-componentes.md
│   ├── 08-color-tipografia.md
│   ├── 09-spec-diseno.md
│   ├── 10-spec-desarrollo.md
│   ├── 11-qa.md
│   └── img/
└── evaluacion/             # Pautas y guías del curso
```

---

## 2. Páginas y navegación

| Desde (Origen) | Elemento Interactivo | Lleva a (Destino) | Acción / Estado |
|---|---|---|---|
| **Cualquier pantalla** | Logotipo "Nora Fotografía" | `#inicio` (Landing) | Scroll al inicio y cambio a vista Landing. |
| **Navbar** | Enlace "Tienda de Arte" | `#tienda` | Cambia a vista de Catálogo con filtros. |
| **Navbar** | Enlace "Blog Editorial" | `#blog` | Cambia a vista de Artículos y Guías. |
| **Navbar / Drawer** | Botón "Agendar Sesión" | `#reserva` | Scroll suave al formulario de reserva. |
| **Navbar / Flotante** | Ícono de Carrito 🛒 | `cart-drawer` | Abre el cajón lateral con resumen de compra. |
| **Tienda (Grilla)** | Botón "Ver Detalle / Formatos" | `product-modal` | Abre la ficha técnica con selector de variantes. |
| **Ficha de Producto** | Botón "Añadir al Carrito" | `cart-drawer` | Suma ítem al carrito y abre el cajón con feedback. |
| **Carrito** | Botón "Comprar vía WhatsApp" | Enlace externo `wa.me` | Abre WhatsApp con el pedido pre-formateado. |
| **Blog (Grilla)** | Botón "Leer Artículo" | `article-modal` | Abre el lector inmersivo con comentarios. |
| **Footer** | Enlaces legales / FAQ / Contacto | `#faq`, `#contacto`, `#terminos` | Muestra modales informativos o navega a la sección. |

---

## 3. Estructura semántica

Cada vista o sección principal se construye con elementos semánticos HTML5 rigurosos:

```html
<!-- Estructura Semántica Global -->
<header id="site-header" class="navbar-sticky">
  <div class="nav-container">
    <a href="#inicio" class="nav-brand">...</a>
    <nav class="nav-menu">...</nav>
    <div class="nav-actions">...</div>
  </div>
</header>

<main id="main-content">
  <!-- Vista 1: Landing Page -->
  <section id="view-landing" class="app-view active">
    <section class="hero-section">...</section>
    <section class="fear-free-banner">...</section>
    <section class="gallery-preview">...</section>
    <section class="services-section">...</section>
    <section class="testimonials-section">...</section>
    <section id="reserva" class="booking-section">...</section>
  </section>

  <!-- Vista 2: Tienda de Arte -->
  <section id="view-tienda" class="app-view">
    <header class="store-header">...</header>
    <aside class="store-filters">...</aside>
    <div class="store-grid">...</div>
  </section>

  <!-- Vista 3: Blog Editorial -->
  <section id="view-blog" class="app-view">
    <header class="blog-header">...</header>
    <nav class="blog-categories">...</nav>
    <div class="blog-grid">...</div>
  </section>
</main>

<footer id="site-footer">
  <div class="footer-container">...</div>
</footer>
```

---

## 4. Organización del CSS

```css
:root {
  /* Paleta de Colores (Tokens de DESIGN.md) */
  --color-primary: #C86D51;
  --color-primary-hover: #B35B40;
  --color-on-primary: #FFFFFF;
  --color-secondary: #3E2723;
  --color-secondary-hover: #2C1B18;
  --color-on-secondary: #FFFFFF;
  --color-tertiary: #5E7A68;
  --color-tertiary-hover: #4E6656;
  --color-on-tertiary: #FFFFFF;
  --color-accent: #D49A3D;
  --color-on-accent: #FFFFFF;
  --color-neutral: #FAF7F2;
  --color-surface: #FFFFFF;
  --color-surface-variant: #F3ECE2;
  --color-on-surface: #1F1E1D;
  --color-on-surface-variant: #6B6560;
  --color-border: #E7DFD5;
  --color-disabled: #DCD7D0;
  --color-on-disabled: #8C8680;
  --color-error: #B3261E;

  /* Tipografías */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;

  /* Radios de Borde */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Espaciados */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;

  /* Sombras y Elevación */
  --shadow-sm: 0 2px 8px rgba(62, 39, 35, 0.04);
  --shadow-md: 0 10px 25px -5px rgba(62, 39, 35, 0.08);
  --shadow-lg: 0 20px 40px -10px rgba(31, 30, 29, 0.22);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 5. Criterios de Aceptación

### Navegación
- [x] La barra de navegación es fija (*sticky*) y permite acceder a Landing, Tienda, Blog y Reserva desde cualquier sección.
- [x] El botón del carrito muestra un contador de artículos en tiempo real actualizado dinámicamente.
- [x] Todas las rutas internas responden al clic sin recargas de página innecesarias.

### Funcionalidades
- [x] El catálogo de la tienda permite buscar por texto y filtrar por categorías (Láminas, Cuadros, Photobooks, Sesiones).
- [x] La ficha de producto recalcula el precio al cambiar de variante (tamaño y marco).
- [x] El carrito calcula subtotal, costo de envío y genera el mensaje de compra para WhatsApp.
- [x] El formulario de reserva captura los datos y el temperamento felino, validando los campos antes del envío.
- [x] El blog permite leer artículos completos y publicar comentarios en vivo.

### Diseño & Estética
- [x] La aplicación cumple al 100% los tokens de color, tipografía y formas definidos en `DESIGN.md`.
- [x] Las imágenes reales de la gata Nora y los productos de arte se presentan con alta nitidez y proporciones armónicas.
- [x] Se utilizan micro-animaciones en hover de tarjetas y botones.

### Responsive
- [x] La versión mobile (< 768px) utiliza un drawer de navegación táctil y reorganiza las grillas en una columna cómoda.
- [x] El botón flotante de WhatsApp permanece accesible en dispositivos móviles.

### Accesibilidad y Publicación
- [x] Todas las etiquetas `<img>` cuentan con atributos `alt` descriptivos.
- [x] Los ratios de contraste de texto sobre fondo superan el estándar WCAG AA (4.5:1).
- [x] El proyecto está listo para ser publicado en GitHub Pages sin dependencias de servidor.
