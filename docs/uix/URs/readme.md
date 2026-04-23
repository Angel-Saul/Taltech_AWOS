# Taltech

## Contexto general del sistema:

El prototipo web Taltech se desarrolla en el sector ganadero, específicamente orientado a unidades de producción de pequeña y mediana escala. En este entorno, la gestión de la información se caracteriza por la prevalencia de prácticas tradicionales, donde los procesos administrativos y operativos —tales como registros sanitarios, control de alimentación, inventario ganadero y seguimiento productivo— se ejecutan mediante herramientas manuales (papel, planillas, registros físicos).

1. Esta situación genera tres limitaciones estructurales:

2. Baja eficiencia en la operación diaria,

3. Falta de precisión en los datos registrados,

4. Escasa disponibilidad de información oportuna para la toma de decisiones.

Por lo tanto, el prototipo web propuesto responde directamente a la necesidad de superar dichas limitaciones mediante una solución digital adaptada al contexto productivo y tecnológico del sector.

---

# Documentación

## Definición de Roles del Sistema

El sistema Taltech implementa un modelo de control de acceso basado en roles implícitos, donde las capacidades del usuario dependen del tipo de interacción permitida dentro del sistema.

Actualmente se definen dos roles principales:

* Comprador
* Administrador

---

## Rol: Comprador

### Descripción

El comprador es el usuario final del sistema, encargado de consultar la información disponible en el mercado ganadero y realizar adquisiciones de ganado.

---

### Permisos

* Visualizar el catálogo de ganado disponible
* Consultar información detallada de cada publicación
* Realizar compras de ganado
* Acceder al sistema mediante autenticación (login)

---

### Restricciones

* No puede registrar ranchos
* No puede publicar ganado
* No puede modificar información del sistema
* No puede gestionar usuarios

---

### Flujo de interacción

1. El usuario accede al sistema
2. Realiza autenticación (login)
3. Consulta el mercado de ganado
4. Selecciona un producto
5. Realiza la compra

---

### Relación con el sistema

El comprador interactúa principalmente con:

* Módulo de mercado
* Módulo de compras

---

## Rol: Administrador

### Descripción

El administrador es el usuario con control total del sistema, responsable de la gestión de la información, control de usuarios y supervisión de las operaciones.

---

### Permisos

* Registrar ranchos
* Publicar ganado en el sistema
* Comprar ganado
* Gestionar información del sistema
* Administrar accesos y permisos
* Acceder al panel administrativo

---

### Responsabilidades

* Mantener actualizada la información del sistema
* Supervisar las operaciones de compra y venta
* Controlar el acceso de los usuarios

---

### Flujo de interacción

1. Accede al sistema mediante login
2. Ingresa al panel administrativo
3. Gestiona ranchos
4. Publica ganado
5. Supervisa operaciones

---

### Relación con el sistema

El administrador interactúa con:

* Módulo de administración
* Módulo de publicaciones
* Módulo de compras
* Módulo de gestión de datos

---

## Consideración técnica

Actualmente, el sistema no implementa una tabla de roles en la base de datos, por lo que la diferenciación entre comprador y administrador se maneja a nivel lógico en la aplicación.

Como mejora futura se recomienda:

* Implementar una tabla de roles
* Asociar cada usuario a un rol
* Controlar accesos mediante middleware


---

## Equipo de Desarrollo

| Integrante                  | Contacto                                     | Rol                                         | Observaciones        |
| --------------------------- | -------------------------------------------- | ------------------------------------------- | -------------------- |
| Angel Saul Barrios Martinez | [@Angel-Saul](https://github.com/Angel-Saul) | Líder de equipo y desarrollador de frontend | Revisado y aprobado. |
| Jonhy Nery Hernandez        | [@Jonhy-1st](https://github.com/Jonhy-1st)   | Desarrollador de bases de datos             | Revisado y aprobado. |
| Luis Felipe Cazarez Marquez | [@xluiscm](https://github.com/xluiscm)       | Desarrollador de backend                    | Revisado.            |
| Aylin Esteban Luna          | [@Aylin-Luna](https://github.com/Aylin-Luna) | Desarrollador de documentación              | Revisado.            |
