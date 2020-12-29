const mongoose = require("mongoose");

const bussopSchema = new mongoose.Schema({
    member: {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    date: {
        type: String,
        required: true
    },
    chapter: {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    city: {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    district: {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    region: {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    state: {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    country: {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    }, 
    quantity : {
        type: String,
        required: true
    }, 
    ordervalue : {
        type: String,
        required: true
    }, 
    image1 : {
        type: String,
        required: true
    }, 
    image2 : {
        type: String,
        required: true
    }, 
    image3 : {
        type: String,
        required: true
    }, 
    status  : {
        type: String,
        required: true
    }

})
module.exports = new mongoose.model('bussop',bussopSchema);
