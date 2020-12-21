const express = require("express")
const router = express.Router()
const userServ = require("../services/userServ")
const { asyncHandler } = require("../utils/getSendResult")
const jwt = require("../middleWare/jwt")
router.get('/', asyncHandler(async (req, res) => {
    const result =  await userServ.getUserById(req.userId)
    return result
}))


module.exports = router