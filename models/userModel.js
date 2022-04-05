const { Model , DataTypes } = require('sequelize'); // requiring sequelize
const bcrypt = require('bcrypt'); // requiring for encryption
const sequelize = require('../config/connection.js'); // This is where the DB connection happens.

class User extends Model { // creates a class and extends the class model for user
    checkPassword(loginPass) { // checks the password for the user login
        return bcrypt.compareSync(loginPass, this.password); // encryptes the password
    }
}

User.init(
    {
    id: { // created an ID to hold the primary key
        type: DataTypes.INTEGER, // the id is an integer
        allowNull: false, // not allowed to be null
        primaryKey: true, // flag for the priimary key
        autoIncrement: true,
        },
    username: {
        type: DataTypes.STRING, // is a string
        allowNull: false, // not allowed to be null
        },
    email: {
        type: DataTypes.STRING, // is a string
        allowNull: false, // not allowed to be null
        unique: true, // providing a unique constraint to index the users email
        validate: { //executes to check the email every time its saved
            isEmail: true,
        },
    },
    password: { //storing the password in an object
        type: DataTypes.STRING, // is a string
        allowNull: false, // not allowed to be null
        validate: { // validating the password
            length: [8], // password requirement is 8 characters in length
        },
    },
    signed_in: { //stores if the user is signed in or not
        type: DataTypes.BOOLEAN, // data type in the form of a boolean
        allowNull: false, // not allowed to be null
    },
    last_sign_in: { //keeping track of the last time the user signed in
        type: DataTypes.DATE, // this data type is a date
        allowNull: true, // allowed to be null
        },
    },
    {
        hooks: { // created before hooks of the lifecycle of the users password
            beforeCreate: async (newUserInfo) =>{
                newUserInfo.password = await bcrypt.hash(newUserInfo.password, 12);
                return newUserInfo;
            },
            beforeUpdate: async (updatedUserInfo) => {
                updatedUserInfo.password = await bcrypt.hash(updatedUserInfo.password, 12);
                return updatedUserInfo;
            }
        },
        sequelize, // implementing the sequelize connection
        freezeTableName: true, // does not allow sequelize to manipulate the table name
        underscored: true, // converts all camel cased to lower case and underscored columns
        timestamps: true, // creates a time stamp
        modelName: 'user', // naming the model
    }
);

module.exports = User; //exporting the User model as a module