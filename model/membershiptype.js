const mongoose = require("mongoose");

const membershiptypeSchema = new mongoose.Schema({
    MembershipType : {
        type: String,
        required: true
    },
    Amount : {
        type: String,
        required: true
    },
    WomenOffer : {
        type: String,
        required: true
    },
    Status : {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('membershiptype',membershiptypeSchema);
