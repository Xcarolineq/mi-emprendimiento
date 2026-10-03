# Arquitectura de la información

**Archivo:** `docs/05-arquitectura.md` · **Fase 1** · **3 pts**

## Qué es y para qué sirve

La **arquitectura de la información** es la forma en que organizas el contenido del sitio para que las personas encuentren lo que buscan sin pensarlo dos veces. Se representa con un **mapa de sitio** (sitemap): un diagrama en forma de árbol con todas las páginas y cómo se relacionan.

El mapa de sitio es el plano de tu proyecto. **Cada caja del árbol se convierte en una pantalla** de tu prototipo en la Fase 3 (y después, en una página de tu sitio); si una página no está en el mapa, no debería aparecer de sorpresa después.

## Qué entregas

- Un **mapa de sitio** que incluya landing, blog y tienda.
- Las **páginas obligatorias**: contacto, preguntas frecuentes, términos y condiciones, política de privacidad y página 404.

En este mismo archivo vas a agregar también tu [user flow](06-user-flow.md) y tus [categorías](07-categorias.md).

## Paso a paso

### 1. Lista todas las páginas que necesitas

Revisa tu tabla de funcionalidades: cada funcionalidad necesita ocurrir en alguna página. Por ejemplo, "comentar un artículo" necesita una página de artículo; "calcular el despacho" necesita el carrito.

### 2. Agrúpalas en secciones

Tu sitio tiene tres grandes secciones: **landing (inicio)**, **blog** y **tienda**. Ubica cada página en la sección que le corresponde.

### 3. Agrega las páginas obligatorias

Son las que casi siempre se olvidan, pero un sitio profesional las necesita:

| Página | Para qué sirve |
|---|---|
| Contacto | Cómo comunicarse con la marca |
| Preguntas frecuentes | Responde las dudas que más se repiten (despacho, cambios, pagos) |
| Términos y condiciones | Reglas de uso y de compra |
| Política de privacidad | Qué datos se recogen (por ejemplo, los correos de los leads) y para qué |
| Página 404 | Qué ve alguien que llega a una página que no existe, con un camino de vuelta |

### 4. Dibuja el árbol

Puedes hacerlo como diagrama de texto dentro del Markdown, o en Whimsical y pegar la imagen en `docs/img/`.

### 5. Nombra las secciones como las buscaría tu proto-persona

"Tienda" o "Productos" se entiende mejor que "Catálogo 2026". "Cuidados básicos" se entiende mejor que "Contenidos".

## Ejemplo

```text
Inicio (landing)
├── Tienda
│   ├── Categoría: Sustratos
│   ├── Categoría: Fertilizantes
│   ├── Categoría: Plagas y enfermedades
│   ├── Categoría: Herramientas
│   ├── Categoría: Insumos
│   ├── Ficha de producto
│   └── Carrito
├── Blog
│   ├── Categoría: Cuidados básicos
│   ├── Categoría: Plagas y enfermedades
│   ├── Categoría: Decoración con plantas
│   └── Artículo
├── Nosotros
├── Contacto
├── Preguntas frecuentes
├── Términos y condiciones
├── Política de privacidad
└── 404
```

Fíjate que las categorías de la tienda y del blog **no son páginas distintas**: en el prototipo serán la misma pantalla de tienda o de blog, filtrada.

El mismo mapa de sitio, dibujado como diagrama:

![Mapa de sitio de Brote: inicio, tienda, blog y páginas obligatorias](../img/brote-mapa-de-sitio.png)

## Cómo usar la IA

```text
Estas son las funcionalidades de mi sitio: [pega tu tabla].
El sitio tiene landing, blog y tienda de [emprendimiento].
Propón un mapa de sitio en forma de árbol que incluya las páginas
obligatorias (contacto, FAQ, términos, privacidad, 404) y explícame
en qué página ocurre cada funcionalidad.
```

## Errores comunes

- **Una lista de páginas sin jerarquía**: el mapa tiene que mostrar qué está dentro de qué.
- **Olvidar las páginas obligatorias**, sobre todo la 404 y la política de privacidad (si captas correos, la necesitas).
- **Funcionalidades sin página**: si "comentar" está en tus funcionalidades, tiene que haber un artículo donde hacerlo.

## Checklist

- [ ] Mapa de sitio en forma de árbol
- [ ] Incluye landing, blog y tienda
- [ ] Incluye contacto, preguntas frecuentes, términos, privacidad y 404
- [ ] Cada funcionalidad tiene una página donde ocurre
- [ ] Nombres que entendería tu proto-persona
