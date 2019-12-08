const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Query {
  getUser(id: ID!): User!
  getFirst10Users: [User!]
}

type User {
  id: ID!
  description: String!
  createdAt: String!
  updatedAt: String!
}
`;

module.exports = {
  typeDefs
};