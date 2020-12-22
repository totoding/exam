const QuestionItem = require("../models/QuestionItem")
const validate = require("validate.js")
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
    validate.validate(content,rule)
    const resp = await QuestionItem.create(content)
    console.log(resp.toJSON())
    return resp.toJSON()
}

exports.getAllQesBank = async ()=>{
    return await QuestionBank.findAll({
        attributes:["id","bankName","bankType","itemPoint"]
    })
}

exports.editQesBank = async (id,{bankName,bankType,itemPoint})=>{
    const rule = {
        bankName:{
            presence: {
                allowEmpty: false
            },
            type: "string"
        },
        bankType:{
            presence: {
                allowEmpty: false
            },
            type : "number"
        },
        itemPoint:{
            presence: {
                allowEmpty: false
            },
            type : "number"
        },

    }
    validate.validate({bankName,bankType,itemPoint},rule)
    const resp = await QuestionBank.update({
        bankName, 
        bankType,
        itemPoint
    },{
        where : {
            id,
        }
    })
    return resp[0] == 1 ? true : false
}

exports.deleteQesBank = async(id)=>{
    const resp =   await QuestionBank.destroy({
        where:{
            id
        }
    })
    return resp
}


exports.checkQesBanKNameExist = async function ({bankName}) {
    const resp = await QuestionBank.findAndCountAll({
        where :{
            bankName
        }
    })
    return resp.count
}



