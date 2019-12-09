const log4js = require("log4js");

const logger = log4js.getLogger();
const { User } = require("../database");


const getUser = async (req, res) => {
  let selectOptions = {};
  if(req.body.email){
    selectOptions.email = req.body.email;
  } else{
    selectOptions.id = req.body.id;
  }
  
  try {
    const foundUser = await User.findOne({
      where: selectOptions,
      raw: true
    });
    res.status(200).json(foundUser);
  } catch(error){
    logger.error("Unable to find User");
    res.status(500).json(error);
  }
};

module.exports = {
  getUser
};