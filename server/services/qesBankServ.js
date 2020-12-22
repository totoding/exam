const QuestionBank = require("../models/QuestionBank")
const md5 = require("md5")
const validate = require("validate.js")
const { async } = require("validate.js")
exports.AddQesBank = async ({bankName,bankType,itemPoint})=>{
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
    const resp = await QuestionBank.create({bankName,bankType,itemPoint})
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



