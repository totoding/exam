const { Sequelize } = require("sequelize")
const {username, host, password}  = require("./config")
const sequelize =  new Sequelize('exam', username, password, {
    host: host,
    dialect: 'mysql',
    logging: console.log
})
module.exports = sequelize