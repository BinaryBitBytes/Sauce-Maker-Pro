const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class BaseIngredient extends Model {}

BaseIngredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    base_ingredient_name: {
      type: DataTypes.STRING
    },
    // This references a recipe object stored in the database.
    recipe_id: {
      type: DataTypes.INTEGER,
      references: {
        // References the foreign table where the recipe_id is found.
        model: 'SauceRecipe',
        key: 'id',
      },
      onDelete: "SET NULL"
  },
    attribute_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Attribute',
            key: 'id'
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'baseIngredient',
  }
);

module.exports = BaseIngredient;