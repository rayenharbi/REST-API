const express = require ('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()
app.use(express.json())



const port = process.env.PORT || 8000

mongoose.connect(process.env.MONGO_URI).then (()=> console.log("database connected"))

app.use('/api',require("./routes/contactRoutes"))
// app.get("/",(req,res)=>{
// res.send("<h1> hello </h1>")
// })

app.listen(port,()=>console.log('lestening on port :',port))