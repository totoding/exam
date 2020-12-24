const QuestionItem = require("../models/QuestionItem")
const validate = require("validate.js")
const rule = {
    questionContent:{
        presence: {
            allowEmpty: false
        },
        type: "string"
    },
    optionA:{
        presence: {
            allowEmpty: false
        },
        type : "string"
    },
    optionB:{
        presence: {
            allowEmpty: false
        },
        type : "string"
    },
    optionC:{
        presence: {
            allowEmpty: false
        },
        type : "string"
    },
    optionD:{
        presence: {
            allowEmpty: false
        },
        type : "string"
    },
    answer:{
        presence: {
            allowEmpty: false
        },
        type : "string"
    },
    point:{
        presence: {
            allowEmpty: false
        },
        type : "number"
    },
    bankId:{
        presence: {
            allowEmpty: false
        },
        type : "number"
    },

}
exports.AddQes = async (content)=>{
    validate.validate(content,rule)
    const resp = await QuestionItem.create(content)
    return resp.toJSON()
}

exports.getQesListByBankId = async (bankId)=>{
    return await QuestionItem.findAll({
        where:{
            bankId,
        }
    })
}

exports.editQesItemById = async (id,content)=>{
    validate.validate(content,rule)
    const resp = await QuestionItem.update(content,{
        where : {
            id,
        }
    })
    return resp[0] == 1 ? true : false
}

exports.deleteQesItemById = async(id)=>{
    const resp =   await QuestionItem.destroy({
        where:{
            id
        }
    })
    return resp
}





