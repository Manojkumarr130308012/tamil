const mongoose = require("mongoose");

const genderSchema = new mongoose.Schema({
    gender: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('gender',genderSchema);
