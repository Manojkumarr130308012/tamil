const mongoose = require("mongoose");

const membershipcostSchema = new mongoose.Schema({
    membershiptype: {
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    membershipclassification:{
        type: mongoose.Schema.ObjectId,
        required: false
    },
    amount:{
        type: String,
        required: true
    },  
    validity:{
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('membershipcost',membershipcostSchema);
