const express = require("express");
const server = express();
const bodyParser=require('body-parser');
const config=require("./../config/config.json")
var mongoose = require('mongoose');
server.use(bodyParser.json());
const cors = require('cors');
server.use(cors());


//Master
const userRouter = require('./../router/user');
const countryRouter = require('../router/country');
const stateRouter = require('../router/state');
const cityRouter = require('../router/city');
const regionRouter = require('../router/region');
const genderRouter = require('../router/gender');
const membershipRouter = require('../router/membershiptype');
const interestsRouter = require('../router/interests');
const bussinesscategoryRouter = require('../router/bussinesscategory');
const membershipclassRouter = require('../router/membershipclassification');
const membershipcostRouter = require('../router/membershipcost');
const chapterRouter = require('../router/chapter');
const districtRouter = require('../router/district');
const memberRouter = require('../router/member');
const memberpaymentRouter = require('../router/memberpayment');
const eventsRouter = require('../router/events');
const speakerproRouter = require('../router/speakerpro');
const trackerproRouter = require('../router/tracker');
const agendaRouter = require('../router/agenda');
const fileuploadRouter = require('../router/fileupload');
const eventimageRouter = require('../router/eventimage');
const eventlinkRouter = require('../router/eventlink');
const sponsorRouter = require('../router/sponsor');
const bussicategoryRouter = require('../router/bussinesscate');
const bussiconRouter = require('../router/bizcon');
const bussiopRouter = require('../router/bizop');
const bannerRouter = require('../router/Banner');
const newsRouter = require('../router/news');
const boardRouter = require('../router/Board');
const donateRouter = require('../router/donate');
const bussinessopcommentRouter = require('../router/bizopcomments');
const partnerRouter = require('../router/privillageedpartner');
const initiativeRouter = require('../router/initiative');
const donatepaymentRouter = require('../router/donatepayment');
const advertisementRouter = require('../router/advertisement');
const iniativeRouter = require('../router/iniativebanner');

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
    
//Master
server.use("/user", userRouter);
server.use("/country", countryRouter);
server.use("/state", stateRouter);
server.use("/city", cityRouter);
server.use("/region", regionRouter);
server.use("/gender", genderRouter);
server.use("/membershiptype", membershipRouter);
server.use("/interests", interestsRouter);
server.use("/bussinesscategory", bussinesscategoryRouter);
server.use("/membershipclass", membershipclassRouter);
server.use("/membershipcost", membershipcostRouter);
server.use("/chapter", chapterRouter);
server.use("/district", districtRouter);
server.use("/member", memberRouter);
server.use("/memberpayment", memberpaymentRouter);
server.use("/events", eventsRouter);
server.use("/speaker", speakerproRouter);
server.use("/tracker", trackerproRouter);
server.use("/agenda", agendaRouter);
server.use("/fileupload", fileuploadRouter);
server.use("/eventimage", eventimageRouter);
server.use("/eventlink", eventlinkRouter);
server.use("/sponsor", sponsorRouter);
server.use("/bussicategory", bussicategoryRouter);
server.use("/bussinesscon", bussiconRouter);
server.use("/banner", bannerRouter);
server.use("/businessop", bussiopRouter);
server.use("/news", newsRouter);
server.use("/Board", boardRouter);
server.use("/busiopcomment", bussinessopcommentRouter);
server.use("/donate", donateRouter);
server.use("/partnerbanner", partnerRouter);
server.use("/initiativebanner", initiativeRouter);
server.use("/donatepayment", donatepaymentRouter);
server.use("/advertisement", advertisementRouter);
server.use("/initiative", iniativeRouter);

module.exports= server;