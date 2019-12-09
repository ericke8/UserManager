const log4js = require("log4js");

const { User } = require("../database");
const logger = log4js.getLogger();

const createUser = async (req, res) => {
  const {
    id,
    firstName,
    lastName,
    role,
    description
  } = req.body;

  try {
    await User.create({
      id,
      firstName,
      lastName,
      role,
      description,
    });
    logger.info(`${role} User named ${firstName} ${lastName} created with description ${description}`);
    res.sendStatus(201);
  } catch (error) {
    logger.error("Unable to make User");
    res.sendStatus(500);
  }
};

module.exports = {
  createUser
};