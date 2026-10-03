# Prototipo en Stitch

**Archivos:** link y capturas en `docs/11-qa.md` · **Fase 3** · **10 pts desktop + 4 pts mobile**

## Qué es y para qué sirve

Un **prototipo** es una versión de tu sitio que se ve como el final y se puede recorrer, pero que todavía no es el sitio real. El de esta evaluación es **referencial**: muestra cómo se verá y cómo se recorrerá tu sitio, y va a ser la referencia cuando pasemos a código en la siguiente etapa del curso.

[Google Stitch](https://stitch.withgoogle.com) es una herramienta de IA que genera pantallas de alta fidelidad a partir de instrucciones de texto o imágenes. En este proyecto es una **herramienta de ejecución**: las decisiones ya las tomaste tú en tus specs. Si tu spec de diseño está bien hecha, este paso es casi mecánico:

- **`DESIGN.md`** → lo importas en Stitch y todas las pantallas siguen tu design system.
- **`docs/09-spec-diseno.md`** → pegas un prompt por pantalla.

> La IA no debería tomar todas las decisiones por nosotros.

Stitch no siempre respeta tu spec al 100 %. Eso no es un problema: es parte del trabajo. Revisar qué cumplió, corregirlo y mejorar tu spec es lo que vas a documentar en el [QA](02-qa-y-coherencia.md).

## Qué entregas

- Las 6 pantallas en **desktop**: landing, tienda, ficha de producto, carrito, blog y artículo.
- Las mismas 6 pantallas en **mobile**.
- El **link del proyecto de Stitch** (abierto para cualquiera con el enlace) y una **captura de cada pantalla** en `docs/img/`, enlazadas en `docs/11-qa.md`.

## Paso a paso

### 1. Crea el proyecto e importa tu DESIGN.md

1. Entra a [stitch.withgoogle.com](https://stitch.withgoogle.com) con tu cuenta de Google y crea un proyecto **web**.
2. Importa tu `DESIGN.md` como **design system del proyecto** (en las opciones de design system del proyecto). Si la interfaz no ofrece importar un archivo, abre tu `DESIGN.md`, copia todo su contenido y pégalo donde Stitch te pida el design system.
3. Revisa que Stitch haya tomado tus colores y tipografías antes de generar pantallas.

### 2. Genera una pantalla a la vez

Copia desde `docs/09-spec-diseno.md` el prompt de la **landing** y pégalo en Stitch. Si Stitch permite adjuntar imágenes, sube también la captura de tu **wireframe** de esa pantalla: le ayuda a respetar tu estructura.

Sigue con el resto, **una por prompt**: tienda, ficha de producto, carrito, blog y artículo. Hazlas en el **mismo proyecto** para que compartan el design system.

### 3. Revisa cada pantalla y corrige

Antes de pasar a la siguiente pantalla, compárala con su prompt y con tu `DESIGN.md`. Si falta algo o Stitch inventó cosas, pídele correcciones puntuales:

```text
Falta la fila de 3 card-kit antes de la grilla de productos. Usa
button-primary en "Agregar al carrito". Quita la sección de
testimonios: no está en mi spec.
```

**Anota cada diferencia y cada corrección**: es el contenido de tu QA. Si tienes que corregir muchas veces lo mismo, el problema probablemente está en tu spec: mejórala (y anótalo también) y vuelve a generar.

### 4. Genera la versión mobile

Cuando tengas las 6 pantallas en desktop, usa el prompt mobile de tu spec en cada una. Revisa que siga lo que definiste en `## Layout`: una columna, menú hamburguesa, imágenes arriba del texto.

### 5. Conecta las pantallas (si Stitch lo permite)

Si Stitch te deja conectar pantallas en modo prototipo, enlaza los botones siguiendo tus **user flows**: "Ver productos" lleva a la tienda, "Ver producto" a la ficha, "Agregar al carrito" al carrito. Si no, no importa: en el QA vas a mostrar el recorrido con la secuencia de capturas.

### 6. Comparte el link y guarda las capturas

1. Configura el proyecto para que **cualquiera con el enlace** pueda verlo. Abre el link en una ventana de incógnito para comprobarlo.
2. Toma una captura de cada pantalla, desktop y mobile, y guárdala en `docs/img/` con nombres claros (`prototipo-tienda-desktop.png`, `prototipo-tienda-mobile.png`).
3. Pega el link en `docs/11-qa.md` y en la portada (`README.md`).
4. (Opcional) Si Stitch te deja exportar el código de las pantallas, guárdalo en una carpeta `stitch/`: te va a servir en la etapa de código.

## Ejemplo de prompt

Este es el prompt de la tienda de Brote, tal como está en su `docs/09-spec-diseno.md`. No repite colores ni tipografías: esos ya vienen del `DESIGN.md` importado.

```text
Pantalla: Tienda de Brote, versión desktop. Usa el design system del proyecto.
Objetivo: que Camila encuentre rápido lo que necesita su planta.
Componentes, de arriba hacia abajo:
1. Navbar.
2. h1 "Tienda" y buscador con el texto "Buscar productos o plantas…".
3. Chips de categoría: Todos, Sustratos (activo), Fertilizantes, Plagas y
   enfermedades, Herramientas, Insumos.
4. Fila de 3 card-kit: Kit plantas de interior (ahorra $2.500), Kit
   suculentas (ahorra $1.900), Kit huerto (ahorra $3.200).
5. A la izquierda, columna de filtros de 240px: "Tipo de planta" (Interior
   marcado, Exterior, Suculentas y cactus, Huerto) y rango de precio.
   A la derecha, grilla de 3 columnas con 6 card-product:
   Sustrato para plantas de interior 10 L $7.990 (Interior),
   Tierra de hoja 20 L $5.490 (Interior), Sustrato para suculentas 5 L
   $6.490 (Suculentas), Perlita 5 L $4.990, Humus de lombriz 5 L $6.990,
   Sustrato para huerto 20 L $8.490 (Huerto).
6. Footer.
```

## Errores comunes

- **No importar el `DESIGN.md`** y generar pantallas con los colores y tipografías que Stitch quiera.
- **Prompts de una línea** ("hazme una tienda de jardinería bonita"): Stitch decide todo y el resultado no tiene nada que ver con tus specs.
- **Todo el sitio en un solo prompt**: Stitch mezcla o se salta pantallas. Una pantalla por prompt.
- **Aceptar lo primero que genera** sin compararlo con la spec, y no anotar las correcciones.
- **Pantallas en proyectos distintos**, con estilos distintos entre sí.
- **Link privado**: si no se puede abrir, no se puede evaluar.

## Checklist

- [ ] `DESIGN.md` importado en el proyecto de Stitch
- [ ] 6 pantallas en desktop, generadas con los prompts de `docs/09-spec-diseno.md`
- [ ] 6 pantallas en mobile
- [ ] Navbar y footer iguales en todas
- [ ] Diferencias y correcciones anotadas para el QA
- [ ] Link del proyecto abierto (probado en incógnito), en `11-qa.md` y en el `README.md`
- [ ] Capturas de todas las pantallas en `docs/img/`
