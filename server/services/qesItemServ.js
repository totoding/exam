const QuestionItem = require("../models/QuestionItem")
const validate = require("validate.js")


// 添加试题
exports.AddQes = async (content)=>{
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
    try {
        validate.validate(content,rule)  
        const resp = await QuestionItem.create(content)
        return resp.toJSON()    
    } catch (error) {
        return {
            err : error,
        }
    }
    
  
}

// 通过题库id获取试题列表
exports.getQesListByBankId = async (bankId)=>{
    return await QuestionItem.findAll({
        where:{
            bankId,
        }
    })
}

// 通过试题id编辑及试题
exports.editQesItemById = async (id,content)=>{
    validate.validate(content,rule)
    const resp = await QuestionItem.update(content,{
        where : {
            id,
        }
    })
    return resp[0] == 1 ? true : false
}

// 通过id删除试题
exports.deleteQesItemById = async(id)=>{
    const resp =   await QuestionItem.destroy({
        where:{
            id
        }
    })
    return resp
}





