const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
    CountryName: {
        type: String,
        required: false
    }
})
module.exports = new mongoose.model('state',stateSchema);
