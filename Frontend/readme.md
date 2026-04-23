# Taltech - Frontend

## Contexto del Frontend

El frontend de **Taltech** es la capa de presentación del sistema, encargada de mostrar la información ganadera y permitir la interacción del usuario con la plataforma.

Está diseñado para facilitar tareas como:

- Registro y consulta de ganado  
- Gestión de alimentación y sanidad  
- Visualización de información relevante  

El enfoque principal es ofrecer una interfaz simple y clara para usuarios con poca experiencia en herramientas digitales.

## Tecnologías Utilizadas

- **Pug** – Motor de plantillas para generación de vistas HTML  
- **Tailwind CSS** – Framework de estilos basado en utilidades  
- **JavaScript** – Interactividad del lado del cliente  


## Arquitectura del Proyecto

El frontend sigue una estructura basada en vistas renderizadas:

- **Views (Pug)** → Plantillas principales del sistema  
- **Layouts** → Estructuras base reutilizables  
- **Components** → Fragmentos reutilizables (header, navbar, tablas)  
- **Assets** → Archivos estáticos (CSS generado, imágenes)  
- **Scripts** → Funciones JavaScript del cliente  


## Estructura de Archivos

> TALTECH-FRONTEND  
>  
> | - **views**  
>   &nbsp;&nbsp;| - **layouts** (plantillas base)  
>   &nbsp;&nbsp;| - **components** (componentes reutilizables)  
>   &nbsp;&nbsp;| - **pages** (vistas principales)  
>  
> | - **public**  
>   &nbsp;&nbsp;| - **css** (estilos compilados con Tailwind)  
>   &nbsp;&nbsp;| - **js** (scripts del cliente)  
>   &nbsp;&nbsp;| - **img** (imágenes)  
>  
> | - **tailwind.config.js**  
> | - **package.json**  

## Funcionalidades Principales


- Formularios para registro de datos  
- Visualización de información del ganado  
- Navegación entre módulos del sistema  
- Interacción básica con el usuario  



## Integración con Backend

Las vistas consumen información del backend mediante:

- Renderizado desde el servidor (datos enviados a Pug)  
- Peticiones HTTP usando JavaScript cuando es necesario  
