const {Sequelize, DataTypes} = require("sequelize");

class Thing extends Sequelize.Model {}

const ThingProperties = {
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
  Thing, 
  ThingProperties
};