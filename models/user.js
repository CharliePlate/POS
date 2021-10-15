module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        chineseName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        auth: {
            type: Sequelize.STRING,
            allowNull: false
        }
        
    })
    return User
}