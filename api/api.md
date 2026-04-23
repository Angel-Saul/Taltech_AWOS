# 🐮 Taltech API - Gestión Ganadera

**Taltech API** es un sistema backend diseñado para la digitalización del sector ganadero. Permite la gestión de usuarios, ranchos e inventario de ganado, integrando autenticación segura mediante JWT y operaciones CRUD bajo un entorno escalable.

---

## 🚀 Tecnologías Utilizadas

* **Runtime:** Node.js
* **Framework:** Express
* **ORM:** Sequelize
* **Base de Datos:** MySQL
* **Autenticación:** JSON Web Tokens (JWT)
* **Validación:** Guard Clauses

---

## 🛠️ Instalación y Configuración

### 1. Clonar repositorio

```bash
git clone [url-de-tu-repositorio]
cd AWOS_Taltech
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Variables de entorno

```env
PORT=3000
DB_NAME=db_ganado
DB_USER=root
DB_PASS=tu_contraseña
DB_HOST=localhost
JWT_SECRET=tu_secreto
```

### 4. Ejecutar

```bash
npm run dev
```

---

## 🌐 Endpoints de la API (Swagger)

### 🔐 Autenticación

| Método | Endpoint                             |
| ------ | ------------------------------------ |
| POST   | http://localhost:3000/api/auth/login |

---

### 👤 Usuario

| Método | Endpoint                                     |
| ------ | -------------------------------------------- |
| GET    | http://localhost:3000/api/usuario/perfil     |
| PATCH  | http://localhost:3000/api/usuario/actualizar |

---

### 🌾 Ranchos

| Método | Endpoint                                  |
| ------ | ----------------------------------------- |
| POST   | http://localhost:3000/api/rancho/registro |
| PUT    | http://localhost:3000/api/rancho/{id}     |
| PATCH  | http://localhost:3000/api/rancho/{id}     |

---

### 🐮 Ganado

| Método | Endpoint                                     |
| ------ | -------------------------------------------- |
| GET    | http://localhost:3000/api/inventario         |
| GET    | http://localhost:3000/api/ganado             |
| POST   | http://localhost:3000/api/ganado             |
| PATCH  | http://localhost:3000/api/ganado/{id}        |
| DELETE | http://localhost:3000/api/ganado/{id}        |
| POST   | http://localhost:3000/api/ganado/editar/{id} |

---

## 🛡️ Manejo de Errores

* `200 / 201` → Éxito
* `400` → Datos incorrectos
* `401` → No autorizado
* `403` → Prohibido
* `404` → No encontrado

---

## 🧪 Pruebas con Postman

### 1. Login sin datos

**Descripción:** Validación de campos obligatorios.

```http
POST http://localhost:3000/api/auth/login
```

Body:

```json
{}
```

Resultado: `400 Bad Request`

**Evidencia:**
![error](/assets/pruebas/validacion-error.png)

---

### 2. Login correcto

**Descripción:** Inicio de sesión válido.

```http
POST http://localhost:3000/api/auth/login
```

```json
{
  "email": "usuario@ejemplo.com",
  "password": "Password123"
}
```

Resultado: `200 OK`

**Evidencia:**
![login](/assets/pruebas/login-exitoso.png)

---

### 3. Acceso con token

**Descripción:** Acceso a ruta protegida.

```http
GET http://localhost:3000/api/ganado
Authorization: Bearer TOKEN
```

Resultado: `200 OK`

**Evidencia:**
![token](/assets/pruebas/con-token.png)

---

### 4. Registro usuario

**Descripción:** Crear usuario nuevo.

```http
POST http://localhost:3000/api/auth/registro
```

```json
{
  "nombre": "Luis",
  "apellido_p": "Cázarez",
  "apellido_m": "Márquez",
  "genero": "Masculino",
  "email": "nuevo@prueba.com",
  "password": "Password123",
  "fecha_n": "2000-01-01"
}
```

Resultado: `201 Created`

**Evidencia:**
![registro](/assets/pruebas/registro.png)

---

### 5. Registro vacío

**Descripción:** Validación de datos.

```http
POST http://localhost:3000/api/auth/registro
```

```json
{}
```

Resultado: `400 Bad Request`

**Evidencia:**
![registro error](/assets/pruebas/registro-error.png)

---

### 6. Login incorrecto

**Descripción:** Credenciales inválidas.

```http
POST http://localhost:3000/api/auth/login
```

Resultado: `401 Unauthorized`

**Evidencia:**
![login error](/assets/pruebas/login-error.png)

---

### 7. Sin token

**Descripción:** Acceso bloqueado.

```http
GET http://localhost:3000/api/ganado
```

Resultado: `401 Unauthorized`

**Evidencia:**
![sin token](/assets/pruebas/sin-token.png)

---

### 8. Token inválido

**Descripción:** Token incorrecto.

```http
GET http://localhost:3000/api/ganado
Authorization: Bearer TOKEN_INVALIDO
```

Resultado: `403 Forbidden`

**Evidencia:**
![token invalido](/assets/pruebas/token-invalido.png)

---

### 9. Actualizar datos de ganado

**Descripción:** Modificar la información (ej. peso o estado) de un animal existente.

```http
POST http://localhost:3000/api/ganado/editar/1
```

Resultado: `200 OK`

**Evidencia:**
![recuperar](/assets/pruebas/recuperar.png)

---

### 10. Eliminar un registro de animal

**Descripción:** Borrar un animal del sistema cuando ya no es necesario (por ejemplo, si fue vendido o si el registro fue erróneo).

```http
DELETE http://localhost:3000/api/ganado/1
```

Resultado: `200 OK`

**Evidencia:**
![no existe](/assets/pruebas/eliminado.png)

---

## 👨‍💻 Autor

* **Luis Felipe Cázarez Márquez**
* **Proyecto:** Taltech
* **UTXJ**
