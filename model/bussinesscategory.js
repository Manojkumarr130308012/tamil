const mongoose = require("mongoose");

const bussinesscategorySchema = new mongoose.Schema({
    Interests: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('bussinesscategory',bussinesscategorySchema);
