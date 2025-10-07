const jwt = require("jsonwebtoken")
const { JWT_ADMIN_PASSWORD } = require("../config")

function adminMiddleware(req, res, next) {
    const token = req.headers.token
    const decodedInformation = jwt.verify(token, JWT_ADMIN_PASSWORD)
    if(decodedInformation){
        req.adminId = decodedInformation.adminId
        next()
    }else {
        res.status(403).json({
            message: "You are not signed up"
        })
    }
}

module.exports = {
    adminMiddleware: adminMiddleware
}