# Tecnologías del proyecto

**Archivo:** `docs/04-tecnologias.md` · **Fase 1** · **4 pts**

## Qué es y para qué sirve

En todo proyecto web hay que decidir **con qué se va a construir** y **cuáles son sus límites**. Declararlo desde el principio evita malentendidos: si el cliente espera pagos con tarjeta y el proyecto no los incluye, es mejor que lo sepa antes y no el día de la entrega.

Este documento tiene dos partes: el **stack** (las herramientas) y las **restricciones** (lo que el proyecto hace y no hace).

## Qué entregas

1. Las tecnologías y herramientas del proyecto, **con su propósito**.
2. Las **restricciones**: plazo, qué queda como prototipo y qué integraciones harían falta en una versión real.

## Paso a paso

### 1. Declara el stack y para qué usas cada herramienta

No basta con listar nombres. Explica **para qué** usas cada una en tu proyecto.

| Área | Herramienta |
|---|---|
| Construcción | HTML + CSS (sin frameworks ni gestor de contenido) |
| Versionado | Git y GitHub |
| Publicación | GitHub Pages |
| Diseño | Whimsical (moodboard, componentes y wireframes), Google Stitch (prototipo) |
| IA y editor | Las que uses: Antigravity, Claude Code, Claude, ChatGPT, etc. |

### 2. Define qué es real y qué es prototipo

Tu sitio se construye solo con HTML y CSS, así que algunas funcionalidades se van a **ver** pero no van a **funcionar**. Revisa tu tabla de funcionalidades y decide, para cada una importante, cómo quedará:

- **Funcional:** funciona de verdad (navegar entre páginas, enlaces a WhatsApp o redes, ver el detalle de un producto).
- **Prototipo visual:** se ve, pero no procesa datos (formularios, buscador, filtros, carrito, comentarios).

### 3. Nombra las integraciones de una versión real

Si el sitio pasara a producción de verdad, ¿qué necesitaría? Por ejemplo: pasarela de pago (Webpay, Mercado Pago), servicio de despacho, herramienta de email marketing para los leads, sistema de comentarios.

### 4. Anota el plazo y otras restricciones

Plazo del proyecto, si hay manual de marca o logo previo, si es solo para escritorio o también mobile, etc.

## Ejemplo

```markdown
# Tecnologías — Brote

## Stack

| Área | Herramienta | Para qué la uso |
|---|---|---|
| Construcción | HTML + CSS | Maquetar las páginas del sitio sin depender de un gestor de contenido |
| Versionado | Git y GitHub | Guardar el avance con commits y tener el proyecto en la nube |
| Publicación | GitHub Pages | Publicar el sitio gratis con una URL pública |
| Diseño | Whimsical | Armar moodboard, calcar componentes y hacer wireframes |
| Diseño | Google Stitch | Generar el prototipo en alta fidelidad a partir de mis specs |
| IA | Claude | Ordenar ideas y revisar mis documentos |
| Editor | Antigravity | Escribir el código con ayuda de IA |

## Qué es funcional y qué es prototipo

| Funcionalidad | Estado en esta versión |
|---|---|
| Navegación entre landing, blog y tienda | Funcional |
| Ver detalle de producto y guía de uso | Funcional |
| Consultar por WhatsApp | Funcional (enlace a wa.me) |
| Compartir artículo | Funcional (enlaces para compartir) |
| Formulario de captación de correos | Prototipo visual |
| Buscador y filtros de la tienda | Prototipo visual |
| Carrito y cálculo de despacho | Prototipo visual |
| Comentarios del blog | Prototipo visual |

## Integraciones para una versión real

- Pasarela de pago: Webpay o Mercado Pago.
- Despacho: integración con una empresa de courier para calcular costos.
- Email marketing: herramienta para guardar los correos y enviar el descuento.

## Restricciones

- **Plazo:** 29 de septiembre al 14 de octubre.
- **Marca:** no hay manual de marca; la identidad visual se define en la Fase 2.
- **Dispositivos:** el sitio debe funcionar en celular y escritorio, priorizando celular
  porque la proto-persona compra desde el teléfono.
```

## Cómo usar la IA

```text
Mi sitio es [emprendimiento] y se construye solo con HTML y CSS,
publicado en GitHub Pages. Estas son mis funcionalidades: [pega tu tabla].
Dime cuáles pueden funcionar de verdad solo con HTML y CSS, cuáles
quedarían como prototipo visual, y qué integraciones necesitaría
cada una en una versión real.
```

## Errores comunes

- **Solo listar nombres de herramientas** sin decir para qué se usan.
- **Prometer funcionalidades que HTML y CSS no pueden resolver** (pagos reales, guardar comentarios) sin aclarar que son prototipo.
- **Olvidar las restricciones**: son la mitad del documento.

## Checklist

- [ ] Stack con el propósito de cada herramienta
- [ ] Qué funcionalidades son funcionales y cuáles prototipo visual
- [ ] Integraciones necesarias para una versión real
- [ ] Plazo y otras restricciones
