const User = require("./usermodel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secret = "Project@12"
const saltround = 10
add = (req, res) => {
    let userObj = new User()
    userObj.email = req.body.email
    userObj.password = bcrypt.hashSync(req.body.password,saltround,secret)
    userObj.save()
        .then(data => {
            res.json({
                message: "data added successfully",
                status: 500,
                success: true,
                data: data

            })
        })
}
login = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(userdata => {
            if (userdata == null) {
                res.json({
                    message: "No user found",
                    status: 404,
                    success: false
                })
            }
            else {
                bcrypt.compare(req.body.password, userdata.password, function (err, data) {
                    if (!data) {
                        res.json({
                            message: "Invalid Password",
                            status: 422,
                            success: false
                        })
                    }
                    else {
                        let payload = {
                            id: userdata._id,
                            email: userdata.email
                        }
                        var mytoken = jwt.sign(payload, secret)
                        res.json({
                            message: "Login successful",
                            status: 200,
                            success: true,
                            data: userdata,
                            token: mytoken
                        })
                    }
                })
            }
        })
}
changepassword = (req,res) =>{
    User.findOne({email: req.body.email})
}
module.exports = {
    add, login
}