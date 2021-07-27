const { gql } = require('apollo-server-express');
const typedefs = gql`
  type User {
    username: String!
    age: Int!
    id: ID!
  }

  type Workout {
    duration: Int!
    category: String!
    user: User!
    id: ID!
  }

  type Query {
    getUserInfo(username: String!): User
    getWorkouts(userID: ID!): [Workout]
  }

  type Mutation {
    addWorkout(
      category: String!
      duration: Int!
      userID: ID!
      description: String
    ): Workout!
    addUser(username: String!, age: Int!): User!
    updateWorkout(
      id: ID!
      category: String
      duration: Int
      description: String
    ): Workout
    updateUser(id: ID!, age: Int, username: String): User
    deleteUser(id: ID!): User
    deleteWorkout(id: ID!): Workout
  }
`;

module.exports = { typedefs };
