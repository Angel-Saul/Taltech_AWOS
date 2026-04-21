import Usuario from "../models/usuario.js";

const perfil = (req, res) => {
    const { nombre, apellido_paterno, apellido_materno, correo } = req.usuario;

    res.render('auth/perfil', {
        pagina: "Mi Perfil",
        esPrincipal: false, 
        usuario: {
            nombre,
            apellido_paterno: apellido_paterno || '',
            apellido_materno: apellido_materno || '',
            correo: correo || '' 
        }
    });
};

const mostrarConfiguracion = async (req, res) => {
    try {
        const id = req.usuario.id_usuario || req.usuario.id;
        const usuario = await Usuario.findByPk(id);
        
        if (!usuario) return res.redirect('/auth/perfil');

        const userPlain = usuario.get({ plain: true });

        const datos = {
            nombre: userPlain.nombre || '',
            apellido_paterno: userPlain.apellido_paterno || '',
            apellido_materno: userPlain.apellido_materno || '',
            genero_texto: userPlain.genero === 1 ? 'Masculino' : userPlain.genero === 2 ? 'Femenino' : 'Otro',
            genero_val: userPlain.genero,
            fecha_nacimiento: userPlain.fecha_nacimiento || '',
            correo: userPlain.correo || '' 
        };

        res.render('auth/configuracion_usuario', {
            pagina: "Configuración de Perfil",
            esPrincipal: false,
            datos
        });
    } catch (error) {
        console.error("ERROR EN CONFIGURACION:", error);
        res.redirect('/auth/perfil');
    }
};

const actualizarCampo = async (req, res) => {
    const { campo, valor } = req.body;
    const id = req.usuario.id_usuario || req.usuario.id; 

    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) return res.status(404).json({ success: false, message: "Usuario no encontrado" });
        
        const campoReal = (campo === 'email') ? 'correo' : campo;

        usuario[campoReal] = valor; 
        await usuario.save();

        return res.json({ success: true });
    } catch (error) {
        console.log("ERROR AL ACTUALIZAR:", error);
        return res.status(500).json({ success: false });
    }
};

const cambiarPassword = async (req, res) => {
    try {
        const { current_password, new_password } = req.body;
        const id = req.usuario.id_usuario || req.usuario.id;
        const usuario = await Usuario.findByPk(id);

        if (!usuario.verificarPassword(current_password)) {
            return res.status(400).json({ success: false, message: 'Contraseña actual incorrecta' });
        }

        usuario.contrasenia = new_password; 
        await usuario.save();
        res.json({ success: true, message: 'Contraseña actualizada' });
    } catch (error) {
        console.log("ERROR PASSWORD:", error);
        res.status(500).json({ success: false });
    }
};

export { 
    perfil, 
    mostrarConfiguracion, 
    actualizarCampo, 
    cambiarPassword 
};