import Sequelize from 'sequelize'
import configDB from '../config/db'

const connection = new Sequelize(configDB)

export default connection