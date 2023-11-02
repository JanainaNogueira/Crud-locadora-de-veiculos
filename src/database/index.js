const Sequelize = require('sequelize')
const configDB = require('../../config/config.js')
const Veiculos = require('../../models/veiculos.js')

const connection = new Sequelize(configDB)
//Conecta a nova tabela ao bd
Veiculos.init(connection)

module.exports = connection

