module.exports = (sequelize, Sequelize) => {
    const OrderItem = sequelize.define("orderItem", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        }
    })
    return OrderItem
}