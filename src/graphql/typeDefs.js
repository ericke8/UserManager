const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Query {
  getUserById(id: ID!): User
  getUserByEmail(email: String!): User
  getAllUsers: [User!]
  getUsersByRole(role: RoleCategory): [User!]
}

type User {
  id: ID!
  firstName: String!
  lastName: String!
  role: String!
  description: String!
  createdAt: String!
  updatedAt: String!
}

enum RoleCategory{
  Owner
  Admin
  Moderator
  Common
}
`;

module.exports = {
  typeDefs
};