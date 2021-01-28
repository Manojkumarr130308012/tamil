const mongoose = require("mongoose");

const donateSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    donate: {
        type: String,
        required: true
    },
    banner: {
        type: String,
        required: false
    },
    AboutFundraiser: {
        type: String,
        required: false
    },
    Contactperson: {
        type: String,
        required: false
    },
    Contactmobile: {
        type: String,
        required: false
    },
    Totalamount: {
        type: String,
        required: false
    },
    status : {
        type: String,
        required: false
    },
    document1 : {
        type: String,
        required: false
    },
    document2 : {
        type: String,
        required: false
    },
    document3 : {
        type: String,
        required: false
    },
})
module.exports = new mongoose.model('donate',donateSchema);
