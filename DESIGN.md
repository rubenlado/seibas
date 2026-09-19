# Guía de estilo de As Seibas

Esta guía documenta el sistema visual de la web estática. Las variables canónicas viven en `src/styles/tokens.css`; `global.css` aplica esos tokens a los componentes.

## Principios

1. **Editorial, no promocional.** La fotografía y el contenido educativo llevan el peso. Evitar decoración sin significado, contenedores redundantes y mensajes de marketing.
2. **Cálido y preciso.** El amarillo identifica la marca; verde, azul y coral clasifican contenido. El fondo general permanece claro y neutro.
3. **Jerarquía antes que ornamento.** Los títulos no necesitan etiquetas introductorias, números decorativos ni efectos tipográficos.
4. **Geometría sobria.** Tarjetas sin redondeo; controles con radio de 4 px; círculos solo para botones de icono.
5. **Movimiento funcional.** Las transiciones indican interacción. Se respeta `prefers-reduced-motion`.

## Color

| Token semántico | Uso |
| --- | --- |
| `--color-brand` | Acción principal y superficies de marca |
| `--color-text` | Texto y controles principales |
| `--color-text-muted` | Información secundaria |
| `--color-surface` | Fondo general |
| `--color-surface-raised` | Tarjetas y campos |
| `--color-border` | Divisores y límites de baja intensidad |
| `--color-focus` | Foco de teclado |

Los colores suaves verde, azul, coral y amarillo se reservan para agrupar o clasificar contenido. No se mezclan como decoración dentro de una misma pieza.

## Tipografía

- **Display y títulos:** Source Serif 4 Variable, pesos 600–700.
- **Interfaz y lectura:** Source Sans 3 Variable, pesos 400–700.
- **Cuerpo:** 16 px, interlineado 1.6.
- **Lectura larga:** medida máxima de 72 caracteres e interlineado 1.72.
- **Etiquetas funcionales:** 12 px, peso 700; mayúsculas solo para categorías o metadatos.

La escala estable es: 12, 14, 16, 18, 22, 24, 32, 48, 72 y 96 px. En móvil los tamaños de título cambian mediante breakpoints, nunca de forma proporcional al ancho de pantalla.

## Espaciado

La escala parte de 4 px: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`.

- Dentro de controles: 8–16 px.
- Entre elementos de un mismo grupo: 12–24 px.
- Entre bloques relacionados: 32–48 px.
- Secciones: 112 px en escritorio, 96 px en tableta y 72 px en móvil.
- Un título siempre tiene más espacio antes que después.

No se introducen valores nuevos si uno de la escala resuelve la composición con una diferencia menor a 4 px.

## Layout

- Contenedor principal: 1180 px.
- Medianil: 20 px en escritorio y 14 px en móvil.
- Texto largo: máximo 72ch; texto introductorio: máximo 56ch.
- Breakpoints: 900 px para navegación/tableta y 640 px para móvil.
- Las imágenes declaran dimensiones y una relación de aspecto estable para evitar CLS.

## Iconos

Se usa exclusivamente Lucide mediante `@lucide/astro`.

- Trazo: 1.75.
- Tamaños: 16 px auxiliar, 20 px estándar, 24 px destacado.
- Los iconos decorativos llevan `aria-hidden="true"`.
- Los botones que solo contienen un icono necesitan `aria-label` y `title`.
- No se emplean caracteres Unicode, emoji ni SVG dibujado a mano como iconos.

## Controles

- Altura mínima: 48 px.
- Botón primario: fondo oscuro o amarillo según contraste de la superficie.
- Botón secundario: superficie clara y borde fuerte.
- El foco usa un contorno azul de 3 px con separación de 3 px.
- Hover, foco, activo y deshabilitado deben ser distinguibles sin depender solo del color.

## Componentes

- `Header`: logo, navegación y botón de menú Lucide.
- `Hero`: título, texto opcional e imagen; sin kicker superior.
- `SectionIntro`: título y descripción, sin numeración ornamental.
- `ServiceCard`: nombre, resumen y enlace; el color clasifica el servicio.
- `NewsCard`: imagen estable, título, categoría como metadato y resumen.
- `ContactBlock`: llamada a la acción breve con dos acciones como máximo.

## Accesibilidad y contenido

- Objetivo WCAG 2.2 AA.
- Foco siempre visible y orden de tabulación lógico.
- Texto alternativo concreto; `alt=""` solo para imágenes puramente decorativas.
- El gallego es el idioma principal y debe mantenerse consistente en navegación, controles y mensajes.
- Evitar etiquetas tipo “Ao día”, “A nosa raíz” o “Estamos preto” encima de títulos: la jerarquía debe sostenerse con el propio contenido.
