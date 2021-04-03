import express from "express"
import bodyParser from "body-parser"
import userRouter from "./routes/users.js"

const server=express()
const PORT=8888
server.use(bodyParser.json())

// server.get("/",(req,res)=> res.send("Welcome to my library"))
var homepage=(req,res)=> res.send("Welcome to my library") //handle http://localhost:8888/

server.use("/user",userRouter)
server.get("/",homepage)

server.listen(PORT)
