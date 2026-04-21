import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Altura = db.define('altura', {
    id_altura: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    altura: {
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
    tableName: 'altura',
    timestamps: false
});

export default Altura;