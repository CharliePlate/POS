import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import db from "./models/index"

//Get all graphQL schemas to merge
//--------------------------------------------------------------
import path from 'path'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'

const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname, './schema')))
const resolvers = mergeResolvers(loadFilesSync(path.join(__dirname, './resolvers')));
//-------------------------------------------------------------------

const { foodItem, user, sequelize } = db
const app = express();

app.use((req, res, next) => {
  return user.findByPk(1)
  .then(user => {
    if (user) {
      req.user = user
      next()
    }
  })
  .catch(err => console.log(err))
})

const server = new ApolloServer( 
  { typeDefs, 
    resolvers,
    context: ({req}) => ({
      currentUser: req.user,
      db: db
    })
  }
)

// app.use((req, res, next) => {
//   console.log(req.user)
//   console.log();
//   next();
// })

server.applyMiddleware({ app });

    
sequelize.sync()
// sequelize.sync( {force: true} )
  .then(server => {
    return user.findByPk(1)
  })
  .then(foundUser => {
    if (!foundUser) {
      user.create({
        name: "Charlie",
        chineseName: "查理",
        auth: "Admin"
      })
    }
  })

// // Adds food items for testing
// foodItem.create(
//   {category: "test1",
//     foodName: "test1",
//     price: 1.11
//   }
// )
// foodItem.create(
//   {category: "test2",
//     foodName: "test2",
//     price: 2.22
//   }
// )
// foodItem.create(
//   {category: "test3",
//     foodName: "test3",
//     price: 3.33
//   }
// )  


app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);