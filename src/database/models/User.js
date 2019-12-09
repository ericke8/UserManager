const { Sequelize, DataTypes } = require("sequelize");

const { UserRoles } = require("../../constants.js");

class User extends Sequelize.Model { }

const UserProperties = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
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