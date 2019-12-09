const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Query {
  getUser(id: ID!): User!
  getUsersByRole(role: RoleCategory): [User!]
  getFirst10Users: [User!]
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
  Admin
  Common
}
`;

module.exports = {
  typeDefs
};