import express from "express";
// Controladores
import { 
    formularioLogin, 
    autenticar, 
    formularioRegistro, 
    registrar,
    confirmar,
    formularioOlvidePassword,
    resetPassword,
    comprobarToken,
    nuevoPassword,
    landingPage, 
    bienvenida 
} from "../controllers/authController.js";

import { 
    perfil, 
    mostrarConfiguracion, 
    actualizarCampo, 
    cambiarPassword 
} from "../controllers/usuarioController.js";

import { 
    formularioRegistroRancho, 
    registrarRancho, 
    mostrarRancho, 
    editarRancho, 
    actualizarRancho 
} from "../controllers/ranchoController.js";

import { 
    mostrarInventario, 
    registrarAnimal 
} from "../controllers/ganadoController.js";

// Middlewares
import identificarUsuario from "../middleware/identificarUsuario.js";
import upload from "../middleware/subirImagen.js"; // El archivo que creamos para Multer

const router = express.Router();

/**
 * --- PÁGINAS PÚBLICAS ---
 */
router.get('/', landingPage);

/**
 * --- AUTENTICACIÓN ---
 */
router.get('/login', formularioLogin);
router.post('/login', autenticar); 

router.get('/registro', formularioRegistro);
router.post('/registro', registrar); 

router.get('/confirmar/:token', confirmar);

/**
 * --- RECUPERACIÓN DE CONTRASEÑA ---
 */
router.get('/recuperacionPass', formularioOlvidePassword);
router.post('/recuperacionPass', resetPassword); 
router.get('/recuperacionPass/:token', comprobarToken);
router.post('/recuperacionPass/:token', nuevoPassword);

/**
 * --- RUTAS PROTEGIDAS ---
 */

// Bienvenida
router.get('/bienvenida', identificarUsuario, bienvenida); 

// Perfil y Configuración
router.get('/perfil', identificarUsuario, perfil); 
router.get('/configuracion', identificarUsuario, mostrarConfiguracion);
router.post('/configuracion/actualizar', identificarUsuario, actualizarCampo);
router.post('/configuracion/password', identificarUsuario, cambiarPassword);

/**
 * GESTIÓN DE RANCHOS
 * Se añade upload.single('fotografia') para que Multer procese los datos 
 * y el middleware CSRF pueda leer el token en el body.
 */
router.get('/registroRancho', identificarUsuario, formularioRegistroRancho);
router.post('/registroRancho', 
    identificarUsuario, 
    upload.single('fotografia'), 
    registrarRancho
); 

router.get('/mis-ranchos', identificarUsuario, mostrarRancho);

// Edición de Rancho
router.get('/editarRancho', identificarUsuario, editarRancho);
router.post('/editarRancho', 
    identificarUsuario, 
    upload.single('fotografia'), // 1. Multer abre el formulario y extrae el token
    actualizarRancho             // 2. Aquí ya llega el token listo para validarse
);

/**
 * GESTIÓN DE GANADO
 */
router.get('/inventario', identificarUsuario, mostrarInventario);
router.post('/inventario', 
    identificarUsuario, 
    upload.single('fotografia'), // Importante: el nombre 'fotografia' debe coincidir con el 'name' del input
    registrarAnimal
);
export default router;