const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const WorkoutSchema = new mongoose.Schema({
  duration: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  userID: {
    type: ObjectId,
    required: true,
  },
});

const Workout = new mongoose.model('Workout', WorkoutSchema);

module.exports = { Workout };
