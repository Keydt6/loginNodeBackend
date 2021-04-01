import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    password: {
        type: Sequelize.TEXT
    },
    status: {
        type: Sequelize.TEXT
    },
}, {
    timestamps: false
});


/**
 * Sincroniza la db de ser necesaria su creacion
 */
// sequelize.sync({ force: false})
// .then(() => {
//     console.log('Tabla User sincronizada');
// })

export default User;