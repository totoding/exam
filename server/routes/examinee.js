const express = require("express")
const { async } = require("validate.js")
const router = express.Router()
const examineeServ = require("../services/examineeServ")
const { asyncHandler } = require("../utils/getSendResult")

router.post("/:type",asyncHandler(async (req, res)=>{
    const type = req.params.type
    req.body.userId = req.userId
    if(type == "singIn"){
        // 考生报名
        const resp = await examineeServ.addExaminee(req.body)
        return resp ? resp : res.send({
            code : "-1",
            data : {},
            msg : "重复报名"
        })
       
    }else{
        // 登录考试 获取试题
        req.body.userId = req.userId
        const resp = await examineeServ.loginExam(req.body)
    }
}))

router.get("/",asyncHandler(async (req, res)=>{
    const resp = await examineeServ.getSignedExamByUserId(req.userId)
    return resp
}))


module.exports = router