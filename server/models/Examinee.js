const sequelize = require("./db")
const { DataTypes } = require("sequelize")

const Examinee = sequelize.define("Examinee", {
    username: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    identityCard: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
    },
    paperId:{
        type: DataTypes.STRING(255),
    },
    paperLog: {
        type: DataTypes.TEXT(),
    },
    score : {
        type : DataTypes.INTEGER(11),
    }
},
    {
        createdAt: true,
        updatedAt: true,
        paranoid: true
    }
)

module.exports = Examinee