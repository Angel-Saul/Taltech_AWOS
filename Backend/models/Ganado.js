import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Ganado = db.define('animal', { // Cambiamos el nombre del modelo a 'animal'
    id_animal: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_animal: {
        type: DataTypes.STRING(50), 
        allowNull: true
    },
    genero: {
        type: DataTypes.INTEGER, // En tu SQL la tabla animal usa INT para género
        allowNull: false
    },
    fecha_nacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    id_rancho: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_tipo_ganado: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_raza: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fotografia: {
        type: DataTypes.STRING(100),
        allowNull: true
    }
}, {
    tableName: 'animal', // Forzamos que use la tabla 'animal' de tu BD
    timestamps: false    // Tu tabla 'animal' no tiene createdAt ni updatedAt
});

export default Ganado;