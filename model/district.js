const mongoose = require("mongoose");

const districtSchema = new mongoose.Schema({
    Country: {
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    State:{
        type: mongoose.Schema.ObjectId,
        required: false
    },
    region:{
        type: mongoose.Schema.ObjectId,
        required: false
    },  
    district:{
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('district',districtSchema);
