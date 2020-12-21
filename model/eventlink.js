const mongoose = require("mongoose");

const EventlinkSchema = new mongoose.Schema({
    Event : {
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    Eventlink:{
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('Eventlink',EventlinkSchema);
