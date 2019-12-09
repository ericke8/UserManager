const { Op } = require("sequelize");

const { User } = require("../database");

const getUserById = async (_, { id }) => {
  return await User.findOne({
    where: {
      id
    },
    raw: true
  });
};

const getUserByEmail = async (_, { email }) => {
  return await User.findOne({
    where: {
      email
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

const getAllUsers = async () => {
  return await User.findAll({
    raw: true,
  });
}

const resolvers = {
  Query: {
    getUserById,
    getUserByEmail,
    getUsersByRole,
    getAllUsers,
  }
};

module.exports = {
  resolvers
};