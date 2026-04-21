# Taltech - API REST

## Descripción General

La API de **Taltech** es el componente encargado de gestionar la lógica de negocio y la comunicación entre el frontend y la base de datos del sistema ganadero.

Permite la administración de:

- Ganado  
- Registros sanitarios  
- Alimentación  
- Usuarios y autenticación  

La API sigue principios **RESTful**, utilizando métodos HTTP estándar y respuestas en formato **JSON**.

---

## Contexto del Sistema

El sistema Taltech está orientado al sector ganadero de pequeña y mediana escala, donde comúnmente se utilizan registros manuales.

La API busca resolver:

- Baja eficiencia operativa  
- Falta de precisión en los datos  
- Limitada disponibilidad de información  

Mediante la digitalización y centralización de la información.

---

## Tecnologías Utilizadas

- **Node.js**
- **Express.js**
- **MySQL**
- **JWT (JSON Web Tokens)**
- **dotenv**

---

## Base URL
http://localhost:3000/api


---

## Autenticación

La API utiliza autenticación basada en **JWT**.

### Flujo de autenticación

1. El usuario inicia sesión (`/auth/login`)
2. El servidor valida credenciales
3. Se genera un token JWT con expiración
4. El cliente envía el token en cada petición protegida

### Header requerido
Authorization: Bearer <token>


---

## Expiración de Tokens

Los tokens incluyen un tiempo de expiración definido:
JWT_EXPIRES_IN=1h


### Comportamiento

- Token válido → acceso permitido  
- Token expirado → `401 Unauthorized`  
- Se requiere autenticación nuevamente  

### Limitaciones actuales

- No hay refresh tokens  
- No hay revocación de tokens  
- No hay manejo de sesiones múltiples  

---

## Endpoints

### Autenticación

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/auth/login` | Iniciar sesión |
| POST | `/auth/register` | Registrar usuario |

---

### Ganado

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/ganado` | Obtener todos los registros |
| GET | `/ganado/:id` | Obtener registro por ID |
| POST | `/ganado` | Crear registro |
| PUT | `/ganado/:id` | Actualizar registro |
| DELETE | `/ganado/:id` | Eliminar registro |

---


---

### Alimentación

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/alimentacion` | Obtener registros |
| POST | `/alimentacion` | Crear registro |

---

## Formato de Respuestas

### Éxito

```json
{
  "success": true,
  "data": {},
  "message": "Operación exitosa"
}

### Comportamiento

- Token válido → acceso permitido  
- Token expirado → `401 Unauthorized`  
- Se requiere autenticación nuevamente  

### Limitaciones actuales

- No hay refresh tokens  
- No hay revocación de tokens  
- No hay manejo de sesiones múltiples  

---

## Endpoints

### Autenticación

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/auth/login` | Iniciar sesión |
| POST | `/auth/register` | Registrar usuario |

---

### Ganado

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/ganado` | Obtener todos los registros |
| GET | `/ganado/:id` | Obtener registro por ID |
| POST | `/ganado` | Crear registro |
| PUT | `/ganado/:id` | Actualizar registro |
| DELETE | `/ganado/:id` | Eliminar registro |

---

### Sanitario

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/sanitario` | Obtener registros |
| POST | `/sanitario` | Crear registro |

---

### Alimentación

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/alimentacion` | Obtener registros |
| POST | `/alimentacion` | Crear registro |

---

## Formato de Respuestas

### Éxito

```json
{
  "success": true,
  "data": {},
  "message": "Operación exitosa"
}