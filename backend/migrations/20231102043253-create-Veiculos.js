'use strict';
module.exports={
up: (queryInterface, Sequelize)=> {
    return queryInterface.createTable('veiculos',{
       id:{
        type:Sequelize.UUID,
        primaryKey:true,
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
        updated_at:{
          type:Sequelize.DATE,
          allowNull:false
        },
        created_at:{
          type:Sequelize.DATE,
          allowNull:false
        }
      });
  },

  down: (queryInterface, Sequelize)=> {
    
     return queryInterface.dropTable('users');
  }

}