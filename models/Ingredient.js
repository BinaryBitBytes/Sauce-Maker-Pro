//Import model and datatypes

const { Model, DataTypes } = require('sequelize');
//Import sequelize

const sequelize = require('../config/connection');

class Ingredient extends Model {}

Ingredient.init(
  {
    //Every ingredient is an object with a primary id.
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //The name of the ingredient is a string.
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //In units of ratio to base ingredient. Eg. 1 is the same amount as base and 2 is twice as much.
    volume: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    // This references a recipe object stored in the database.
    recipe_id: {
        type: DataTypes.INTEGER,
        references: {
          // References the foreign table where the recipe_id is found.
          model: 'SauceRecipe',
          key: 'id',
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Ingredient',
  }

);

module.exports = Ingredient;


