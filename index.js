const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { Registerhandler, loginhandler } = require("./controllers/userController");

const app = express();

const Port = 4000;
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.get('/',(req,res)=>{
    res.status(200).send("i am home page");
})
app.post("/user/register", Registerhandler);
 app.post("/user/login", loginhandler);


app.listen(Port, console.log(`server conected on localhost : ${Port} `));