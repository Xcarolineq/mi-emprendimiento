---
version: alpha
name: "Nora — Fotografía Felina"
description: "Design system cálido, editorial y elegante para fotografía artística de mascotas y boutique de impresiones Fine Art"
colors:
  primary: "#C86D51"
  primary-hover: "#B35B40"
  on-primary: "#FFFFFF"
  secondary: "#3E2723"
  secondary-hover: "#2C1B18"
  on-secondary: "#FFFFFF"
  tertiary: "#5E7A68"
  tertiary-hover: "#4E6656"
  on-tertiary: "#FFFFFF"
  neutral: "#FAF7F2"
  surface: "#FFFFFF"
  surface-variant: "#F3ECE2"
  on-surface: "#1F1E1D"
  on-surface-variant: "#6B6560"
  disabled: "#DCD7D0"
  on-disabled: "#8C8680"
  accent: "#D49A3D"
  on-accent: "#FFFFFF"
  error: "#B3261E"
  on-error: "#FFFFFF"
  border: "#E7DFD5"
typography:
  headline-display:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.15
  headline-lg:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.25
  headline-md:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
  headline-sm:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.35
  body-lg:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.2
  label-sm:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.2
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "12px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-primary-disabled:
    backgroundColor: "{colors.disabled}"
    textColor: "{colors.on-disabled}"
  button-secondary:
    backgroundColor: "transparent"
    borderColor: "{colors.secondary}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "12px 28px"
  button-tertiary:
    backgroundColor: "{colors.surface-variant}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  card-product:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-article:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  tag-badge:
    backgroundColor: "{colors.surface-variant}"
    textColor: "{colors.primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
  tag-offer:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  input-field:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  message-error:
    backgroundColor: "#FDF2F2"
    textColor: "{colors.error}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  page:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
  text-secondary:
    textColor: "{colors.on-surface-variant}"
---

# Nora — Fotografía Felina — Design System

## Overview

**Nora — Fotografía Felina** es un estudio boutique de fotografía de autor y tienda de arte visual inspirado en **Nora**, una gata gris rescatada que fue la única de su camada en tener ese color. Está diseñado para tutores devotos de gatos, arquitectos, diseñadores de interiores y amantes del arte que desean inmortalizar la esencia de sus mascotas en retratos de galería o decorar sus espacios con láminas Fine Art cálidas y sofisticadas.

La interfaz debe transmitir una sensación **cálida, serena, artística, confiable y respetuosa con los animales**, combinando el rigor editorial de una revista de fotografía contemporánea con la cercanía acogedora de un hogar con gatos.

---

## Colors

| Token | HEX | Rol en la Interfaz | Regla de Uso |
|---|---|---|---|
| `primary` | `#C86D51` | Terracota Cálido | Botones principales de conversión (Reservar, Añadir al Carrito), enlaces destacados y acentos visuales clave. |
| `primary-hover` | `#B35B40` | Terracota Oscuro | Estado hover y active de componentes primarios. |
| `secondary` | `#3E2723` | Marrón Ébano Profundo | Encabezados principales, botones secundarios delineados, texto de alto contraste y pie de página. |
| `tertiary` | `#5E7A68` | Verde Salvia Botánico | Insignias de bienestar animal, etiquetas de artículos de salud felina y confirmaciones sutiles. |
| `accent` | `#D49A3D` | Ámbar Dorado | Badges de productos destacados, promociones exclusivas y valoraciones (estrellas). |
| `neutral` | `#FAF7F2` | Blanco Cálido Pergamino | Fondo general de todas las páginas para evitar el blanco clínico brillante. |
| `surface` | `#FFFFFF` | Blanco Puro | Tarjetas de producto, contenedores modales, paneles de formulario y menús flotantes. |
| `surface-variant` | `#F3ECE2` | Crema Suave | Fondos secundarios, cajas de testimonios, previsualización de citas y banners informativos. |
| `on-surface` | `#1F1E1D` | Gris Carbón Óptico | Texto principal de párrafos y títulos para máxima legibilidad sin estridencia. |
| `on-surface-variant` | `#6B6560` | Gris Pardo Neutro | Textos secundarios, metadatos de blog, fechas y leyendas de pie de foto. |
| `border` | `#E7DFD5` | Borde Cálido | Líneas divisorias, contornos de tarjetas y campos de entrada de formulario. |
| `error` | `#B3261E` | Rojo Óxido | Mensajes de validación incorrecta en formularios y avisos de stock agotado. |

**Reglas de Color:**
- Nunca usar negro puro (`#000000`) ni blanco puro (`#FFFFFF`) para fondos de página.
- El color primario terracota no debe utilizarse en más del 20% de la superficie visual para no agotar la atención del usuario.

---

## Typography

El sistema tipográfico combina la elegancia editorial de **Playfair Display** con la claridad moderna y altamente legible de **Plus Jakarta Sans**.

- **Títulos y Encabezados:** `Playfair Display` (serif humanista de alto impacto estético, inspirada en editoriales de arte y diseño).
- **Textos de Lectura, Botones e Inputs:** `Plus Jakarta Sans` (sans-serif contemporánea con excelente legibilidad en pantallas retina y mobile).

### Escala Tipográfica
- `headline-display`: 48px / 1.15 / Bold 700 (H1 Hero en Desktop).
- `headline-lg`: 32px / 1.25 / SemiBold 600 (H2 Secciones principales).
- `headline-md`: 24px / 1.30 / SemiBold 600 (H3 Títulos de tarjetas y subtítulos).
- `headline-sm`: 20px / 1.35 / SemiBold 600 (Nombres de productos y artículos).
- `body-lg`: 18px / 1.60 / Regular 400 (Lead de artículos e introducciones de sección).
- `body-md`: 16px / 1.60 / Regular 400 (Párrafos generales y fichas técnicas).
- `body-sm`: 14px / 1.50 / Regular 400 (Metadatos, pies de foto y notas de envío).
- `label-md`: 15px / 1.20 / SemiBold 600 (Botones y enlaces de navegación).
- `label-sm`: 12px / 1.20 / SemiBold 600 (Etiquetas, badges y tags de categorías).

---

## Layout

### Parámetros Globales
- **Ancho máximo de contenedor:** 1200px centrado.
- **Márgenes laterales:** 24px en mobile, 32px en tablet, 48px en desktop.
- **Sistema de rejilla (Grid):** 12 columnas en desktop, 8 columnas en tablet, 4 columnas en mobile.
- **Escala de espaciado:** Múltiplos armónicos de 8px (`4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`).

### Breakpoints y Adaptabilidad
1. **Mobile (< 768px):**
   - Menú de navegación colapsado en drawer lateral interactivo.
   - Grilla de productos: 1 columna (o 2 columnas compactas en pantallas de 400px+).
   - Botón flotante de WhatsApp siempre visible en la esquina inferior derecha.
   - Hero en disposición vertical (texto arriba, fotografía debajo).
2. **Tablet (768px a 1023px):**
   - Grilla de productos: 2 columnas con selector de filtros horizontal colapsable.
   - Artículos de blog: 2 columnas con tarjetas apiladas.
   - Navegación simplificada con botones de acceso rápido.
3. **Desktop (>= 1024px):**
   - Navegación horizontal completa con enlaces a Landing, Tienda, Blog, Galería de Nora, Sobre Nosotros y Carrito con contador en tiempo real.
   - Grilla de tienda: 3 columnas de productos con barra lateral de filtros fija.
   - Blog: 3 columnas de tarjetas con imagen destacada horizontal.

---

## Elevation & Depth

La profundidad se expresa a través de sombras suaves y difusas de tono cálido, evitando sombras grises frías:

- **Elevación Nivel 0 (Base):** Tarjetas planas con borde cálido sutil (`border: 1px solid #E7DFD5`).
- **Elevación Nivel 1 (Card Hover / Dropdowns):** `box-shadow: 0 10px 25px -5px rgba(62, 39, 35, 0.08), 0 8px 10px -6px rgba(62, 39, 35, 0.04);`
- **Elevación Nivel 2 (Modales / Drawer de Carrito):** `box-shadow: 0 20px 40px -10px rgba(31, 30, 29, 0.25);`
- **Efecto Glassmorphism:** Fondo traslúcido con desenfoque (`background: rgba(250, 247, 242, 0.85); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(231, 223, 213, 0.6);`) para la barra de navegación pegajosa.

---

## Shapes

- **Botones de acción (Pills):** Radio completo `9999px` para transmitir suavidad y bienvenida.
- **Tarjetas de producto y artículos:** Radio redondeado moderno `16px` (`rounded.lg`).
- **Contenedores modales y cajones:** Radio de `24px` (`rounded.xl`).
- **Inputs y selectores:** Radio `8px` (`rounded.md`) con padding confortable de `12px 16px`.

---

## Components

### 1. `navbar`
- Barra de navegación fija (*sticky*) con efecto glassmorphism.
- Contiene isotipo de huella/cámara, logotipo en *Playfair Display*, enlaces principales con indicador activo, selector de vistas, botón de carrito con insignia numérica reactiva y botón de llamada a la acción "Cotizar Sesión".

### 2. `hero-section`
- Presenta el mensaje principal de autor con tipografía `headline-display`, subtítulo explicativo, botones dobles ("Ver Galería y Tienda" / "Agendar Sesión sin Estrés"), sello de garantía *Fear-Free Photography* y retrato protagónico de Nora.

### 3. `card-product`
- Tarjeta de catálogo con fotografía de alta fidelidad, badge de categoría/acabado, título en `headline-sm`, selector interactivo de formato/tamaño, precio visible en pesos chilenos (CLP) y botón "Añadir al carrito" o "Ver detalle".

### 4. `card-article`
- Tarjeta editorial con imagen de portada, badge temático (e.g. *Comportamiento Felino*, *Guías de Decoración*), tiempo estimado de lectura, extracto y enlace interactivo a la lectura completa con comentarios.

### 5. `cart-drawer`
- Cajón lateral deslizante que lista los productos seleccionados, ajuste de cantidades (+ / -), cálculo de subtotal, estimador de envío dinámico y botón de checkout con derivación instantánea a WhatsApp con mensaje estructurado.

### 6. `lead-booking-form`
- Formulario de captura y reserva de sesión fotográfica con selección de tipo de mascota, temperamento del gato (tímido, curioso, juguetón), fecha estimada y observaciones.

---

## Do's and Don'ts

### ✅ Do's (Lo que siempre se hace)
- Mantener siempre un tono visual acogedor, limpio y de galería de arte.
- Destacar el enfoque de respeto y bienestar felino en cada punto de contacto comercial.
- Mostrar imágenes de alta calidad con gatos reales en entornos confortables.
- Explicar detalladamente los materiales nobles (papel algodón 100% libre de ácido, marcos de madera maciza).
- Proporcionar retroalimentación inmediata (toasts y micro-animaciones) al agregar productos o enviar consultas.

### ❌ Don'ts (Lo que nunca se hace)
- Nunca usar fotos de gatos estresados, disfrazados con ropa incómoda o en situaciones de riesgo.
- No utilizar colores fluorescentes, estridentes o que rompan la armonía terrosa y vegetal.
- No ocultar los precios de las sesiones fotográficas ni de los cuadros Fine Art.
- No exigir registro obligatorio para consultar o armar un presupuesto.
