const express = require("express")
const router = express.Router()
const qesBankServ = require("../services/qesBankServ")
const {asyncHandler} = require("../utils/getSendResult")
const jwt = require("../middleWare/jwt")

router.post('/', asyncHandler(async (req, res) => {
    const alreadyExist = await qesBankServ.checkQesBanKNameExist(req.body)
    if (!alreadyExist) {
        const result = await qesBankServ.AddQesBank(req.body)
        return result
    } else {
        res.send({
            code: "-1",
            msg: "failed",
            data: {}
        })
    }
}))

router.get('/', asyncHandler(async (req, res) => {
    const result = await qesBankServ.getAllQesBank()
    return result
}))

router.put("/:id", asyncHandler(async (req, res) => {
    console.log(req.body)
    const id = req.params.id
    const result = await qesBankServ.editQesBank(id, req.body)
    
    result ? res.send({
        code: "0",
        msg: "success",
        data: {}
    }) : res.send({
        code: "-1",
        msg: "failed",
        data: {}
    })
}))

router.delete("/:id", asyncHandler(async(req, res)=>{
    const id = req.params.id
    const result = await qesBankServ.deleteQesBank(id)
    result ? res.send({
        code: "0",
        msg: "success",
        data: {}
    }) : res.send({
        code: "-1",
        msg: "failed",
        data: {}
    })
}))


module.exports = router