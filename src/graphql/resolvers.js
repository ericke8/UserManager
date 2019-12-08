const { Op } = require("sequelize");

const { Thing } = require("../database");

const getThing = async (_, { id }) => {
  return await Thing.findOne({
    where: {
      id
    },
    raw: true
  });
};

const getFirst10Things = async () => {
  return await Thing.findAll({
    where: {
      id: {
        [Op.between]: [1, 10]
      }
    }
  });
};

const resolvers = {
  Query: {
    getThing,
    getFirst10Things,
  }
};

module.exports = {
  resolvers
};