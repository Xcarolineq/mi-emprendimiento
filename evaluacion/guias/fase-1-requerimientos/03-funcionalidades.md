# Objetivos del usuario y funcionalidades

**Archivo:** `docs/03-funcionalidades.md` · **Fase 1** · **8 pts**

## Qué es y para qué sirve

Una **funcionalidad** es algo que el sitio debe **permitir hacer** al usuario: buscar un producto, comentar un artículo, calcular el despacho. No es una pantalla ni un botón: es la **capacidad** que ese botón o esa pantalla tienen que resolver.

Las funcionalidades conectan a tu proto-persona con el sitio:

```text
Proto-persona → Objetivo → Funcionalidad → (más adelante) Componente
Camila         → Saber qué productos sirven para sus plantas
               → Filtrar productos por tipo de planta
               → Filtro de la tienda
```

Si una funcionalidad no responde a ningún objetivo de tu proto-persona, probablemente no hace falta.

## Qué entregas

Una tabla con:

- Las **7 funcionalidades base** (obligatorias para todos).
- Al menos **5 funcionalidades propias** de tu emprendimiento.
- Cada una conectada a un **objetivo** de tu proto-persona y con su **prioridad**.

## Las funcionalidades base

| Parte del sitio | Funcionalidad base |
|---|---|
| **Landing** | El usuario debe poder dejar sus datos para recibir información o una oferta (**captación de leads**). Puedes reemplazarla por otra acción de conversión (cotizar, reservar, escribir por WhatsApp) si tu negocio lo justifica. |
| **Blog** | El usuario debe poder navegar los artículos por **categorías**. |
| | El usuario debe poder **comentar** un artículo. |
| | El usuario debe poder **compartir** un artículo en sus redes. |
| **E-commerce** | El usuario debe poder **buscar** productos. |
| | El usuario debe poder **filtrar** productos. |
| | El usuario debe poder **seleccionar** un producto: ver su detalle, elegir variante y agregarlo al carrito. |

Tu trabajo con estas es **adaptarlas a tu emprendimiento**: ¿filtrar por qué? ¿Qué datos pides en la captación de leads y a cambio de qué? ¿Qué variantes tiene tu producto?

## Paso a paso

### 1. Escribe los objetivos de tu proto-persona

¿Qué quiere lograr cuando entra a tu sitio? Revisa sus **necesidades y frustraciones**: casi siempre ahí están los objetivos.

### 2. Transforma cada objetivo en funcionalidad

Redáctala siempre como **"El usuario debe poder…"**. Esto te obliga a describir la capacidad y no la solución visual.

| ❌ Mal: describe una solución visual | ✅ Bien: describe una capacidad |
|---|---|
| Un botón verde grande arriba | El usuario debe poder iniciar la compra desde cualquier página |
| Un pop-up con descuento | El usuario debe poder dejar su correo a cambio de un descuento |
| Íconos de hojitas | El usuario debe poder ver para qué plantas sirve cada producto |

El "cómo se ve" lo decides en la Fase 2.

### 3. Adapta las 7 funcionalidades base

### 4. Agrega al menos 5 funcionalidades propias

Piensa en lo que hace distinto a tu rubro. Algunas ideas: suscribirse al newsletter, calcular el costo de despacho, guardar favoritos, ver reseñas, ver productos relacionados, consultar por WhatsApp, guía de tallas, ingredientes o información nutricional, guías de uso o de cuidado, punto de venta más cercano.

### 5. Prioriza

| Prioridad | Significa |
|---|---|
| **Imprescindible** | El sitio no cumple su objetivo sin esto |
| **Deseable** | Mejora la experiencia, pero el sitio funciona sin ella |
| **Futuro** | Buena idea, pero fuera del alcance de esta versión |

Las funcionalidades base son, en general, imprescindibles.

## Ejemplo

| Proto-persona | Objetivo | Funcionalidad | Tipo | Prioridad |
|---|---|---|---|---|
| Camila | Aprender a cuidar sus plantas | El usuario debe poder dejar su correo a cambio de una guía gratuita de cuidados de plantas de interior y un 10 % de descuento | Base (landing) | Imprescindible |
| Camila | Encontrar consejos sobre lo que le preocupa | El usuario debe poder navegar los artículos por categoría (cuidados básicos, plagas y enfermedades, decoración con plantas) | Base (blog) | Imprescindible |
| Camila | Resolver una duda sobre su planta | El usuario debe poder comentar un artículo | Base (blog) | Deseable |
| Camila | Recomendar un consejo a una amiga | El usuario debe poder compartir un artículo por WhatsApp e Instagram | Base (blog) | Deseable |
| Camila | Encontrar rápido lo que necesita su planta | El usuario debe poder buscar productos por nombre o por planta ("monstera", "suculenta") | Base (tienda) | Imprescindible |
| Camila | Saber qué productos sirven para sus plantas | El usuario debe poder filtrar productos por categoría y por tipo de planta (interior, exterior, suculentas, huerto) | Base (tienda) | Imprescindible |
| Camila | Comprar el formato que necesita | El usuario debe poder ver el detalle de un producto, elegir su formato (5 L, 10 L, 20 L) y agregarlo al carrito | Base (tienda) | Imprescindible |
| Camila | Entender para qué sirve un producto | El usuario debe poder ver para qué plantas sirve cada producto y cómo usarlo, en lenguaje simple | Propia | Imprescindible |
| Camila | No llevarse sorpresas en el precio | El usuario debe poder calcular el costo de despacho antes de pagar | Propia | Imprescindible |
| Camila | Saber por qué su planta se ve mal | El usuario debe poder elegir un síntoma (hojas amarillas, manchas, plagas) y ver sus causas y los productos recomendados | Propia | Deseable |
| Camila | Tener todo lo necesario para una planta nueva | El usuario debe poder comprar un kit por tipo de planta (sustrato, fertilizante y macetero) | Propia | Deseable |
| Camila | Resolver una duda antes de comprar | El usuario debe poder escribir por WhatsApp desde la ficha del producto | Propia | Deseable |
| Camila | Acordarse de cuidar sus plantas | El usuario debe poder recibir recordatorios de riego y fertilización por correo | Propia | Futuro |

## Cómo usar la IA

```text
Esta es mi proto-persona: [pega tu proto-persona].
Mi sitio tiene landing, blog y tienda online de [emprendimiento].
Propón 8 funcionalidades adicionales a buscar, filtrar, seleccionar,
comentar, compartir y captar leads. Redáctalas como "El usuario debe
poder...", conéctalas con un objetivo de la proto-persona y no
describas soluciones visuales.
```

Elige las que tengan sentido para tu negocio: no tienes que usar todas.

## Errores comunes

- **Describir soluciones visuales** en vez de capacidades ("un carrusel en el inicio").
- **Funcionalidades sin objetivo**: si no sabes a qué necesidad responde, pregúntate si hace falta.
- **Copiar las base sin adaptarlas**: "el usuario debe poder filtrar" está incompleto. ¿Filtrar por qué?
- **Todo imprescindible**: si todo es prioridad, no priorizaste.

## Checklist

- [ ] Objetivos de la proto-persona
- [ ] Las 7 funcionalidades base, adaptadas a tu emprendimiento
- [ ] Mínimo 5 funcionalidades propias
- [ ] Todas redactadas como "El usuario debe poder…"
- [ ] Todas conectadas a un objetivo y con prioridad
