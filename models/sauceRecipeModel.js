const { Model , DataTypes } = require('sequelize'); // requiring sequelize
const sequelize = require('../config/connection.js'); // This is where the DB connection happens.
// const ingredients = require('../models/') //! needs linked
class SauceRecipe extends Model {} // creates a class and extends the class model for user


SauceRecipe.init(
    {
    id: { // created an ID to hold the primary key
        type: DataTypes.INTEGER, // the id is an integer
        allowNull: false, // not allowed to be null
        primaryKey: true, // flag for the priimary key
        autoIncrement: true,
        },
    sauce_name: {
        type: DataTypes.STRING, // is a string //! BUT IS IT? IS IT A OBJECT OR A JSON?
        allowNull: false, // not allowed to be null
        },
    instruction_id: {
        type: DataTypes.INTEGER, // is a string
        allowNull: false, // not allowed to be null
    },
    ingredient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    /*is_cold: { //
        type: DataTypes.BOOLEAN, // data type in the form of a boolean
        allowNull: true, // not allowed to be null
    },
    is_frozen: { //
        type: DataTypes.BOOLEAN, // data type in the form of a boolean
        allowNull: true, // not allowed to be null
    },
    is_dry: { //
        type: DataTypes.BOOLEAN, // data type in the form of a boolean
        allowNull: true, // not allowed to be null
    },*/
    },
    {
        sequelize, // implementing the sequelize connection
        freezeTableName: true, // does not allow sequelize to manipulate the table name
        underscored: true, // converts all camel cased to lower case and underscored columns
        timestamps: true, // creates a time stamp
        modelName: 'SauceRecipe', // naming the model
    }
);

module.exports = SauceRecipe; //exporting the sauceRecipe model as a module