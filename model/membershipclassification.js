const mongoose = require("mongoose");

const membershipclassificationSchema = new mongoose.Schema({
    Membershipclassfication : {
        type: String,
        required: true
    },
    Desription : {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('membershipclass',membershipclassificationSchema);
