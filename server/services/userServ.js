const User = require("../models/User")
const md5 = require("md5")
const validate = require("validate.js")

exports.addUser = async ({username,password})=>{
    const rule = {
        username:{
            presence: {
                allowEmpty: false
            },
            type: "string"
        },
        password:{
            presence: {
                allowEmpty: false
            },
        }
    }
    validate.validate({username,password},rule)
    password = md5(password)
    const resp = await User.create({username,password})
    return resp.toJSON()
}

exports.login = async function (userInfo) {
    let pwd = md5(userInfo.password)
    const result = await User.findOne({
        where: {
            username: userInfo.username,
            password: pwd
        }
    })
    return result ? result.toJSON() : null
}

exports.getUserById = async function(userId){
    const result = await User.findOne({
        where : {
           id: userId,
        }
    })
    return result ? result.toJSON() : null
}

exports.checkUserExist = async (username)=>{
    const resp = await User.findAndCountAll({
        where:{
            username
        }
    })
    return resp.count > 1 ? false : true
}



