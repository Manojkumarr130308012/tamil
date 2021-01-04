const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
    banner: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('banner',bannerSchema);
