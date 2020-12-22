const mongoose = require("mongoose");

const sponsorproSchema = new mongoose.Schema({
    Event : {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    }, 
    products: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        required: true
    },
    sponsorbanner: {
        type: String,
        required: false
    },
    image1: {
        type: String,
        required: false
    },
    image2: {
        type: String,
        required: false
    },
    image3: {
        type: String,
        required: false
    },
    image4: {
        type: String,
        required: false
    },
    image5: {
        type: String,
        required: false
    }
})
module.exports = new mongoose.model('sponsor',sponsorproSchema);
