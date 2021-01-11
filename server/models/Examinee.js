const sequelize = require("./db")
const { DataTypes } = require("sequelize")

const Examinee = sequelize.define("Examinee", {
    userId : {
        type :  DataTypes.STRING(255),
        allowNull : false
    },
    realName : {
        type : DataTypes.STRING(255),
        allowNull : false,
    },
    identityCard: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
    },
    examId:{
        type: DataTypes.INTEGER(11),
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