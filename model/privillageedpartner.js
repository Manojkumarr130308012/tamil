const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
    partner: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('partner',partnerSchema);
