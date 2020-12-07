const mongoose = require("mongoose");

const trackerSchema = new mongoose.Schema({
    Event : {
        // type: mongoose.Schema.ObjectId,
        type: String,
        required: false
    }, 
    TrackName:{
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('tracker',trackerSchema);
