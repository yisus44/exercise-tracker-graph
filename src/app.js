const { ApolloServer } = require('apollo-server-express');
const { startDB } = require('./database/db');
const dotenv = require('dotenv');
const express = require('express');
const helmet = require('helmet');

async function startApolloServer(typeDefs, resolvers) {
  // Same ApolloServer initialization as before
  dotenv.config();
  await startDB();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  const app = express();
  app.use(helmet());
  server.applyMiddleware({
    app,
    path: '/',
  });

  // Modified server startup
  const PORT = process.env.PORT || 4000;
  await new Promise((resolve) => app.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

module.exports = {
  startApolloServer,
};
