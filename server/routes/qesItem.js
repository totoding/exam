const express = require("express")
const router = express.Router()
const qesItemServ = require("../services/qesItemServ")
const {
    asyncHandler
} = require("../utils/getSendResult")


router.post('/', asyncHandler(async (req, res) => {

    const result = await qesItemServ.AddQes(req.body)
    return result
    const alreadyExist = await qesBankServ.checkQesNameExist(req.body)
    if (!alreadyExist) {
     
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