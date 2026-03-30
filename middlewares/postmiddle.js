const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next)=>{
const bearerHeader = req.headers["authorization"]
if(!bearerHeader){
    return res.status(401).json({
        msg : "headers is not given"
    })
}
const token = bearerHeader.split(" ")[1]
// console.log(token)
const tokenValue = jwt.verify(token , process.env.JWT_SECRETKEY)

next()
}

module.exports = verifyToken