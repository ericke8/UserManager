const log4js = require("log4js");

const { Thing } = require("../database");
const logger = log4js.getLogger();

const postThing = async (req, res) => {
  const {
    id,
    description
  } = req.body;

  try {
    await Thing.create({
      id,
      description,
    });
    logger.info(`Thing created with description ${description}`);
    res.sendStatus(201);
  } catch (error) {
    logger.error("Unable to make a thing");
    res.sendStatus(500);
  }
};

module.exports = {
  postThing
};