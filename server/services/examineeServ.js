const Examinee = require("../models/Examinee")
const QuestionItem = require("../models/QuestionItem")
const md5 = require("md5")
const validate = require("validate.js")
const { async } = require("validate.js")

// 报名
exports.addExaminee = async(payload)=>{
    const allowAdd =  await checkExamineeexist()
    if(allowAdd){
        payload.identityCard = createIdentityCard
        const result = await Examinee.create(payload)
        return result.toJSON()
    }else{
        return false
    }  
}

// 进入考试 获取试题
exports.loginExam = async ({userId, realName,identityCard, examId})=>{
    const paperId = await Examinee.findOne({
        where:{
            userId,
            realName,
            identityCard,
            examId
        }
    })
    // const paperInfo = 
}

// 创建准考证号
async function createIdentityCard(userId, ExamId){ 
    let examineeId = ""
    const id = await Examinee.max("id")
    if(id){
        examineeId = (Array(4).join(0) + (id + 1)).slice(-4)
    }else{
        examineeId = (Array(4).join(0) + 1).slice(-4)
    }
    const fullExamId =  (Array(4).join(0) + 2).slice(-4)
    const year = new Date().getFullYear()
    const identityCard = year + fullExamId + examineeId
    return identityCard  
}

async function checkExamineeexist(userId){
    const result = await Examinee.findOne({
        where : {
            userId,
        }
    })
    return result ? true : false
}