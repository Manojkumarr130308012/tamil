const mongoose = require("mongoose");

const busiopcommentSchema = new mongoose.Schema({
    busiop: {
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    member:{
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    comments:{
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('businessopcomment',busiopcommentSchema);
