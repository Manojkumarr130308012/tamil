const mongoose = require("mongoose");

const regionSchema = new mongoose.Schema({
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
module.exports = new mongoose.model('region',regionSchema);
