const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class BaseAttribute extends Model { }

BaseAttribute.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    baseAttribute_name: {
      type: DataTypes.STRING
    },
    base_ingredient_id: {
      type: DataTypes.INTEGER,
      references: {
        // References the foreign table where the recipe_id is found.
        model: 'baseIngredient',
        key: 'id',
      },
    
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'baseAttribute',
  }
);

module.exports = BaseAttribute;