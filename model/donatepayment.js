const mongoose = require("mongoose");

const donatepaymentSchema = new mongoose.Schema({
    memberid: {
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    razorpayid:{
        type: String,
        required: true
    }, 
    donateid:{
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    dateTime:{
        type: String,
        required: true
    }, 
    amount:{
        type: String,
        required: true
    }, 
    status:{
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('donatepayment',donatepaymentSchema);
