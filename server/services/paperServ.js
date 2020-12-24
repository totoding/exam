const QuestionBank = require("../models/QuestionBank")
const validate = require("validate.js")
const { async } = require("validate.js")

exports.checkPaperNameExist = async ({paperName})=>{
    const resp = await findAndCountAll({
        where:{
            paperName
        }
    })
    return resp
}

exports.addPaper = async (payload)=>{
    
}