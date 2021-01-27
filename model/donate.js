const mongoose = require("mongoose");

const donateSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    donate: {
        type: String,
        required: true
    },
    banner: {
        type: String,
        required: true
    }

})
module.exports = new mongoose.model('donate',donateSchema);
