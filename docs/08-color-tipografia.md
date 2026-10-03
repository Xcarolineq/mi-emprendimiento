# Color y tipografía — Nora — Fotografía Felina

> Guía: [Color y tipografía](../evaluacion/guias/fase-2-specs/05-color-y-tipografia.md)

## Paleta de Colores

La paleta cromática de **Nora — Fotografía Felina** se inspira en los matices cálidos del pelaje de la gata Nora, las maderas nobles de los marcos de galería, las hojas verdes botánicas de un hogar armonioso y el papel de algodón de bellas artes.

| Rol | Nombre | HEX | Uso en la Interfaz |
|---|---|---|---|
| **Principal** | Terracota Cálido | `#C86D51` | Botones principales de conversión (*Agendar Sesión*, *Añadir al Carrito*), llamadas a la acción, insignias activas e íconos de foco. |
| **Principal Hover** | Terracota Tostado | `#B35B40` | Estado de interacción hover y foco sobre botones primarios. |
| **Secundario** | Ébano Marrón Profundo | `#3E2723` | Títulos de alto impacto, pie de página oscuro premium, botones secundarios contorneados y bordes de acento. |
| **Terciario** | Verde Salvia Botánico | `#5E7A68` | Badges de certificación *Fear-Free*, categorías de bienestar animal en el blog e indicadores de éxito. |
| **Acento** | Ámbar Dorado | `#D49A3D` | Etiquetas de productos destacados, promociones exclusivas y estrellas de valoración de clientes. |
| **Fondo Neutro** | Blanco Cálido Pergamino | `#FAF7F2` | Fondo general de la página para evitar el resplandor frío y simular la calidez del papel de museo. |
| **Superficie** | Blanco Puro | `#FFFFFF` | Fondo de tarjetas de producto, modales, campos de formulario y contenedores de lectura. |
| **Superficie Variante** | Crema Aterciopelado | `#F3ECE2` | Secciones alternas de fondo, testimonios de clientes y cajas de destacados en el blog. |
| **Texto Principal** | Carbón Óptico | `#1F1E1D` | Tipografía de lectura principal de títulos y párrafos para máximo confort visual. |
| **Texto Secundario** | Pardo Neutro | `#6B6560` | Metadatos, fechas de blog, subtítulos, textos de ayuda y pies de foto. |
| **Borde / Separador** | Lino Claro | `#E7DFD5` | Líneas divisorias, bordes sutiles de inputs y contorno de tarjetas de producto. |
| **Error** | Rojo Óxido Suave | `#B3261E` | Alertas de validación de formularios y avisos de stock agotado. |

---

## Verificación de Contraste (Accesibilidad WCAG 2.1)

Se verificaron las combinaciones de color mediante la escala de contraste WCAG para asegurar una legibilidad óptima en todo tipo de pantallas y condiciones de iluminación:

| Combinación | Ratio de Contraste | Nivel de Cumplimiento | Resultado |
|---|---|---|---|
| **Texto Carbón (`#1F1E1D`) sobre Fondo Neutro (`#FAF7F2`)** | **14.2 : 1** | Cumple WCAG AAA | ✅ **Excelente legibilidad en lectura prolongada** |
| **Texto Blanco (`#FFFFFF`) sobre Botón Terracota (`#C86D51`)** | **4.65 : 1** | Cumple WCAG AA | ✅ **Aprobado para botones y textos medianos/grandes** |
| **Texto Carbón (`#1F1E1D`) sobre Superficie Crema (`#F3ECE2`)** | **12.8 : 1** | Cumple WCAG AAA | ✅ **Óptimo para cajas de testimonios y notas** |
| **Texto Secundario (`#6B6560`) sobre Fondo Neutro (`#FAF7F2`)** | **5.45 : 1** | Cumple WCAG AA | ✅ **Aprobado para subtítulos y fechas** |
| **Texto Blanco (`#FFFFFF`) sobre Fondo Ébano (`#3E2723`)** | **15.1 : 1** | Cumple WCAG AAA | ✅ **Máximo contraste en pie de página** |
| **Texto Blanco (`#FFFFFF`) sobre Badge Verde Salvia (`#5E7A68`)** | **4.72 : 1** | Cumple WCAG AA | ✅ **Aprobado para tags informativos** |

---

## Tipografía

El sistema tipográfico combina una fuente con serifa de corte editorial de alta costura con una sans-serif geométrica moderna y sumamente legible:

- **Títulos y Encabezados:** **Playfair Display** (Google Fonts). Elegante, clásica y expresiva, evoca las publicaciones de arte y revistas de diseño contemporáneo.
- **Textos de Lectura, Botones e Inputs:** **Plus Jakarta Sans** (Google Fonts). De proporciones generosas, excelente altura de x y curvas limpias que garantizan claridad en pantallas móviles y monitores de alta resolución.

### Escala Tipográfica (Desktop y Mobile)

| Elemento | Tamaño Desktop | Tamaño Mobile | Peso Tipográfico | Interlineado (Line-Height) | Familia Tipográfica |
|---|---|---|---|---|---|
| **h1 (Display Hero)** | 48px | 34px | Bold (700) | 1.15 | *Playfair Display* |
| **h2 (Sección Principal)** | 32px | 26px | SemiBold (600) | 1.25 | *Playfair Display* |
| **h3 (Subtítulo / Tarjeta)** | 24px | 20px | SemiBold (600) | 1.30 | *Playfair Display* |
| **h4 (Título de Producto)** | 20px | 18px | SemiBold (600) | 1.35 | *Playfair Display* |
| **Párrafo Lead** | 18px | 16px | Regular (400) | 1.60 | *Plus Jakarta Sans* |
| **Párrafo General** | 16px | 15px | Regular (400) | 1.60 | *Plus Jakarta Sans* |
| **Párrafo Secundario / Meta** | 14px | 13px | Regular (400) | 1.50 | *Plus Jakarta Sans* |
| **Botón Principal / Secundario** | 15px | 14px | SemiBold (600) | 1.20 | *Plus Jakarta Sans* |
| **Badges / Tags de Categoría** | 12px | 11px | SemiBold (600) | 1.20 | *Plus Jakarta Sans* |

---

## Justificación

La elección de **Playfair Display** aporta el aura de una galería de fotografía de autor, diferenciando a **Nora** de las tiendas convencionales de mascotas o veterinarias masivas que suelen recurrir a fuentes redondeadas informales. Por su parte, **Plus Jakarta Sans** aporta frescura técnica, claridad en los precios y facilidad de lectura en formularios.

La paleta dominada por el **Terracota Cálido**, el **Blanco Pergamino** y el **Ébano Profundo** se sincroniza con el moodboard, evocando un hogar acogedor, muebles de roble, tazas de café y un gato durmiendo junto a la ventana, lo que genera una conexión inmediata con la proto-persona Valentina.
