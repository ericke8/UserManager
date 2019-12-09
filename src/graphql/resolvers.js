const { Op } = require("sequelize");

const { User } = require("../database");

const getUser = async (_, { id }) => {
  return await User.findOne({
    where: {
      id
    },
    raw: true
  });
};

const getUsersByRole = async (_, { role }) => {
  return await User.findAll({
    where: {
      role
    },
    raw: true
  });
};

const getFirst10Users = async () => {
  return await User.findAll({
    where: {
      id: {
        [Op.between]: [1, 10]
      }
    }
  });
};

const resolvers = {
  Query: {
    getUser,
    getUsersByRole,
    getFirst10Users,
  }
};

module.exports = {
  resolvers
};