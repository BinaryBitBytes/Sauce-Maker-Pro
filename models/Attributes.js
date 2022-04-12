const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Attribute extends Model {}

Attribute.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    attribute_name: {
      type: DataTypes.STRING
    },
     ingredient_id: {
        type: DataTypes.INTEGER,
        references: {
          // References the foreign table where the recipe_id is found.
          model: 'Ingredient',
          key: 'id',
        }
  }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'attribute',
  }
);

module.exports = Attribute;