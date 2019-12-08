
require("dotenv").config();

const express = require("express");
const log4js = require("log4js");

const { ApolloServer } = require("apollo-server-express");

const { createUser, getUser } = require("./handlers");
const { resolvers, typeDefs } = require("./graphql");
const { configureLogging } = require("./config/logging");
const { setupDB } = require("./database");

const logger = log4js.getLogger();

const PORT = process.env.APP_PORT || 5861;


configureLogging();
setupDB();

const app = express();
const apolloServer = new ApolloServer({ resolvers, typeDefs });

app.use(express.json());

app.post("/api/v1/post", createUser);

app.get("/api/v1/get", getUser);

apolloServer.applyMiddleware({ app, path: "/graphql" });

app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});