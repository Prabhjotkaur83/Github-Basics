const routes = require("express").Router()
const usermodel = require("../server/apis/hostelstudentapi/users/usercontroller")

const hostelController = require("../server/apis/hostelstudentapi/hostelController")
routes.post("/hostel/add", hostelController.add)
routes.post("/user/add", usermodel.add)
routes.post("/user/login", usermodel.login)
routes.post("/hostel/update", hostelController.update)

module.exports = routes