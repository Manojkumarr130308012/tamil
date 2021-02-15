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
        required: false
    }, 
    amount:{
        type: String,
        required: false
    }, 
    status:{
        type: String,
        required: false
    }
})
module.exports = new mongoose.model('donatepayment',donatepaymentSchema);
