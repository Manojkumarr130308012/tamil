const mongoose = require("mongoose");

const advertSchema = new mongoose.Schema({
    url : {
        type: String,
        required: true
    }, 
    advertiseimage:{
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('advertise',advertSchema);
