const jwt = require("jsonwebtoken")

function sign(username) {
    return jwt.sign({username},"123456",{
        expiresIn:"10m"
    })
}

function verify(token) {
    return jwt.verify(token , "123456")
}

export default {sign , verify}