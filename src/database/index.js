import Sequelize from 'sequelize'
import configDB from '../../config/config.json'
import User from '../../models/Car'

const connection = new Sequelize(configDB)
//Conecta a nova tabela ao bd
User.init(connection)

export default connection