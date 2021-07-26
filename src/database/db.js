const mongoose = require('mongoose');

async function startDB() {
  const MONGO_URI =
    process.env.MONGO_URI || 'mongodb://localhost:27017/exercise-tracker-graph';

  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = { startDB };
