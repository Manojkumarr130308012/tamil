const express = require("express");
const server = express();
const bodyParser=require('body-parser');
const config=require("./../config/config.json")
var mongoose = require('mongoose');
server.use(bodyParser.json());
const cors = require('cors');
server.use(cors());



const userRouter = require('./../router/user');
const countryRouter = require('../router/country');
const stateRouter = require('../router/state');
// console.log("enter")
 let { protocal, host, port, name,username,password } = config.app.db;
 let db= process.env.MONGODB_URL ||`mongodb+srv://admin:1234@tamilrise.hiba6.mongodb.net/tamilrise?retryWrites=true&w=majority`;


console.log('connected to the database',db);

	
mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    },function(error){
        if(error)
        {
        console.log(error);
  }
        else
        {
        console.log('connected to the database',db);
        }
	});
	//locationdata

server.use("/user", userRouter);

server.use("/country", countryRouter);

server.use("/state", stateRouter);


module.exports= server;