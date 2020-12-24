const sequelize = require("./db")
const { DataTypes } = require("sequelize")

const Paper = sequelize.define("Paper", {
    paperName: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    startTime: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    Duration:{
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    totalScore: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
    },
    bankInfo :  {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

},
    {
        createdAt: true,
        updatedAt: true,
        paranoid: true
    }
)

module.exports = Paper