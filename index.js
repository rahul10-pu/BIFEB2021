import express from "express"
import bodyParser from "body-parser"
import userRouter from "./routes/users.js"
import tutorialRouter from "./routes/tutorials.js"
import mongoose from 'mongoose'
import pgdb from './models/index.js';
import cors from 'cors';

var corsOptions = {
    origin: "http://localhost:8080"
};

const Role = pgdb.roles;
function initializeDB(){
    Role.create({
        id:1,
        name:"user"
    })
    Role.create({
        id:2,
        name:"admin"
    })
    Role.create({
        id:3,
        name:"moderator"
    })
}
//this will drop the table and re-sync the db
pgdb.sequelize.sync({force:true}).then(
    ()=>{
        initializeDB();
        // console.log("++++++++++++++++++")
        // console.log(result)
        // console.log("++++++++++++++++++")
    }
    ).catch(
    (err)=>{
        console.log("@@@@@@@@@@@@@@@@@@@@@@@")
        console.log(err)
        console.log("@@@@@@@@@@@@@@@@@@@@@@@")
    }
)
const dbURI='mongodb+srv://rahul3:rahul3@cluster0.apqfl.mongodb.net/library?retryWrites=true&w=majority'

mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(
        (result) => {
            console.log("Connected to the Database")
            server.listen(PORT)
            console.log("Server started successfully")
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )

const server=express()
const PORT=8080
server.use(cors(corsOptions));

//parse request of content-type - application/json
server.use(bodyParser.json())

// server.get("/",(req,res)=> res.send("Welcome to my library"))
var homepage=(req,res)=> res.send("Welcome to my library") //handle http://localhost:8888/
server.use("/user",userRouter)
server.use("/tutorial", tutorialRouter)
server.get("/",homepage)





