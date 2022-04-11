const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class IngredientAttribute extends Model {}

IngredientAttribute.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ingredient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Ingredient",
        key: "id"
      }
    },
    attribute_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Attribute",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ingredientAttribute',
  }
);

module.exports = IngredientAttribute;