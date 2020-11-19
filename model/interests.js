const mongoose = require("mongoose");

const interestsSchema = new mongoose.Schema({
    Interests: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('interests',interestsSchema);
