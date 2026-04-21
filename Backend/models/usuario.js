import { DataTypes } from "sequelize";
import db from "../config/db.js";
import bcrypt from "bcrypt";

const Usuario = db.define("usuario", {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido_paterno: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido_materno: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    genero: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(70),
        allowNull: false,
        unique: true
    },
    contrasenia: {
        type: DataTypes.STRING(512),
        allowNull: false
    },
    fecha_nacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false 
    },
    // --- NUEVAS COLUMNAS PARA AUTH ---
    token: {
        type: DataTypes.STRING
    },
    confirmado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'usuario', 
    timestamps: false,
    hooks: {
        beforeCreate: async (usuario) => {
            const salt = await bcrypt.genSalt(10);
            usuario.contrasenia = await bcrypt.hash(usuario.contrasenia, salt);
        },
        // Agregamos este hook para cuando el usuario cambie su password después
        beforeUpdate: async (usuario) => {
            if (usuario.changed('contrasenia')) {
                const salt = await bcrypt.genSalt(10);
                usuario.contrasenia = await bcrypt.hash(usuario.contrasenia, salt);
            }
        }
    }
});

Usuario.prototype.verificarPassword = function(password) {
    return bcrypt.compareSync(password, this.contrasenia);
}

export default Usuario;