// include id for traveller
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model {}

Traveller.init(
    {
         id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoIncrement:true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        gender:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        age:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        points:{
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue: DataTypes.NOW,
            // DOES THIS RELATE TO HAVING A DEFAULT VALUE OF 0  
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'traveller',
      }
        
    
);
module.exports = Traveller;