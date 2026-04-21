import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const TipoGanado = db.define('tipo_ganado', {
    id_tipo_ganado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'tipo_ganado',
    timestamps: false
});

export default TipoGanado;