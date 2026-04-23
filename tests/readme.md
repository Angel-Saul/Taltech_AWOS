# 📊 Gestión de Pruebas - Taltech

## 🔎 Descripción del sistema
Taltech es una aplicación web orientada a la gestión de ganado, diseñada para centralizar la administración de información relacionada con usuarios, animales y unidades productivas (ranchos). El sistema permite a los usuarios registrarse, autenticarse y mantener sesiones seguras mediante el uso de tokens, además de gestionar datos clave del negocio ganadero.

Dentro del alcance probado, se incluyen los siguientes módulos:

- **Autenticación y sesión:** Control de acceso mediante login, manejo de tokens, expiración de sesión por inactividad y recuperación de credenciales.
- **Registro de usuarios:** Alta de nuevos usuarios, validación de datos y control de duplicados.
- **Seguridad:** Implementación de validaciones como bloqueo de cuenta por intentos fallidos, verificación por correo electrónico y gestión de contraseñas.
- **Integración externa:** Uso de servicios externos para autenticación (OAuth), lo que introduce dependencias externas en el sistema.
- **Gestión básica de entidades:** Estructura inicial para el manejo de animales y ranchos, aunque con menor cobertura en pruebas respecto a otros módulos.

---

## 🔗 Acceso a Jira
- Proyecto: **KAN**
- Base de navegación: [Jira Software](https://www.atlassian.com/es/software/jira)

---

## 🧪 Estados de ejecución
| Código | Estado | Descripción |
|--------|--------|------------|
| B | Blocked | Prueba bloqueada por dependencia externa |
| F | Fail | Prueba fallida |
| W | Work in Progress | Prueba en ejecución |
| N | Not Executed | Prueba no ejecutada |
| P | Pass | Prueba exitosa |

---

## 📁 Casos de Prueba (Plan de Pruebas)

A continuación se detallan los objetivos y funcionalidades evaluadas en cada caso de prueba, incluyendo sus respectivos enlaces de seguimiento:

| ID | Nombre | Tipo | Descripción | Link |
|----|--------|------|-------------|------|
| KAN-TC-15 | Recuperación del sistema | Estabilidad | Evalúa la capacidad de la app para restaurar su estado tras un error crítico. | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/W2PMtAOQHwlaoy/1?projectId=10000&projectKey=KAN) |
| KAN-TC-14 | Validación de stock | Backend | Verifica que no se permitan ventas si no hay animales registrados en el inventario. | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/QVbnsavgCGgYaO/1?projectId=10000&projectKey=KAN) |
| KAN-TC-13 | Expiración de sesión | Seguridad | Confirma que el token expire tras un tiempo de inactividad, forzando un nuevo login. | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/1614I2OWCLqwyP/1?projectId=10000&projectKey=KAN) |
| KAN-TC-12 | Manejo de fallo externo | Integración | Prueba la resiliencia de la app cuando los servicios de OAuth no están disponibles. | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/ddnEiqgAFjOndj/1?projectId=10000&projectKey=KAN) |
| KAN-TC-11 | Integridad referencial | Backend | Asegura que la eliminación de un usuario no deje datos huérfanos o inconsistentes en BD. | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/35jaHjMnianvQL/1?projectId=10000&projectKey=KAN) |
| KAN-TC-10 | Registro con RRSS | OAuth | Valida el flujo de creación de cuenta mediante servicios de Google o Facebook. | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/ZzJls89wT7xdd2/1?projectId=10000&projectKey=KAN) |
| KAN-TC-9 | Bloqueo de cuenta | Seguridad | Comprueba el bloqueo automático tras 5 intentos fallidos para prevenir ataques. | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/YL6VImGlfmqppP/1?projectId=10000&projectKey=KAN) |
| KAN-TC-8 | Error de token | UI | Verifica que el frontend muestre errores claros cuando un token es manipulado o nulo. | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/b4yAh9rjSlqwwa/1?projectId=10000&projectKey=KAN) |
| KAN-TC-7 | Password fallido | Seguridad | Valida que el sistema rechace cambios de clave si no cumplen con la política de seguridad. | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/35jaHjMniaKW8N/1?projectId=10000&projectKey=KAN) |
| KAN-TC-6 | Password exitoso | Seguridad | Confirma que el usuario puede actualizar su credencial y volver a loguearse con éxito. | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/85wnHLAgTP57WZ/1?projectId=10000&projectKey=KAN) |
| KAN-TC-5 | Validación por email | Seguridad | Asegura que se envíe y procese correctamente el enlace de confirmación al registrarse. | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/R7brhZ9dT5EkrZ/1?projectId=10000&projectKey=KAN) |
| KAN-TC-4 | Validación duplicados | Backend | Verifica que no se permitan dos usuarios con el mismo correo electrónico en la BD. | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/lzaKs82aTamvEV/1?projectId=10000&projectKey=KAN) |
| KAN-TC-3 | Validación UI | UI | Comprueba que los mensajes de error en formularios sean visibles y oportunos. | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/V2b9tb53szoWaN/1?projectId=10000&projectKey=KAN) |
| KAN-TC-2 | Registro exitoso | Registro | Valida la creación de un nuevo perfil de usuario con datos válidos de punta a punta. | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/z7m5h9GYS6zRr1/1?projectId=10000&projectKey=KAN) |
| KAN-TC-1 | Acceso (login) | Login | Verifica que las credenciales correctas permitan la entrada al dashboard del sistema. | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/MoPmUbyos7qLnA/1?projectId=10000&projectKey=KAN) |

---

## 🔄 Ciclos de Prueba

Los ciclos agrupan ejecuciones estratégicas para medir la calidad por áreas críticas:

1. **KAN-TR-5: Integración y Estabilidad del Sistema**
   - *¿Qué hace?*: Evalúa la robustez del sistema y su comunicación con bases de datos y servicios externos ante condiciones críticas.
2. **KAN-TR-4: Seguridad, Tokens y Recuperación**
   - *¿Qué hace?*: Se enfoca en validar que los mecanismos de protección (tokens, bloqueos y correos de seguridad) operen sin fallos.
3. **KAN-TR-3: Autenticación y Sesión**
   - *¿Qué hace?*: Garantiza que la persistencia del usuario y la gestión de permisos sean correctas durante la navegación.
4. **KAN-TR-2: Login y Gestión de Sesión**
   - *¿Qué hace?*: Pruebas de regresión centradas en el acceso tradicional y el ciclo de vida de la sesión activa.
5. **KAN-TR-1: Autenticación**
   - *¿Qué hace?*: Ciclo general inicial para validar la funcionalidad básica de registro e ingreso de nuevos usuarios.

### Tabla de Ejecución de Ciclos
| ID | Nombre | Total | Pass | Fail | % Éxito | Link |
|----|--------|-------|------|------|----------|------|
| KAN-TR-5 | Integración y Estabilidad | 4 | 1 | 0 | 25% | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCycleDetail/YL6VImGlfPmGEM?projectId=10000&projectKey=KAN) |
| KAN-TR-4 | Seguridad y Recuperación | 5 | 5 | 0 | 100% | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCycleDetail/9AQrij9qiGymqd?projectId=10000&projectKey=KAN) |
| KAN-TR-3 | Autenticación y Sesión | 2 | 2 | 0 | 100% | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCycleDetail/mqmGUxEGc6Mjwy?projectId=10000&projectKey=KAN) |
| KAN-TR-2 | Login y Gestión de Sesión | 4 | 3 | 1 | 75% | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCycleDetail/MoPmUbyosV7gmY?projectId=10000&projectKey=KAN) |
| KAN-TR-1 | Autenticación | 10 | 9 | 1 | 90% | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCycleDetail/q31zFJ7kTdzDaw?projectId=10000&projectKey=KAN) |

---

## 📊 Resumen General
- Total de casos de prueba: **15**
- Total de ciclos ejecutados: **5**
- Cobertura enfocada en autenticación, seguridad e integración.

### Observaciones críticas
- La mayoría de pruebas se concentran en autenticación, dejando menor cobertura en módulos de negocio (ganado y ranchos).
- Existe dependencia de servicios externos (OAuth), lo cual introduce riesgos de disponibilidad.
- Algunos ciclos presentan resultados parciales, indicando áreas que requieren re-evaluación tras correcciones.

---

## ⚠️ Riesgos identificados
- **Interrupción de Servicios Externos:** Caídas en OAuth pueden bloquear el acceso a usuarios de redes sociales.
- **Seguridad de Sesión:** Posibles vulnerabilidades si los tokens no expiran correctamente en todos los entornos.
- **Falta de Pruebas de Negocio:** Riesgo de errores lógicos en la gestión de stock de animales al no estar cubierto extensamente.

---


## 📌 Conclusión
El proceso de pruebas realizado confirma que el sistema **Taltech** es altamente confiable en sus flujos de acceso, seguridad y manejo de perfiles. Sin embargo, se recomienda expandir el plan de pruebas hacia las funcionalidades de gestión ganadera para asegurar que la integridad de los datos del negocio sea tan robusta como su sistema de autenticación.