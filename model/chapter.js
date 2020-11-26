const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema({
    Country: {
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    State:{
        type: mongoose.Schema.ObjectId,
        required: false
    },
    region:{
        type: mongoose.Schema.ObjectId,
        required: false
    },   
    CityName:{
        type: mongoose.Schema.ObjectId,
        required: false
    },
    ChapterName:{
        type: String,
        required: true
    },
    Address:{
        type: String,
        required: true
    },
    Email :{
        type: String,
        required: true
    },
    Mobile  :{
        type: String,
        required: true
    },
    ContactPerson  :{
        type: String,
        required: true
    },
    CreatedOn  :{
        type: String,
        required: true
    },
    UpdatedOn  :{
        type: String,
        required: true
    },
    Status  :{
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('chapter',chapterSchema);
