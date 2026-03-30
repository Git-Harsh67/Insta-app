require("dotenv").config()
const express = require("express")
const dataBase = require("./config/mongoDB")
const app = express()

dataBase()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/api/health",(req,res)=>{
    res.status(200).json({
        msg:"qwerty"
    })
})

app.use("/api/auth", require("./routes/auth"))
app.use("/api/post", require("./routes/post"))

const PORT = process.env.PORT || 2000

app.listen(PORT,()=>{
    console.log("server is running on "+ PORT )
})