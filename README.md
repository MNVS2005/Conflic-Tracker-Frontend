# 🌍 Conflict Tracker

Aplicación full-stack para la gestión y visualización de conflictos, desarrollada con **Vue.js (frontend)** y **Spring Boot (backend)**, conectada a una base de datos PostgreSQL en **Supabase**.

---

## 🚀 Demo

* 🌐 Frontend (Vercel):
  https://conflic-tracker-frontend-4rdiwdk62-mnvs2005s-projects.vercel.app

* ⚙️ Backend (Railway):
  https://conflicte-tracker-api-production.up.railway.app

---

## 🧩 Arquitectura

* **Frontend**

  * Vue 3 + Vite
  * Pinia (gestión de estado)
  * Axios (consumo API)
  * Desplegado en Vercel

* **Backend**

  * Spring Boot
  * API REST
  * Hibernate / JPA
  * Desplegado en Railway

* **Base de datos**

  * PostgreSQL (Supabase)
  * Conexión mediante pooler

---

## ⚙️ Variables de entorno

### 🔹 Frontend (.env)

```env
VITE_API_URL=https://conflicte-tracker-api-production.up.railway.app
```

En Vercel:

* Ir a **Settings → Environment Variables**
* Añadir `VITE_API_URL`

---

### 🔹 Backend (Railway)

```env
DB_URL=jdbc:postgresql://aws-1-eu-central-1.pooler.supabase.com:6543/postgres
DB_USERNAME=postgres.ghuvadcnxmsyphzwqcez
DB_PASSWORD=********
SPRING_PROFILES_ACTIVE=prod
```

---

## 🛠️ Instalación local

### 1. Clonar repositorio

```bash
git clone https://github.com/tu-usuario/conflict-tracker.git
cd conflict-tracker
```

---

### 2. Frontend

```bash
cd Conflict-Tracker_Frontend
npm install
npm run dev
```

---

### 3. Backend

```bash
cd Conflict-Tracker-API
./mvnw spring-boot:run
```

---

## 🔌 Endpoints principales

```http
GET     /api/admin/conflict
GET     /api/admin/conflict/{id}
POST    /api/admin/conflict
PUT     /api/admin/conflict/{id}
DELETE  /api/admin/conflict/{id}
```

---

## ⚠️ Problemas encontrados y soluciones

### ❌ Error: conexión a base de datos

* **Causa:** variables no configuradas
* **Solución:** añadir `DB_URL`, `DB_USERNAME`, `DB_PASSWORD`

---

### ❌ Error: Supabase (Tenant not found)

* **Causa:** usuario incorrecto
* **Solución:** usar formato:

```text
postgres.<project-ref>
```

---

### ❌ Error: 404 en frontend

* **Causa:** uso de URL relativa (`/api/...`)
* **Solución:** usar:

```js
import.meta.env.VITE_API_URL
```

---

### ❌ Error: variables no disponibles en producción

* **Causa:** no configuradas en Vercel
* **Solución:** añadir env vars y redeploy

---

### ❌ Error: build (Vite alias)

* **Causa:** uso de `@` sin configurar
* **Solución:** usar rutas relativas o configurar alias

---

### ❌ Error: CORS

* **Causa:** backend bloquea peticiones externas
* **Solución:**

```java
.allowedOrigins("https://conflic-tracker-frontend-4rdiwdk62-mnvs2005s-projects.vercel.app")
```

---

## 🧠 Mejoras futuras

* 🔐 Autenticación con JWT
* 👥 Gestión de usuarios
* 📊 Dashboard con estadísticas
* 🧪 Tests automatizados

---

## 📄 Licencia

MIT License

---

## 👨‍💻 Autor

Proyecto desarrollado como práctica de despliegue full-stack con tecnologías modernas.

---
