const express = require("express")
const { async } = require("validate.js")
const router = express.Router()
const userServ = require("../services/userServ")
const { asyncHandler } = require("../utils/getSendResult")
const jwt = require("../utils/jwt.js")


router.post("/:type", asyncHandler(async (req, res) => {
    const type = req.params.type
    if (type == "signIn") {
        const result = await userServ.login(req.body)
        if (result) {
            jwt.publish(res, undefined, { id: result.id })
        }
        return result
    } else {
        const allowSingIn = await userServ.checkUserExist(req.body.username)
        if (allowSingIn) {
            const result = await userServ.addUser(req.body)
            return result
        } else {
            res.send({
                code: -1,
                msg: "用户名已存在",
            })
        }

    }
}))

router.get("/", asyncHandler(async(req, res)=>{
    console.log(req.userId)
    const resp = await userServ.getUserById(req.userId)
    return resp
}))

module.exports = router