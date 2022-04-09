//Import model and datatypes
const { Model, DataTypes } = require('sequelize');
//Import sequelize
const sequelize = require('../config/connection');

class Instruction extends Model {}

Instruction.init(
    {
        // Every instruction is an object with a primary id.
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        // The name of the instruction is a string.
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        action: {
            type: Dataypes.STRING,
            allowNull: false,
        },
        // This references an ingredient id.
        ingredient_id: {
            type: DataTypes.INTEGER,
            references: {
                // References the foreign table where the ingredient_id is found.
                model: 'ingredient',
                key: 'id',
            },
        },
        // This references and ingredient time used for cooking instructions.
        //ingredient_time: {
        //   type: DataTypes.INTEGER,
        //    references: {
        //        model: 'ingredient',
        //        key: 'time',
        //    },
        //},
    
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'instruction',
      }
);
  
  module.exports = Instruction;