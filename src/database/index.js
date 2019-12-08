const { setupDB } = require("./setup");

const { User, UserProperties } = require("./models");

module.exports = {
  setupDB,
  User,
  UserProperties,
};