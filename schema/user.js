import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        auth: String!
        chineseName: String!
    }

    type Query {
        getAllUsers: [ User! ]!
        getUserByAuth(auth: String!): [ User! ]
        getUserById(id: ID!): User
    }

    type Mutation {
        addUser(name: String!, auth: String!, chineseName: String!): User
        changeUserAuth(id: ID!, auth: String!): User
    }
`

module.exports = typeDefs