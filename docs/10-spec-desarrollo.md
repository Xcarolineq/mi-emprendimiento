# Spec de desarrollo — Nora — Fotografía Felina

> Guía: [Spec de desarrollo](../evaluacion/guias/fase-2-specs/07-spec-de-desarrollo.md)  
> **Tablero de referencia, arquitectura y wireframes en Whimsical:** [https://whimsical.com/caroline6/ev-2-12-10-2026-RxoBc4RbXSZU6zmyAwKh61](https://whimsical.com/caroline6/ev-2-12-10-2026-RxoBc4RbXSZU6zmyAwKh61)

## Insumos y prompt para el asistente de IA

```text
Lee DESIGN.md, docs/09-spec-diseno.md y docs/10-spec-desarrollo.md.
En la carpeta assets/ y en el tablero de Whimsical (https://whimsical.com/caroline6/ev-2-12-10-2026-RxoBc4RbXSZU6zmyAwKh61) están las referencias visuales de cada pantalla.
Construye el sitio siguiendo exactamente docs/10-spec-desarrollo.md:
solo HTML5 semántico, CSS3 Vanilla y JavaScript moderno (ES6+), la estructura de archivos y la navegación definidas,
las variables de :root con los valores de DESIGN.md y la estructura
semántica de cada página. Usa el código y wireframes solo como referencia
visual. Al terminar, revisa cada criterio de aceptación y dime cuáles
se cumplen y cuáles no.
```

---

## 1. Arquitectura y Tecnologías a Usar

### Stack Tecnológico
- **Frontend Core:** HTML5 semántico estructurado para accesibilidad y SEO.
- **Estilos:** Vanilla CSS3 puro organizado con Custom Properties (`:root`), Grid y Flexbox. No se utiliza TailwindCSS ni frameworks de terceros para asegurar máximo control y ligereza.
- **Interactividad & Lógica:** Vanilla JavaScript (ES6+), modular y sin dependencias.
- **Almacenamiento Local:** Web Storage API (`localStorage`) para persistencia del carrito de compras y estado de comentarios.
- **Integración de Conversión:** API de enlaces de WhatsApp (`wa.me`) con parámetros URI codificados mediante `encodeURIComponent`.
- **Control de Versiones y Despliegue:** Git, repositorio en GitHub y publicación estática en GitHub Pages (HTTPS).

### Arquitectura de la Solución
La aplicación se concibe como una **Single Page Application (SPA) ligera basada en estados de vista**, donde el contenido principal cambia dinámicamente según la navegación del usuario sin requerir recargas de página completas:
1. **Capa de Presentación:** Elementos semánticos HTML con clases basadas en los componentes de `DESIGN.md`.
2. **Capa de Diseño:** Hoja `styles.css` alimentada por tokens de color, tipografía y elevación en `:root`.
3. **Capa de Lógica (Controlador):** Archivo `app.js` estructurado en módulos funcionales: enrutador de vistas, gestor de catálogo, calculador de variantes, gestor de carrito, validador de reserva y visor de blog.

---

## 2. Lógica de Negocio y Requerimientos Técnicos

### 2.1 Catálogo y Filtros en Tiempo Real
- **Modelo de Datos:** Cada producto u obra posee: `id`, `nombre`, `categoría`, `precioBase`, `formatosDisponibles`, `marcosDisponibles`, `imagen`, `tagBadge` y `descripcion`.
- **Filtrado Reactivo:** Al hacer clic en los botones de categoría (*Todos*, *Láminas Fine Art*, *Cuadros Enmarcados*, *Photobooks*, *Sesiones*) o al escribir en el campo de búsqueda, la grilla se actualiza inmediatamente por coincidencia de texto (insensible a mayúsculas/minúsculas).
- **Indicador de Resultados:** Si ninguna obra coincide con la búsqueda, se muestra un mensaje cálido de estado vacío recomendando términos alternativos.

### 2.2 Ficha de Producto y Variantes
- **Cálculo de Precio Dinámico:**
  - Tamaño A4 (21x30 cm): Precio base.
  - Tamaño A3 (30x42 cm): Precio base + $12.000 CLP.
  - Tamaño 50x70 cm: Precio base + $25.000 CLP.
  - Acabado de Marco: Roble Macizo Natural, Nogal Oscuro o Negro Satinado mantienen el valor del enmarcado; la opción "Lámina sin enmarcar" descuenta $18.000 CLP del producto enmarcado.
- **Selector de Cantidades:** Controles intuitivos `[-]` y `[+]` con límite mínimo de 1 unidad.
- **Feedback:** Al presionar "Añadir al Carrito", el botón muestra un estado de confirmación visual momentáneo y despliega el cajón del carrito.

### 2.3 Carrito de Compras y Persistencia
- **Persistencia en `localStorage`:** Los ítems del carrito se serializan bajo la clave `nora_cart_items` para preservar la sesión del usuario si recarga la página.
- **Cálculo de Totales:**
  - `Subtotal` = Suma de (precioUnitario × cantidad) de todos los ítems.
  - `Costo de Envío`: Selector de región con valores predeterminados:
    - *Región Metropolitana (RM):* $4.500 CLP.
    - *Regiones de Chile:* $7.500 CLP.
  - `Descuento:` Si se aplica el cupón `NORA10`, se deduce un 10% del subtotal de productos.
  - `Total Final` = Subtotal − Descuento + Costo de Envío.

### 2.4 Checkout con WhatsApp API
- Al pulsar el botón "Finalizar Pedido vía WhatsApp 💬":
  - Se valida que el carrito contenga al menos un ítem y que se haya seleccionado la región de despacho.
  - Se genera un texto estructurado con emojis y saltos de línea con el detalle de las obras, variantes elegidas, cantidades, total y notas de embalaje seguro.
  - Se abre el enlace `https://wa.me/56912345678?text=${encodeURIComponent(mensaje)}` en una nueva pestaña.

### 2.5 Formulario de Reserva con Metodología Fear-Free
- **Campos Requeridos:** Nombre del tutor, correo electrónico válido, teléfono de contacto y tipo de sesión deseada.
- **Campo Crítico de Bienestar:** Selector de temperamento del gato (*Curioso*, *Tímido*, *Enérgico*). Este dato es obligatorio para que la fotógrafa planifique los tiempos de aclimatación y feromonas.
- **Validación en Cliente:** Se comprueba el formato de correo y longitud de teléfono antes de permitir el envío. Al completar, se despliega una alerta tipo toast con mensaje de confirmación y guía en PDF de bienvenida.

### 2.6 Blog Editorial y Sistema de Comentarios
- **Lector Modal:** Al seleccionar un artículo de la grilla, se abre la vista completa centrada en ancho de lectura óptimo (780px).
- **Comentarios en Vivo:** Los usuarios pueden ingresar su nombre y opinión; el comentario se agrega inmediatamente a la lista visible y se guarda en almacenamiento local para emular persistencia.

---

## 3. Estructura de Archivos

```text
mi-emprendimiento/
├── index.html              # Aplicación web completa y SPA con enrutamiento de vistas
├── styles.css              # Sistema de estilos con variables de tokens de DESIGN.md
├── app.js                  # Lógica interactiva: catálogo, carrito, filtros, modales y WhatsApp
├── DESIGN.md               # Design System oficial en formato estándar validado
├── README.md               # Portada del proyecto, resumen y declaración de IA
├── assets/
│   └── img/                # Fotografías de Nora, mockups Fine Art y avatares
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
└── evaluacion/             # Pautas y guías oficiales del curso
```

---

## 4. Páginas y Navegación

| Desde (Origen) | Elemento Interactivo | Lleva a (Destino) | Acción / Estado |
|---|---|---|---|
| **Cualquier pantalla** | Logotipo "Nora Fotografía" | `#inicio` (Landing) | Scroll al inicio y activación de la vista Landing. |
| **Navbar** | Enlace "Tienda de Arte" | `#tienda` | Activa la vista de Catálogo con buscador y filtros. |
| **Navbar** | Enlace "Blog Editorial" | `#blog` | Activa la vista de Artículos y Crónicas Felinas. |
| **Navbar / Drawer** | Botón "Agendar Sesión" | `#reserva` | Scroll suave al formulario de reserva en la Landing. |
| **Navbar / Flotante** | Ícono de Carrito 🛒 | `cart-drawer` | Abre el cajón lateral con desglose de compra. |
| **Tienda (Grilla)** | Botón "Ver Detalle / Formatos" | `product-modal` | Abre la ficha técnica con selector de variantes. |
| **Ficha de Producto** | Botón "Añadir al Carrito" | `cart-drawer` | Suma ítem al carrito y abre el cajón con feedback. |
| **Carrito** | Botón "Comprar vía WhatsApp" | Enlace externo `wa.me` | Abre WhatsApp con el pedido pre-formateado. |
| **Blog (Grilla)** | Botón "Leer Artículo" | `article-modal` | Abre el lector inmersivo con comentarios. |
| **Footer** | Enlaces legales / FAQ / Contacto | Modales informativos | Despliega modales de soporte o navega a la sección. |

---

## 5. Estructura Semántica HTML5

Cada vista o sección principal se construye con elementos semánticos rigurosos:

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

## 6. Organización del CSS

```css
:root {
  /* Paleta de Colores (Tokens de DESIGN.md) */
  --color-primary: #C86D51;
  --color-primary-hover: #B35B40;
  --color-primary-active: #9E482E;
  --color-on-primary: #FFFFFF;
  --color-secondary: #3E2723;
  --color-secondary-hover: #2C1B18;
  --color-secondary-active: #1F1210;
  --color-on-secondary: #FFFFFF;
  --color-tertiary: #5E7A68;
  --color-tertiary-hover: #4E6656;
  --color-tertiary-active: #3E5244;
  --color-on-tertiary: #FFFFFF;
  --color-accent: #D49A3D;
  --color-on-accent: #3E2723;
  --color-neutral: #FAF7F2;
  --color-surface: #FFFFFF;
  --color-surface-variant: #F3ECE2;
  --color-on-surface: #1F1E1D;
  --color-on-surface-variant: #6B6560;
  --color-border: #E7DFD5;
  --color-disabled: #DCD7D0;
  --color-on-disabled: #8C8680;
  --color-error: #B3261E;
  --color-error-bg: #FDF2F2;

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

### Breakpoints de Diseño Responsive
- **Mobile (< 768px):** Grillas colapsadas en 1 columna, navegación por drawer lateral deslizable, botones táctiles de 48px de alto y botón flotante de WhatsApp siempre accesible.
- **Tablet (768px a 1023px):** Grillas de 2 columnas, filtros horizontales y espaciados medianos.
- **Desktop (>= 1024px):** Grillas de 3 columnas para productos y artículos, ancho máximo de contenedor de 1200px centrado y navegación superior completa.

---

## 7. Criterios de Aceptación (Checklist de QA)

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

