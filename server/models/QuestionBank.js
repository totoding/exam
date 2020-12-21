const sequelize = require("./db")
const { DataTypes } = require("sequelize")

const QuestionBank = sequelize.define("QuestionBank", {
    bankName: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    bankType: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
    },
    itemPoint: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
    }
},
    {
        createdAt: true,
        updatedAt: true,
        paranoid: true
    }
)

module.exports = QuestionBank