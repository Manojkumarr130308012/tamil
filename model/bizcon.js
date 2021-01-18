const mongoose = require("mongoose");

const bussconSchema = new mongoose.Schema({
    buzzop: {
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    date:{
        type: String,
        required: true
    }, 
    member:{
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    description:{
        type: String,
        required: true
    }, 
    image1:{
        type: String,
        required: true
    }, 
    image2:{
        type: String,
        required: true
    }, 
    image3:{
        type: String,
        required: true
    }, 
    status:{
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('busscon',bussconSchema);
