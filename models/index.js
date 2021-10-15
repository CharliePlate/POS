import dbConfig from "../config/db.config.js"

const Sequelize = require("sequelize").Sequelize;
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize;

db.foodItem = require("./foodItem.js")(sequelize, Sequelize);
db.user = require("./user.js")(sequelize, Sequelize);
db.orderItem = require("./orderItem")(sequelize, Sequelize);
db.order = require("./order")(sequelize, Sequelize)

const {foodItem, user, orderItem, order} = db

// db.foodItem.belongsTo(db.user);
// db.user.hasMany(db.foodItem)

user.hasMany(order)
order.belongsTo(user)
foodItem.belongsToMany(order, {through: orderItem})
order.belongsToMany(foodItem, {through: orderItem})

module.exports = db;