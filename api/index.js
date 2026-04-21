import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import db, { connectDB } from "./config/db.js";
import cookieParser from 'cookie-parser';
import csrf from 'csurf';

// Importaciones de modelos
import Rancho from "./models/Rancho.js";
import Ganado from "./models/Ganado.js"; 
import Raza from "./models/Raza.js";
import TipoGanado from "./models/tipo_ganado.js";
import Peso from "./models/Peso.js";
import Altura from "./models/Altura.js";

const app = express();

/**
 * 1. CONEXIÓN A LA BASE DE DATOS
 */
connectDB();

/**
 * 2. CONFIGURACIÓN Y MIDDLEWARES
 */
// Lectura de datos de formularios y JSON (Debe ir antes de CSRF)
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

// Habilitar Cookies (Obligatorio para CSRF)
app.use(cookieParser()); 

// Carpeta pública para archivos estáticos
app.use(express.static('public'));

// SERVIR CARPETA DE UPLOADS (Añadido para visualización de imágenes)
app.use('/uploads', express.static('uploads'));

/**
 * 3. PROTECCIÓN CSRF
 * Se configura con una cookie para que sea persistente
 */
app.use(csrf({ 
    cookie: {
        key: '_csrf',
        path: '/',
        httpOnly: true,
        secure: false, // Cambiar a true si usas HTTPS
        sameSite: 'lax'
    }
}));

// Configuración de Pug
app.set('view engine', 'pug');
app.set('views', './views');

/**
 * 4. DEFINICIÓN DE RELACIONES ENTRE MODELOS
 */
Rancho.hasMany(Ganado, { foreignKey: 'id_rancho' });
Ganado.belongsTo(Rancho, { foreignKey: 'id_rancho' });

Ganado.belongsTo(Raza, { foreignKey: 'id_raza', as: 'datosRaza' });
Ganado.belongsTo(TipoGanado, { foreignKey: 'id_tipo_ganado', as: 'datosTipo' });

Ganado.hasMany(Peso, { foreignKey: 'id_animal' });
Peso.belongsTo(Ganado, { foreignKey: 'id_animal' });

Ganado.hasMany(Altura, { foreignKey: 'id_animal' });
Altura.belongsTo(Ganado, { foreignKey: 'id_animal' });

/**
 * 5. RUTAS
 */
// Redirección inicial
app.get('/', (req, res) => res.redirect('/inicio'));

// Ruta de Landing Page
app.get('/inicio', (req, res) => {
    res.render('landing', { 
        pagina: 'Inicio',
        ocultarTodo: false,
        csrfToken: req.csrfToken() // Generamos el token aquí
    });
});

// Todas las rutas de autenticación y gestión
app.use('/auth', usuarioRoutes);

/**
 * MANEJO DE ERRORES CSRF
 */
app.use((err, req, res, next) => {
    if (err.code === 'EBADCSRFTOKEN') {
        return res.status(403).render('templates/mensaje', {
            pagina: 'Error de Seguridad',
            mensaje: 'El token CSRF es inválido o el formulario ha expirado. Por favor, intenta de nuevo.'
        });
    }
    next(err);
});

/**
 * 7. ARRANQUE DEL SERVIDOR
 */
const PORT = process.env.PORT || 3000;

const srv = async () => {
    try {
        await db.sync(); 
        
        app.listen(PORT, () => {
            console.log(`\x1b[32m%s\x1b[0m`, `---------------------------------------------------`);
            console.log(`\x1b[32m%s\x1b[0m`, `   Servidor Taltech corriendo en: http://localhost:${PORT}`);
            console.log(`\x1b[32m%s\x1b[0m`, `---------------------------------------------------`);
        });
    } catch (error) {
        console.error('\x1b[31m%s\x1b[0m', 'Error al sincronizar la base de datos:', error);
    }
}

srv();