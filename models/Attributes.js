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