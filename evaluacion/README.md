# Evaluación Parcial 02 — Modelando el prototipo de página web

**Asignatura:** MKA1203 Sitios Web y Landing Pages
**Experiencia de aprendizaje:** EA 2 — Diseñando un prototipo
**Modalidad:** encargo individual, sin presentación
**Puntaje total:** 100 puntos en 3 fases

| Fase | Puntaje | Entrega (último commit) | Descuento por atraso |
|---|---|---|---|
| 1. Definición de requerimientos | 30 pts | **Lunes 5 de octubre, 23:59** | −15 pts |
| 2. Construcción de specs | 40 pts | **Lunes 12 de octubre, 23:59** | −20 pts |
| 3. Prototipo referencial en Stitch | 30 pts | **Miércoles 14 de octubre, 23:59** | −15 pts |

---

## El encargo

Vas a diseñar y prototipar el sitio web de **tu emprendimiento**: definir sus requerimientos, escribir sus specs y generar un **prototipo referencial** en Google Stitch. El sitio tiene tres partes:

1. **Landing page**: la página de entrada, pensada para convertir (que la persona compre, escriba o se suscriba).
2. **Blog**: artículos que atraen público y le dan contenido a la marca.
3. **E-commerce**: catálogo, ficha de producto y carrito. Tiene que verse y recorrerse como una tienda.

**¿No tienes emprendimiento?** Crea uno ficticio. Algunas ideas de rubro:

- Ropa (ropa de segunda mano, ropa deportiva, accesorios)
- Comida (pastelería, comida saludable, café de especialidad)
- Cuidado personal (cosmética natural, jabones artesanales, cuidado capilar)

Elige un rubro que conozcas o te guste: vas a trabajar con él varias semanas.

> **La pregunta que guía esta evaluación no es "¿quedó bonito?", sino "¿cumple lo que debía resolver?".** Cada decisión de diseño tiene que poder explicarse a partir de tu proto-persona y tus requerimientos.

> **¿Y el código?** En esta evaluación llegas hasta el prototipo referencial. El paso a código (HTML + CSS publicado en GitHub Pages) viene en la siguiente etapa del curso, a partir de tu prototipo y tu spec de desarrollo. Por eso igual entregas todas las specs.

> 📘 **Guías paso a paso:** cada punto de esta evaluación tiene una guía con explicación, ejemplo, prompt de IA y checklist en la carpeta [`guias/`](guias/00-como-usar-estas-guias.md).

---

## Resultado de aprendizaje e indicadores de logro

**RA2.** Utiliza metodologías de experiencia de usuario para la implementación del sitio, considerando las etapas UX (User Experience).

| Indicador de logro | Criterios que lo evalúan |
|---|---|
| **IL 2.1** Selecciona el perfil del cliente usuario para diseñar un prototipo de página web que responda a sus requerimientos. | **Fase 1:** brief, proto-persona, objetivos y funcionalidades, tecnologías, arquitectura de la información, user flow, categorías, entrega en GitHub · **Fase 2:** refinamiento de la Fase 1 |
| **IL 2.2** Modela un prototipo de página web a partir de metodologías de experiencia de usuario. | **Fase 2:** moodboard, calco de componentes, wireframes, paleta y tipografía, spec de diseño, spec de desarrollo · **Fase 3:** prototipo en Stitch (desktop y mobile), QA de spec contra prototipo, coherencia con brief, proto-persona y user flow |

El hilo que une ambos indicadores es la **coherencia**: el prototipo final tiene que poder explicarse a partir del brief, la proto-persona y el user flow definidos al inicio.

---

## Calendario

Las clases son los **martes y miércoles**.

| Fecha | Dónde | Qué pasa |
|---|---|---|
| Mar 29 y mié 30 sep | Clases | Inicio del proyecto. Trabajo de la Fase 1 |
| **Lun 5 oct, 23:59** | Casa | **Entrega Fase 1** + link de tu fork por AVA |
| Mar 6 y mié 7 oct | Clases | Refinamiento de la Fase 1 con retroalimentación. Moodboard, calco de componentes, paleta y tipografía |
| Jue 8 a lun 12 oct | Casa | Construcción de las specs de diseño y desarrollo |
| **Lun 12 oct, 23:59** | Casa | **Entrega Fase 2** |
| Mar 13 y mié 14 oct | Clases | Prototipo referencial en Stitch y QA |
| **Mié 14 oct, 23:59** | — | **Entrega Fase 3** |

---

## Cómo se entrega

Todo el proyecto vive en **un solo repositorio de GitHub**, que creas haciendo un **fork** del repositorio base [mi-emprendimiento](https://github.com/carocromatica/mi-emprendimiento). El fork ya trae:

- la carpeta `docs/` con una **plantilla** para cada documento,
- un `README.md` para completar con la portada de tu proyecto,
- este enunciado y las guías, en la carpeta `evaluacion/`.

Los documentos se escriben en **Markdown**, igual que las specs que vimos en el módulo de Spec-Driven Design. Así, cuando pasemos a código, tus specs van a estar en el mismo repositorio. La guía [Preparar el repositorio](guias/01-preparar-el-repositorio.md) explica cómo hacer el fork paso a paso.

- **Fase 1:** completas los documentos en tu fork y **envías el link de tu fork por AVA** antes del lunes 5 de octubre a las 23:59.
- **Fases 2 y 3:** no se envía nada nuevo. Se revisa el mismo fork.

### Cómo se revisan los plazos

- Cada fase se evalúa con el estado del repositorio en su **último commit anterior a la hora límite**.
- Si una fase no tiene commits a tiempo, se evalúa lo que subas después, con el descuento por atraso de esa fase.
- Después del 5 de octubre vas a seguir editando los archivos de la Fase 1 (es parte del refinamiento): esos cambios **no cuentan como atraso**, porque se evalúan en la Fase 2.

### Estructura del repositorio

```text
mi-emprendimiento/             ← puedes renombrar tu fork con el nombre de tu emprendimiento
├── README.md                  ← portada del proyecto + declaración de uso de IA
├── DESIGN.md                  ← design system para Stitch (Fase 2)
├── evaluacion/                ← este enunciado y las guías (no lo modifiques)
├── docs/
│   ├── 01-brief.md            ┐
│   ├── 02-proto-personas.md   │
│   ├── 03-funcionalidades.md  │ Fase 1
│   ├── 04-tecnologias.md      │
│   ├── 05-arquitectura.md     ┘ ← incluye user flows
│   ├── 06-moodboard.md        ┐
│   ├── 07-componentes.md      │
│   ├── 08-color-tipografia.md │ Fase 2
│   ├── 09-spec-diseno.md      │
│   ├── 10-spec-desarrollo.md  ┘
│   ├── 11-qa.md               ← Fase 3: prototipo, QA y coherencia
│   └── img/                   ← avatares, sitemap y capturas del prototipo
```

### Uso de IA

Puedes (y te recomendamos) usar IA para trabajar más rápido. Pero:

- Tú tomas las decisiones; la IA ayuda a ejecutarlas. Si no puedes explicar una decisión, no es tuya.
- En el `README.md` agrega una sección **Uso de IA** indicando qué herramientas usaste y para qué (por ejemplo: "Usé Claude para generar un primer borrador de la proto-persona y luego las ajusté con…").
- Documentos genéricos que podrían servir para cualquier emprendimiento se evalúan como *logro insuficiente*, aunque estén completos.

---

## Fase 1 — Definición de requerimientos (30 puntos)

**Entrega: lunes 5 de octubre, 23:59 · Atraso: −15 pts**

### 1. Brief del emprendimiento — `docs/01-brief.md`

Una página que presente el proyecto:

- Nombre del emprendimiento y rubro. Indica si es real o ficticio.
- Qué vende y cuál es su propuesta de valor (por qué alguien te compraría a ti y no a otro).
- Objetivo del sitio web para el negocio (vender online, captar pedidos por WhatsApp, posicionar la marca…).
- Uno o dos competidores o referentes y qué hacen bien.

### 2. Proto-personas — `docs/02-proto-personas.md`

Define **1 proto-persona principal**: la persona para la que diseñas el sitio. Si tu emprendimiento tiene un segundo público importante, puedes agregar una **segunda proto-persona (opcional)**. Cada proto-persona debe incluir:

| Elemento | Qué describe |
|---|---|
| **Avatar** | Imagen, nombre, edad, ocupación y una frase que la represente |
| **Comportamientos** | Cómo compra, qué redes usa, desde qué dispositivo y en qué momento del día llegaría al sitio |
| **Necesidades** | Qué necesita resolver o encontrar en el sitio |
| **Motivaciones** | Qué la mueve a comprar o a leer (precio, calidad, valores, estatus, comodidad…) |
| **Frustraciones** | Qué la hace abandonar un sitio o una compra |

Recuerda: una proto-persona es una **hipótesis** basada en lo que sabes de tu público. No es un segmento demográfico ("mujeres de 25 a 34"): lo importante es su comportamiento y su objetivo.

### 3. Objetivos del usuario y funcionalidades — `docs/03-funcionalidades.md`

- Escribe los **objetivos de tu proto-persona** en el sitio (qué quiere lograr).
- Transfórmalos en **funcionalidades**: lo que el sitio debe permitir hacer. Describe el *qué*, no el *cómo*.
- Prioriza cada funcionalidad: **imprescindible / deseable / futuro**.

#### Funcionalidades base (obligatorias)

Todos los proyectos deben incluir estas funcionalidades. Tu trabajo es conectarlas con los objetivos de tu proto-persona y redactarlas para tu emprendimiento.

| Parte del sitio | Funcionalidad base |
|---|---|
| **Landing** | El usuario debe poder dejar sus datos para recibir información o una oferta (**captación de leads**). Si tu emprendimiento lo justifica, puedes reemplazarla por otra acción de conversión (pedir cotización, reservar, escribir por WhatsApp), explicando por qué. |
| **Blog** | El usuario debe poder navegar los artículos por **categorías**. |
| | El usuario debe poder **comentar** un artículo. |
| | El usuario debe poder **compartir** un artículo en sus redes. |
| **E-commerce** | El usuario debe poder **buscar** productos. |
| | El usuario debe poder **filtrar** productos (por categoría, precio u otro atributo relevante para tu rubro). |
| | El usuario debe poder **seleccionar** un producto: ver su detalle, elegir variante (talla, sabor, tamaño…) y agregarlo al carrito. |

#### Funcionalidades propias (mínimo 5)

Suma al menos **5 funcionalidades más**, pensadas para tu emprendimiento y tu proto-persona. Algunas ideas: suscribirse al newsletter, calcular el costo de despacho, guardar productos en favoritos, ver reseñas de otros clientes, ver productos relacionados, consultar por WhatsApp, ver la guía de tallas, ver ingredientes o información nutricional, encontrar el punto de venta más cercano.

Formato sugerido (incluye las base y las propias en la misma tabla):

| Proto-persona | Objetivo | Funcionalidad | Tipo | Prioridad |
|---|---|---|---|---|
| Camila | Saber qué productos sirven para sus plantas | El usuario debe poder filtrar productos por tipo de planta | Base | Imprescindible |
| Camila | Comprar sin sorpresas en el precio final | El usuario debe poder calcular el costo de despacho antes de pagar | Propia | Imprescindible |

### 4. Tecnologías del proyecto — `docs/04-tecnologias.md`

Declara con qué vas a construir y por qué, y las restricciones del proyecto:

- **Construcción (en la etapa de código):** HTML + CSS (sin frameworks ni gestor de contenido).
- **Versionado y publicación:** Git, GitHub y GitHub Pages.
- **Diseño:** Whimsical (moodboard, componentes y wireframes), Google Stitch (prototipo).
- **IA y editor:** las herramientas que usarás (Antigravity, Claude Code, etc.).
- **Restricciones:** plazo, qué quedará solo como prototipo (por ejemplo, el pago) y qué integraciones serían necesarias en una versión real (pasarela de pago, despacho, WhatsApp, Instagram).

### 5. Arquitectura de la información — `docs/05-arquitectura.md`

- **Mapa de sitio** en forma de árbol que incluya landing, blog y tienda.
- Incluye las **páginas obligatorias**: contacto, preguntas frecuentes, términos y condiciones, política de privacidad y página 404.

### 6. User flow — en `docs/05-arquitectura.md`

Dibuja el recorrido que hace tu **proto-persona principal** para cumplir sus objetivos. Mínimo **2 flujos**:

- **Flujo de compra:** desde que llega al sitio hasta el carrito.
- **Flujo de contenido:** desde un artículo del blog hasta un producto o un contacto.

Indica en cada paso la pantalla y la acción que realiza (y las decisiones, si las hay). Puedes hacerlo en Whimsical o como diagrama de texto:

```text
Instagram → Landing → [Ver productos] → Tienda → Filtra por "plantas de interior"
→ Ficha de producto → [Agregar al carrito] → Carrito
```

### 7. Categorías de productos y temas del blog — en `docs/05-arquitectura.md`

- **Categorías de productos** de la tienda (mínimo 3), con los productos que irían en cada una. Nómbralas como las buscaría tu proto-persona, no como las organizas internamente.
- **Categorías del blog** (mínimo 3) y **una idea de artículo por categoría**, explicando a qué necesidad o motivación de tu proto-persona responde cada una.

### Rúbrica Fase 1

| Criterio | Pts | Logro completo | Logro parcial (50 %) | Logro insuficiente (0) |
|---|---|---|---|---|
| **Brief del emprendimiento** | 5 | Presenta rubro, propuesta de valor, objetivo del sitio y referentes de forma clara y específica. | Falta uno de los elementos o la propuesta de valor es genérica. | Ausente o no permite entender el emprendimiento. |
| **Proto-persona** | 3 | Proto-persona principal completa (avatar, comportamientos, necesidades, motivaciones, frustraciones) y específica para el emprendimiento. | Falta información o es genérica. | Ausente o solo con datos demográficos. |
| **Objetivos y funcionalidades** | 8 | Incluye todas las funcionalidades base y al menos 5 propias, redactadas como capacidades, conectadas a un objetivo de la proto-persona y priorizadas. | Faltan funcionalidades base, hay menos de 5 propias, no se conectan con la proto-persona, no están priorizadas o describen soluciones visuales en vez de capacidades. | Lista mínima o sin relación con el usuario. |
| **Tecnologías del proyecto** | 4 | Declara tecnologías, su propósito y las restricciones del proyecto (qué es prototipo y qué no). | Lista tecnologías sin explicar su uso o sin restricciones. | Ausente. |
| **Arquitectura de la información** | 3 | Mapa de sitio completo y jerárquico con landing, blog, tienda y páginas obligatorias, y categorías fáciles de encontrar. | Falta una de las partes del sitio, las páginas obligatorias o la jerarquía es confusa. | Ausente o es solo una lista de páginas sin estructura. |
| **User flow** | 3 | 2 flujos (compra y contenido) de la proto-persona principal, con pantallas y acciones coherentes con el mapa de sitio. | Un solo flujo, o pasos que no calzan con el mapa de sitio. | Ausente. |
| **Categorías de productos y temas del blog** | 2 | Mínimo 3 categorías de productos y 3 del blog con ideas de artículos justificadas desde la proto-persona. | Categorías incompletas o sin justificación. | Ausente. |
| **Entrega en GitHub** | 2 | Link del fork enviado por AVA, documentos en Markdown legibles en `docs/`, commits descriptivos. | Documentos desordenados, formato Markdown roto o commits genéricos. | No se entrega en GitHub. |
| **Total** | **30** | | | |

---

## Fase 2 — Construcción de specs (40 puntos)

**Entrega: lunes 12 de octubre, 23:59 · Atraso: −20 pts**

### 1. Refinamiento de la Fase 1

El martes 6 y miércoles 7 de octubre revisamos en clases tu Fase 1. Aplica la retroalimentación en los mismos archivos (`01` a `05`) y haz commits que lo evidencien (por ejemplo: `docs: ajusta proto-persona principal según feedback`).

### 2. Moodboard — `docs/06-moodboard.md`

- Un tablero de inspiración en **Whimsical** con sitios, marcas, fotografías, texturas, colores y tipografías que representen el estilo de tu emprendimiento.
- Pega en el documento el **link del tablero** (con permiso de visualización para cualquiera que tenga el enlace).
- Explica en 3 a 5 líneas **qué sensación** buscas transmitir y por qué conecta con tu proto-persona principal.

### 3. Calco de componentes en Whimsical — `docs/07-componentes.md`

- Busca sitios de referencia y **calca en Whimsical** los componentes que te llamen la atención (navbar, hero, product card, card de artículo, filtros, carrito, footer, formularios…). Mínimo **6 componentes**, cubriendo landing, blog y tienda.
- En el documento, pega el link del tablero de Whimsical y una captura, y para cada componente anota: de qué sitio lo sacaste, qué contiene y **qué necesidad de tu proto-persona resuelve**.

### 4. Wireframes — en `docs/09-spec-diseno.md`

- Arma en **Whimsical** los wireframes de baja fidelidad de cada pantalla: landing, blog, artículo, tienda, ficha de producto y carrito.
- Usa los componentes que calcaste y sigue tu user flow: los botones y enlaces del wireframe deben llevar a la pantalla que indica el flujo.
- Pega el link (abierto para cualquiera con el enlace) en tu spec de diseño.

### 5. Paleta de color y tipografía — `docs/08-color-tipografia.md`

- **Paleta:** color principal, secundario, de acento, neutros (fondo, texto) y colores de estado (éxito, error). Cada uno con su código HEX y su uso.
- **Contraste:** verifica que el texto sobre fondo sea legible (mínimo AA).
- **Tipografía:** una para títulos y otra para textos (Google Fonts), con la escala de tamaños (h1, h2, h3, párrafo, botón).
- Justifica la paleta y la tipografía a partir del moodboard.

### 6. Spec de diseño — `DESIGN.md` + `docs/09-spec-diseno.md`

La spec de diseño se escribe para que en la Fase 3 la subas a **Google Stitch** y genere tu prototipo siguiendo tus reglas. Tiene dos partes:

- **`DESIGN.md`** (en la raíz): tu **mini design system** en el formato [DESIGN.md](https://github.com/google-labs-code/design.md), que Stitch importa directamente.
  - **Tokens:** colores, tipografía, radios, espaciados y componentes con sus estados (normal, hover, active, disabled).
  - **Secciones:** Overview, Colors, Typography, Layout (incluye el responsive para mobile, tablet y desktop), Elevation & Depth, Shapes, Components (con las reglas de cada uno, por ejemplo *"el precio siempre es visible; el nombre ocupa máximo 2 líneas"*) y Do's and Don'ts.
  - **Validación:** debe pasar el validador oficial (`npx @google/design.md lint DESIGN.md`) sin errores.
- **`docs/09-spec-diseno.md`**: el link a tus wireframes y **un prompt para Stitch por cada pantalla** (landing, tienda, ficha de producto, carrito, blog y artículo), con el objetivo de la pantalla, sus componentes en orden (con los nombres de tu `DESIGN.md`) y textos reales, más un prompt para la versión mobile.

### 7. Spec de desarrollo — `docs/10-spec-desarrollo.md`

Describe **cómo se construye**:

- El **prompt para tu asistente de IA** de la etapa de código, con los archivos que debe leer (`DESIGN.md`, tus specs y el código exportado de Stitch).
- Estructura de archivos y carpetas del proyecto.
- Páginas HTML que existirán y cómo se enlazan (según tu mapa de sitio).
- Estructura semántica de cada página (`header`, `nav`, `main`, `section`, `article`, `footer`).
- Organización del CSS: variables (`:root`) con los tokens de tu `DESIGN.md`, nombres de clases, breakpoints.
- Criterios de aceptación: una lista verificable de lo que debe cumplir el sitio para darse por terminado (por ejemplo: "Todas las imágenes tienen `alt`", "En mobile la tienda muestra 1 producto por fila").

En esta evaluación no se implementa: la spec de desarrollo deja listo el paso a código, que haremos en la siguiente etapa del curso con tu asistente de IA, tu `DESIGN.md` y tu prototipo. Mientras más clara, mejor resultado.

### Rúbrica Fase 2

| Criterio | Pts | Logro completo | Logro parcial (50 %) | Logro insuficiente (0) |
|---|---|---|---|---|
| **Refinamiento de la Fase 1** | 5 | Aplica la retroalimentación recibida y se evidencia en commits. | Aplica solo parte de la retroalimentación. | No hay cambios respecto a la Fase 1. |
| **Moodboard** | 4 | Moodboard en Whimsical variado y coherente, con una explicación que lo conecta con la proto-persona principal. | Moodboard escaso o sin explicación. | Ausente, sin link o el link no se puede abrir. |
| **Calco de componentes en Whimsical** | 4 | Mínimo 6 componentes calcados que cubren landing, blog y tienda, con referencia y necesidad que resuelven. | Menos de 6 componentes, o sin referencia o justificación. | Ausente o sin link a Whimsical. |
| **Wireframes** | 4 | Wireframes de las 6 pantallas, construidos con los componentes calcados y coherentes con el user flow. | Faltan pantallas o no siguen el user flow. | Ausentes o sin link. |
| **Paleta y tipografía** | 5 | Paleta completa con HEX y usos, contraste verificado, tipografías con escala y justificación desde el moodboard. | Paleta o tipografía incompleta, sin verificar contraste o sin justificar. | Ausente. |
| **Spec de diseño** | 9 | `DESIGN.md` válido (0 errores en el validador) con tokens, componentes con estados, reglas concretas y responsive; `09-spec-diseno.md` con un prompt por pantalla que usa los componentes del `DESIGN.md`. | `DESIGN.md` con errores, sin estados o con reglas vagas ("que se vea moderno"), o faltan prompts de pantallas. | Ausente, o es un solo prompt sin design system. |
| **Spec de desarrollo** | 9 | Prompt para el asistente, estructura de archivos, páginas y enlaces, semántica, CSS con variables tomadas del `DESIGN.md` y criterios de aceptación verificables. | Faltan criterios de aceptación o partes de la estructura. | Ausente. |
| **Total** | **40** | | | |

---

## Fase 3 — Prototipo referencial en Stitch (30 puntos)

**Entrega: miércoles 14 de octubre, 23:59 · Atraso: −15 pts**

El prototipo es **referencial**: muestra cómo se verá y cómo se recorrerá tu sitio, pero todavía no es código. Sirve para comprobar que tus specs funcionan y como referencia para la etapa de código.

### 1. Prototipo en desktop

Importa tu `DESIGN.md` en un proyecto de **Google Stitch** y genera las 6 pantallas con los prompts de `docs/09-spec-diseno.md`: landing, tienda, ficha de producto, carrito, blog y artículo. Todas en el mismo proyecto, para que compartan el design system.

### 2. Versión mobile

Genera la versión mobile de las 6 pantallas con el prompt mobile de tu spec, siguiendo la sección `## Layout` de tu `DESIGN.md`.

### 3. QA: ¿el prototipo cumple la spec? — `docs/11-qa.md`

Compara cada pantalla con su prompt y con tu `DESIGN.md`, y haz la revisión **Spec → Prototipo → Gap**: qué debía aparecer, qué generó Stitch, qué corregiste (pidiéndole cambios a Stitch o mejorando tu spec).

| Pantalla | Qué dice la spec | Qué generó Stitch | Corrección |
|---|---|---|---|
| Tienda | Fila de 3 kits antes de la grilla | No generó los kits | Agregué "card-kit" al prompt y volví a generar ✅ |

### 4. Coherencia del prototipo — `docs/11-qa.md`

Recorre el prototipo siguiendo tus **user flows** de la Fase 1: cada paso tiene que tener su pantalla y su botón o enlace. Si Stitch te permite conectar las pantallas en modo prototipo, enlázalas; si no, muestra el recorrido con la secuencia de capturas. Luego explica en pocas líneas cómo el prototipo responde al **brief** y a las necesidades y frustraciones de tu **proto-persona principal**.

### 5. Entrega en GitHub

- Link al proyecto de Stitch (abierto para cualquiera con el enlace) en `docs/11-qa.md` y en el `README.md`.
- Captura de cada pantalla, desktop y mobile, en `docs/img/`, enlazadas en `docs/11-qa.md`.
- Commits descriptivos del avance.

### Rúbrica Fase 3

| Criterio | Pts | Logro completo | Logro parcial (50 %) | Logro insuficiente (0) |
|---|---|---|---|---|
| **Prototipo en desktop** | 10 | Las 6 pantallas generadas en un mismo proyecto con el `DESIGN.md` importado y los prompts de la spec; se reconocen sus colores, tipografías, componentes y textos. | Faltan pantallas o el resultado se aleja de la spec (colores, componentes o textos distintos). | Sin prototipo. |
| **Versión mobile** | 4 | Las 6 pantallas en mobile, siguiendo la sección Layout del `DESIGN.md`. | Faltan pantallas o no siguen lo definido en Layout. | Sin versión mobile. |
| **QA spec vs. prototipo** | 7 | Compara cada pantalla con su prompt y el `DESIGN.md`, y documenta las diferencias, las correcciones pedidas a Stitch y las mejoras hechas a las specs. | Revisión parcial o sin correcciones documentadas. | Sin QA. |
| **Coherencia con brief, proto-persona y user flow** | 5 | Cada paso de los user flows tiene su pantalla y su botón en el prototipo, y la reflexión conecta el resultado con el brief y la proto-persona principal. | A algún flujo le faltan pantallas o botones, o la reflexión es superficial. | Sin reflexión o el prototipo no responde a lo definido en la Fase 1. |
| **Entrega en GitHub** | 4 | Link al proyecto de Stitch que se puede abrir, capturas de todas las pantallas en `docs/img/` enlazadas en `11-qa.md` y commits descriptivos. | Faltan capturas, el link no se puede abrir o los commits son genéricos. | Sin link ni capturas. |
| **Total** | **30** | | | |

---

## Checklist antes de entregar

**Fase 1 — lunes 5 de octubre, 23:59**

- [ ] Fork del repositorio `mi-emprendimiento` en tu cuenta de GitHub
- [ ] `01-brief.md`, `02-proto-personas.md`, `03-funcionalidades.md`, `04-tecnologias.md`, `05-arquitectura.md`
- [ ] Funcionalidades base + mínimo 5 propias en `03-funcionalidades.md`
- [ ] Mapa de sitio y 2 user flows en `05-arquitectura.md`
- [ ] Sección **Uso de IA** en el `README.md`
- [ ] Commit subido y link de tu fork enviado por AVA

**Fase 2 — lunes 12 de octubre, 23:59**

- [ ] Fase 1 corregida según la retroalimentación
- [ ] `06-moodboard.md` a `10-spec-desarrollo.md` completos
- [ ] `DESIGN.md` en la raíz, validado sin errores
- [ ] Links de Whimsical (moodboard, componentes y wireframes) abiertos para cualquiera con el enlace
- [ ] Commit subido

**Fase 3 — miércoles 14 de octubre, 23:59**

- [ ] `DESIGN.md` importado en Stitch y las 6 pantallas generadas en desktop y mobile
- [ ] Link del proyecto de Stitch (abierto) en `11-qa.md` y en el `README.md`
- [ ] Capturas de todas las pantallas en `docs/img/`, enlazadas en `11-qa.md`
- [ ] Tabla de QA completa y reflexión de coherencia
- [ ] Commit subido
