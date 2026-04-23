# Taltech

## Contexto general del sistema:

El uso de inteligencia artificial en Taltech se emplea como herramienta de apoyo para optimizar el desarrollo y la documentación del sistema.

---

# Documentación

## Estructura de Archivos

```bash
TALTECH/
│
├── docs/
│   └── prompting/
```

---

## Equipo de Desarrollo

| Integrante                  | Contacto                                     | Rol                                      | Observaciones        |
| --------------------------- | -------------------------------------------- | ---------------------------------------- | -------------------- |
| Angel Saul Barrios Martinez | [@Angel-Saul](https://github.com/Angel-Saul) | Líder de equipo y desarrollador frontend | Revisado y aprobado. |
| Jonhy Neri Hernandez        | [@Jonhy-1st](https://github.com/Jonhy-1st)   | Desarrollador de bases de datos          | Revisado y aprobado. |
| Luis Felipe Cazarez Marquez | [@xluiscm](https://github.com/xluiscm)       | Desarrollador backend                    | Revisado.            |
| Aylin Esteban Luna          | [@Aylin-Luna](https://github.com/Aylin-Luna) | Desarrollador de documentación           | Revisado.            |

---

## Prompts utilizados

### Prompt 1

> Necesito que me ayudes a corregir los errores de redacción de este texto. Además, quiero que cumpla con lo siguiente:
>
> * Definición clara y estructurada de los elementos que determinan el contexto relacionado con el prototipo web propuesto.
> * Coherencia con el problema planteado.
>
> Texto:
> "El desarrollo del prototipo web Taltech se sitúa en el contexto del sector ganadero, particularmente en unidades de producción de pequeña y mediana escala, donde predominan prácticas tradicionales en la gestión de la información. En este entorno, los procesos administrativos y operativos relacionados con el control del ganado —como registros sanitarios, alimentación, inventario y seguimiento productivo— se realizan principalmente mediante herramientas manuales, lo que genera limitaciones en términos de eficiencia, precisión y disponibilidad de la información."

---

### Prompt 2

> Ahora ayúdame a corregir este texto para poder agregarlo a un README, proporcionando el contexto de lo que se encontrará en esta carpeta:
>
> "En esta carpeta se encuentra el contexto general del sistema, así como los FRs (Requerimientos Funcionales), NFRs (Requerimientos No Funcionales), BRs (Reglas de Negocio), UHs (Historias de Usuario) y URs (Requerimientos del Usuario) del sistema web Taltech.
>
> Consta de la siguiente jerarquía:
> Documentación
> En esta sección se encontrará la documentación generada de TALTECH.
>
> Estructura de archivos:
> TALTECH
> | - Documentation
> | - BRs
> | - FRs
> | - GUI
> | - NFRs
> | - UHs
> | - URs
>
> Equipo de desarrollo:
> Integrante | Contacto | Rol | Observaciones
> Angel Saul Barrios Martinez | @Angel-Saul | Líder de equipo y desarrollador frontend | Revisado y aprobado.
> Jonhy Neri Hernandez | @Jonhy-1st | Desarrollador de bases de datos | Revisado y aprobado.
> Luis Felipe Cazarez Marquez | @xluiscm | Desarrollador backend | Revisado.
> Aylin Esteban Luna | @Aylin-Luna | Desarrollador de documentación | Revisado."

---

### Prompt 3

> Ahora ayúdame a corregir errores de redacción de este README:
> "En este apartado se presenta la UX (experiencia de usuario) y la UI (interfaz de usuario), donde se muestra el desarrollo de sketches, wireframes, mockups y el mapa de navegación, alineados con los requerimientos del sistema."

---

### Prompt 4

> Tengo capturas de Jira con casos de prueba y ciclos de prueba.
>
> Necesito que generes un README.md profesional con:
>
> * Descripción del sistema (basada en los módulos existentes, no genérica)
> * Tabla de casos de prueba con ID, nombre, tipo y enlace
> * Tabla de ciclos de prueba con métricas (total, pass, fail, porcentaje)
> * Definición clara de estados (Blocked, Fail, etc.)
> * Observaciones críticas
> * Riesgos reales derivados de los resultados
>
> Datos:
>
> * Project Key: KAN
> * Base URL: [colocar URL]
> * Estados: B, F, W, N, P (definidos)
>
> No quiero relleno ni texto genérico. Si falta información, indícalo y no inventes.

---

### Prompt 5

> Analiza mi conjunto de casos de prueba y ciclos.
>
> Identifica:
>
> * Módulos sobrecubiertos
> * Módulos subcubiertos o ignorados
> * Riesgos reales de esa distribución
> * Fallos que podrían llegar a producción
>
> No suavices la crítica. Señala directamente errores de enfoque o malas decisiones.

---

### Prompt 6

> Convierte el siguiente texto en una sección de README profesional.
>
> Debe incluir:
>
> * Redacción clara y técnica
> * Estructura en Markdown (encabezados, listas)
> * Lenguaje preciso (sin relleno)
> * Consistencia terminológica
>
> Además:
>
> * Señala si el contenido no es suficiente para documentación seria
> * No adornes: prioriza claridad sobre longitud
>
> Texto: *(no proporcionado)*

---

### Prompt 7

> Ahora ayúdame a corregir errores de redacción de este README:
> "En este apartado se presenta la UX (experiencia de usuario) y la UI (interfaz de usuario), donde se muestra el desarrollo de sketches, wireframes, mockups y el mapa de navegación, alineados con los requerimientos del sistema."

---

### Prompt 8

> "Tengo un error de base de datos con mi modelo Ganado. Sequelize está intentando buscar una columna `id`, pero mi llave primaria en la base de datos se llama `id_animal`. ¿Cómo debo configurar el controlador para que la consulta use `id_animal` y no falle?"

---

### Prompt 9

> "Estoy trabajando en mi controlador `apiGanadoController.js` y tengo problemas con las peticiones PUT y DELETE. Recibo un error 404 en Postman. ¿Cómo debo estructurar la ruta para que coincida con el método HTTP correcto (RESTful) y pase el ID correctamente?"

---

### Prompt 10

> "Estoy implementando un CRUD para el módulo de Ganado. Ya tengo el modelo y las rutas base. Ayúdame a verificar si la lógica en mis controladores (`obtenerGanado`, `registrarGanado`, `actualizarGanadoAPI`, `eliminarGanadoAPI`) es correcta para manejar peticiones JSON desde Postman, especialmente al validar la sesión del usuario con el token."

---

### Prompt 11

> "Necesito implementar un middleware de control de acceso basado en roles para mi API. Actualmente uso `identificarUsuario`, pero quiero restringir ciertos endpoints (como `eliminarGanadoAPI`) para que solo puedan ser ejecutados por usuarios con rol de `administrador`. ¿Cómo puedo modificar mi middleware actual o crear uno nuevo para validar esto?"

---

### Prompt 12

> "Estoy exponiendo objetos completos de Sequelize en mis respuestas JSON (`res.json(animal)`). ¿Cómo puedo configurar mi modelo o usar el método `toJSON` para excluir campos sensibles (como contraseñas, tokens internos o datos de auditoría) antes de enviar la respuesta al cliente?"

---

### Prompt 13

> "Estoy usando `multer` para guardar imágenes de fotografía en `actualizarGanadoAPI`. A veces el usuario no sube una foto nueva y el campo se corrompe. ¿Cómo puedo validar en mi controlador si el archivo existe antes de intentar guardarlo y qué estrategia recomiendas para manejar las imágenes anteriores si se sube una nueva?"

---

### Prompt 14

> "Quiero profesionalizar la documentación de mi API para que el equipo pueda consumirla fácilmente sin tener que leer el código. ¿Cómo puedo integrar `swagger-jsdoc` y `swagger-ui-express` para generar documentación automática basada en las anotaciones de mis rutas y controladores?"
