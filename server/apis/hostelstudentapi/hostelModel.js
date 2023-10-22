const mongoose= require("mongoose")
const HostelSchema = new mongoose.Schema({
    "name:":{type: String},
    "rollNo": {type: Number}
})
module.exports= new mongoose.model("HostelStudents", HostelSchema)