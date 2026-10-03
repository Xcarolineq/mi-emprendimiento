# User flow

**Archivo:** en `docs/05-arquitectura.md` · **Fase 1** · **3 pts**

## Qué es y para qué sirve

Un **user flow** (flujo de usuario) es el recorrido que hace una persona dentro del sitio para lograr un objetivo: desde que llega hasta que termina lo que vino a hacer.

El mapa de sitio muestra **qué páginas existen**; el user flow muestra **cómo se mueve la persona entre ellas**. Te ayuda a descubrir qué botones y enlaces necesita cada página, y en la Fase 3 te va a servir para comprobar que el sitio realmente funciona.

## Qué entregas

Mínimo **2 flujos** de tu proto-persona principal:

1. **Flujo de compra:** desde que llega al sitio hasta el carrito.
2. **Flujo de contenido:** desde un artículo del blog hasta un producto o un contacto.

En cada paso indica la **pantalla** y la **acción** que realiza la persona.

## Paso a paso

### 1. Define el punto de entrada

¿Desde dónde llega tu proto-persona? Revisa sus comportamientos: ¿Instagram? ¿Google? ¿Un link por WhatsApp? No siempre se llega por el inicio.

### 2. Define la meta

¿Dónde termina el flujo? En el de compra, en el carrito. En el de contenido, en una ficha de producto, en el formulario de leads o en WhatsApp.

### 3. Escribe los pasos intermedios

Para cada paso: en qué pantalla está y qué hace para avanzar (qué botón aprieta, qué enlace sigue, qué elige).

### 4. Marca las decisiones

Si en algún punto la persona puede tomar caminos distintos, muéstralo. Por ejemplo: en la ficha de producto puede agregar al carrito o consultar por WhatsApp.

### 5. Revisa que calce con tu mapa de sitio

Todas las pantallas del flujo tienen que existir en tu mapa de sitio.

## Notación

Puedes hacerlo en Whimsical (con cajas y flechas) o como texto. Una notación simple:

- `Pantalla` para cada página.
- `[Acción]` entre corchetes para lo que hace la persona.
- `→` para avanzar.
- `◇` para una decisión.

## Ejemplo

**Flujo 1: compra**

```text
Instagram (reel de un balcón con plantas)
→ Landing
→ [Clic en "Ver productos"]
→ Tienda
→ [Filtra por "Sustratos" y "Plantas de interior"]
→ Ficha de producto: Sustrato para plantas de interior
→ [Revisa para qué plantas sirve y elige el formato de 10 L]
◇ ¿Tiene dudas?
   ├── Sí → [Clic en "Consultar por WhatsApp"] → WhatsApp
   └── No → [Clic en "Agregar al carrito"]
→ Carrito
→ [Calcula despacho con su comuna]
→ Fin: carrito listo para pagar
```

**Flujo 2: contenido**

```text
Google ("hojas amarillas monstera")
→ Artículo: "Hojas amarillas: 5 causas y cómo solucionarlas"
→ [Lee y hace clic en el producto recomendado]
→ Ficha de producto: Fertilizante líquido para plantas de interior
◇ ¿Quiere comprar ahora?
   ├── Sí → [Agregar al carrito] → Carrito
   └── No → [Vuelve al artículo y deja su correo para recibir la guía de cuidados]
          → Fin: lead captado
```

Los mismos flujos, dibujados como diagrama:

![User flows de Camila: flujo de compra y flujo de contenido](../img/brote-user-flows.png)

## Cómo usar la IA

```text
Esta es mi proto-persona: [pega]. Este es mi mapa de sitio: [pega].
Propón un flujo de compra (desde que llega hasta el carrito) y un flujo
de contenido (desde un artículo del blog hasta un producto o contacto).
Indica en cada paso la pantalla y la acción, y marca las decisiones.
Usa solo pantallas que existan en mi mapa de sitio.
```

## Errores comunes

- **Un solo flujo**, o dos flujos iguales.
- **Pantallas que no están en el mapa de sitio.**
- **Solo pantallas, sin acciones**: "Inicio → Tienda → Producto" no dice qué hace la persona para avanzar.
- **Un flujo que no parte de un canal real** de tu proto-persona.

## Checklist

- [ ] Flujo de compra
- [ ] Flujo de contenido
- [ ] Cada paso con pantalla y acción
- [ ] Al menos una decisión marcada
- [ ] Todas las pantallas están en el mapa de sitio
