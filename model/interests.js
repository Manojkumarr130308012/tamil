const mongoose = require("mongoose");

const interestsSchema = new mongoose.Schema({
    Interestscode: {
        type: String,
        unique:true,
        required: true
    },
    Interests: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('interests',interestsSchema);
