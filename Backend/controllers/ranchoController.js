import Rancho from "../models/Rancho.js";

// Renderiza el formulario de creación - Se añadió csrfToken
const formularioRegistroRancho = (req, res) => {
    res.render('auth/registroRancho', { 
        pagina: "Registra tu Rancho",
        csrfToken: req.csrfToken() // OBLIGATORIO para evitar ForbiddenError
    });
};

const registrarRancho = async (req, res) => {
    try {
        await Rancho.create({ 
            ...req.body, 
            id_usuario: req.usuario.id_usuario 
        });
        res.redirect('/auth/mis-ranchos');
    } catch (error) {
        console.error(error);
        res.render('auth/registroRancho', { 
            pagina: "Registra tu Rancho", 
            csrfToken: req.csrfToken(), // Se vuelve a pasar en caso de error
            errores: [{ msg: 'No se pudo crear el rancho' }] 
        });
    }
}

const mostrarRancho = async (req, res) => {
    try {
        const rancho = await Rancho.findOne({ where: { id_usuario: req.usuario.id_usuario } });
        // Corregido: redirige a registroRancho (nombre de tu ruta actual)
        if (!rancho) return res.redirect('/auth/registroRancho');
        
        res.render('auth/miRancho', { 
            pagina: "Mis Ranchos", 
            rancho, 
            esPrincipal: true 
        });
    } catch (error) {
        res.redirect('/auth/login');
    }
}

const editarRancho = async (req, res) => {
    try {
        const rancho = await Rancho.findOne({ where: { id_usuario: req.usuario.id_usuario } });
        if (!rancho) return res.redirect('/auth/registroRancho');
        
        res.render('auth/editarRancho', { 
            pagina: "Editar Rancho", 
            rancho, 
            esPrincipal: true,
            csrfToken: req.csrfToken() // OBLIGATORIO para el formulario de edición
        });
    } catch (error) {
        res.redirect('/auth/login');
    }
}

const actualizarRancho = async (req, res) => {
    try {
        const rancho = await Rancho.findOne({ where: { id_usuario: req.usuario.id_usuario } });

        // 1. Validar que el rancho existe
        if(!rancho) return res.redirect('/auth/login');

        // 2. Extraer los datos del body
        const datos = req.body;

        // 3. SI SUBIERON UNA IMAGEN, la agregamos a los datos a actualizar
        if(req.file) {
            datos.fotografia = req.file.filename;
        }

        // 4. Actualizar la base de datos
        await rancho.update(datos);

        // 5. Redirigir a la ruta CORRECTA (la que tienes definida en tus rutas)
        res.redirect('/auth/editarRancho'); 

    } catch (error) {
        console.log(error);
        // Si hay un error, volvemos a renderizar con el token
        const rancho = await Rancho.findOne({ where: { id_usuario: req.usuario.id_usuario } });
        res.render('auth/editarRancho', { 
            pagina: "Editar Rancho", 
            rancho, 
            csrfToken: req.csrfToken(),
            errores: [{msg: 'Hubo un error al actualizar'}]
        });
    }
}

export { 
    formularioRegistroRancho, 
    registrarRancho, 
    mostrarRancho, 
    editarRancho, 
    actualizarRancho 
}