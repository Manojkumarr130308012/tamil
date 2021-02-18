const mongoose = require("mongoose");

const iniativeSchema = new mongoose.Schema({
    Title : {
        type: String,
        required: true
    }, 
    iniativeimage:{
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('iniative',iniativeSchema);
