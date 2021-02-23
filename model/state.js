const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
    Stateid: {
        type: String,
        required: false
    }, 
    Country: {
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    StateName:{
        type: String,
        required: false
    }, 
    country_code:{
        type: String,
        required: false
    }, 
    state_code:{
        type: String,
        required: false
    }, 
    latitude:{
        type: String,
        required: false
    }, 
    longitude:{
        type: String,
        required: false
    }
})
module.exports = new mongoose.model('state',stateSchema);
