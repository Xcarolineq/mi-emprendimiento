# Tecnologías del proyecto — Nora — Fotografía Felina

> Guía: [Tecnologías del proyecto](../evaluacion/guias/fase-1-requerimientos/04-tecnologias.md)

## Stack

| Área | Herramienta | Para qué la uso |
|---|---|---|
| **Construcción Frontend** | HTML5 semántico + Vanilla CSS3 + Vanilla JavaScript (ES6+) | Estructuración accesible, diseño visual con variables CSS sin dependencias pesadas y lógica de interacción dinámica (carrito, filtros, modales). |
| **Versionado de Código** | Git y GitHub | Control de versiones estructurado por fases, respaldo en la nube y registro trazable de cambios y refinamiento. |
| **Publicación & Hosting** | GitHub Pages | Despliegue continuo y visualización pública en vivo del sitio web mediante protocolo seguro HTTPS. |
| **Diseño & Wireframes** | Whimsical | Mapeo de sitemap, diagramación de user flows, moodboard conceptual y calco de componentes UI de referencia. |
| **Prototipado Referencial** | Google Stitch | Generación asistida de pantallas referenciales a partir del archivo de diseño estandarizado `DESIGN.md`. |
| **Inteligencia Artificial** | Google Antigravity (Gemini 3.7 Flash) & Google Imagen | Asistencia en la formulación de requerimientos, diseño de especificaciones técnicas (Spec-Driven Design) y generación de arte fotográfico hiperrealista de la gata Nora. |
| **Editor de Código** | Antigravity IDE | Entorno de desarrollo integrado para edición simultánea, vista previa y validación de estándares web. |

---

## Qué es funcional y qué es prototipo

| Funcionalidad | Estado en esta versión | Descripción |
|---|---|---|
| **Navegación entre vistas (Landing, Tienda, Blog, Contacto, FAQ, Legales)** | **100% Funcional** | Enrutamiento dinámico en cliente con cambio instantáneo de sección y scroll suave. |
| **Buscador y filtros en tiempo real** | **100% Funcional** | Filtrado instantáneo de productos por categoría y búsqueda textual por coincidencia de palabras. |
| **Selector de variantes y precio dinámico** | **100% Funcional** | Elección de tamaño (A4, A3, 50x70) y marco con recálculo en tiempo real del precio unitario. |
| **Carrito de compras con persistencia** | **100% Funcional** | Adición, eliminación, incremento/decremento de ítems, cálculo de subtotal y almacenamiento en `localStorage`. |
| **Estimador de costo de despacho** | **100% Funcional** | Cálculo automático según la región seleccionada (Región Metropolitana vs. Regiones). |
| **Checkout y derivación a WhatsApp** | **100% Funcional** | Generación de enlace `wa.me` con el detalle completo del carrito formateado listo para enviar. |
| **Formulario de reserva de sesión con temperamento felino** | **100% Funcional** | Validación de campos en cliente y confirmación visual inmediata con toast feedback. |
| **Sistema de comentarios en blog** | **100% Funcional** | Publicación y renderizado en vivo de nuevos comentarios en el artículo activo. |
| **Pasarela de pago bancario directa (Webpay Plus)** | **Prototipo visual** | Simulado mediante el botón de confirmación de pedido y derivación a WhatsApp / transferencia. |
| **Generación automática de boleta electrónica (SII)** | **Prototipo conceptual** | No requiere conexión real a software tributario en esta etapa académica. |

---

## Integraciones para una versión real

- **Pasarela de pagos:** Integración con *Transbank Webpay Plus* o *Mercado Pago* para cobro con tarjetas de débito/crédito y cuotas sin interés.
- **Logística automatizada:** API de *Shipit*, *Starken* o *Chilexpress* para generación automática de etiquetas de envío con seguimiento en línea.
- **WhatsApp Business API:** Bot automatizado de bienvenida y confirmación de recepción de solicitud de sesión con recordatorios de cita.
- **Meta Pixel & Instagram Shopping:** Catálogo sincronizado para etiquetar láminas y cuadros directamente en publicaciones de Instagram.

---

## Restricciones

- **Plazo:** Entrega del proyecto en tres fases planificadas según el calendario de evaluación semestral.
- **Frameworks:** No se utilizan frameworks pesados (React, Angular o Vue) ni TailwindCSS para garantizar código limpio, ligero y mantenible en HTML y CSS puro.
- **Dispositivos:** Compatibilidad fluida garantizada en teléfonos móviles (375px+), tablets (768px+) y computadores de escritorio (1024px a 1920px).
- **Accesibilidad:** Cumplimiento de contraste de color mínimo WCAG AA (ratio > 4.5:1) y etiquetas descriptivas `alt` en todas las imágenes fotográficas.
