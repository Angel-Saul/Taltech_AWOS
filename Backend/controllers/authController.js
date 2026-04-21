import jwt from 'jsonwebtoken';
import Usuario from "../models/usuario.js";
import Rancho from "../models/Rancho.js";
import { emailRegistro, emailOlvidePassword } from '../helpers/emails.js';

// --- LOGIN ---
const formularioLogin = (req, res) => {
    res.render('auth/login', {
        pagina: "Inicia Sesión",
        csrfToken: req.csrfToken()
    });
}

const autenticar = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        // 1. Buscar al usuario
        const usuario = await Usuario.findOne({ where: { correo: email } });

        // 2. Validar existencia y password
        if (!usuario || !usuario.verificarPassword(password)) {
            return res.render('auth/login', {
                pagina: "Inicia Sesión",
                csrfToken: req.csrfToken(),
                errores: [{ msg: 'El correo o la contraseña son incorrectos' }]
            });
        }

        // 3. Verificar si está confirmado
        if (!usuario.confirmado) {
            return res.render('auth/login', {
                pagina: "Inicia Sesión",
                csrfToken: req.csrfToken(),
                errores: [{ msg: 'Tu cuenta no ha sido confirmada todavía' }]
            });
        }

        // 4. Generar JWT y Cookie
        const token = jwt.sign(
            { id: usuario.id_usuario, nombre: usuario.nombre }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1d' }
        );

        // 5. Redirección lógica corregida
        const rancho = await Rancho.findOne({ where: { id_usuario: usuario.id_usuario } });
        
        // Si no tiene rancho, lo mandamos a la previa de bienvenida
        const urlDestino = rancho ? '/auth/mis-ranchos' : '/auth/bienvenida';

        return res.cookie('_token', token, {
            httpOnly: true,
            secure: false, 
            sameSite: 'lax' 
        }).redirect(urlDestino);

    } catch (error) {
        console.log(error);
        res.render('auth/login', {
            pagina: "Inicia Sesión",
            csrfToken: req.csrfToken(),
            errores: [{ msg: 'Hubo un error al intentar iniciar sesión' }]
        });
    }
}

// --- REGISTRO ---
const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        pagina: "Regístrate con nosotros",
        csrfToken: req.csrfToken()
    });
}

const registrar = async (req, res) => {
    const { nombre, apellido_p, apellido_m, genero, email, password, password_confirm, fecha_n } = req.body;
    if (password !== password_confirm) {
        return res.render('auth/registro', {
            pagina: "Regístrate con nosotros",
            csrfToken: req.csrfToken(),
            errores: [{ msg: 'Las contraseñas no coinciden' }],
            usuario: { nombre, email, apellido_p, apellido_m, genero }
        });
    }
    try {
        const existeUsuario = await Usuario.findOne({ where: { correo: email } });
        if (existeUsuario) {
            return res.render('auth/registro', {
                pagina: "Regístrate con nosotros",
                csrfToken: req.csrfToken(),
                errores: [{ msg: 'Ese correo electrónico ya está registrado' }],
                usuario: { nombre, email, apellido_p, apellido_m, genero }
            });
        }
        
        const usuario = await Usuario.create({
            nombre,
            apellido_paterno: apellido_p,
            apellido_materno: apellido_m,
            genero,
            correo: email,
            contrasenia: password,
            fecha_nacimiento: fecha_n,
            token: Math.random().toString(32).substring(2),
            confirmado: false
        });

        await emailRegistro({
            nombre: usuario.nombre,
            correo: usuario.correo,
            token: usuario.token
        });

        res.render('templates/mensaje', {
            pagina: 'Revisa tu correo',
            mensaje: 'Hemos enviado un correo de confirmación, por favor revisa tu bandeja.'
        });
    } catch (error) {
        console.error("ERROR AL GUARDAR USUARIO:", error);
        res.render('auth/registro', {
            pagina: "Regístrate con nosotros",
            csrfToken: req.csrfToken(),
            errores: [{ msg: 'Error interno al procesar el registro' }],
            usuario: { nombre, email, apellido_p, apellido_m }
        });
    }
}

// --- CONFIRMACIÓN ---
const confirmar = async (req, res) => {
    const { token } = req.params;
    try {
        const usuario = await Usuario.findOne({ where: { token } });
        if (!usuario) {
            return res.render('auth/confirmacion', {
                pagina: 'Error de Confirmación',
                mensaje: 'El enlace de validación es inválido o ya ha expirado.',
                error: true
            });
        }
        usuario.token = null;
        usuario.confirmado = true;
        await usuario.save();
        res.render('auth/confirmacion', {
            pagina: 'Cuenta Confirmada',
            mensaje: '¡Tu cuenta ha sido validada con éxito! Ya puedes acceder a TalTech.',
            error: false
        });
    } catch (error) {
        console.error("Error en confirmación:", error);
    }
};

// --- RECUPERACIÓN DE CONTRASEÑA ---
const formularioOlvidePassword = (req, res) => {
    res.render('auth/recuperacionPass', {
        pagina: 'Recuperar Acceso',
        csrfToken: req.csrfToken()
    });
}

const resetPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const usuario = await Usuario.findOne({ where: { correo: email } });
        if (!usuario) {
            return res.render('auth/recuperacionPass', {
                pagina: 'Recuperar Acceso',
                csrfToken: req.csrfToken(),
                errores: [{ msg: 'El correo electrónico no pertenece a ningún usuario' }]
            });
        }

        usuario.token = Math.random().toString(32).substring(2);
        await usuario.save();

        await emailOlvidePassword({
            correo: usuario.correo,
            nombre: usuario.nombre,
            token: usuario.token
        });

        res.render('templates/mensaje', {
            pagina: 'Revisa tu bandeja',
            mensaje: 'Hemos enviado un enlace a tu correo para restablecer tu contraseña.'
        });

    } catch (error) {
        console.error(error);
    }
}

const comprobarToken = async (req, res) => {
    const { token } = req.params;
    try {
        const usuario = await Usuario.findOne({ where: { token } });
        if (!usuario) {
            return res.render('auth/confirmacion', {
                pagina: 'Error de Validación',
                mensaje: 'El enlace no es válido o ya ha expirado.',
                error: true
            });
        }
        res.render('auth/reset-password', {
            pagina: 'Restablece tu Contraseña',
            csrfToken: req.csrfToken()
        });
    } catch (error) {
        console.error(error);
    }
}

const nuevoPassword = async (req, res) => {
    const { password } = req.body;
    const { token } = req.params;

    try {
        const usuario = await Usuario.findOne({ where: { token } });
        usuario.contrasenia = password;
        usuario.token = null;
        await usuario.save();

        return res.render('auth/confirmacion', {
            pagina: 'Contraseña Actualizada',
            mensaje: 'Tu nueva contraseña se ha guardado correctamente.',
            error: false
        });

    } catch (error) {
        console.error(error);
    }
}

const bienvenida = (req, res) => {
    res.render('auth/bienvenida', { pagina: 'Bienvenido a TalTech' });
}

const landingPage = (req, res) => {
    res.render('landing', { pagina: 'Inicio', esPrincipal: true });
}

export {
    formularioLogin, autenticar, formularioRegistro, registrar,
    confirmar, formularioOlvidePassword, resetPassword,
    comprobarToken, nuevoPassword, bienvenida, landingPage
};