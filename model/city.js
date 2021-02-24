const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
    Cityid: {
        type: String,
        required: true
    }, 
    CityName:{
        type: String,
        required: true
    },
    State:{
        type: String,
        required: true
    }, 
    state_code:{
        type: String,
        required: true
    }, 
    Country:{
        type: String,
        required: true
    }, 
    country_code:{
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
module.exports = new mongoose.model('city',citySchema);
