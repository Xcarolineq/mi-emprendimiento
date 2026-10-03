# Spec de diseño

**Archivos:** `DESIGN.md` (en la raíz) + `docs/09-spec-diseno.md` · **Fase 2** · **9 pts**

## Qué es y para qué sirve

Una **spec** (especificación) describe qué hay que construir y cuáles son sus reglas, con tanta claridad que otra persona (o una IA) podría construirlo sin preguntarte nada.

La **spec de diseño** describe **cómo se ve y cómo se comporta** tu sitio. La vas a escribir para que en la Fase 3 la subas a **Google Stitch** y genere tus pantallas siguiendo tus reglas, sin improvisar. Por eso tiene dos partes:

| Archivo | Qué contiene | Qué se hace con él en la Fase 3 |
|---|---|---|
| **`DESIGN.md`** | Tu **design system**: colores, tipografía, espaciados, formas y componentes con sus estados y reglas | Se **importa** en Stitch como design system del proyecto |
| **`docs/09-spec-diseno.md`** | Tus **6 pantallas**, escritas como prompts: qué componentes lleva cada una, en qué orden y con qué textos | Se **pega** en Stitch, una pantalla a la vez |

No queremos esto:

> Haz una tienda online moderna, bonita y profesional.

Queremos esto:

> Pantalla: Tienda. Componentes: navbar, buscador, chips de categoría y una grilla de 3 columnas de `card-product` con imagen, nombre, precio y el botón "Ver producto".

Y que `card-product` ya esté definido en tu `DESIGN.md`, con sus colores, radios y estados.

## Qué es un DESIGN.md

**DESIGN.md** es un formato abierto creado por Google para describir un design system en un archivo Markdown, de forma que lo entiendan las personas **y** las herramientas de IA. Stitch lo importa directamente, y también lo leen asistentes de código como Claude Code o Antigravity.

Un DESIGN.md tiene dos partes:

1. **Tokens** (arriba, entre dos líneas `---`): los **valores exactos** de tu design system, escritos en un formato de datos llamado YAML. Es lo que la herramienta aplica al pie de la letra.
2. **Texto** (abajo, con títulos `##`): el **porqué y el cómo**: la personalidad de la marca, cuándo usar cada color, las reglas de cada componente.

```markdown
---
name: Brote
colors:
  primary: "#3F5E4A"
typography:
  body-md:
    fontFamily: Inter
    fontSize: 16px
---

## Overview

Brote es una tienda de jardinería para personas que están empezando con plantas...

## Colors

- **Primary (#3F5E4A):** Verde salvia oscuro, el color de la marca...
```

La especificación completa está en [github.com/google-labs-code/design.md](https://github.com/google-labs-code/design.md).

## Qué entregas

1. **`DESIGN.md`** en la raíz de tu repositorio (el repositorio base trae una plantilla), con:
   - los **tokens** de colores, tipografía, radios, espaciados y componentes;
   - las secciones **Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components y Do's and Don'ts**, en ese orden.
2. **`docs/09-spec-diseno.md`** con el link a tus wireframes y **un prompt por pantalla** (landing, tienda, ficha de producto, carrito, blog y artículo), más un prompt para la versión mobile.

## Paso a paso

### 1. Escribe los tokens de color y tipografía

Parte por lo que ya definiste en `08-color-tipografia.md`. Cada color lleva un **nombre** y su **HEX entre comillas**:

```yaml
colors:
  primary: "#3F5E4A"
  secondary: "#EDE4D3"
  tertiary: "#C0643A"
  neutral: "#FBF8F2"
  on-primary: "#FFFFFF"
```

Nombres recomendados: `primary`, `secondary`, `tertiary` (acento), `neutral` (fondo), `surface` (tarjetas), `on-surface` (texto), `error`. El prefijo `on-` significa "lo que va encima": `on-primary` es el color del texto sobre un fondo `primary`.

Para la tipografía, cada nivel de tu escala es un token:

```yaml
typography:
  headline-display:
    fontFamily: Fraunces
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
```

### 2. Suma radios y espaciados

```yaml
rounded:
  md: 8px
  full: 9999px
spacing:
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
```

Usar siempre los mismos valores es lo que hace que un sitio se vea ordenado.

### 3. Define tus componentes y sus estados

Toma los componentes que calcaste en Whimsical. Cada componente es un token con sus propiedades, y puede **referenciar** otros tokens con llaves: `"{colors.primary}"`.

```yaml
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
```

Propiedades válidas: `backgroundColor`, `textColor`, `typography`, `rounded`, `padding`, `size`, `height`, `width`.

Los **estados** se escriben como componentes aparte, con el estado al final del nombre:

| Estado | Cuándo ocurre | Nombre del token |
|---|---|---|
| Normal | Estado por defecto | `button-primary` |
| Hover | El mouse pasa por encima | `button-primary-hover` |
| Active | Se está presionando, o es la opción seleccionada | `button-primary-active` |
| Disabled | No se puede usar (por ejemplo, producto agotado) | `button-primary-disabled` |

No todos los componentes tienen los 4 estados; los botones, enlaces, inputs y filtros sí.

### 4. Escribe las secciones de texto

Después de la segunda línea `---`, escribe estas secciones **en este orden** (puedes omitir alguna, pero no cambiar el orden ni repetirlas):

| Sección | Qué va |
|---|---|
| `## Overview` | Qué es la marca, para quién es (tu proto-persona) y qué sensación debe transmitir (tu moodboard) |
| `## Colors` | Para qué se usa cada color y dónde **no** se usa |
| `## Typography` | Qué familia va en títulos y cuál en textos, y la escala |
| `## Layout` | Ancho máximo, márgenes, escala de espaciado, **breakpoints** y columnas por dispositivo |
| `## Elevation & Depth` | Cómo se marca la jerarquía: sombras, bordes o capas de color |
| `## Shapes` | Radios de botones, tarjetas e inputs |
| `## Components` | Cada componente: qué contiene, sus **reglas** y sus estados |
| `## Do's and Don'ts` | Lo que siempre y lo que nunca se hace |

Las **reglas** de los componentes van en el texto. Por ejemplo: "El precio siempre es visible. El nombre ocupa máximo 2 líneas; si es más largo, termina en '…'".

El **responsive** va en `## Layout`: mobile hasta 767 px, tablet de 768 a 1023 px y desktop desde 1024 px, y qué cambia en cada uno (columnas, menú, filtros, imágenes).

### 5. Valida tu DESIGN.md

Google entrega un validador que revisa la estructura, encuentra referencias rotas y **calcula el contraste** de cada componente. Pídele a tu asistente (Claude Code o Antigravity) que lo corra, o hazlo tú en la terminal si tienes Node instalado:

```bash
npx @google/design.md lint DESIGN.md
```

El resultado muestra un resumen:

```text
"summary": { "errors": 0, "warnings": 0, "infos": 1 }
```

- **errors:** el archivo tiene un problema de formato y Stitch podría no leerlo. Hay que corregirlo.
- **warnings:** por ejemplo, un texto sin contraste suficiente o un color que no usa ningún componente. Revísalos: casi siempre esconden un problema real.

En Brote, el validador detectó que el texto blanco sobre el terracota de las etiquetas de oferta tenía contraste 4.1:1, bajo el mínimo de 4.5:1. Por eso se agregó un terracota más oscuro para esas etiquetas.

### 6. Escribe un prompt por pantalla

En `docs/09-spec-diseno.md`, escribe las 6 pantallas como prompts listos para pegar en Stitch. Cada prompt tiene:

1. **Pantalla** y dispositivo ("Tienda, versión desktop") + "Usa el design system del proyecto".
2. **Objetivo**: qué quiere lograr tu proto-persona en esa pantalla.
3. **Componentes de arriba hacia abajo** (según tus wireframes), llamándolos **con los mismos nombres de tu DESIGN.md** (`card-product`, `button-primary`).
4. **Textos y datos reales**: títulos, nombres de productos, precios, categorías.

Al final, agrega un prompt para pedir la versión mobile de cada pantalla, basado en tu sección `## Layout`.

## Ejemplo

El DESIGN.md de Brote (fragmento):

```markdown
---
version: alpha
name: Brote
colors:
  primary: "#3F5E4A"
  primary-hover: "#34503F"
  on-primary: "#FFFFFF"
  secondary: "#EDE4D3"
  tertiary: "#C0643A"
  tertiary-strong: "#A9552F"
  neutral: "#FBF8F2"
  on-surface: "#2B2B28"
typography:
  title-md:
    fontFamily: Fraunces
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.2
rounded:
  md: 8px
  full: 9999px
spacing:
  md: 16px
components:
  card-product:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-surface}"
    typography: "{typography.title-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  tag-offer:
    backgroundColor: "{colors.tertiary-strong}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
---

## Overview

Brote es una tienda online de jardinería para personas que están empezando
con plantas. Su usuaria principal es Camila, que compra desde el celular,
quiere una casa bonita con plantas y necesita que la guíen para que no se
le mueran. El estilo es natural, fresco, cálido, simple y vivo.

## Components

### Product card (`card-product`)

Imagen cuadrada, etiqueta de tipo de planta, nombre en `title-md`, precio y
botón secundario "Ver producto".

- El precio siempre es visible.
- El nombre ocupa máximo 2 líneas; si es más largo, termina en "…".
- Agotado: imagen en escala de grises y botón deshabilitado "Agotado".
- Hover: sombra y la imagen se agranda al 103 %.
```

Y un prompt de pantalla de `docs/09-spec-diseno.md`:

```text
Pantalla: Tienda de Brote, versión desktop. Usa el design system del proyecto.
Objetivo: que Camila encuentre rápido lo que necesita su planta.
Componentes, de arriba hacia abajo:
1. Navbar.
2. h1 "Tienda" y buscador "Buscar productos o plantas…".
3. Chips de categoría: Todos, Sustratos (activo), Fertilizantes, Plagas y
   enfermedades, Herramientas, Insumos.
4. Fila de 3 card-kit: Kit plantas de interior (ahorra $2.500), Kit
   suculentas (ahorra $1.900), Kit huerto (ahorra $3.200).
5. A la izquierda, filtros "Tipo de planta" (Interior marcado, Exterior,
   Suculentas y cactus, Huerto) y precio. A la derecha, grilla de 3
   columnas con 6 card-product: Sustrato para plantas de interior 10 L
   $7.990, Tierra de hoja 20 L $5.490, ...
6. Footer.
```

Así se ven los componentes de Brote con estilo y estados:

![Componentes de Brote con estilo y estados: product card, botones, chips y campo de texto](../img/brote-componentes-con-estilo.png)

## Cómo usar la IA

Para el DESIGN.md:

```text
Lee la especificación de DESIGN.md en https://github.com/google-labs-code/design.md.
Con mi paleta y tipografía (docs/08-color-tipografia.md), mis componentes
calcados (docs/07-componentes.md), mi moodboard (docs/06-moodboard.md) y
mi proto-persona (docs/02-proto-personas.md), escribe un DESIGN.md para mi
sitio. Incluye tokens de colores, tipografía, radios, espaciados y cada
componente con sus estados (hover, active, disabled), y las secciones en
el orden de la especificación. Las reglas deben ser concretas y
verificables. Después córrelo con npx @google/design.md lint DESIGN.md y
corrige los errores y advertencias.
```

Para las pantallas:

```text
Con mi DESIGN.md y mis wireframes [adjunta la imagen], escribe en
docs/09-spec-diseno.md un prompt para Stitch por cada pantalla (landing,
tienda, ficha de producto, carrito, blog y artículo): pantalla y
dispositivo, objetivo de la proto-persona, componentes de arriba hacia
abajo usando los nombres de mi DESIGN.md, y textos y datos reales.
Agrega al final un prompt para la versión mobile.
```

Revisa todo lo que proponga: tú decides las reglas.

## Errores comunes

- **HEX sin comillas en los tokens:** en YAML, el `#` inicia un comentario. Escribe siempre `"#3F5E4A"`, con comillas.
- **Sangría incorrecta:** en YAML, la sangría (los espacios al inicio) define qué está dentro de qué. Usa siempre 2 espacios y nunca tabulaciones.
- **Secciones fuera de orden o repetidas:** dos `## Colors` hacen que el archivo sea rechazado.
- **Nombres distintos** en el DESIGN.md y en los prompts (`card-product` en uno y "tarjeta de producto" en el otro).
- **Reglas vagas**: "que se vea moderno", "botones bonitos". Una regla tiene que poder verificarse.
- **Inventar colores o tipografías** que no están en tu paleta.
- **Componentes sin estados.**
- **Un solo prompt para todo el sitio**: Stitch funciona mejor con una pantalla por prompt.

## Checklist

- [ ] `DESIGN.md` en la raíz, con tokens de colores, tipografía, radios, espaciados y componentes
- [ ] Componentes con sus estados (hover, active, disabled cuando corresponda)
- [ ] Secciones Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components y Do's and Don'ts, en ese orden
- [ ] Reglas de los componentes concretas y verificables
- [ ] Responsive para mobile, tablet y desktop en `## Layout`
- [ ] Validado con `npx @google/design.md lint DESIGN.md`: 0 errores
- [ ] `docs/09-spec-diseno.md` con el link a los wireframes y un prompt por cada una de las 6 pantallas, más el prompt mobile
