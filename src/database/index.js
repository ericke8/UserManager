const { setupDB } = require("./setup");

const { Thing, ThingProperties } = require("./models");

module.exports = {
  setupDB,
  Thing,
  ThingProperties,
};