const Exam = require("../models/Exam.js")
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
exports.checkExamNameExist = async ({paperName})=>{
    const resp = await Exam.findAndCountAll({
        where:{
            paperName
        }
    })
    return resp
}

// 添加考试
exports.addExam = async (payload)=>{
    validate.validate(payload,rule)
    payload.signUp = 0
    payload.isStart = 0
    const resp = await Exam.create(payload)
    return resp.toJSON()
}

exports.getExamList = async ()=>{
    const resp = await Exam.findAll()
    return resp
}

exports.examStart = async(id)=>{
    const resp = await Exam.update({
        isStart :  1,
    },{
        where:{
            id,
        }
    })
    return resp[0] == 1 ? true : false
}

exports.examStop = async(id)=>{
    const resp = await Exam.destroy({
        where : {
            id
        }
    })
    return resp
}