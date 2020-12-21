const sequelize = require("./db")
const {DataTypes} = require("sequelize")

const Question = sequelize.define("Question",{
    questionContent : {
        type : DataTypes.STRING(255),
        allowNull: false,
    },
    optionA : {
        type : DataTypes.TEXT,
        allowNull : false,
    },
    optionB : {
        type : DataTypes.STRING(255),  
        allowNull : false,  
    },
    optionC : {
        type : DataTypes.STRING(255),
        allowNull : false,
    },
    optionD:{
       type : DataTypes.STRING(255),
       allowNull : false,
    },
    answer : {
        type : DataTypes.STRING(255),
        allowNull : false,
    },
    point :{
        type : DataTypes.INTEGER(11),
        allowNull : false,
    },
    bankId : {
        type : DataTypes.INTEGER(11),
        allowNull : false,
    },

},
{
    createdAt : true,
    updatedAt : true,
    paranoid : true
}
)

module.exports = Question