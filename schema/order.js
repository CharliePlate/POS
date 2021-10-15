import { gql } from 'apollo-server-express'

const typeDef = gql`
    type Order {
        id: ID!
        user: User!
        foodItems: [FoodItem!]!
    }

    type Query {
        getOrderDetails(orderId: ID!): Order!
        getAllOrders: [Order!]!
    }

    type Mutation {
        createOrder(FoodItems: [Int!]): Order!
        editOrder(orderId: ID!): Boolean!
        deleteOrder(orderId: ID!): Boolean!
    }
`

module.exports = typeDef