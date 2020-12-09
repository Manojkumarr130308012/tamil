const mongoose = require("mongoose");

const agendaSchema = new mongoose.Schema({
    event: {
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    track:{
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    date:{
        type: String,
        required: true
    }, 
    time:{
        type: String,
        required: true
    }, 
    agenda:{
        type: String,
        required: true
    }, 
    speaker1:{
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    speaker2:{
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    venue:{
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('agenda',agendaSchema);