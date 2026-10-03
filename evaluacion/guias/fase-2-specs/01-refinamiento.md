# Refinamiento de la Fase 1

**Archivos:** `docs/01` a `docs/05` · **Fase 2** · **5 pts**

## Qué es y para qué sirve

El martes 6 y miércoles 7 de octubre revisamos en clases lo que entregaste en la Fase 1 y recibes **retroalimentación**. Refinar es aplicar esa retroalimentación a tus documentos antes de empezar a diseñar.

Es el paso más barato de todo el proyecto: corregir una proto-persona o una funcionalidad ahora toma minutos; corregirla cuando ya tienes el sitio construido toma horas.

## Qué entregas

- Los mismos archivos de la Fase 1, **corregidos** según la retroalimentación.
- **Commits que muestren los cambios.**

Estos cambios no cuentan como atraso de la Fase 1: se evalúan en la Fase 2.

## Paso a paso

1. **Anota la retroalimentación** que recibas en clases. Si es oral, escríbela apenas la recibas.
2. **Haz una lista de cambios** a partir de ella. Una forma simple es crear un archivo temporal o una lista en tu cuaderno:

   ```text
   - [ ] Proto-persona: frustraciones más concretas
   - [ ] Funcionalidades: el filtro no dice por qué se filtra
   - [ ] Mapa de sitio: falta la política de privacidad
   ```

3. **Aplica cada cambio y haz un commit por cambio** (o por grupo de cambios relacionados), con un mensaje que diga qué corregiste:

   ```bash
   git commit -m "docs: concreta frustraciones de la proto-persona"
   git commit -m "docs: especifica filtros de la tienda por tipo de planta"
   git commit -m "docs: agrega política de privacidad al mapa de sitio"
   ```

4. **Revisa la coherencia en cadena.** Si cambias algo, revisa lo que depende de ello: si cambiaste una necesidad de la proto-persona, ¿cambia alguna funcionalidad? Si agregaste una funcionalidad, ¿tiene página en el mapa de sitio? ¿Aparece en el user flow?

## Errores comunes

- **Un solo commit gigante** con el mensaje "correcciones": no se ve qué cambió.
- **Corregir un documento y no los que dependen de él.**
- **No aplicar la retroalimentación** porque "ya estaba bien": si no estás de acuerdo con una observación, conversémoslo en clases.

## Checklist

- [ ] Retroalimentación anotada
- [ ] Cambios aplicados en los archivos de la Fase 1
- [ ] Commits descriptivos por cada cambio
- [ ] Coherencia revisada entre proto-persona, funcionalidades, mapa de sitio y user flow
