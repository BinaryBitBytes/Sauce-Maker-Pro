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