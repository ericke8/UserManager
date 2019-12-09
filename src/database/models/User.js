const { Sequelize, DataTypes } = require("sequelize");
const uuidv4 = require("uuid/v4");

const { UserRoles } = require("../../constants.js");

class User extends Sequelize.Model { }

const UserProperties = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: () => uuidv4(),
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
    unique: true,
  },
  role: {
    type: DataTypes.ENUM(
      ...Object.values(UserRoles),
    ),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  }
};

module.exports = {
  User,
  UserProperties
};