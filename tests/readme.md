# 📊 Gestión de Pruebas - Taltech

## 🔎 Descripción del sistema
Taltech es una aplicación web orientada a la gestión de ganado, diseñada para centralizar la administración de información relacionada con usuarios, animales y unidades productivas (ranchos). El sistema permite a los usuarios registrarse, autenticarse y mantener sesiones seguras mediante el uso de tokens, además de gestionar datos clave del negocio ganadero.

Dentro del alcance probado, se incluyen los siguientes módulos:

- **Autenticación y sesión:** Control de acceso mediante login, manejo de tokens, expiración de sesión por inactividad y recuperación de credenciales.
- **Registro de usuarios:** Alta de nuevos usuarios, validación de datos y control de duplicados.
- **Seguridad:** Implementación de validaciones como bloqueo de cuenta por intentos fallidos, verificación por correo electrónico y gestión de contraseñas.
- **Integración externa:** Uso de servicios externos para autenticación (OAuth), lo que introduce dependencias externas en el sistema.
- **Gestión básica de entidades:** Estructura inicial para el manejo de animales y ranchos, aunque con menor cobertura en pruebas respecto a otros módulos.

El enfoque actual de pruebas está orientado principalmente a garantizar la seguridad, integridad de datos y correcto funcionamiento del flujo de autenticación, que es crítico para el acceso al sistema.

---

## 🔗 Acceso a Jira
- Proyecto: **KAN**
- Base de navegación:
  - https://www.atlassian.com/es/software/jira

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

## 📁 Casos de Prueba

| ID | Nombre | Tipo | Link |
|----|--------|------|------|
| KAN-TC-15 | Recuperación del sistema ante error inesperado | Estabilidad | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/W2PMtAOQHwlaoy/1?projectId=10000&projectKey=KAN) |
| KAN-TC-14 | Validación de stock en registro de ventas | Backend | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/QVbnsavgCGgYaO/1?projectId=10000&projectKey=KAN) |
| KAN-TC-13 | Expiración de sesión por inactividad | Seguridad | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/1614I2OWCLqwyP/1?projectId=10000&projectKey=KAN) |
| KAN-TC-12 | Manejo de fallo de servicio externo | Integración | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/ddnEiqgAFjOndj/1?projectId=10000&projectKey=KAN) |
| KAN-TC-11 | Integridad referencial en BD | Backend | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/35jaHjMnianvQL/1?projectId=10000&projectKey=KAN) |
| KAN-TC-10 | Registro con redes sociales | OAuth | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/ZzJls89wT7xdd2/1?projectId=10000&projectKey=KAN) |
| KAN-TC-9 | Bloqueo de cuenta (5 intentos) | Seguridad | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/YL6VImGlfmqppP/1?projectId=10000&projectKey=KAN) |
| KAN-TC-8 | Error de token e interfaz | UI | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/b4yAh9rjSlqwwa/1?projectId=10000&projectKey=KAN) |
| KAN-TC-7 | Cambio de password fallido | Seguridad | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/35jaHjMniaKW8N/1?projectId=10000&projectKey=KAN) |
| KAN-TC-6 | Cambio de password exitoso | Seguridad | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/85wnHLAgTP57WZ/1?projectId=10000&projectKey=KAN) |
| KAN-TC-5 | Validación por email | Seguridad | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/R7brhZ9dT5EkrZ/1?projectId=10000&projectKey=KAN) |
| KAN-TC-4 | Validación de duplicados | Backend | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/lzaKs82aTamvEV/1?projectId=10000&projectKey=KAN) |
| KAN-TC-3 | Validación frontend (errores) | UI | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/V2b9tb53szoWaN/1?projectId=10000&projectKey=KAN) |
| KAN-TC-2 | Registro exitoso de usuario | Registro | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/z7m5h9GYS6zRr1/1?projectId=10000&projectKey=KAN) |
| KAN-TC-1 | Acceso exitoso (login) | Login | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCaseDetail/MoPmUbyos7qLnA/1?projectId=10000&projectKey=KAN) |

---

## 🔄 Ciclos de Prueba

| ID | Nombre | Total | Pass | Fail | % Éxito | Link |
|----|--------|-------|------|------|----------|------|
| KAN-TR-5 | Integración y Estabilidad del Sistema | 4 | 1 | 0 | 25% | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCycleDetail/YL6VImGlfPmGEM?projectId=10000&projectKey=KAN) |
| KAN-TR-4 | Seguridad, Tokens y Recuperación | 5 | 5 | 0 | 100% | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCycleDetail/9AQrij9qiGymqd?projectId=10000&projectKey=KAN) |
| KAN-TR-3 | Autenticación y Sesión | 2 | 2 | 0 | 100% | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCycleDetail/mqmGUxEGc6Mjwy?projectId=10000&projectKey=KAN) |
| KAN-TR-2 | Login y Gestión de Sesión | 4 | 3 | 1 | 75% | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCycleDetail/MoPmUbyosV7gmY?projectId=10000&projectKey=KAN) |
| KAN-TR-1 | Autenticación | 10 | 9 | 1 | 90% | [Ver](https://taltech-utxicotepec-team-isj6jt4y.atlassian.net/jira/apps/8b7b816c-2b85-4e73-ae22-aa0e6f0407ec/53926dc7-47de-4878-9fc2-5033dde60120/TestCycleDetail/q31zFJ7kTdzDaw?projectId=10000&projectKey=KAN) |

---

## 📊 Resumen General

- Total de casos de prueba: **15**
- Total de ciclos ejecutados: **5**
- Cobertura enfocada en autenticación, seguridad e integración

### Observaciones críticas
- La mayoría de pruebas se concentran en autenticación, dejando menor cobertura en módulos de negocio (ganado y ranchos)
- Existe dependencia de servicios externos (OAuth), lo cual introduce riesgos de bloqueo
- Algunos ciclos presentan resultados parciales, indicando posibles problemas de estabilidad

---

## ⚠️ Riesgos identificados
- Fallos en servicios externos
- Problemas de expiración de tokens
- Validaciones inconsistentes entre frontend y backend

---

## 📌 Conclusión
El proceso de pruebas realizado permite identificar que el sistema presenta un comportamiento estable en los módulos relacionados con autenticación, seguridad y gestión de sesiones, alcanzando altos porcentajes de éxito en varios ciclos de prueba. Esto indica que los mecanismos de control de acceso, validación de usuarios y manejo de credenciales funcionan de manera consistente bajo los escenarios evaluados.

Sin embargo, existe un desbalance importante en la cobertura de pruebas. La mayoría de los casos se concentran en autenticación y seguridad, mientras que los módulos principales del negocio, como la gestión de ganado y ranchos, tienen una representación limitada. Esto implica que, aunque el acceso al sistema sea confiable, no se puede garantizar el mismo nivel de calidad en las funcionalidades clave que aportan valor al usuario final.

Adicionalmente, la presencia de integraciones externas, como el uso de OAuth, introduce riesgos que no dependen completamente del sistema, tales como fallos de disponibilidad o problemas en la comunicación con servicios de terceros. Estos escenarios, aunque parcialmente considerados, requieren una estrategia más robusta de pruebas para asegurar la resiliencia del sistema.

En conjunto, el sistema demuestra una base sólida en términos de seguridad y control de acceso, pero aún requiere ampliar su cobertura de pruebas hacia los módulos funcionales del dominio para reducir riesgos en un entorno de uso real. Sin esta ampliación, existe la posibilidad de que errores críticos pasen desapercibidos fuera del flujo de autenticación.