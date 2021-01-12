const sequelize = require("../models/db")
const Examinee = require("../models/Examinee")
const Exam = require("../models/Exam")
const QuestionItem = require("../models/QuestionItem")
const md5 = require("md5")
const validate = require("validate.js")
const { async } = require("validate.js")
const { where } = require("sequelize/types")

// 报名
exports.addExaminee = async(payload)=>{
    const allowAdd =  await checkExamineeExist(payload.userId, payload.examId)
    if(!allowAdd){
        payload.identityCard = await createIdentityCard(payload.userId, payload.examId)
        payload.paperLog = "",
        payload.score = null
        const result = await Examinee.create(payload)
        Exam.update(
            {
                signIn :  sequelize.literal('signIn+1')
            },
            {
                where :{
                    id : payload.examId
                }
            }
        )
        return result.toJSON()
    }else{
        return false
    }  
}

// 进入考试 获取试题
exports.loginExam = async ({userId, realName,identityCard, examId})=>{
    const resp = await Examinee.findOne({
        include : [Exam],
        where:{
            userId,
            realName,
            identityCard,
            examId,
        }
    })
    const bankInfo = JSON.parse(resp.Exam.bankInfo)
    const porms = []
    bankInfo.forEach(ele=>{
        const resp =  QuestionItem.findAll({
            limit : ele.qesCount,
            order: sequelize.random()
        })
        porms.push(resp)
    })
    const arr = await Promise.all([...porms])
    return arr
}


// 获取以报名
exports.getSignedExamByUserId = async (userId)=>{
    const resp = await Examinee.findAll({
        // attributes :[ "examId" ],
        include : [Exam],
        where:{
            userId
        }
    })
    return resp
}

// 创建准考证号
async function createIdentityCard(examId){ 
    let examineeId = ""
    const id = await Examinee.max({
        where : {
            examId
        }
    })
    if(id){
        examineeId = (Array(4).join(0) + (id + 1)).slice(-4)
    }else{
        examineeId = (Array(4).join(0) + 1).slice(-4)
    }
    const fullExamId =  (Array(4).join(0) + examId).slice(-4)
    const year = new Date().getFullYear()
    const identityCard = year + fullExamId + examineeId
    return identityCard  
  
}


async function checkExamineeExist(userId,examId){
    const result = await Examinee.findOne({
        where : {
            userId,
            examId
        }
    })
    return result ? true : false
}