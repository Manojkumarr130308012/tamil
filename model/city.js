const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
    Cityid: {
        type: String,
        required: false
    },
    CityName:{
        type: String,
        required: false
    },
    State:{
        type: String,
        required: false
    },
    state_code:{
        type: String,
        required: false
    },
    Country:{
        type: String,
        required: false
    },
    country_code:{
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
module.exports = new mongoose.model('city',citySchema);
