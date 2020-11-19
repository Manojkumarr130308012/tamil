const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
    Country: {
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    StateName:{
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('state',stateSchema);
