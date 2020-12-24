const Paper = require("../models/Paper")
const validate = require("validate.js")
const { async } = require("validate.js")

// 考试/试卷 验证规则
const rule = {
    paperName:{
        presence: {
            allowEmpty: false
        },
        type: "string"
    },
    startTime:{
        presence: {
            allowEmpty: false
        },
        type: "string"
    },
    Duration:{
        presence: {
            allowEmpty: false
        },
        type: "string"
    },
    totalScore:{
        presence: {
            allowEmpty: false
        },
        type: "number"
    },
    bankInfo:{
        presence: {
            allowEmpty: false
        },
        type: "string"
    }
}
// 检查重名
exports.checkPaperNameExist = async ({paperName})=>{
    const resp = await Paper.findAndCountAll({
        where:{
            paperName
        }
    })
    return resp
}

// 添加考试
exports.addPaper = async (payload)=>{
    validate.validate(payload,rule)
    const resp = await Paper.create(payload)
    return resp.toJSON()
}

