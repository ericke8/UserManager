const log4js = require("log4js");
const Sequelize = require("sequelize");

const {
  User,
  UserProperties,
} = require("./models");

const name = process.env.DB_NAME || "postgres";
const username = process.env.DB_USER || "postgres";
const password = process.env.DB_PASSWORD || "postgres";
const host = process.env.DB_HOST || "localhost";
const port = process.env.DB_PORT || 5432;

const logger = log4js.getLogger();

const sequelize = new Sequelize(name, username, password, {
  host,
  port,
  dialect: "postgres",
  logging: false
});

const authenticateDB = () => {
  sequelize.authenticate().then(() => {
    logger.info("Successfully connected to database");
  }).catch((error) => {
    logger.error("Could not connect to database");
    log4js.shutdown(() => {
      throw error;
    });
  });
};

const initModels = () => {
  User.init(
    UserProperties,
    getModelProperties("user"),
  );
};

const getModelProperties = (modelName, options = {}) => ({
  modelName,
  sequelize,
  underscored: true,
  ...options,
});

const defineAssociations = () => {
  return;
};

const setupDB = async () => {
  authenticateDB();
  initModels();
  defineAssociations();

  await User.sync({ force: true });

  try {
    await User.create({
      firstName: "Owner",
      lastName: "Owner",
      email: "owner@owner.com",
      role: "Owner",
      description: "Owner of the organization",
    });
    logger.info("Init db with owner");
  } catch (error) {
    logger.error("Could not init db with owner");
  }
};

module.exports = {
  setupDB
};