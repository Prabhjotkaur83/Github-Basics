const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    "email":{type: String},
    "password": {type:String}
})

module.exports = new mongoose.model("Users",UserSchema)
