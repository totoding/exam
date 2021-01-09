const express = require("express")
const { async } = require("validate.js")
const router = express.Router()
const examServ = require("../services/examServ")
const { asyncHandler } = require("../utils/getSendResult")



router.post("/",asyncHandler(async (req, res)=>{
    
    const alreadyExist = await examServ.checkExamNameExist(req.body)
    if (!alreadyExist.count) {
        const result = await examServ.addExam(req.body)
        return result
    } else {
        res.send({
            code: "-1",
            msg: "failed",
            data: {}
        })
    }
}))

router.get("/", asyncHandler(async (req, res)=>{
    const result = await examServ.getExamList()
    return result
}))


router.put("/", asyncHandler(async (req, res)=>{
    const id = req.body.id
    const status = req.body.status
    let result = null
    status == 0 ? result  = await examServ.examStart(id) : result = await examServ.examStop(id)
    return result 
}))
module.exports = router