//Import model and datatypes
const { Model, DataTypes } = require('sequelize');
//Import sequelize
const sequelize = require('../config/connection');

class Instruction extends Model {}

Instruction.init();
  
  module.exports = Ingredient;