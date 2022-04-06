//Import model and datatypes
const { Model, DataTypes } = require('sequelize');
//Import sequelize
const sequelize = require('../config/connection');

class Instruction extends Model {}

Instruction.init(
    {
        //Every instruction is an object with a primary id.
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        //The name of the instruction is a string.
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
    
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'instruction',
      }
);
  
  module.exports = Instruction;