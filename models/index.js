import pgconfig from '../config/db.postgres.config'
import Sequelize from 'sequelize';
import tutorial from './tutorial.model';

const sequelize = new Sequelize(pgconfig.DB, pgconfig.USER, pgconfig.PASSWORD, {
    host: pgconfig.host,
    dialect : pgconfig.dialect,
    operatorsAliases : false,
    pool:{
        max: pgconfig.pool.max,
        min: pgconfig.pool.min,
        acquire: pgconfig.pool.acquire,
        idle: pgconfig.pool.idle
    }
});

const db = {}
db.Sequelize =Sequelize
db.sequelize=sequelize
db.tutorials = tutorial.tutorial(sequelize, Sequelize)

export const db

