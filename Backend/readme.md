# Taltech - Backend

## Contexto del Backend

El backend de **Taltech** está diseñado para gestionar la lógica de negocio y el almacenamiento de información del sistema ganadero. Su función principal es centralizar, procesar y validar los datos relacionados con el control sanitario, alimentación, inventario y seguimiento productivo del ganado.

A diferencia de los sistemas tradicionales basados en registros manuales, este backend permite:

- Persistencia estructurada de la información  
- Validación de datos en tiempo real  
- Acceso controlado mediante autenticación  
- Integración con el frontend a través de servicios API  

## Tecnologías Utilizadas

- **Node.js** – Entorno de ejecución  
- **Express.js** – Framework para la API  
- **MySQL** – Sistema de gestión de base de datos  
- **Sequelize / MySQL2** – ORM / Conexión a BD  
- **JWT** – Autenticación basada en tokens  
- **dotenv** – Manejo de variables de entorno  

## Arquitectura del Proyecto

El backend sigue una arquitectura en capas para separar responsabilidades:

- **Controllers** → Manejo de solicitudes HTTP  
- **Services** → Lógica de negocio  
- **Models** → Definición de entidades de la base de datos  
- **Routes** → Definición de endpoints  
- **Middlewares** → Validaciones y control de acceso  

## Estructura de Archivos

> TALTECH-BACKEND  
>  
> | - **src**  
>   &nbsp;&nbsp;| - **config** (configuración de base de datos)  
>   &nbsp;&nbsp;| - **controllers** (controladores de rutas)  
>   &nbsp;&nbsp;| - **models** (modelos de datos)  
>   &nbsp;&nbsp;| - **routes** (definición de endpoints)  
>   &nbsp;&nbsp;| - **services** (lógica de negocio)  
>   &nbsp;&nbsp;| - **middlewares** (auth, validaciones)  
>   &nbsp;&nbsp;| - **utils** (funciones auxiliares)  
>  
> | - **.env**  
> | - **app.js**  
> | - **package.json**  

## Endpoints Principales

### Auth
- `POST /api/auth/login`
- `POST /api/auth/register`

### Ganado
- `GET /api/ganado`
- `POST /api/ganado`
- `PUT /api/ganado/:id`
- `DELETE /api/ganado/:id`

### Registros Sanitarios
- `GET /api/sanitario`
- `POST /api/sanitario`

### Alimentación
- `GET /api/alimentacion`
- `POST /api/alimentacion`

## Configuración e Instalación


1. Clonar el repositorio  
2. Instalar dependencias:
   ```bash
   npm install