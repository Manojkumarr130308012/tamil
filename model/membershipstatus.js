const mongoose = require("mongoose");

const membershipstatusSchema = new mongoose.Schema({
    Status: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('membershipstatus',membershipstatusSchema);
