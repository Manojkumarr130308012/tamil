const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
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
