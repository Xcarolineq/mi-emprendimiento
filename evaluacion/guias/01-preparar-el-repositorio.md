# Preparar el repositorio

## Qué es y para qué sirve

Todo tu proyecto (documentos, specs y, más adelante, el código) vive en **un solo repositorio de GitHub**. Así, tus decisiones quedan en un solo lugar, y el historial de commits muestra cómo avanzaste.

No partes desde cero: haces un **fork** del repositorio base [mi-emprendimiento](https://github.com/carocromatica/mi-emprendimiento). Un fork es **una copia de un repositorio en tu propia cuenta de GitHub**: es tuyo, puedes modificarlo todo lo que quieras y tus cambios no afectan al original.

Los plazos se revisan con los commits: cada fase se evalúa con el **último commit anterior a la hora límite**.

## Qué trae el repositorio base

```text
mi-emprendimiento/
├── README.md        ← portada de tu proyecto (la completas tú)
├── DESIGN.md        ← tu design system para Stitch (lo completas en la Fase 2)
├── evaluacion/      ← el enunciado y estas guías (no lo modifiques)
└── docs/            ← una plantilla por cada documento que vas a entregar
    ├── 01-brief.md
    ├── 02-proto-personas.md
    ├── ...
    ├── 11-qa.md
    └── img/         ← aquí van las imágenes de tus documentos
```

Cada plantilla de `docs/` tiene los títulos de las secciones que debes completar y un enlace a su guía.

## Qué entregas

- Tu fork, **público**, con los documentos de la Fase 1 completos.
- El **link de tu fork enviado por AVA** antes del lunes 5 de octubre a las 23:59.

## Paso a paso

### 1. Haz el fork

1. Inicia sesión en GitHub y entra a [github.com/carocromatica/mi-emprendimiento](https://github.com/carocromatica/mi-emprendimiento).
2. Haz clic en el botón **Fork** (arriba a la derecha).
3. En **Owner**, elige tu cuenta.
4. En **Repository name**, puedes dejar `mi-emprendimiento` o cambiarlo por el nombre de tu emprendimiento, en minúsculas y con guiones (por ejemplo, `brote-jardineria`).
5. Haz clic en **Create fork**.

Ahora tienes tu copia en `github.com/tu-usuario/mi-emprendimiento` (o el nombre que elegiste). **Revisa que la URL tenga tu usuario**: ese es tu repositorio.

### 2. Clona tu fork en tu computador

1. En **tu fork**, haz clic en el botón verde **Code** y copia la URL.
2. Clónalo y ábrelo en tu editor (Antigravity, VS Code o el que uses):

   ```bash
   git clone https://github.com/tu-usuario/mi-emprendimiento.git
   ```

### 3. Completa el README

El `README.md` de la raíz es la portada de tu proyecto. Reemplaza lo que está entre corchetes con los datos de tu emprendimiento y completa la sección **Uso de IA** a medida que avances.

### 4. Completa los documentos de la Fase 1

Trabaja en `docs/01-brief.md` a `docs/05-arquitectura.md`, siguiendo las guías de la Fase 1. Las imágenes (avatar, mapa de sitio) van en `docs/img/`.

Los documentos se escriben en Markdown. Si es primera vez que lo usas, revisa antes la [Guía de Markdown](02-guia-de-markdown.md).

### 5. Haz commits y súbelos

Haz un commit cada vez que termines una parte, no todo al final:

```bash
git add .
git commit -m "docs: completa brief del emprendimiento"
git push
```

### 6. Envía el link de tu fork por AVA

Copia la URL de tu fork (la que tiene tu usuario) y envíala por AVA.

## La sección "Uso de IA"

Es obligatoria. Anota qué herramientas usaste y **para qué**, y qué cambiaste tú. Por ejemplo:

```markdown
## Uso de IA

- **Claude:** generé un primer borrador de la proto-persona. Cambié la edad,
  el horario de uso y las frustraciones según lo que me preguntan los clientes del local.
- **Stitch:** generé el prototipo de la tienda a partir de mi spec de diseño.
- **Antigravity:** convertí el prototipo a HTML y CSS.
```

Usar IA está permitido y recomendado. Lo que no está permitido es entregar algo que no puedes explicar.

## Commits: cómo escribirlos

Un buen mensaje de commit dice **qué cambió**. Usa un prefijo y una descripción corta:

| Prefijo | Cuándo | Ejemplo |
|---|---|---|
| `docs:` | Cambios en documentos | `docs: agrega proto-persona principal` |
| `feat:` | Nuevas páginas o funciones | `feat: agrega página de tienda` |
| `style:` | Cambios de CSS | `style: aplica paleta de colores` |
| `fix:` | Correcciones | `fix: corrige enlace roto en el menú` |

Evita mensajes como `cambios`, `update` o `asdf`: restan puntos en el criterio de entrega.

## Si las instrucciones se actualizan

Si durante el proyecto se corrige algo del enunciado o de las guías, en tu fork aparecerá el aviso *"This branch is X commits behind"*. Para traer los cambios, haz clic en **Sync fork → Update branch** y luego `git pull` en tu computador.

Las actualizaciones solo cambian la carpeta `evaluacion/`, que tú no modificas, así que no deberían chocar con tu trabajo. Si GitHub te avisa que hay **conflictos**, no descartes tus commits: avísale a tu profesora antes de hacer nada.

## Errores comunes

- **Clonar el repositorio original en vez de tu fork:** al hacer `git push` te va a dar un error de permisos. Revisa que la URL tenga tu usuario.
- **Enviar por AVA el link del repositorio base** en vez del de tu fork.
- **Borrar o modificar la carpeta `evaluacion/`:** complica la sincronización si hay actualizaciones.
- **Subir todo en un solo commit al final:** no se ve el proceso y arriesgas llegar tarde.
- **Archivos con espacios o tildes** en el nombre (`Foto Camila.png`): usa minúsculas y guiones.
- **Olvidar el `git push`:** el commit queda solo en tu computador.

## Checklist

- [ ] Fork creado en tu cuenta (la URL tiene tu usuario)
- [ ] Fork clonado en tu computador
- [ ] `README.md` con el nombre y la descripción de tu emprendimiento
- [ ] Sección "Uso de IA" en el `README.md`
- [ ] Commits con mensajes descriptivos y `git push` hecho
- [ ] Link de tu fork enviado por AVA
