import Sequelize from 'sequelize';
import dbConfig from './dbConfig'
// import User from '../models/User';

export const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.driver,
    }
);