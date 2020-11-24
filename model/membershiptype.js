const mongoose = require("mongoose");

const membershiptypeSchema = new mongoose.Schema({
    MembershipType : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('membershiptype',membershiptypeSchema);
