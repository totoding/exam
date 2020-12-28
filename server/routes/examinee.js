const express = require("express")
const { async } = require("validate.js")
const router = express.Router()
const examineeServ = require("../services/examineeServ")
const { asyncHandler } = require("../utils/getSendResult")

router.post("/:type",asyncHandler(async (req, res)=>{
    const type = req.params.type
    if(type == "singIn"){
        // 考生报名
        const resp =   await examineeServ.addExaminee(req.body)
    }else{
        // 登录考试 获取试题
        const resp = await examineeServ.loginExam(req.body)
    }
}))

module.exports = router