const log4js = require("log4js");

const logger = log4js.getLogger();
const { User } = require("../database");


const getUser = async (req, res) => {
  try {
    const foundUser = await User.findOne({
      where: {
        id: req.body.id
      },
      raw: true
    });
    res.status(200).json(foundUser);
  } catch(error){
    logger.error("Unable to find User");
    res.sendStatus(500);
  }
};

module.exports = {
  getUser
};