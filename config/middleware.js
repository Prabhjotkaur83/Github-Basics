const jwt = require("jsonwebtoken")
const secret = "Project@12"

module.exports = (req,res,next)=>{
    var token = req.headers["authorization"]
    jwt.verify(token, secret,function(err,data){
        if(err!=null){
            res.json({
                message: "Unauthenticated",
                status: 200,
                success: false
            })
        }
        else{
            next()
        }
    })
}