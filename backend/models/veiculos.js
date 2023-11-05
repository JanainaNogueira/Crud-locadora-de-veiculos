const { Model, DataTypes } = require("sequelize")

class Veiculos extends Model{
    static init(sequelize){
        super.init({
            id:{
                type:DataTypes.UUID,
                primaryKey:true,
                allowNull:false
                },
                locadora:{
                  type:DataTypes.STRING,
                  allowNull:false
                },
                modelo:{
                  type:DataTypes.STRING,
                  allowNull:false
                },
                marca:{
                  type:DataTypes.STRING,
                  allowNull:false
                },
                ano:{
                  type:DataTypes.INTEGER,
                  allowNull:false
                },
                motor:{
                  type:DataTypes.STRING,
                  allowNull:false
                },
                portas:{
                  type:DataTypes.INTEGER,
                  allowNull:false
                },
                cambio:{
                  type:DataTypes.STRING,
                  allowNull:false
                },
                ar_condicionado:{
                  type:DataTypes.BOOLEAN,
                  allowNull:false
                }
        },{
            sequelize
        })
        sequelize.sync({ force: true })
      .then(() => {
        console.log("Tabela Veiculos foi criada (ou recriada) com sucesso.");
      })
      .catch((error) => {
        console.error("Erro ao sincronizar a tabela Veiculos:", error);
      });
    };
}


module.exports = Veiculos