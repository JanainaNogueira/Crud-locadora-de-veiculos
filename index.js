import * as dotenv from 'dotenv'
import Sequelize from 'sequelize'
import express from 'express'
//acessar atributos

dotenv.config();
const connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        dialect:process.env.DB_DIALECT,
        host:process.env.DB_HOST,
        port:process.env.DB_PORT
    }
)
try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  