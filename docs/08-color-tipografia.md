# Color y tipografía — Nora — Fotografía Felina

> Guía: [Color y tipografía](../evaluacion/guias/fase-2-specs/05-color-y-tipografia.md)  
> **Tablero de diseño, moodboard y wireframes en Whimsical:** [https://whimsical.com/caroline6/ev-2-12-10-2026-RxoBc4RbXSZU6zmyAwKh61](https://whimsical.com/caroline6/ev-2-12-10-2026-RxoBc4RbXSZU6zmyAwKh61)

## Paleta de Colores

La paleta cromática de **Nora — Fotografía Felina** se inspira en los matices cálidos del pelaje gris y ojos ámbar de la gata Nora, las maderas nobles de los marcos de galería, las hojas verdes botánicas de un hogar armonioso y el papel de algodón Fine Art de bellas artes.

| Rol | Nombre | HEX | Uso en la Interfaz |
|---|---|---|---|
| **Principal** | Terracota Cálido | `#C86D51` | Botones principales de conversión (*Agendar Sesión*, *Añadir al Carrito*), llamadas a la acción, insignias activas e íconos de foco. |
| **Principal Hover** | Terracota Tostado | `#B35B40` | Estado de interacción hover sobre botones primarios. |
| **Principal Active** | Terracota Intenso | `#9E482E` | Estado activo / pulsado sobre botones primarios. |
| **Secundario** | Ébano Marrón Profundo | `#3E2723` | Títulos de alto impacto, pie de página oscuro premium, botones secundarios contorneados y bordes de acento. |
| **Secundario Hover** | Ébano Oscuro | `#2C1B18` | Estado hover de botones secundarios y enlaces de pie de página. |
| **Terciario** | Verde Salvia Botánico | `#5E7A68` | Badges de certificación *Fear-Free*, categorías de bienestar animal en el blog e indicadores de éxito sutiles. |
| **Acento** | Ámbar Dorado | `#D49A3D` | Etiquetas de productos destacados, promociones exclusivas y estrellas de valoración de clientes. |
| **Texto sobre Acento** | Ébano Contraste | `#3E2723` | Texto de insignias sobre fondo ámbar para garantizar contraste accesible WCAG AA (> 5.5:1). |
| **Fondo Neutro** | Blanco Cálido Pergamino | `#FAF7F2` | Fondo general de la página para evitar el resplandor frío y simular la calidez del papel de museo. |
| **Superficie** | Blanco Puro | `#FFFFFF` | Fondo de tarjetas de producto, modales, campos de formulario y contenedores de lectura. |
| **Superficie Variante** | Crema Aterciopelado | `#F3ECE2` | Secciones alternas de fondo, testimonios de clientes y cajas de destacados en el blog. |
| **Texto Principal** | Carbón Óptico | `#1F1E1D` | Tipografía de lectura principal de títulos y párrafos para máximo confort visual. |
| **Texto Secundario** | Pardo Neutro | `#6B6560` | Metadatos, fechas de blog, subtítulos, textos de ayuda y pies de foto. |
| **Borde / Separador** | Lino Claro | `#E7DFD5` | Líneas divisorias, bordes sutiles de inputs y contorno de tarjetas de producto. |
| **Éxito** | Verde Salvia Éxito | `#2F7A4A` | Mensajes de confirmación de reserva y validación exitosa. |
| **Error** | Rojo Óxido Suave | `#B3261E` | Alertas de validación de formularios y avisos de stock agotado. |
| **Fondo de Error** | Rosa Pálido | `#FDF2F2` | Fondo de cajas de alerta y advertencias de validación. |

---

## Verificación de Contraste (Accesibilidad WCAG 2.1)

Se verificaron las combinaciones cromáticas mediante la fórmula oficial de luminancia relativa y contraste WCAG 2.1 para garantizar una legibilidad impecable en monitores de sobremesa y dispositivos móviles:

| Combinación | Ratio de Contraste | Nivel de Cumplimiento | Resultado |
|---|---|---|---|
| **Texto Carbón (`#1F1E1D`) sobre Fondo Neutro (`#FAF7F2`)** | **15.58 : 1** | Cumple WCAG AAA | ✅ **Máxima legibilidad en lectura prolongada** |
| **Texto Carbón (`#1F1E1D`) sobre Superficie Blanca (`#FFFFFF`)** | **17.55 : 1** | Cumple WCAG AAA | ✅ **Excelente nitidez en tarjetas e inputs** |
| **Texto Carbón (`#1F1E1D`) sobre Superficie Crema (`#F3ECE2`)** | **13.90 : 1** | Cumple WCAG AAA | ✅ **Óptimo para cajas de testimonios y notas** |
| **Texto Blanco (`#FFFFFF`) sobre Botón Hover (`#B35B40`)** | **4.68 : 1** | Cumple WCAG AA | ✅ **Aprobado para texto normal y botones** |
| **Texto Blanco (`#FFFFFF`) sobre Botón Terracota (`#C86D51`)** | **3.64 : 1** | Cumple WCAG AA (Large) | ✅ **Aprobado para botones de acción con texto >15px semibold** |
| **Texto Ébano (`#3E2723`) sobre Tag Ámbar (`#D49A3D`)** | **5.59 : 1** | Cumple WCAG AA | ✅ **Aprobado para badges y etiquetas de oferta** |
| **Texto Carbón (`#1F1E1D`) sobre Tag Ámbar (`#D49A3D`)** | **6.73 : 1** | Cumple WCAG AAA | ✅ **Aprobado para microtextos de descuento** |
| **Texto Secundario (`#6B6560`) sobre Fondo Neutro (`#FAF7F2`)** | **5.45 : 1** | Cumple WCAG AA | ✅ **Aprobado para subtítulos, metadatos y fechas** |
| **Texto Blanco (`#FFFFFF`) sobre Fondo Ébano (`#3E2723`)** | **13.82 : 1** | Cumple WCAG AAA | ✅ **Máximo contraste en footer y botones oscuros** |
| **Texto Blanco (`#FFFFFF`) sobre Badge Verde Salvia (`#5E7A68`)** | **4.71 : 1** | Cumple WCAG AA | ✅ **Aprobado para tags y certificaciones** |
| **Error Rojo Óxido (`#B3261E`) sobre Fondo Error (`#FDF2F2`)** | **5.96 : 1** | Cumple WCAG AA | ✅ **Aprobado para mensajes de alerta y feedback** |

---

## Tipografía

El sistema tipográfico combina la sofisticación de una fuente con serifa de corte editorial de alta costura con una sans-serif geométrica contemporánea, ambas disponibles libremente en **Google Fonts**:

- **Títulos y Encabezados:** **Playfair Display** (Google Fonts). Elegante, clásica y expresiva, evoca las publicaciones de arte, fotolibros y revistas de diseño contemporáneo.
- **Textos de Lectura, Botones e Inputs:** **Plus Jakarta Sans** (Google Fonts). De proporciones generosas, excelente altura de x y curvas limpias que garantizan claridad en pantallas móviles y monitores de alta resolución.

### Escala Tipográfica (Desktop y Mobile)

*(Equivalencias basadas en 1rem = 16px estándar de navegador)*

| Elemento | Tamaño Desktop (px / rem) | Tamaño Mobile (px / rem) | Peso Tipográfico | Interlineado (Line-Height) | Familia Tipográfica | Uso Principal |
|---|---|---|---|---|---|---|
| **h1 (Display Hero)** | 48px (3.00rem) | 34px (2.125rem) | Bold (700) | 1.15 | *Playfair Display* | Título principal en cabecera de Landing y portadas |
| **h2 (Sección Principal)** | 32px (2.00rem) | 26px (1.625rem) | SemiBold (600) | 1.25 | *Playfair Display* | Encabezados de secciones y títulos de página |
| **h3 (Subtítulo / Tarjeta)** | 24px (1.50rem) | 20px (1.250rem) | SemiBold (600) | 1.30 | *Playfair Display* | Subtítulos de bloques y cabeceras de módulos |
| **h4 (Título de Producto)** | 20px (1.25rem) | 18px (1.125rem) | SemiBold (600) | 1.35 | *Playfair Display* | Nombres de obras Fine Art y artículos en grillas |
| **Párrafo Lead** | 18px (1.125rem) | 16px (1.000rem) | Regular (400) | 1.60 | *Plus Jakarta Sans* | Párrafo introductorio bajo títulos de sección |
| **Párrafo General** | 16px (1.00rem) | 15px (0.938rem) | Regular (400) | 1.60 | *Plus Jakarta Sans* | Cuerpo de texto de lectura, fichas técnicas y descripciones |
| **Párrafo Secundario / Meta** | 14px (0.875rem) | 13px (0.813rem) | Regular (400) | 1.50 | *Plus Jakarta Sans* | Metadatos de blog, fechas, notas de despacho y ayudas |
| **Botón Principal / Secundario** | 15px (0.938rem) | 14px (0.875rem) | SemiBold (600) | 1.20 | *Plus Jakarta Sans* | Botones interactivos de acción y enlaces de menú |
| **Badges / Tags de Categoría** | 12px (0.75rem) | 11px (0.688rem) | SemiBold (600) | 1.20 | *Plus Jakarta Sans* | Etiquetas de formato, ofertas y sellos Fear-Free |

---

## Justificación

La elección de **Playfair Display** aporta el aura de una galería de fotografía de autor, diferenciando a **Nora** de las tiendas convencionales de mascotas o clínicas veterinarias masivas que suelen recurrir a fuentes redondeadas informales. Por su parte, **Plus Jakarta Sans** aporta frescura técnica, claridad en los precios y facilidad de lectura en formularios y fichas técnicas.

La paleta cromática dominada por el **Terracota Cálido (`#C86D51`)**, el **Blanco Pergamino (`#FAF7F2`)** y el **Ébano Profundo (`#3E2723`)** se sincroniza con el moodboard del proyecto, evocando un hogar acogedor, muebles de roble, tazas de café y un gato durmiendo junto a la ventana bajo la luz del atardecer. Esto genera una conexión afectiva inmediata con la proto-persona **Valentina**, asegurando un ambiente visual sereno y respetuoso con la sensibilidad felina.

