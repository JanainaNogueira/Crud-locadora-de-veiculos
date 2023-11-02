const { Model, DataTypes } = require("sequelize")

class Car extends Model{
    static init(sequelize){
        super.init({
            id:DataTypes.INTEGER,
            locadora:DataTypes.STRING,
            modelo:DataTypes.STRING,
            marca:DataTypes.STRING,
            ano:DataTypes.INTEGER,
            motor:DataTypes.STRING,
            portas:DataTypes.INTEGER,
            cambio:DataTypes.STRING,
            ar_condicionado:DataTypes.BOOLEAN,
            updatedAt:DataTypes.DATE,
            createdAt:DataTypes.DATE
        },{
            sequelize
        })
    }
}

module.exports = Car