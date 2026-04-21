import jwt from 'jsonwebtoken';
import Usuario from '../models/usuario.js';

/**
 * Middleware para proteger rutas y pasar datos del usuario a las vistas (Pug)
 */
const identificarUsuario = async (req, res, next) => {
    // 1. Obtener el token de las cookies
    const { _token } = req.cookies;

    // Si no hay token, no está autenticado
    if (!_token) {
        res.locals.autenticado = false; // Útil para el Header
        return res.redirect('/auth/login');
    }

    // 2. Validar el token
    try {
        // Decodificamos el JWT usando la llave secreta
        const decoded = jwt.verify(_token, process.env.JWT_SECRET);
        
        // Buscamos al usuario por ID (manejando ambos nombres de propiedad por seguridad)
        const idABuscar = decoded.id_usuario || decoded.id;

        // Buscamos al usuario en la DB
        // Nota: Asegúrate de tener el scope 'eliminarPassword' en tu modelo o quita esa parte
        const usuario = await Usuario.findByPk(idABuscar, {
            attributes: ['id_usuario', 'nombre', 'correo'] 
        });

        // 3. Verificar si el usuario aún existe en la base de datos
        if (usuario) {
            // Pasamos el objeto usuario al Request para usarlo en controladores
            req.usuario = usuario;
            
            // Variables disponibles globalmente en tus archivos .pug (Header/Nav)
            res.locals.autenticado = true;
            res.locals.usuario = usuario; 

            return next();
        } else {
            // Si el token es válido pero el usuario ya no existe
            return res.clearCookie('_token').redirect('/auth/login');
        }

    } catch (error) {
        console.log("--- ERROR EN VALIDACIÓN DE SESIÓN ---");
        console.log(error.message);
        
        // Si el token expiró o es inválido, limpiamos la cookie y mandamos al login
        return res.clearCookie('_token').redirect('/auth/login');
    }
};

export default identificarUsuario;