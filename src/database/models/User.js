const {Sequelize, DataTypes} = require("sequelize");

class User extends Sequelize.Model {}

const UserProperties = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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