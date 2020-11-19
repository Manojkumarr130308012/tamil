const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
    Country: {
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    State:{
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    CityName:{
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('city',citySchema);
