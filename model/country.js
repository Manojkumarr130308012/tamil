const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
    Countryid: {
        type: String,
        required: false
    },
    Countrycode: {
        type: String,
        required: false
    },
    CountryName: {
        type: String,
        required: false
    }
})
module.exports = new mongoose.model('country',countrySchema);
