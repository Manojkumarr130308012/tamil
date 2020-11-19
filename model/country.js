const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
    CountryName: {
        type: String,
        required: false
    }
})
module.exports = new mongoose.model('country',countrySchema);
