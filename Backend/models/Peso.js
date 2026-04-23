import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Peso = db.define('peso', {
    id_peso: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    peso: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    fecha_registro: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_animal: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'peso',
    timestamps: false
});

export default Peso;