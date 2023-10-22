const express = require("express")
const app = express()
const config = require("./config/db")
app.use(express.urlencoded({extended:false}))
router = require("./router/apiRoutes")
app.use("/api",router)

const port = 4000
app.listen(port,()=>{
console.log("Server Connected")
}) 