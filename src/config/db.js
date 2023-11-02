import {Sequelize} from 'sequelize'

const connection = new Sequelize(
    "testing",
    "root",
    "ANSKk08aPEDbFjDO",
      {
          dialect:'mysql',
          host:"localhost",
          port:3307,
          define:{
            timestamps:true,
            underscored:true
          }
      }
  )