const express = require("express")
const chats = require("./data/data")
require('dotenv').config()
const PORT = process.env.PORT || 5000
const app = express()

app.get("/",(req,res)=>{
    res.send("API is Running")
})
app.get("/api/chat" , (req,res)=>{
    res.send(chats)
})
app.get("/api/chat/:id" ,(req,res)=>{
    // console.log(req.params.id)
    const singleChat = chats.find((c)=>c._id ===req.params.id)
    res.send(singleChat)
})
app.listen(PORT , console.log(`server is started on : ${PORT}`))