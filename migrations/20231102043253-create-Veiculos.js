'use strict';
module.exports={
up: (queryInterface, Sequelize)=> {
    return queryInterface.createTable('Veiculos',{
       id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
        },
        locadora:{
          type:Sequelize.STRING,
          allowNull:false
        },
        modelo:{
          type:Sequelize.STRING,
          allowNull:false
        },
        marca:{
          type:Sequelize.STRING,
          allowNull:false
        },
        ano:{
          type:Sequelize.INTEGER,
          allowNull:false
        },
        motor:{
          type:Sequelize.STRING,
          allowNull:false
        },
        portas:{
          type:Sequelize.INTEGER,
          allowNull:false
        },
        cambio:{
          type:Sequelize.STRING,
          allowNull:false
        },
        ar_condicionado:{
          type:Sequelize.BOOLEAN,
          allowNull:false
        },
        updatedAt:{
          type:Sequelize.DATE,
          allowNull:false
        },
        createdAt:{
          type:Sequelize.DATE,
          allowNull:false
        }
      });
  },

  down: (queryInterface, Sequelize)=> {
    
     return queryInterface.dropTable('users');
  }

}