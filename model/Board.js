const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
    chapter : {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    designation: {
        type: String,
        required: true
    },
    order: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('board',boardSchema);
