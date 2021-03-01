const mongoose = require("mongoose");

const memberpaymentSchema = new mongoose.Schema({
    memberid: {
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    razorpayid:{
        type: String,
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
module.exports = new mongoose.model('memberpayment',memberpaymentSchema);
