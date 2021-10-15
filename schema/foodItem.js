import { gql } from 'apollo-server-express';

const typeDefs = gql`

type FoodItem {
  id: ID!
  category: String!
  foodName: String!
  price: Float!
}

type Query {
  getFoodItem(id: ID!): FoodItem!
  getFoodItemsByCategory(category: String!): [ FoodItem!]!
  getAllFoodItems: [FoodItem!]! 
}

type Mutation {
  createFoodItem(category: String!, foodName: String!, price: Float!): FoodItem
}
`;

module.exports = typeDefs
