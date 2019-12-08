const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Query {
  getThing(id: ID!): Thing!
  getFirst10Things: [Thing!]
}

type Thing {
  id: ID!
  description: String!
  createdAt: String!
  updatedAt: String!
}
`;

module.exports = {
  typeDefs
};