const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
    CountryNamecode: {
        type: String,
        required: true
    },
    CountryName: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('country',countrySchema);
