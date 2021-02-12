const mongoose = require("mongoose");

const initiativeSchema = new mongoose.Schema({
    initiative: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('riseinitiative',initiativeSchema);
