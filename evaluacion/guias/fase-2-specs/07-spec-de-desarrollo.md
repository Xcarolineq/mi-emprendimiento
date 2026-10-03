# Spec de desarrollo

**Archivo:** `docs/10-spec-desarrollo.md` · **Fase 2** · **9 pts**

## Qué es y para qué sirve

Si la spec de diseño dice **cómo se ve** el sitio, la **spec de desarrollo** dice **cómo se construye**: qué archivos existen, cómo se enlazan, qué etiquetas HTML se usan y cómo se organiza el CSS.

Es el documento que le vas a entregar a tu asistente de IA (Antigravity, Claude Code) en la **etapa de código**, junto con tu `DESIGN.md` y tu prototipo de Stitch, para pasar el diseño a código. En esta evaluación no se implementa: la dejas lista para ese momento. Stitch diseña pantallas, pero no arma un sitio con tus archivos y tus enlaces: eso lo decide esta spec. También es tu lista de control: sus **criterios de aceptación** son los que vas a revisar en el QA.

## Qué entregas

Un documento con 6 partes:

0. **Insumos y prompt para el asistente**: qué archivos recibe y qué debe hacer con ellos.
1. **Estructura de archivos y carpetas.**
2. **Páginas y navegación**: qué páginas HTML existen y cómo se enlazan.
3. **Estructura semántica** de cada página.
4. **Organización del CSS**: variables, clases y breakpoints.
5. **Criterios de aceptación**: la lista verificable de lo que debe cumplir el sitio.

## Paso a paso

### 0. Insumos y prompt para el asistente

Al comienzo de la spec, deja escrito el prompt que le vas a dar a tu asistente en la etapa de código. Así, tu spec queda lista para usar:

```text
Lee DESIGN.md, docs/09-spec-diseno.md y docs/10-spec-desarrollo.md.
En la carpeta stitch/ está el código exportado de Stitch de cada pantalla.
Construye el sitio siguiendo exactamente docs/10-spec-desarrollo.md:
solo HTML y CSS, la estructura de archivos y la navegación definidas,
las variables de :root con los valores de DESIGN.md y la estructura
semántica de cada página. Usa el código de Stitch solo como referencia
visual. Al terminar, revisa cada criterio de aceptación y dime cuáles
se cumplen y cuáles no.
```

### 1. Estructura de archivos

Define cómo se organiza tu proyecto. Incluye `DESIGN.md` en la raíz y una carpeta `stitch/` para guardar el código que exportes de Stitch (solo como referencia). Usa nombres en minúsculas, sin espacios ni tildes.

### 2. Páginas y navegación

Traduce tu mapa de sitio a archivos HTML y define qué enlaces tiene cada página. Revisa tu user flow: cada acción del flujo es un enlace o un botón.

Recuerda que las categorías de la tienda y del blog **no son páginas aparte**.

### 3. Estructura semántica

Para cada página, define qué etiquetas HTML5 la estructuran: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`. Usar las etiquetas correctas ayuda a la accesibilidad y al SEO.

### 4. Organización del CSS

- **Variables en `:root`** con los tokens de tu `DESIGN.md` (colores, tipografía, espaciados, radios). Así, si cambias un color, cambia en todo el sitio. Si un valor cambia, se cambia primero en el `DESIGN.md`.
- **Nombres de clases** claros y consistentes, en inglés o en español, pero siempre en el mismo idioma (`.product-card`, `.btn-primary`).
- **Breakpoints**: en qué anchos cambia el diseño. Usa los mismos de la sección `## Layout` de tu `DESIGN.md`.
- **Archivos**: un solo `styles.css` o varios (`base.css`, `components.css`...).

### 5. Criterios de aceptación

Son afirmaciones que se pueden responder con **sí o no**. Salen de:

- Tus **funcionalidades** (¿se puede hacer lo que prometí?).
- Tu **user flow** (¿se puede recorrer?).
- Tu **DESIGN.md** (¿se cumplen las reglas de los componentes?).
- Las **buenas prácticas** (accesibilidad, responsive, publicación).

## Ejemplo (fragmento)

````markdown
# Spec de desarrollo — Brote

## 1. Estructura de archivos

```text
brote-jardineria/
├── index.html          ← landing
├── tienda.html
├── producto.html
├── carrito.html
├── blog.html
├── articulo.html
├── contacto.html
├── preguntas-frecuentes.html
├── terminos.html
├── privacidad.html
├── 404.html
├── DESIGN.md
├── css/
│   └── styles.css
├── img/
│   ├── productos/
│   └── blog/
├── stitch/             ← código exportado de Stitch (solo referencia)
└── docs/
```

## 2. Páginas y navegación

- Navbar en todas las páginas: Inicio, Tienda, Blog, Nosotros, Contacto y
  enlace al carrito.
- Footer en todas las páginas: enlaces a preguntas frecuentes, términos,
  privacidad y redes sociales.

| Desde | Elemento | Lleva a |
|---|---|---|
| index.html | Botón "Ver productos" del hero | tienda.html |
| tienda.html | Botón "Ver producto" de cada card | producto.html |
| producto.html | Botón "Agregar al carrito" | carrito.html |
| producto.html | Botón "Consultar por WhatsApp" | https://wa.me/569XXXXXXXX |
| articulo.html | Card de producto recomendado | producto.html |

## 3. Estructura semántica

### tienda.html

```html
<header> → navbar
<main>
  <section> título + buscador + chips de categoría
  <aside>   filtros
  <section> grilla de product cards (cada card es un <article>)
</main>
<footer>
```

## 4. Organización del CSS

```css
:root {
  /* Colores */
  --color-primary: #3F5E4A;
  --color-secondary: #EDE4D3;
  --color-accent: #C0643A;
  --color-accent-strong: #A9552F;
  --color-bg: #FBF8F2;
  --color-text: #2B2B28;
  --color-text-soft: #6B675E;
  --color-success: #2F7A4A;
  --color-error: #B23A2E;

  /* Tipografía */
  --font-title: 'Fraunces', serif;
  --font-body: 'Inter', sans-serif;

  /* Espaciados */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;

  /* Radios */
  --radius-card: 8px;
  --radius-pill: 999px;
}
```

- Clases en inglés con guiones: `.navbar`, `.hero`, `.btn-primary`,
  `.product-card`, `.article-card`.
- Breakpoints: mobile hasta 767 px, tablet desde 768 px, desktop desde 1024 px.
- Se diseña primero para mobile (mobile first).

## 5. Criterios de aceptación

**Navegación**
- [ ] La navbar y el footer son iguales en todas las páginas.
- [ ] Se puede completar el flujo de compra: landing → tienda → producto → carrito.
- [ ] Se puede completar el flujo de contenido: artículo → producto.
- [ ] No hay enlaces rotos.

**Funcionalidades**
- [ ] La landing tiene un formulario de correo con el texto de la oferta.
- [ ] La tienda tiene buscador, chips de categoría y filtro por tipo de planta.
- [ ] La ficha de producto muestra la guía de uso, selector de formato y botón
      para agregar al carrito.
- [ ] El artículo tiene botones para compartir y una sección de comentarios.

**Diseño**
- [ ] Todos los colores del CSS salen de las variables de `:root`, con los valores de `DESIGN.md`.
- [ ] El sitio usa solo HTML y CSS propios (sin Tailwind ni el CSS exportado de Stitch).
- [ ] El precio es visible en todas las product cards.
- [ ] Los botones tienen estado hover.

**Responsive**
- [ ] En mobile la tienda muestra 1 producto por fila; en tablet, 2; en desktop, 3.
- [ ] No hay scroll horizontal en 375 px de ancho.

**Accesibilidad y publicación**
- [ ] Todas las imágenes tienen `alt` descriptivo.
- [ ] Cada página tiene un solo `h1`.
- [ ] El sitio está publicado en GitHub Pages.
````

## Cómo usar la IA

```text
Lee docs/05-arquitectura.md (mapa de sitio y user flows),
docs/03-funcionalidades.md, DESIGN.md y docs/09-spec-diseno.md.
El sitio se construye solo con HTML y CSS. Escribe en
docs/10-spec-desarrollo.md una spec de desarrollo con: el prompt para
el asistente de la etapa de código, estructura de archivos, tabla de navegación
entre páginas, estructura semántica de cada página, variables CSS en
:root con los tokens de DESIGN.md, convención de clases, breakpoints y
una lista de criterios de aceptación verificables (que se respondan
con sí o no).
```

## Errores comunes

- **Criterios de aceptación vagos**: "que funcione bien" no se puede verificar; "no hay scroll horizontal en 375 px" sí.
- **Variables CSS que no coinciden** con la paleta de la spec de diseño.
- **Páginas que no están en el mapa de sitio**, o páginas del mapa que no tienen archivo.
- **Olvidar las páginas obligatorias** (404, privacidad, términos).

## Checklist

- [ ] Prompt para el asistente de la etapa de código
- [ ] Estructura de archivos y carpetas, con `DESIGN.md` y `stitch/`
- [ ] Tabla de navegación entre páginas, coherente con el user flow
- [ ] Estructura semántica de cada página
- [ ] Variables CSS con los tokens de `DESIGN.md`, convención de clases y breakpoints
- [ ] Criterios de aceptación verificables que cubren funcionalidades, flujos, diseño, responsive y accesibilidad
