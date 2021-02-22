const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
    Country: {
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    StateName:{
        type: String,
        required: true
    }, 
    country_code:{
        type: String,
        required: true
    }, 
    state_code:{
        type: String,
        required: true
    }, 
    latitude:{
        type: String,
        required: true
    }, 
    longitude:{
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('state',stateSchema);
