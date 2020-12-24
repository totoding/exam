const express = require("express")
const router = express.Router()
const qesItemServ = require("../services/qesItemServ")
const {
    asyncHandler
} = require("../utils/getSendResult")


router.post('/', asyncHandler(async (req, res) => {
    const newQesList = req.body
    if(newQesList.length > 1){
        const proms = [] 
        newQesList.forEach(  ele => {
            const res = qesItemServ.AddQes(ele)
            proms.push(res)
        });
        const result = Promise.all(proms)
        return result
    }else{
        res.send({
            code: "-1",
            msg: "请添加试题",
            data: {}
        })
    }
}))

router.get('/:bankId', asyncHandler(async (req, res) => {
    const bankId = req.params.bankId
    const result = await qesItemServ.getQesListByBankId(bankId)
    return result
}))

router.put("/:id", asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await qesItemServ.editQesItemById(id, req.body)
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
    const result = await qesItemServ.deleteQesItemById(id)
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