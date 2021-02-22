const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
    Countrycode: {
        type: String,
        required: false
    },
    CountryName: {
        type: String,
        required: false
    },
    code: {
        type: String,
        required: false
    }
})
module.exports = new mongoose.model('country',countrySchema);
