const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
    CountryName: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('country',countrySchema);
