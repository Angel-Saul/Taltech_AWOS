import Ganado from "../models/Ganado.js"; 
import Raza from "../models/Raza.js";
import TipoGanado from "../models/tipo_ganado.js"; 
import Peso from "../models/Peso.js";
import Altura from "../models/Altura.js";

// Función para mostrar el inventario
export const mostrarInventario = async (req, res) => {
    try {
        const ganado = await Ganado.findAll({
            where: { id_rancho: 1 }, 
            include: [
                { model: Raza, as: 'datosRaza' },
                { model: TipoGanado, as: 'datosTipo' }
            ]
        });

        const [razas, tipos] = await Promise.all([
            Raza.findAll(),
            TipoGanado.findAll()
        ]);

        res.render('auth/inventario', {
            pagina: 'Inventario de Ganado',
            ganado,
            razas,
            tipos,
            csrfToken: req.csrfToken()
        });
    } catch (error) {
        console.log('Error al obtener el inventario:', error);
        res.status(500).send('Error en el servidor');
    }
};

// CAMBIAMOS EL NOMBRE AQUÍ PARA QUE COINCIDA CON TU RUTA
export const registrarAnimal = async (req, res) => {
    try {
        const { 
            nombre_animal, 
            genero, 
            fecha_nacimiento, 
            color, 
            id_tipo_ganado, 
            id_raza, 
            peso_inicial, 
            altura_inicial 
        } = req.body;

        const fotografia = req.file ? req.file.filename : null;

        // 1. Registro en tabla 'ganado'
        const nuevoAnimal = await Ganado.create({
            nombre_animal,
            genero: parseInt(genero),
            fecha_nacimiento,
            color,
            id_rancho: 1, 
            id_tipo_ganado: parseInt(id_tipo_ganado),
            id_raza: parseInt(id_raza),
            fotografia
        });

        // 2. Registro en tabla 'peso' (Historial)
        if (peso_inicial && peso_inicial > 0) {
            await Peso.create({
                peso: parseFloat(peso_inicial),
                fecha_registro: new Date(),
                id_animal: nuevoAnimal.id_animal 
            });
        }

        // 3. Registro en tabla 'altura' (Historial)
        if (altura_inicial && altura_inicial > 0) {
            await Altura.create({
                altura: parseFloat(altura_inicial),
                fecha_registro: new Date(),
                id_animal: nuevoAnimal.id_animal 
            });
        }

        res.redirect('/auth/inventario');

    } catch (error) {
        console.log('Error al guardar el animal:', error);
        
        const [razas, tipos] = await Promise.all([
            Raza.findAll(),
            TipoGanado.findAll()
        ]);

        res.render('auth/inventario', {
            pagina: 'Inventario de Ganado',
            razas,
            tipos,
            csrfToken: req.csrfToken(),
            errores: [{ msg: 'Hubo un error al guardar el registro' }]
        });
    }
};