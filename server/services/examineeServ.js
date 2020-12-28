const Examinee = require("../models/Examinee")
const md5 = require("md5")
const validate = require("validate.js")
const { async } = require("validate.js")

// 报名
exports.addExaminee = async(payload)=>{
    const result = await Examinee.create(payload)
    return result.toJSON()
}

// 进入考试
exports.loginExam = async({id})=>{
    const paperId = await Examinee.findOne({
        where:{
            id
        }
    })
}

