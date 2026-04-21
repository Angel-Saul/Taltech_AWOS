import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Raza = db.define('raza', {
    id_raza: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'raza',
    timestamps: false
});

export default Raza;