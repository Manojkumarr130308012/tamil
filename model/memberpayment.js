const mongoose = require("mongoose");

const memberpaymentSchema = new mongoose.Schema({
    memberid: {
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    razorpayid:{
        type: String,
        required: true
    }, 
    dateTime:{
        type: String,
        required: true
    }, 
    status:{
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('memberpayment',memberpaymentSchema);
