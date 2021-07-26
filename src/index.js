const { startApolloServer } = require('./app');
const { resolvers } = require('./resolvers');
const { typedefs } = require('./typedefs');

startApolloServer(typedefs, resolvers);
