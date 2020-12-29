const mongoose = require("mongoose");

const bussicategorySchema = new mongoose.Schema({
    bussCategory: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('bussicategory',bussicategorySchema);
