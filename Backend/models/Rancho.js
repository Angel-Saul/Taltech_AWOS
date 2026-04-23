import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Rancho = db.define("rancho", {
    id_rancho: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    // --- NUEVO CAMPO DE RELACIÓN ---
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuario', // Nombre de la tabla en la DB
            key: 'id_usuario'
        }
    },
    // --- UBICACIÓN ---
    pais: { type: DataTypes.STRING, allowNull: true },
    estado: { type: DataTypes.STRING, allowNull: true },
    municipio: { type: DataTypes.STRING, allowNull: true },
    colonia: { type: DataTypes.STRING, allowNull: true },
    calle: { type: DataTypes.STRING, allowNull: true },
    numero_exterior: { type: DataTypes.STRING, allowNull: true },
    numero_interior: { type: DataTypes.STRING, allowNull: true },
    
    // --- CONTACTO Y COMUNICACIÓN ---
    correo: { type: DataTypes.STRING, allowNull: true },
    numero_telefono: { type: DataTypes.STRING, allowNull: true },
    telefono_fijo: { type: DataTypes.STRING, allowNull: true },
    
    // --- REDES Y MULTIMEDIA ---
    facebook: { type: DataTypes.STRING, allowNull: true },
    instagram: { type: DataTypes.STRING, allowNull: true },
    fotografia: { type: DataTypes.STRING, allowNull: true }
}, {
    tableName: 'rancho',
    timestamps: false
});

export default Rancho;