# Spec de diseño — Nora — Fotografía Felina

> Guía: [Spec de diseño](../evaluacion/guias/fase-2-specs/06-spec-de-diseno.md)

La spec de diseño tiene dos partes:
1. **[`DESIGN.md`](../DESIGN.md)** (en la raíz del repositorio): Design system con tokens y reglas que Google Stitch importa directamente.
2. **Este documento:** Las 6 pantallas del sitio escritas como prompts detallados y listos para generar en Google Stitch (versiones Desktop y Mobile), con textos y datos reales del negocio.

**Wireframes de baja fidelidad en Whimsical:** [https://whimsical.com/nora-fotografia-wireframes-M1203K](https://whimsical.com)

![Wireframes de las 6 Pantallas](img/nora-photobook.jpg)

---

## Prompts para Google Stitch

### 1. Landing Page (Inicio)

```text
Pantalla: Landing Page de "Nora — Fotografía Felina", versión desktop (1200px de ancho). Usa el design system del proyecto (colores terracota #C86D51, crema #FAF7F2 y marrón ébano #3E2723, tipografía Playfair Display y Plus Jakarta Sans).
Objetivo de Valentina: Conocer el enfoque de fotografía respetuosa "Fear-Free" del estudio, ver la calidad artística del portafolio de la gata Nora y solicitar una cotización o agendar una sesión.
Componentes, de arriba hacia abajo:
1. Navbar: Fondo translúcido glassmorphism (#FAF7F2 con blur). Logotipo "Nora — Fotografía Felina", enlaces a "Inicio", "Tienda de Arte", "Blog", "Sobre Nora", botón de Carrito con badge numérico y botón button-primary "Agendar Sesión".
2. Hero Section: Título h1 en Playfair Display "El arte de capturar el alma de tu felino", subtítulo "Sesiones fotográficas íntimas y sin estrés para gatos en estudio y a domicilio, junto a impresiones Fine Art de colección". Botones dobles: button-primary "Ver Colección de Arte" y button-secondary "Conocer Sesiones Fear-Free". Fotografía destacada de la gata Nora con iluminación de estudio cálida. Badge tag-badge "🐾 100% Fear-Free Certified".
3. Manifiesto / Propuesta de Valor: Tres tarjetas con íconos y fondo surface: "Paciencia & Bienestar" (sin prisas ni luces agresivas), "Impresión de Museo" (papel algodón de 310g con tintas de archivo) y "Experiencia Llave en Mano" (cuadros listos para colgar).
4. Galería Destacada de Nora: Carrusel/Grilla de 4 retratos de Nora con títulos ("Nora en su Rincón Dorado", "Mirada Monocromática", "La Ventana de la Tarde", "El Salto Silencioso").
5. Paquetes de Sesiones: Dos tarjetas card-product:
   - "Sesión Retrato Esencial": 1 hora en estudio cálido, 10 fotos digitales editadas + 1 lámina A4 Fine Art de regalo. $65.000 CLP.
   - "Sesión Hogar Dulce Hogar (Domicilio)": 2 horas en tu casa con luces continuas suaves, 20 fotos digitales + cuadro 30x40 cm con marco de roble. $95.000 CLP.
6. Testimonios: Dos tarjetas de clientes con avatar, 5 estrellas en #D49A3D y reseñas emotivas sobre el trato paciente con gatos tímidos.
7. Formulario de Reserva Interactivo: Campos input-field (Nombre, Correo, Teléfono, Tipo de Sesión, Selector de temperamento del gato: "Curioso / Tímido / Enérgico", Fecha tentativa y botón button-primary "Solicitar Disponibilidad").
8. Footer: Fondo secondary (#3E2723), texto en blanco, enlaces a políticas, FAQ, Instagram @norafotografia y caja de suscripción al newsletter con 10% de descuento.
```

---

### 2. Tienda & Galería de Arte (Catálogo)

```text
Pantalla: Tienda y Galería de Arte de "Nora — Fotografía Felina", versión desktop. Usa el design system del proyecto.
Objetivo de Diego / Valentina: Explorar las láminas Fine Art, cuadros enmarcados y photobooks, filtrar por formato o precio y seleccionar una pieza para decorar su hogar.
Componentes, de arriba hacia abajo:
1. Navbar: Idéntico a la Landing, con el enlace "Tienda de Arte" marcado como activo con subrayado terracota.
2. Banner de Cabecera: Título h1 "Galería de Arte & Tienda de Autor", descripción corta sobre las impresiones en papel algodón libre de ácido Hahnemühle de 310g.
3. Barra de Control y Filtros: Campo de búsqueda interactivo input-field con ícono de lupa, y botones de filtro horizontales (Todos, Láminas Fine Art, Cuadros Enmarcados, Photobooks, Sesiones & Gift Cards) y selector de ordenación por precio.
4. Grilla de Productos (3 columnas en desktop):
   - Producto 1: "Lámina Fine Art: Nora en Rincón Dorado" | Badge tag-badge "Edición Limitada" | Precio desde $18.000 CLP | Botón button-primary "Ver Formatos / Añadir".
   - Producto 2: "Cuadro Enmarcado: Nora en la Ventana" | Marco de Roble Macizo | Precio desde $48.000 CLP | Botón button-primary "Ver Detalle".
   - Producto 3: "Photobook Conmemorativo: Nora & Amigos" | Tapa dura 100 págs | Precio $38.000 CLP | Botón button-primary "Añadir al Carrito".
   - Producto 4: "Pack de 6 Postales Fotográficas de Autor" | Acabado Mate | Precio $12.000 CLP | Botón button-primary "Añadir al Carrito".
   - Producto 5: "Gift Voucher Digital: Sesión Fotográfica" | Canjeable 6 meses | Precio $65.000 CLP | Botón button-primary "Personalizar".
   - Producto 6: "Lámina Monocromática: La Mirada de Nora" | Blanco y Negro | Precio desde $20.000 CLP | Botón button-primary "Ver Formatos".
5. Bloque de Confianza: 3 íconos con texto: "Envío seguro en tubo rígido", "Papel libre de ácido con 80+ años de duración", "Garantía de satisfacción".
6. Footer institucional estándar.
```

---

### 3. Ficha de Producto (Detalle con Selector de Variantes)

```text
Pantalla: Ficha de Detalle de Producto de "Nora — Fotografía Felina", versión desktop. Usa el design system del proyecto.
Objetivo de Valentina: Ver en detalle la textura del papel, elegir el tamaño (A4, A3 o 50x70 cm) y el acabado de enmarcado (Sin marco, Marco Roble Natural, Marco Negro Mate), verificar el precio actualizado y añadir al carrito.
Componentes, de arriba hacia abajo:
1. Navbar estándar.
2. Breadcrumb de navegación: Inicio > Tienda > Cuadros Enmarcados > "Nora en la Ventana".
3. Layout de Dos Columnas:
   - Columna Izquierda (Galería): Fotografía principal en alta resolución con zoom interactivo, mostrando el cuadro colgado en una pared beige moderna y dos miniaturas adicionales (detalle del marco de madera y textura del papel algodón).
   - Columna Derecha (Panel de Compra):
     - Título h1 "Cuadro Enmarcado: Nora en la Ventana de Tarde".
     - Badge tag-offer "Más Vendido".
     - Precio dinámico destacado en h2: "$48.000 CLP".
     - Selector de Tamaño (Botones tipo pill): "A4 (21x30 cm)", "A3 (30x42 cm) [+$12.000]", "50x70 cm [+$25.000]".
     - Selector de Acabado de Marco: "Roble Macizo Natural", "Nogal Oscuro", "Negro Satinado", "Lámina sin enmarcar (-$18.000)".
     - Selector de Cantidad con botones [-] [1] [+].
     - Botón principal button-primary ancho completo "Añadir al Carrito 🛒".
     - Botón secundario button-secondary "Consultar por WhatsApp 💬".
     - Acordeón colapsable con "Ficha Técnica del Papel", "Tiempos de Fabricación y Despacho" y "Cuidado de la Obra".
4. Sección "Otras obras que te encantarán": Grilla de 3 productos recomendados.
5. Footer institucional.
```

---

### 4. Carrito de Compras (Slide-over Drawer & Página)

```text
Pantalla: Carrito de Compras de "Nora — Fotografía Felina" (versión cajón lateral deslizante sobrepuesto con backdrop desenfocado).
Objetivo de Diego: Revisar los artículos agregados, seleccionar su comuna/región para calcular el costo de envío, aplicar cupón de descuento y proceder al pago por WhatsApp.
Componentes:
1. Encabezado del Carrito: Título h3 "Tu Carrito de Arte Felino (2 productos)" y botón [X] de cierre.
2. Lista de Ítems en el Carrito:
   - Ítem 1: Miniatura de "Cuadro Nora en la Ventana" | Variante: 50x70 cm / Roble Natural | $48.000 CLP | Controles [-] 1 [+] | Botón [🗑️ Eliminar].
   - Ítem 2: Miniatura de "Photobook Nora & Amigos" | Formato Tapa Dura | $38.000 CLP | Controles [-] 1 [+] | Botón [🗑️ Eliminar].
3. Calculador de Despacho: Menú desplegable input-field para seleccionar "Región Metropolitana ($4.500)" o "Regiones de Chile ($7.500)", actualizando el total en vivo.
4. Campo de Cupón de Descuento: Input para código promocional (ej. "NORA10" para -10%).
5. Resumen de Pago:
   - Subtotal: $86.000 CLP
   - Despacho (RM): $4.500 CLP
   - Total Final: $90.500 CLP
6. Botón de Acción Principal button-primary: "Finalizar Pedido vía WhatsApp 💬" (genera un mensaje prellenado con la lista de productos y dirección) y botón secundario "Seguir Comprando".
7. Nota de Seguridad: "Garantía de embalaje seguro a prueba de golpes".
```

---

### 5. Blog Editorial

```text
Pantalla: Blog Editorial de "Nora — Fotografía Felina", versión desktop. Usa el design system del proyecto.
Objetivo de Valentina: Descubrir consejos prácticos para fotografiar a sus gatos, aprender sobre enriquecimiento ambiental y entender cómo se prepara una sesión sin estrés.
Componentes, de arriba hacia abajo:
1. Navbar estándar.
2. Cabecera del Blog: Título h1 "Crónicas Felinas & Fotografía de Autor", subtítulo "Artículos sobre psicología de gatos, consejos de luz natural y guías de sesiones respetuosas".
3. Barra de Categorías del Blog (Pills interactivas): "Todos", "Bienestar & Fear-Free", "Consejos de Fotografía", "Decoración con Arte", "Historias de Nora".
4. Artículo Destacado Hero (Ancho completo):
   - Imagen horizontal de Nora descansando al sol con una taza de café.
   - Badge verde salvia "Bienestar & Fear-Free".
   - Título h2 "Cómo lograr que un gato tímido disfrute una sesión de fotos sin estrés ni forzarlo".
   - Extracto: "La paciencia y el respeto al espacio personal son la clave. Te contamos nuestro protocolo con feromonas y luz cálida continua..."
   - Botón button-primary "Leer Artículo Completo (5 min)".
5. Grilla de Artículos Secundarios (3 columnas con card-article):
   - Artículo 2: "5 secretos de iluminación para capturar la mirada dorada de tu gato con tu móvil".
   - Artículo 3: "Decorar con amor felino: Guía para armar una galería de pared en tu salón".
   - Artículo 4: "La historia de Nora: De gata rescatada a musa de bellas artes".
6. Caja de Suscripción al Newsletter: Fondo crema surface-variant, con input para email y botón "Suscribirme".
7. Footer estándar.
```

---

### 6. Vista de Artículo de Blog (Lectura & Comentarios)

```text
Pantalla: Lectura de Artículo de Blog de "Nora — Fotografía Felina", versión desktop (ancho de lectura centrado 780px).
Objetivo de Valentina: Leer el contenido completo, ver fotos de ejemplo, compartir el artículo con sus amigas cat lovers y dejar un comentario con su consulta.
Componentes, de arriba hacia abajo:
1. Navbar estándar.
2. Cabecera de Artículo: Badge de categoría, Título h1 "Cómo lograr que un gato tímido disfrute una sesión de fotos sin estrés", Metadatos (Por Fotógrafa Caro • 12 Octubre • 5 min de lectura).
3. Fotografía Principal de autor con pie de foto explicativo.
4. Cuerpo de Texto: Tipografía body-lg con interlineado generoso (1.65), citas destacadas en Playfair Display (#C86D51), lista con viñetas sobre feromonas y uso de premios de malta.
5. Banner de Producto Relacionado: Caja destacada con botón para agendar la sesión "Hogar Dulce Hogar".
6. Barra de Compartir: Botones para copiar enlace, compartir en WhatsApp, Pinterest y Twitter/X.
7. Sección de Comentarios:
   - Contador "3 Comentarios de la Comunidad".
   - Lista de comentarios con avatar, nombre, fecha y texto.
   - Formulario interactivo "Deja tu comentario": Campos de nombre, correo y textarea de comentario con botón button-primary "Publicar Comentario".
8. Artículos Recomendados: Grilla de 2 tarjetas inferiores.
9. Footer estándar.
```

---

### Versión Mobile (Prompt para cada pantalla)

```text
Genera la versión mobile (375px a 420px de ancho) de esta pantalla siguiendo la sección Layout del design system:
1. Reemplaza el menú horizontal por una barra compacta con logotipo a la izquierda, botón de carrito con contador e ícono de menú hamburguesa que abre un drawer animado a pantalla completa.
2. Transforma todas las grillas de 3 columnas (productos, artículos, testimonios) en una sola columna vertical o carrusel horizontal con scroll táctil suave.
3. Asegura que todos los botones tengan un área táctil mínima de 48px de alto y padding de 14px para facilitar la pulsación con el pulgar.
4. Fija un botón flotante de WhatsApp en la esquina inferior derecha con badge circular verde pulsante.
5. Ajusta el tamaño de los títulos h1 a 34px y los párrafos a 15px para una lectura cómoda sin desbordes horizontales.
```
