const { User } = require('./models/User');
const { Workout } = require('./models/Workout');

const resolvers = {
  Query: {
    async getUserInfo(parent, args, ctx, info) {
      const user = await User.findOne(args);
      return user;
    },
    async getWorkouts(parent, args, ctx, info) {
      const { userID } = args;
      const workouts = await Workout.find({ userID });
      return workouts;
    },
  },
  Mutation: {
    async addUser(parent, args, ctx, info) {
      const user = new User(args);
      await user.save();
      return user;
    },
    async addWorkout(parent, args, ctx, info) {
      const workout = new Workout(args);
      await workout.save();
      return workout;
    },
    async updateWorkout(parent, args, ctx, info) {
      const workout = await Workout.findOneAndUpdate({ _id: args.id }, args);
      if (!workout) return;
      return await workout.save();
    },
    async updateUser(parent, args, ctx, info) {
      const user = await User.findOneAndUpdate({ _id: args.id }, args);
      if (!user) return;
      return await user.save();
    },
    async deleteUser(parent, args, ctx, info) {
      const user = await User.findOneAndDelete({ _id: args.id });
      if (!user) return;
      return user;
    },
    async deleteWorkout(parent, args, ctx, info) {
      const workout = await Workout.findOneAndDelete({ _id: args.id });
      if (!workout) return;
      return workout;
    },
  },
};
module.exports = { resolvers };
