const express = require("express")
const { async } = require("validate.js")
const router = express.Router()
const paperServ = require("../services/paperServ")
const { asyncHandler } = require("../utils/getSendResult")



router.post("/",asyncHandler(async (req, res)=>{
    const alreadyExist = await paperServ.checkPaperNameExist(req.body)
    if (!alreadyExist) {
        const result = await paperServ.addPaper(req.body)
        return result
    } else {
        res.send({
            code: "-1",
            msg: "failed",
            data: {}
        })
    }
}))

module.exports = router