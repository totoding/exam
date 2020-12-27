const QuestionBank = require("../models/QuestionBank")
const md5 = require("md5")
const validate = require("validate.js")
const { async } = require("validate.js")
//验证规则
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
// 添加题库
exports.AddQesBank = async ({bankName,bankType,itemPoint})=>{
    validate.validate({bankName,bankType,itemPoint},rule)
    const resp = await QuestionBank.create({bankName,bankType,itemPoint})
    return resp.toJSON()
}

// 获取题库列表
exports.getAllQesBank = async ()=>{
    return await QuestionBank.findAll({
        attributes:["id","bankName","bankType","itemPoint"]
    })
}

// 编辑题库
exports.editQesBank = async (id,{name,bankType,itemCount})=>{
  
    const resp = await QuestionBank.update({
        bankName : name, 
        bankType,
        itemPoint : itemCount
    },{
        where : {
            id,
        }
    })
    
    return resp[0] == 1 ? true : false
}
// 删除题库
exports.deleteQesBank = async(id)=>{
    const resp =   await QuestionBank.destroy({
        where:{
            id
        }
    })
    return resp
}
// 检查是否有题库重名
exports.checkQesBanKNameExist = async function ({bankName}) {
    const resp = await QuestionBank.findAndCountAll({
        where :{
            bankName
        }
    })
    return resp.count
}



