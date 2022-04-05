const { Model , DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
//const sequelize = require('');

class User extends Model {
    checkPassword(loginPass) {
        return bcrypt.compareSync(loginPass, this.password);
    }
}

User.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            length: [8],
        },
    },
    signed_in: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    last_sign_in: {
        type: DataTypes.DATE,
        allowNull: false,
        },
    },
    {
        hooks: {
            beforeCreate: async (newUserInfo) =>{
                newUserInfo.password = await bcrypt.hash(newUserInfo.password, 12);
                return newUserInfo;
            },
            beforeUpdate: async (updatedUserInfo) => {
                updatedUserInfo.password = await bcrypt.hash(updatedUserInfo.password, 12);
                return updatedUserInfo;
            }
        },
        sequelize,
        timestamps: true,
        modelName: 'user',
    }
);

module.exports = User;