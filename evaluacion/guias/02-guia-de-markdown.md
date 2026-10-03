# Guía de Markdown

## Qué es un archivo `.md`

Un archivo `.md` es un **archivo de texto escrito en Markdown**, un lenguaje muy simple para darle formato a un texto usando símbolos del teclado: `#` para títulos, `**` para negritas, `-` para listas.

La idea de Markdown es que el texto **se pueda leer bien incluso sin formato**. Si abres un `.md` en el Bloc de notas, igual se entiende; pero si lo abres en GitHub, Obsidian o tu editor, esos símbolos se transforman en títulos, negritas, listas, tablas e imágenes.

```text
Lo que escribes (texto plano)        Lo que se ve (texto con formato)
─────────────────────────────        ────────────────────────────────
# Mi emprendimiento             →    Mi emprendimiento   (título grande)
Vendo **sustratos** y abonos    →    Vendo sustratos y abonos  ("sustratos" en negrita)
- Sustratos                     →    • Sustratos
- Herramientas                  →    • Herramientas
```

## Por qué lo usamos en este proyecto

- **GitHub lo muestra con formato automáticamente.** Tus documentos se ven ordenados en tu repositorio sin hacer nada más.
- **Es texto plano**: pesa poco, funciona en cualquier computador y Git puede mostrar exactamente qué línea cambiaste en cada commit.
- **Es el lenguaje de las specs.** Las herramientas de IA (Claude, Antigravity, Stitch) entienden muy bien Markdown: una spec bien estructurada con títulos, listas y tablas les da contexto claro.
- **Es el mismo formato de este enunciado**, de las guías y de las plantillas de `docs/`.

## Dónde ver cómo queda

| Dónde | Cómo |
|---|---|
| **GitHub** | Abre el archivo en tu repositorio: se muestra con formato. Para editarlo, usa el ícono del lápiz y la pestaña **Preview**. |
| **VS Code o Antigravity** | Abre el archivo y presiona **Cmd + Shift + V** (Mac) o **Ctrl + Shift + V** (Windows). Con **Cmd/Ctrl + K** y luego **V** lo ves al lado mientras escribes. |
| **Obsidian** | Muestra el formato mientras escribes. |

Revisa siempre la vista previa antes de hacer commit: un símbolo mal puesto puede romper una tabla completa.

---

## Los símbolos, uno por uno

En cada caso verás primero **lo que escribes** y después **cómo se ve**.

### Títulos: `#`

El `#` al comienzo de una línea la convierte en título. La cantidad de `#` indica el nivel: `#` es el título principal, `##` un subtítulo, `###` un subtítulo dentro del anterior, y así hasta `######`.

```markdown
# Brief — Brote
## Propuesta de valor
### Referentes
```

Cada documento debería tener **un solo `#`** (el título del documento) y usar `##` y `###` para sus secciones, igual que en HTML se usa un solo `h1`. De hecho, `#` se convierte en `<h1>`, `##` en `<h2>`, etc.

⚠️ Tiene que haber un **espacio** después del `#`: `#Título` no funciona, `# Título` sí.

### Párrafos y saltos de línea

Un párrafo es texto seguido. Para empezar un párrafo nuevo, deja **una línea en blanco**.

```markdown
Este es el primer párrafo.

Este es el segundo párrafo.
```

Se ve así:

Este es el primer párrafo.

Este es el segundo párrafo.

⚠️ Si solo presionas Enter una vez, sin dejar línea en blanco, Markdown junta las dos líneas en el mismo párrafo.

### Negrita, cursiva y tachado: `**`, `*`, `~~`

| Escribes | Se ve | Para qué |
|---|---|---|
| `**texto**` | **texto** | Destacar lo importante |
| `*texto*` | *texto* | Énfasis suave, términos en otro idioma |
| `***texto***` | ***texto*** | Negrita y cursiva a la vez |
| `~~texto~~` | ~~texto~~ | Algo descartado o corregido |

Los símbolos van **pegados** al texto: `** texto **` no funciona.

### Listas con viñetas: `-`

Un guion y un espacio al comienzo de la línea crean una lista. Para una sublista, deja **dos o cuatro espacios** antes del guion.

```markdown
- Sustratos
- Herramientas
  - Tijera de podar
  - Pala de mano
- Insumos
```

Se ve así:

- Sustratos
- Herramientas
  - Tijera de podar
  - Pala de mano
- Insumos

También funcionan `*` y `+`, pero usa siempre el mismo símbolo en todo el documento.

### Listas numeradas: `1.`

Un número, un punto y un espacio.

```markdown
1. Llega desde Instagram
2. Entra a la tienda
3. Agrega el producto al carrito
```

Se ve así:

1. Llega desde Instagram
2. Entra a la tienda
3. Agrega el producto al carrito

### Listas de tareas: `- [ ]` y `- [x]`

Son las listas de revisión (checklists) que aparecen al final de cada guía. `[ ]` es una tarea pendiente y `[x]` una tarea hecha.

```markdown
- [x] Brief completo
- [ ] Proto-persona
```

Se ve así:

- [x] Brief completo
- [ ] Proto-persona

En tu spec de desarrollo las vas a usar para los **criterios de aceptación**.

### Enlaces: `[texto](dirección)`

Los **corchetes** `[ ]` llevan el texto que se ve, y los **paréntesis** `( )`, la dirección a la que lleva. Van pegados, sin espacio entre ellos.

```markdown
[Google Fonts](https://fonts.google.com)
```

Se ve así: [Google Fonts](https://fonts.google.com)

Puedes enlazar a otro archivo de tu repositorio con una **ruta relativa** (la ruta desde el archivo en el que estás):

```markdown
[Ver la paleta](08-color-tipografia.md)
[Volver al README](../README.md)
```

`../` significa "subir una carpeta". Es lo mismo que viste en la lección de rutas.

### Imágenes: `![texto alternativo](ruta)`

Es igual que un enlace, pero con un **signo de exclamación** `!` adelante. El texto entre corchetes es el **texto alternativo** (`alt`): describe la imagen para quien no puede verla.

```markdown
![Avatar de Camila](img/camila.png)
```

Para tus documentos, guarda las imágenes en `docs/img/` y enlázalas como `img/nombre.png` desde los archivos de `docs/`.

⚠️ El nombre tiene que coincidir **exactamente**, incluidas mayúsculas: `img/Camila.PNG` y `img/camila.png` son archivos distintos para GitHub. Usa nombres en minúsculas, sin espacios ni tildes.

### Citas y destacados: `>`

El `>` al comienzo de la línea crea un bloque destacado. Lo usamos para frases, citas y notas importantes.

```markdown
> "Compro plantas preciosas y a los dos meses se me mueren."
```

Se ve así:

> "Compro plantas preciosas y a los dos meses se me mueren."

### Código en línea: `` ` ``

El acento grave (backtick) `` ` `` muestra un texto como código, con letra de máquina de escribir. Lo usamos para nombres de archivos, comandos, etiquetas y colores.

```markdown
Edita el archivo `docs/01-brief.md` y usa la etiqueta `<main>`.
```

Se ve así: Edita el archivo `docs/01-brief.md` y usa la etiqueta `<main>`.

Su posición cambia según el teclado; si no lo encuentras, búscalo como "acento grave" para tu modelo. En muchos teclados en español hay que presionarlo seguido de un espacio para que aparezca.

### Bloques de código: ```` ``` ````

Tres backticks en una línea abren el bloque, y otros tres lo cierran. Al lado de los primeros puedes indicar el lenguaje para que se pinte con colores: `html`, `css`, `bash`, `markdown` o `text`.

````markdown
```css
:root {
  --color-primary: #3F5E4A;
}
```
````

Se ve así:

```css
:root {
  --color-primary: #3F5E4A;
}
```

Lo usamos para código, comandos de Git y diagramas en texto, como el mapa de sitio y los user flows. Dentro de un bloque de código **los símbolos de Markdown no se aplican**: por eso sirve para mostrar árboles y flechas sin que se desarmen.

### Tablas: `|` y `---`

Las tablas se dibujan con barras verticales `|` para separar columnas. La **segunda línea**, con guiones `---`, separa el encabezado del contenido y es obligatoria.

```markdown
| Rol | HEX | Uso |
|---|---|---|
| Principal | #3F5E4A | Botones y enlaces |
| Fondo | #FBF8F2 | Fondo general |
```

Se ve así:

| Rol | HEX | Uso |
|---|---|---|
| Principal | #3F5E4A | Botones y enlaces |
| Fondo | #FBF8F2 | Fondo general |

Reglas para que no se rompa:

- **Todas las filas deben tener la misma cantidad de columnas** (la misma cantidad de `|`).
- Deja **una línea en blanco antes** de la tabla.
- No importa que las columnas no queden alineadas en el texto: se ven alineadas igual.
- Una celda vacía se escribe con `| |`.
- Con `:` en la línea de guiones alineas una columna: `|:---|` a la izquierda, `|:---:|` al centro, `|---:|` a la derecha.

### Línea divisoria: `---`

Tres guiones solos en una línea, con líneas en blanco antes y después, dibujan una línea horizontal para separar secciones.

```markdown
---
```

⚠️ Si pones `---` justo debajo de una línea de texto (sin línea en blanco), ese texto se convierte en título. Deja siempre una línea en blanco antes.

### Comentarios: `<!-- -->`

Todo lo que está entre `<!--` y `-->` **no se ve** en la vista con formato. Las plantillas de `docs/` los usan para darte instrucciones que no aparecen en tu documento final.

```markdown
<!-- Esto es una instrucción: reemplázala por tu texto. -->
```

Puedes dejarlos o borrarlos cuando completes la sección.

### Escapar un símbolo: `\`

Si quieres que un símbolo se vea tal cual y no se interprete como formato, ponle una barra invertida `\` adelante.

```markdown
\*Esto no queda en cursiva\*
```

Se ve así: \*Esto no queda en cursiva\*

---

## Resumen de símbolos

| Símbolo | Para qué | Ejemplo |
|---|---|---|
| `#` | Títulos (1 a 6 niveles) | `## Propuesta de valor` |
| línea en blanco | Nuevo párrafo | |
| `**texto**` | Negrita | `**Imprescindible**` |
| `*texto*` | Cursiva | `*hover*` |
| `~~texto~~` | Tachado | `~~Testimonios~~` |
| `-` | Lista con viñetas | `- Sustratos` |
| `1.` | Lista numerada | `1. Landing` |
| `- [ ]` / `- [x]` | Lista de tareas | `- [ ] Paleta` |
| `[texto](url)` | Enlace | `[Brief](01-brief.md)` |
| `![alt](ruta)` | Imagen | `![Moodboard](img/moodboard.png)` |
| `>` | Cita o destacado | `> "Frase"` |
| `` `texto` `` | Código en línea | `` `index.html` `` |
| ```` ``` ```` | Bloque de código | ```` ```css ```` |
| `\|` y `---` | Tabla | `\| Rol \| HEX \|` |
| `---` | Línea divisoria | |
| `<!-- -->` | Comentario (no se ve) | `<!-- Completa aquí -->` |
| `\` | Mostrar un símbolo tal cual | `\*` |

## Qué son los `[corchetes]` de las plantillas

En las plantillas vas a ver textos como `[Nombre del emprendimiento]` o `[pega aquí el link]`. **No son símbolos de Markdown**: son espacios para rellenar. Reemplázalos completos, incluidos los corchetes:

```markdown
Antes:  # Brief — [Nombre del emprendimiento]
Después: # Brief — Brote
```

## Errores comunes

- **Olvidar el espacio** después de `#`, `-`, `1.` o `>`.
- **No dejar una línea en blanco** antes de una lista, una tabla o un bloque de código: el formato no se aplica.
- **Tablas con distinta cantidad de columnas** en alguna fila.
- **Olvidar cerrar un bloque de código** con ```` ``` ````: todo lo que viene después queda como código.
- **Rutas de imágenes mal escritas**: mayúsculas, espacios o tildes en el nombre del archivo.
- **Espacio entre `]` y `(`** en enlaces e imágenes: `[texto] (url)` no funciona.

## Checklist

- [ ] Sé ver la vista previa de un `.md` en mi editor y en GitHub
- [ ] Mi documento tiene un solo `#` y usa `##` y `###` para las secciones
- [ ] Mis tablas se ven como tablas en la vista previa
- [ ] Mis imágenes cargan en GitHub
- [ ] Reemplacé todos los `[corchetes]` de las plantillas
