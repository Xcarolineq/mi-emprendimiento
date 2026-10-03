# QA y coherencia

**Archivo:** `docs/11-qa.md` · **Fase 3** · **7 pts QA + 5 pts coherencia + 4 pts entrega en GitHub**

## Qué es y para qué sirve

**QA** (quality assurance, aseguramiento de calidad) es revisar si lo que se generó **cumple lo que dijiste que ibas a construir**. Que Stitch haya generado pantallas no significa que el prototipo esté terminado.

```text
SPEC        Lo que debería aparecer (tu prompt y tu DESIGN.md)
  ↓
PROTOTIPO   Lo que generó Stitch
  ↓
GAP         La diferencia entre ambos, y qué hiciste con ella
```

La **coherencia** es la pregunta más importante de toda la evaluación: ya no es *"¿quedó bonito?"*, sino **"¿cumple lo que debía resolver?"**.

## Qué entregas

En `docs/11-qa.md`:

1. El **link del proyecto de Stitch** y las **capturas** de las 6 pantallas en desktop y en mobile.
2. La **tabla de QA**: por cada pantalla, qué decía la spec, qué generó Stitch y qué corregiste.
3. Las **mejoras a tus specs**: qué cambiaste en tu `DESIGN.md` o en tus prompts después de ver el resultado.
4. El **recorrido de tus user flows** en el prototipo.
5. La **reflexión de coherencia** con tu brief y tu proto-persona.

## Paso a paso

### 1. Revisa cada pantalla contra su prompt

Pon lado a lado el prompt de la pantalla y lo que generó Stitch, y revisa:

- **Componentes:** ¿están todos, en el orden del prompt? ¿Stitch agregó alguno que no pediste?
- **Textos y datos:** ¿están los títulos, nombres de productos y precios que escribiste?
- **Estructura:** ¿se parece a tu wireframe?

### 2. Revisa contra tu DESIGN.md

- **Colores y tipografías:** ¿son los de tus tokens?
- **Reglas de los componentes:** por ejemplo, ¿el precio es visible en todas las product cards?, ¿hay un solo botón principal por sección?
- **Mobile:** ¿sigue lo que definiste en `## Layout`?

### 3. Documenta cada diferencia

Una fila por diferencia. Sé honesta u honesto: una diferencia que encontraste y corregiste vale más que un "todo perfecto" que no revisaste.

| Resultado | Significa |
|---|---|
| ✅ | Se cumplió a la primera |
| ❌ → ✅ | No se cumplía y lo corregiste |
| ❌ | No se cumple; explica por qué (por ejemplo, Stitch no logró generarlo) |

### 4. Anota las mejoras a tus specs

Si una corrección salió de mejorar tu `DESIGN.md` o tus prompts, anótala. Ese aprendizaje es el centro del spec-driven design: **si el resultado falla, se corrige la spec, no solo el resultado**. Haz un commit por cada mejora de spec.

### 5. Recorre tus user flows

Sigue cada flujo de la Fase 1 en el prototipo: cada paso tiene que tener su **pantalla** y su **botón o enlace** para avanzar. Si conectaste las pantallas en Stitch, recórrelo haciendo clic; si no, muéstralo con la secuencia de capturas.

### 6. Escribe la reflexión de coherencia

En 5 a 10 líneas, responde:

- ¿Cómo responde el prototipo al **objetivo** que definiste en el brief?
- ¿Qué **necesidades y frustraciones** de tu proto-persona resuelve, y con qué pantallas o componentes?
- ¿Qué **cambió** entre la Fase 1 y el prototipo, y por qué?

## Ejemplo

```markdown
# QA — Brote

## Prototipo en Stitch

**Proyecto:** https://stitch.withgoogle.com/... (link de ejemplo)

| Pantalla | Desktop | Mobile |
|---|---|---|
| Landing | ![Landing desktop](img/prototipo-landing-desktop.png) | ![Landing mobile](img/prototipo-landing-mobile.png) |
| Tienda | ![Tienda desktop](img/prototipo-tienda-desktop.png) | ![Tienda mobile](img/prototipo-tienda-mobile.png) |

## Revisión: spec vs. prototipo

| Pantalla | Qué dice la spec | Qué generó Stitch | Resultado | Corrección |
|---|---|---|---|---|
| Landing | Hero con "Ver productos" y "Leer guías" | Solo un botón | ❌ → ✅ | Le pedí agregar button-secondary "Leer guías" |
| Tienda | Fila de 3 card-kit antes de la grilla | No generó los kits | ❌ → ✅ | Agregué card-kit al prompt y volví a generar |
| Tienda | Precio visible en todas las cards | ✅ | ✅ | — |
| Ficha | Etiqueta "Ahorra" en terracota oscuro | Usó el terracota claro | ❌ → ✅ | Le pedí usar tag-offer del design system |
| Blog | Bloque "¿Qué le pasa a tu planta?" | ✅ | ✅ | — |
| Carrito (mobile) | Resumen debajo de la lista | Resumen al lado, cortado | ❌ | Stitch no lo logró; queda anotado para la etapa de código |

## Mejoras a mis specs

- En `09-spec-diseno.md`, el prompt de la tienda ahora nombra `card-kit` en vez de "tarjetas de kit": Stitch no lo relacionaba con el design system.
- En `DESIGN.md`, agregué a Do's and Don'ts: "Don't usar el terracota claro como fondo de texto".

## User flows

| Flujo | Recorrido en el prototipo | ¿Se completa? |
|---|---|---|
| Compra | Landing → [Ver productos] → Tienda → [Ver producto] → Ficha → [Agregar al carrito] → Carrito | ✅ |
| Contenido | Blog → [Hojas amarillas] → Artículo → [Ver producto] → Ficha | ✅ |

## Coherencia

El objetivo del brief era vender online a clientes de todo Chile, y el prototipo
permite llegar al carrito en 4 clics desde la landing. La frustración principal
de Camila era que se le mueren las plantas sin saber por qué: el blog tiene el
diagnóstico por síntoma y cada ficha explica para qué plantas sirve el producto y
cómo usarlo. Para su miedo a un despacho caro, el carrito tiene calculadora por comuna.

Lo que cambió: en la Fase 1 pensamos en una sección de testimonios en la landing,
pero en los wireframes vimos que alargaba mucho la página en el celular; la
reemplazamos por "Plantas fáciles para empezar", que responde mejor a su
motivación de tener una casa bonita con plantas.
```

## Errores comunes

- **Todo ✅ sin haber revisado**: un QA sin diferencias es sospechoso.
- **Corregir solo en Stitch** y no mejorar la spec cuando el problema venía de ella.
- **Revisar solo desktop** y olvidar mobile.
- **Una reflexión genérica** ("el prototipo cumple con todo lo solicitado") sin mencionar a la proto-persona ni el brief.
- **Capturas que no cargan**: nombres con espacios o tildes, o rutas mal escritas.

## Checklist

- [ ] Link de Stitch y capturas de las 6 pantallas en desktop y mobile
- [ ] Tabla de QA con cada pantalla revisada contra su prompt y el `DESIGN.md`
- [ ] Correcciones documentadas
- [ ] Mejoras a las specs anotadas (y con su commit)
- [ ] Los dos user flows recorridos en el prototipo
- [ ] Reflexión de coherencia con el brief y la proto-persona
