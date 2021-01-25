const mongoose = require("mongoose");

const donateSchema = new mongoose.Schema({
    donate: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('donate',donateSchema);
