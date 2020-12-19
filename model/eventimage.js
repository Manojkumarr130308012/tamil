const mongoose = require("mongoose");

const eventimageSchema = new mongoose.Schema({
    Event : {
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    eventimage:{
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('eventimage',eventimageSchema);
