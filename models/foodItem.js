module.exports = (sequelize, Sequelize) => {
    const FoodItem = sequelize.define("foodItem", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        foodName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        category: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.FLOAT,
        }
    })
    return FoodItem
}